import { NextRequest, NextResponse } from 'next/server';
import { assessWriting } from '@/lib/ai-assessment';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { text, prompt } = body;

    if (!text || !prompt) {
      return NextResponse.json(
        { success: false, error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Assess writing using GPT-4
    const assessment = await assessWriting(text, prompt);

    return NextResponse.json({
      success: true,
      assessment,
    });
  } catch (error) {
    console.error('Error assessing writing:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to assess writing' },
      { status: 500 }
    );
  }
}
