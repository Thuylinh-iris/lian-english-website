import { NextRequest, NextResponse } from 'next/server';
import { sendResultsToStudent, sendNotificationToAdmin, TestResults } from '@/lib/email-service';
import { getGeneralTestLevel } from '@/lib/ai-assessment';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    const {
      studentName,
      studentEmail,
      listeningAnswers,
      grammarAnswers,
      vocabularyAnswers,
      readingAnswers,
      speakingLevel,
      writingLevel,
    } = body;

    // Calculate scores
    // TODO: Compare with answer keys from testQuestions.ts
    const listeningScore = calculateSectionScore(listeningAnswers, 'listening');
    const grammarScore = calculateSectionScore(grammarAnswers, 'grammar');
    const vocabularyScore = calculateSectionScore(vocabularyAnswers, 'vocabulary');
    const readingScore = calculateSectionScore(readingAnswers, 'reading');

    const totalScore = listeningScore + grammarScore + vocabularyScore + readingScore;
    const level = getGeneralTestLevel(totalScore);

    // Determine level name
    const levelNames: { [key: string]: string } = {
      'Below A1': 'Beginner',
      'A1': 'Beginner',
      'A2': 'Elementary',
      'A2+': 'Pre-Intermediate',
      'B1': 'Intermediate',
    };

    const levelName = levelNames[level] || 'Elementary';

    // Determine recommended class
    const recommendedClass = getRecommendedClass(level);
    const duration = '8 weeks';
    const startDate = 'March 26, 2026';

    // Prepare results
    const results: TestResults = {
      studentName,
      studentEmail,
      level,
      levelName,
      score: totalScore,
      totalQuestions: 80,
      recommendedClass,
      duration,
      startDate,
      generalTestBreakdown: {
        listening: listeningScore,
        grammar: grammarScore,
        vocabulary: vocabularyScore,
        reading: readingScore,
      },
    };

    // Add speaking assessment if available
    if (speakingLevel) {
      results.speakingAssessment = {
        level: speakingLevel.level,
        score: speakingLevel.score,
        feedback: speakingLevel.overallFeedback,
      };
    }

    // Add writing assessment if available
    if (writingLevel) {
      results.writingAssessment = {
        level: writingLevel.level,
        score: writingLevel.score,
        feedback: writingLevel.overallFeedback,
      };
    }

    // Send emails
    await sendResultsToStudent(results);
    await sendNotificationToAdmin(results);

    // TODO: Save to database
    // await saveTestResults(results);

    return NextResponse.json({
      success: true,
      message: 'Test results submitted successfully',
      results: {
        level,
        levelName,
        score: totalScore,
        recommendedClass,
      },
    });
  } catch (error) {
    console.error('Error submitting test:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to submit test results' },
      { status: 500 }
    );
  }
}

// Import the actual scoring function
import { calculateSectionScore as calculateScore } from '@/data/testQuestions';

// Helper function to calculate section scores
function calculateSectionScore(answers: number[], section: string): number {
  if (!answers || answers.length === 0) return 0;
  
  // Use the actual scoring function from testQuestions.ts
  const sectionKey = section as 'listening' | 'grammar' | 'vocabulary' | 'reading';
  return calculateScore(answers, sectionKey);
}

// Helper function to get recommended class
function getRecommendedClass(level: string): string {
  const classMap: { [key: string]: string } = {
    'Below A1': 'A1 Level Class',
    'A1': 'A1 Level Class',
    'A2': 'A2 Level Class',
    'A2+': 'A2+ Level Class',
    'B1': 'B1 Level Class',
  };

  return classMap[level] || 'A2 Level Class';
}
