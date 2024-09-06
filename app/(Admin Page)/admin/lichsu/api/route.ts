import { NextRequest, NextResponse } from 'next/server';
import { createKysely } from '@vercel/postgres-kysely';

const db = createKysely<any>();

export async function POST(req: NextRequest) {
	const { username, month } = await req.json();
	try {
		return NextResponse.json({
			status: true,
			data: await db
				.selectFrom(`${username}${month}`)
				.select(['Checkin', 'Checkout'])
				.orderBy('Days', 'asc')
				.execute(),
		});
	} catch {
		return NextResponse.json({
			status: false,
			data: '',
		});
	}
}
