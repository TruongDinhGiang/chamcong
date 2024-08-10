'use server';

import { createKysely } from '@vercel/postgres-kysely';
import { NextRequest, NextResponse } from 'next/server';
import { cookies } from 'next/headers';

const db = createKysely<any>();

export async function POST(req: NextRequest) {
	const data: string = await req.json().then((e) => e);
	const username = cookies().get('currentUserName')!.value;

	const result = await db
		.selectFrom(username)
		.select(['Checkin', 'Checkout'])
		.where('Days', '=', Number(data))
		.executeTakeFirst();

	return NextResponse.json({
		checkin: result?.Checkin,
		checkout: result?.Checkout,
	});
}
