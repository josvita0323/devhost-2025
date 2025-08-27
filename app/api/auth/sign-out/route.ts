import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';

//to delete the session from cookie
export async function POST() {
  (await cookies()).delete('__session');
  return NextResponse.json({ success: true });
}
