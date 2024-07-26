

import { NextResponse } from 'next/server';
import path from 'path';
import fs from 'fs';

export async function GET() {
  try {
    const filePath = path.resolve('./public/assets/pdf/resume.pdf');
    const fileBuffer = fs.readFileSync(filePath);

    return new NextResponse(fileBuffer, {
      headers: {
        'Content-Type': 'application/pdf',
        'Content-Disposition': 'attachment; filename=resume.pdf',
      },
    });
  } catch (error) {
    console.error('Error serving PDF:', error);
    return new NextResponse('File not found', { status: 404 });
  }
}

