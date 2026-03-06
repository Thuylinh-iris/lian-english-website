// Test Speaking Assessment with Different Levels
// Run: node test-speaking-assessment.js

import { assessSpeaking } from './src/lib/ai-assessment.ts';

const testCases = [
  {
    level: 'A1 (Beginner)',
    transcription: 'My friend name is Lan. She is good. We meet at school. She help me. I like she because she kind.',
    task: 'Describe a friend',
    prompt: 'Think of a close friend. How did you meet? Describe his or her personality, and talk about what you like most about him/her.'
  },
  {
    level: 'A2 (Elementary)',
    transcription: 'My friend is named Lan. She is very kind and helpful person. We met at school two years ago. She always helps me with homework. I like her because she listens to me and gives good advice. We study together every weekend.',
    task: 'Describe a friend',
    prompt: 'Think of a close friend. How did you met? Describe his or her personality, and talk about what you like most about him/her.'
  },
  {
    level: 'B1 (Intermediate)',
    transcription: 'I would like to tell you about my best friend Lan. We first met when we were in high school, about five years ago. She has a very warm personality and is always willing to help others. What I admire most about her is her patience and her ability to stay calm in difficult situations. She has been supporting me through many challenges, and I really value our friendship.',
    task: 'Describe a friend',
    prompt: 'Think of a close friend. How did you meet? Describe his or her personality, and talk about what you like most about him/her.'
  },
  {
    level: 'B2+ (Advanced)',
    transcription: 'I\'d like to describe my closest friend, Lan, whom I\'ve known for approximately five years now. Our friendship began during our high school years when we were paired together for a group project. From the moment we started working together, I was struck by her exceptional interpersonal skills and her genuine warmth. What sets Lan apart is her remarkable emotional intelligence - she has this innate ability to understand people\'s feelings and provide thoughtful guidance. Her unwavering support during challenging times has been invaluable to me, and I consider myself fortunate to have such a trustworthy companion.',
    task: 'Describe a friend',
    prompt: 'Think of a close friend. How did you meet? Describe his or her personality, and talk about what you like most about him/her.'
  }
];

async function runTests() {
  console.log('🎯 Testing Speaking Assessment with Different Levels\n');
  console.log('=' .repeat(80));

  for (const testCase of testCases) {
    console.log(`\n📊 Testing: ${testCase.level}`);
    console.log('-'.repeat(80));
    console.log(`Transcription: "${testCase.transcription}"\n`);

    try {
      const assessment = await assessSpeaking(
        testCase.transcription,
        testCase.prompt,
        testCase.task
      );

      console.log('✅ Assessment Result:');
      console.log(`  Level: ${assessment.level}`);
      console.log(`  Score: ${assessment.score}/100`);
      console.log('\n  Detailed Feedback:');
      console.log(`  • Fluency: ${assessment.feedback.fluency}`);
      console.log(`  • Grammar: ${assessment.feedback.grammar}`);
      console.log(`  • Vocabulary: ${assessment.feedback.vocabulary}`);
      console.log(`  • Pronunciation: ${assessment.feedback.pronunciation}`);
      console.log(`  • Task Completion: ${assessment.feedback.taskCompletion}`);
      console.log(`\n  Overall: ${assessment.overallFeedback}`);
      console.log('='.repeat(80));
    } catch (error) {
      console.error(`❌ Error: ${error.message}`);
    }

    // Wait 2 seconds between tests to avoid rate limits
    await new Promise(resolve => setTimeout(resolve, 2000));
  }
}

runTests().catch(console.error);
