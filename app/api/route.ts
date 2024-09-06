'use server';

import { createKysely } from '@vercel/postgres-kysely';
import { NextResponse } from 'next/server';
import { DateInfo, getTotalDayInCurrentMonth } from '../libs/utilities';

const db = createKysely<any>();

export async function GET() {
	await db.schema
		.createTable('Quảng' + DateInfo[1])
		.ifNotExists()
		.addColumn('Days', 'integer')
		.addColumn('Checkin', 'text', (col) => col.defaultTo(null))
		.addColumn('Checkout', 'text', (col) => col.defaultTo(null))
		.execute();

	//*Insert into new table days data from 1 to 28/29/30/31 depends on current month
	for (let i = 1; i <= getTotalDayInCurrentMonth(); i++) {
		await db
			.insertInto('Quảng' + DateInfo[1])
			.values({
				Days: i,
			})
			.executeTakeFirst();
	}
	return NextResponse.json('done');
}
