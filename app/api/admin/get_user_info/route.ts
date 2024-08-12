import { NextRequest, NextResponse } from 'next/server';
import { createKysely } from '@vercel/postgres-kysely';

const db = createKysely<any>();

export async function POST(req: NextRequest) {
	// console.log(await req.json());
	const data: {
		Name: string;
		Day: string;
	} = await req.json();
	const { Name, Day } = data;
	try {
		const result = await db
			.selectFrom(Name)
			.select(['Checkin', 'Checkout'])
			.where('Days', '=', Number(Day))
			.executeTakeFirst();
		return NextResponse.json({
			checkin: result!.Checkin,
			checkout: result!.Checkout,
		});
	} catch (e) {
		return NextResponse.json({
			checkin: null,
			checkout: null,
		});
	}
}
