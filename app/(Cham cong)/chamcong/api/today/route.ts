// 'use server';

import { NextRequest, NextResponse } from 'next/server';
import { cookies } from 'next/headers';
import { createKysely } from '@vercel/postgres-kysely';
import { revalidatePath } from 'next/cache';

const db = createKysely<any>();

//TODO: check if user is already checkin. If yes then update to middleware and redirect user to home page. If not, insert user to today table and redirect to success/fail page and after 3s, redirect back to home page.
async function checkIfAlreadyCheckin(tableName: string, username: string) {
	const query = await db.selectFrom(tableName).selectAll().where('Name', '=', username).execute();
	return query[0] ? true : false;
}

export async function GET(req: NextRequest) {
	const data = cookies();
	const currentUser = data.get('currentUserName')!.value;

	const todayDay = new Date().toLocaleDateString('vi-vn').split('/');
	const time = new Date().toLocaleTimeString([], { timeZone: 'Asia/Ho_Chi_Minh' });
	const workHourTime = Number(time.split(':')[0]);

	const tableName = `D${todayDay[0]}M${todayDay[1]}`;

	// await db.schema
	// 	.createTable(tableName)
	// 	.ifNotExists()
	// 	.addColumn('id', 'serial')
	// 	.addColumn('Name', 'text')
	// 	.addColumn('Time', 'text')
	// 	.addColumn('isLate', 'boolean')
	// 	.execute();

	// !(await checkIfAlreadyCheckin(tableName, currentUser)) &&
	// 	(await db
	// 		.insertInto(tableName)
	// 		.values({
	// 			Name: currentUser,
	// 			Time: time,
	// 			isLate: workHourTime > 8 ? true : false,
	// 		})
	// 		.execute());
	// await db.deleteFrom(tableName).where('Name', '=', 'Sang').execute();
	// await db.schema.dropTable('D1M8').execute();
	await db
		.insertInto('test')
		.values({
			test: new Date().toLocaleTimeString([], {
				timeZone: 'Asia/Ho_Chi_Minh',
				timeStyle: 'long',
			}),
		})
		.execute();
	revalidatePath(req.url + '/chamcong/success');
	return NextResponse.redirect(new URL('/chamcong/success', req.url));
}
