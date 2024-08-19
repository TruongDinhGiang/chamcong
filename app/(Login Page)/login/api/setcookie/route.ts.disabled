'use server';
import { cookies } from 'next/headers';
import { NextResponse } from 'next/server';
import { createKysely } from '@vercel/postgres-kysely';

const db = createKysely<any>();

export async function GET() {
	cookies().delete('currentUserName');
	cookies().delete('currentUserRole');
	return NextResponse.json({ data: 'done' });
}
