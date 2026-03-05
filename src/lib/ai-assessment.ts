import OpenAI from 'openai';

// Initialize OpenAI client
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export interface SpeakingAssessment {
  level: string;
  score: number;
  feedback: {
    fluency: string;
    grammar: string;
    vocabulary: string;
    pronunciation: string;
    taskCompletion: string;
  };
  overallFeedback: string;
}

export interface WritingAssessment {
  level: string;
  score: number;
  feedback: {
    grammar: string;
    vocabulary: string;
    coherence: string;
    organization: string;
    taskCompletion: string;
  };
  overallFeedback: string;
}

/**
 * Transcribe audio using OpenAI Whisper
 */
export async function transcribeAudio(audioBuffer: Buffer): Promise<string> {
  try {
    const response = await openai.audio.transcriptions.create({
      file: audioBuffer as any,
      model: 'whisper-1',
      language: 'en',
    });

    return response.text;
  } catch (error) {
    console.error('Error transcribing audio:', error);
    throw new Error('Failed to transcribe audio');
  }
}

/**
 * Assess speaking response using GPT-4
 */
export async function assessSpeaking(
  transcription: string,
  prompt: string,
  task: string
): Promise<SpeakingAssessment> {
  try {
    const response = await openai.chat.completions.create({
      model: 'gpt-4',
      messages: [
        {
          role: 'system',
          content: `You are an expert English language assessor for Lian English school. Assess the student's speaking response based on CEFR levels (A1, A2, A2+, B1).

Consider:
- Fluency and coherence
- Grammar accuracy
- Vocabulary range
- Pronunciation (inferred from transcription)
- Task completion

Provide:
1. Level recommendation (A1/A2/A2+/B1)
2. Score (0-100)
3. Detailed feedback for each criterion
4. Overall constructive feedback

Be encouraging but honest. Use simple, clear language.`,
        },
        {
          role: 'user',
          content: `Task: ${task}\n\nPrompt: ${prompt}\n\nStudent's response (transcribed): ${transcription}\n\nPlease assess this speaking response.`,
        },
      ],
      temperature: 0.7,
    });

    const assessment = JSON.parse(response.choices[0].message.content || '{}');

    return {
      level: assessment.level || 'A1',
      score: assessment.score || 0,
      feedback: assessment.feedback || {
        fluency: 'No feedback available',
        grammar: 'No feedback available',
        vocabulary: 'No feedback available',
        pronunciation: 'No feedback available',
        taskCompletion: 'No feedback available',
      },
      overallFeedback: assessment.overallFeedback || 'Assessment not available',
    };
  } catch (error) {
    console.error('Error assessing speaking:', error);
    throw new Error('Failed to assess speaking response');
  }
}

/**
 * Assess writing response using GPT-4
 */
export async function assessWriting(
  text: string,
  prompt: string
): Promise<WritingAssessment> {
  try {
    const response = await openai.chat.completions.create({
      model: 'gpt-4',
      messages: [
        {
          role: 'system',
          content: `You are an expert English language assessor for Lian English school. Assess the student's writing response based on CEFR levels (A1, A2, A2+, B1).

Consider:
- Grammar accuracy
- Vocabulary range and appropriateness
- Coherence and cohesion
- Organization and structure
- Task completion and relevance

Provide:
1. Level recommendation (A1/A2/A2+/B1)
2. Score (0-100)
3. Detailed feedback for each criterion
4. Overall constructive feedback

Be encouraging but honest. Use simple, clear language.`,
        },
        {
          role: 'user',
          content: `Prompt: ${prompt}\n\nStudent's writing: ${text}\n\nPlease assess this writing response.`,
        },
      ],
      temperature: 0.7,
    });

    const assessment = JSON.parse(response.choices[0].message.content || '{}');

    return {
      level: assessment.level || 'A1',
      score: assessment.score || 0,
      feedback: assessment.feedback || {
        grammar: 'No feedback available',
        vocabulary: 'No feedback available',
        coherence: 'No feedback available',
        organization: 'No feedback available',
        taskCompletion: 'No feedback available',
      },
      overallFeedback: assessment.overallFeedback || 'Assessment not available',
    };
  } catch (error) {
    console.error('Error assessing writing:', error);
    throw new Error('Failed to assess writing response');
  }
}

/**
 * Calculate overall level based on multiple assessments
 */
export function calculateOverallLevel(
  generalTestScore: number,
  speakingLevel?: string,
  writingLevel?: string
): string {
  // Convert levels to numbers for calculation
  const levelMap: { [key: string]: number } = {
    'Below A1': 0,
    A1: 1,
    A2: 2,
    'A2+': 3,
    B1: 4,
  };

  const generalLevel = getGeneralTestLevel(generalTestScore);
  let totalScore = levelMap[generalLevel] || 0;
  let count = 1;

  if (speakingLevel) {
    totalScore += levelMap[speakingLevel] || 0;
    count++;
  }

  if (writingLevel) {
    totalScore += levelMap[writingLevel] || 0;
    count++;
  }

  const averageScore = totalScore / count;

  // Convert back to level
  if (averageScore < 0.5) return 'Below A1';
  if (averageScore < 1.5) return 'A1';
  if (averageScore < 2.5) return 'A2';
  if (averageScore < 3.5) return 'A2+';
  return 'B1';
}

/**
 * Get level from general test score (Test 1: A1-B1)
 */
export function getGeneralTestLevel(score: number): string {
  if (score < 5) return 'Below A1';
  if (score < 36) return 'A1';
  if (score < 57) return 'A2';
  if (score < 69) return 'A2+';
  return 'B1';
}
