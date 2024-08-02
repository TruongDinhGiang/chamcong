// 'use server';

import { NextRequest, NextResponse } from 'next/server';
import { cookies } from 'next/headers';
import { createKysely } from '@vercel/postgres-kysely';
import { revalidatePath } from 'next/cache';

//!Update table that created a new data. Fix it!

const db = createKysely<any>();
async function checkIfAlreadyCheckin(
	tableName: string,
	username: string,
	state: string
): Promise<boolean | undefined> {
	const query = await db.selectFrom(tableName).selectAll().where('Name', '=', username).execute();
	const Checkin: boolean = query[0]?.Checkin;
	const Checkout: boolean = query[0]?.Checkout;
	switch (state) {
		case 'start': {
			return Checkin ? true : false;
		}
		case 'end': {
			return Checkout ? true : false;
		}
	}
}

export async function GET(req: NextRequest) {
	//*Get user cookie data
	const data = cookies();
	const currentUser = data.get('currentUserName')!.value;

	//*Get path
	const urlPath = req.nextUrl.pathname.split('/');
	const checkState = urlPath[urlPath.length - 1];

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
		.addColumn('id', 'serial')
		.addColumn('Name', 'text')
		.addColumn('Checkin', 'text')
		.addColumn('Checkout', 'text')
		.execute();

	//*Check if user is checked yet, if yes then redirect user to home page. If not, create data
	// await db.deleteFrom(tableName).executeTakeFirst();
	const isCheckin = await checkIfAlreadyCheckin(tableName, currentUser, checkState);
	if (isCheckin) return NextResponse.redirect(new URL('/home', req.url));

	if (checkState == 'start') {
		//*Check if user want to checkin or checkout

		//*Insert username first
		await db
			.insertInto(tableName)
			.values({
				Name: currentUser,
				Checkin: null,
				Checkkout: null,
			})
			.execute();

		//*If user checkin, set the checkin time.
		await db
			.updateTable(tableName)
			.set({
				Checkin: time,
			})
			.where('Name', '=', currentUser)
			.execute();
	}
	//*If user checkout, set the checkout time.
	else if (checkState == 'end')
		await db
			.updateTable(tableName)
			.set({
				Checkout: time,
			})
			.where('Name', '=', currentUser)
			.execute();
	//*If user changed the path, redirect to not-found page.
	else return NextResponse.redirect(new URL('/not-found', req.url));

	// await db.schema.dropTable(tableName).execute();
	// await db.schema.dropTable('D1M8').execute();
	// await db
	// 	.insertInto('test')
	// 	.values({
	// 		test: ,
	// 	})
	// 	.execute();

	//*After successfully check, redirect to success page and rediect back to /home page after 5s
	revalidatePath('/chamcong/success');
	return NextResponse.redirect(new URL('/chamcong/success', req.url));
	// return NextResponse.json(req.url);
}
