'use server';
import { cookies } from 'next/headers';
import { NextResponse } from 'next/server';

export async function GET() {
	cookies().delete('currentUserName');
	cookies().delete('currentUserRole');
	return NextResponse.json({ data: 'done' });
}
