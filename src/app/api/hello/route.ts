import { NextResponse } from 'next/server';

export const runtime = 'edge';

export async function GET() {
  return NextResponse.json({ message: 'Hello, Next.js!' }, { status: 200 });
}
