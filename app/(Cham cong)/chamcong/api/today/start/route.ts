'use server';

import { NextRequest, NextResponse } from 'next/server';
import { cookies } from 'next/headers';
import { createKysely } from '@vercel/postgres-kysely';

import { _JsonArrayStringify } from '@/app/libs/actions';
import { toSecond } from '@/app/libs/utilities';
import { revalidatePath } from 'next/cache';

const db = createKysely<any>();

export async function POST(req: NextRequest) {
	//*Get user cookie data
	const cookie = cookies();
	const currentUser = cookie.get('currentUserName')!.value;

	//*Get current day and time
	const date = new Date().toLocaleDateString('vi-vn').split('/');
	const time = new Date().toLocaleTimeString(['vi-vn'], {
		timeZone: 'Asia/Ho_Chi_Minh',
		timeStyle: 'medium',
	});
	//*Define table name
	const tableName = `D${date[0]}M${date[1]}`;

	//*Create table if not created yet
	await db.schema
		.createTable(tableName)
		.ifNotExists()
		.addColumn('id', 'serial', (e) => e.primaryKey())
		.addColumn('Name', 'text')
		.addColumn('Checkin', 'text', (e) => e.defaultTo(null))
		.addColumn('Checkout', 'text', (e) => e.defaultTo(null))
		.execute();

	//*Check if user is checked yet, if yes then redirect user to home page. If not, create data
	if (
		await db.selectFrom(tableName).selectAll().where('Name', '=', currentUser).executeTakeFirst()
	) {
		return NextResponse.json({ status: 400, success: false });
	}

	//*Insert username first, also checkin
	await db.connection().execute(async (db) => {
		await db
			.insertInto(tableName)
			.values({
				Name: currentUser,
				Checkin: time,
			})
			.execute();

		await db
			.updateTable(currentUser)
			.set({
				Checkin: time,
			})
			.where('Days', '=', date[0])
			.executeTakeFirst();
	});

	const parsedTime = time.split(':');

	cookie.set('isCheckin', 'true', {
		maxAge: toSecond('23', '59', '59') - toSecond(parsedTime[0], parsedTime[1], parsedTime[2]),
		httpOnly: true,
	});

	//*After successfully check, redirect to success page and rediect back to /home page after 3s
	revalidatePath('/admin');
	return NextResponse.json({ status: 200, success: true });
	// return NextResponse.json(req.url);
}
