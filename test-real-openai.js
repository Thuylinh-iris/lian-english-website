// Test Real OpenAI Assessment
// Requires: OPENAI_API_KEY in .env.local
import OpenAI from 'openAI';
import dotenv from 'dotenv';

dotenv.config({ path: '.env.local' });

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

const testCases = [
  {
    level: 'A1 (Beginner)',
    transcription: 'My friend name is Lan. She is good. We meet at school. She help me. I like she because she kind.',
  },
  {
    level: 'B1 (Intermediate)',
    transcription: 'I would like to tell you about my best friend Lan. We first met when we were in high school, about five years ago. She has a very warm personality and is always willing to help others.',
  },
];

async function assessSpeaking(transcription, prompt, task) {
  const completion = await openai.chat.completions.create({
    model: 'gpt-4o',
    messages: [
      {
        role: 'system',
        content: `You are an English language assessment expert. Assess the speaking response based on CEFR levels (A1-C2).
Return JSON with: level, score (0-100), feedback (fluency, grammar, vocabulary, pronunciation, taskCompletion), overallFeedback.`
      },
      {
        role: 'user',
        content: `Task: ${task}\nPrompt: ${prompt}\nTranscription: "${transcription}"\n\nAssess this speaking response.`
      }
    ],
    temperature: 0.3,
    response_format: { type: 'json_object' }
  });

  return JSON.parse(completion.choices[0].message.content);
}

async function runRealTest() {
  console.log('🎯 Testing REAL OpenAI Assessment\n');
  console.log('=' .repeat(80));

  for (const testCase of testCases) {
    console.log(`\n📊 Testing: ${testCase.level}`);
    console.log('-'.repeat(80));
    console.log(`Transcription: "${testCase.transcription}"\n`);

    try {
      const assessment = await assessSpeaking(
        testCase.transcription,
        'Think of a close friend. How did you meet? Describe his or her personality, and talk about what you like most about him/her.',
        'Describe a friend'
      );

      console.log('✅ AI Assessment Result:');
      console.log(`  Level: ${assessment.level}`);
      console.log(`  Score: ${assessment.score}/100`);
      console.log(`\n  Feedback:`);
      console.log(`  • Fluency: ${assessment.feedback.fluency}`);
      console.log(`  • Grammar: ${assessment.feedback.grammar}`);
      console.log(`  • Vocabulary: ${assessment.feedback.vocabulary}`);
      console.log(`  • Pronunciation: ${assessment.feedback.pronunciation}`);
      console.log(`\n  Overall: ${assessment.overallFeedback}`);
      console.log('='.repeat(80));
    } catch (error) {
      console.error(`❌ Error: ${error.message}`);
    }

    await new Promise(resolve => setTimeout(resolve, 3000));
  }
}

runRealTest().catch(console.error);
