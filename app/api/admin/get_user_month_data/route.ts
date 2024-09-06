import { NextRequest, NextResponse } from 'next/server';
import { createKysely } from '@vercel/postgres-kysely';
import { DateInfo } from '@/app/libs/utilities';

const db = createKysely<any>();

export async function POST(req: NextRequest) {
	const username = await req.json();
	return NextResponse.json(
		await db
			.selectFrom(`${username}${DateInfo[1]}`)
			.select(['Checkin', 'Checkout'])
			.orderBy('Days', 'asc')
			.execute()
	);
}
