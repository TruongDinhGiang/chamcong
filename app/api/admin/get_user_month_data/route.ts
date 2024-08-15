import { NextRequest, NextResponse } from 'next/server';
import { createKysely } from '@vercel/postgres-kysely';

const db = createKysely<any>();

export async function POST(req: NextRequest) {
	const username = await req.json();
	return NextResponse.json(
		await db.selectFrom(username).select(['Checkin', 'Checkout']).orderBy('Days', 'asc').execute()
	);
}
