import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export async function GET() {
  const sequenceDirectory = path.join(process.cwd(), 'public', 'sequence');
  try {
    const fileNames = fs.readdirSync(sequenceDirectory);
    // Sort files numerically if possible or just alphabetically
    const sortedFrames = fileNames
      .filter(file => file.endsWith('.gif') || file.endsWith('.webp'))
      .sort((a, b) => {
        const numA = parseInt(a.match(/\d+/)?.[0] || '0');
        const numB = parseInt(b.match(/\d+/)?.[0] || '0');
        return numA - numB;
      });

    return NextResponse.json({ frames: sortedFrames });
  } catch (error) {
    console.error('Error reading sequence directory:', error);
    return NextResponse.json({ frames: [] }, { status: 500 });
  }
}
