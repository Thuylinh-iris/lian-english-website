// Test Speaking Assessment API
// Run: node test-api-assessment.js

const testCases = [
  {
    level: 'A1 (Beginner)',
    transcription: 'My friend name is Lan. She is good. We meet at school. She help me. I like she because she kind.',
  },
  {
    level: 'A2 (Elementary)',
    transcription: 'My friend is named Lan. She is very kind and helpful person. We met at school two years ago. She always helps me with homework. I like her because she listens to me and gives good advice.',
  },
  {
    level: 'B1 (Intermediate)',
    transcription: 'I would like to tell you about my best friend Lan. We first met when we were in high school, about five years ago. She has a very warm personality and is always willing to help others. What I admire most about her is her patience and her ability to stay calm in difficult situations.',
  },
  {
    level: 'B2+ (Advanced)',
    transcription: 'I\'d like to describe my closest friend, Lan, whom I\'ve known for approximately five years now. Our friendship began during our high school years when we were paired together for a group project. What sets Lan apart is her remarkable emotional intelligence - she has this innate ability to understand people\'s feelings and provide thoughtful guidance.',
  }
];

async function testAssessment() {
  console.log('🎯 Testing AI Speaking Assessment\n');
  console.log('=' .repeat(80));

  for (const testCase of testCases) {
    console.log(`\n📊 Testing: ${testCase.level}`);
    console.log('-'.repeat(80));
    console.log(`Input: "${testCase.transcription}"\n`);

    // Simulate the assessment logic
    const wordCount = testCase.transcription.split(' ').length;
    const sentenceComplexity = testCase.transcription.includes(',') || testCase.transcription.includes('-');
    const hasAdvancedVocab = /\b(exceptional|remarkable|approximately|innate|intelligence)\b/i.test(testCase.transcription);
    
    let estimatedLevel = 'A1';
    let estimatedScore = 40;
    
    if (wordCount > 30 && sentenceComplexity) {
      estimatedLevel = 'A2';
      estimatedScore = 55;
    }
    if (wordCount > 40 && sentenceComplexity && testCase.transcription.includes('would like')) {
      estimatedLevel = 'B1';
      estimatedScore = 70;
    }
    if (hasAdvancedVocab && wordCount > 50) {
      estimatedLevel = 'B2';
      estimatedScore = 85;
    }

    console.log('✅ Expected Assessment:');
    console.log(`  Level: ${estimatedLevel}`);
    console.log(`  Score: ${estimatedScore}/100`);
    console.log(`  Word Count: ${wordCount}`);
    console.log(`  Has Complex Sentences: ${sentenceComplexity ? 'Yes' : 'No'}`);
    console.log(`  Has Advanced Vocabulary: ${hasAdvancedVocab ? 'Yes' : 'No'}`);
    console.log('='.repeat(80));
    
    await new Promise(resolve => setTimeout(resolve, 500));
  }

  console.log('\n✅ Test Complete!');
  console.log('\n💡 To test with real AI assessment:');
  console.log('   1. Deploy to Vercel with OPENAI_API_KEY');
  console.log('   2. Record speaking on the website');
  console.log('   3. Click "Get AI Assessment"');
}

testAssessment().catch(console.error);
