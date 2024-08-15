'use server';

import { NextRequest, NextResponse } from 'next/server';
import { cookies } from 'next/headers';
import { createKysely } from '@vercel/postgres-kysely';

const db = createKysely<any>();

export async function POST(req: NextRequest) {
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

	//*Check if table is exist
	try {
		await db.selectFrom(tableName).execute();
	} catch {
		return NextResponse.json({ status: 400, success: false });
	}

	//*Check if user is checked yet, if yes then redirect user to home page. If not, create data
	try {
		if (
			await db
				.selectFrom(tableName)
				.select('Checkout')
				.where('Name', '=', currentUser)
				.executeTakeFirst()
		) {
			return NextResponse.json({ status: 400, success: false });
		}
	} catch {}

	//*If user checkin, set the checkin time.
	await db
		.updateTable(tableName)
		.set({
			Checkout: time,
		})
		.where('Name', '=', currentUser)
		.execute();

	//*After successfully check, redirect to success page and rediect back to /home page after 3s
	return NextResponse.json({ status: 200, success: true });
	// return NextResponse.json(req.url);
}
