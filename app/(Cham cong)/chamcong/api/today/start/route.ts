'use server';

import { NextRequest, NextResponse } from 'next/server';
import { cookies } from 'next/headers';
import { createKysely } from '@vercel/postgres-kysely';

const db = createKysely<any>();
async function checkIfAlreadyCheckin(
	tableName: string,
	username: string
): Promise<boolean | undefined> {
	const query = await db
		.selectFrom(tableName)
		.select('Checkin')
		.where('Name', '=', username)
		.executeTakeFirst();
	return query?.Checkin ? true : false;
}

export async function POST(req: NextRequest) {
	console.log(req.headers);
	console.log(req.headers.get('x-forwarded-for'));

	//*Get user cookie data
	const data = cookies();
	const currentUser = data.get('currentUserName')!.value;

	//*Get current day and time
	const todayDay = new Date().toLocaleDateString('vi-vn').split('/');
	const time = new Date().toLocaleTimeString(['vi-vn'], {
		timeZone: 'Asia/Ho_Chi_Minh',
		timeStyle: 'medium',
	});
	//*Define table name
	const tableName = `D${todayDay[0]}M${todayDay[1]}`;

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
	// await db.deleteFrom(tableName).executeTakeFirst();
	const isCheckin = await checkIfAlreadyCheckin(tableName, currentUser);
	if (isCheckin) return Response.json({ status: 406, success: false });

	console.log('Checked in');
	//*Insert username first, also checkin
	await db
		.insertInto(tableName)
		.values({
			Name: currentUser,
			Checkin: time,
		})
		.execute();

	//*After successfully check, redirect to success page and rediect back to /home page after 5s
	return Response.json({ status: 200, success: true });
	// return NextResponse.json(req.url);
}
