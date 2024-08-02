'use server';

import { NextRequest, NextResponse } from 'next/server';
import { cookies } from 'next/headers';
import { createKysely } from '@vercel/postgres-kysely';
import { revalidatePath } from 'next/cache';

const db = createKysely<any>();
async function checkIfAlreadyCheckin(
	tableName: string,
	username: string
): Promise<boolean | undefined> {
	const query = await db
		.selectFrom(tableName)
		.select('Checkout')
		.where('Name', '=', username)
		.execute();
	return query[0] ? true : false;
}

export async function GET(req: NextRequest) {
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
	// await db.deleteFrom(tableName).executeTakeFirst();
	const isCheckin = await checkIfAlreadyCheckin(tableName, currentUser);
	if (isCheckin) return NextResponse.redirect(new URL('/home', req.url));
	//*If user checkin, set the checkin time.
	await db
		.updateTable(tableName)
		.set({
			Checkout: time,
		})
		.where('Name', '=', currentUser)
		.execute();

	//*After successfully check, redirect to success page and rediect back to /home page after 5s
	revalidatePath('/chamcong/success');
	return NextResponse.redirect(new URL('/chamcong/success', req.url));
	// return NextResponse.json(req.url);
}
