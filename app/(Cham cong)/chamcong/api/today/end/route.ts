'use server';

import { NextRequest, NextResponse } from 'next/server';
import { cookies } from 'next/headers';
import { createKysely } from '@vercel/postgres-kysely';

const db = createKysely<any>();
function toSecond(hour: string, min: string, sec: string): number {
	return Number(hour) * 3600 + Number(min) * 60 + Number(sec);
}

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

	//*Check if user is checked yet, if yes then redirect user to home page. If not, create data
	if (
		await db.selectFrom(tableName).selectAll().where('Name', '=', currentUser).executeTakeFirst()
	) {
		return NextResponse.json({ status: 400, success: false });
	}

	//*If user checkin, set the checkin time.
	await db
		.updateTable(tableName)
		.set({
			Checkout: time,
		})
		.where('Name', '=', currentUser)
		.execute();

	await db
		.updateTable(currentUser)
		.set({
			Checkout: time,
		})
		.where('Days', '=', todayDay[0])
		.executeTakeFirst();

	data.set('isCheckout', 'true', {
		maxAge: toSecond('23', '59', '59') - toSecond(time[0], time[1], time[2]),
		httpOnly: true,
	});

	//*After successfully check, redirect to success page and rediect back to /home page after 3s
	return NextResponse.json({ status: 200, success: true });
	// return NextResponse.json(req.url);
}
