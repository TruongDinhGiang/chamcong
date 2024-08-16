'use server';

import { createKysely } from '@vercel/postgres-kysely';
import { NextRequest, NextResponse } from 'next/server';
import { cookies } from 'next/headers';
import { getTotalDayInCurrentMonth } from '../libs/utilities';

const db = createKysely<any>();

export async function GET(req: NextRequest) {
	// cookies().set('isCheckin', '', { maxAge: 1, httpOnly: false });
	// cookies().set('isCheckout', '', { maxAge: 1, httpOnly: false });
	// await db.deleteFrom('D16M8').where('Name', '=', 'Duyên').execute();
	// await db.schema.dropTable('Thủy').execute();
	// await db.schema
	// 	.createTable('Tùng')
	// 	.addColumn('Days', 'integer')
	// 	.addColumn('Checkin', 'text', (col) => col.defaultTo(null))
	// 	.addColumn('Checkout', 'text', (col) => col.defaultTo(null))
	// 	.execute();
	// for (let i = 1; i <= getTotalDayInCurrentMonth(); i++) {
	// 	await db
	// 		.insertInto('Tùng')
	// 		.values({
	// 			Days: i,
	// 		})
	// 		.execute();
	// }

	return Response.json('done');
}
