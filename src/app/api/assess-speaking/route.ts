import { NextRequest, NextResponse } from 'next/server';
import { transcribeAudio, assessSpeaking } from '@/lib/ai-assessment';

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();
    const audioFile = formData.get('audio') as File;
    const prompt = formData.get('prompt') as string;
    const task = formData.get('task') as string;

    if (!audioFile || !prompt || !task) {
      return NextResponse.json(
        { success: false, error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Convert File to Buffer
    const arrayBuffer = await audioFile.arrayBuffer();
    const audioBuffer = Buffer.from(arrayBuffer);

    // Transcribe audio using Whisper
    const transcription = await transcribeAudio(audioBuffer);

    // Assess speaking using GPT-4
    const assessment = await assessSpeaking(transcription, prompt, task);

    return NextResponse.json({
      success: true,
      assessment: {
        ...assessment,
        transcription, // Include transcription for reference
      },
    });
  } catch (error) {
    console.error('Error assessing speaking:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to assess speaking' },
      { status: 500 }
    );
  }
}

// Configure API route to handle large files (audio)
export const config = {
  api: {
    bodyParser: false,
    sizeLimit: '10mb',
  },
};
