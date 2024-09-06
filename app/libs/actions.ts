'use server';

import { sql } from '@vercel/postgres';
import { createKysely } from '@vercel/postgres-kysely';
import z from 'zod';
import { cookies } from 'next/headers';
import bcrypt from 'bcryptjs';

import { getTotalDayInCurrentMonth, DayToSecond, DateInfo, TimeInfo } from './utilities';

const db = createKysely<any>();
const totalDay = getTotalDayInCurrentMonth();

const schema = z.object({
	username: z.string({
		invalid_type_error: 'Please enter your username',
	}),
	password: z.string({
		invalid_type_error: 'Please enter your password',
	}),
});

export type State = {
	message: string;
	success?: boolean;
	progress?: 'pending' | 'done';
};

export async function getTodayTotalEmployee() {
	try {
		const result = await db.selectFrom(`D${DateInfo[0]}M${DateInfo[1]}`).selectAll().execute();
		return result.length;
	} catch (e) {
		return 0;
	}
}
export async function GetTotalEmployee(): Promise<Array<any>> {
	let result = await db.selectFrom('accounts').select(['username', 'role']).execute();
	result = result.reduce((prev: any, current: any) => {
		const arr = prev ? prev : [];
		if (current.role !== 'Admin') {
			arr.push({ username: current.username });
		}
		return arr;
	}, []);
	return result;
}

export async function updateSession() {
	const currentUserName = cookies().get('currentUserName');
	const currentUserRole = cookies().get('currentUserRole');
	const haveData = currentUserName && currentUserRole ? true : false;
	return haveData
		? {
				success: true,
				data: {
					username: currentUserName?.value,
					role: currentUserRole?.value,
				},
		  }
		: {
				success: false,
				data: null,
		  };
}

async function getUser(username: string): Promise<any> {
	const user = await sql`SELECT password,role FROM accounts WHERE username=${username}`;
	return user.rows.length > 0
		? {
				data: user.rows[0],
				success: true,
		  }
		: {
				data: undefined,
				success: false,
		  };
}

export async function handleLogin(prevState: State, formData: FormData) {
	const status: State = {
		message: '',
		success: false,
		progress: 'done',
	};

	//*Parse login form
	const parsedData = schema.safeParse({
		username: formData.get('username') || null,
		password: formData.get('password') || null,
	});

	//* Checking form validation
	if (!parsedData.success) {
		status.message = 'Bạn hãy điền đầy đủ thông tin ạ!';
		status.success = false;
		return status;
	}

	//*Fetch user details from database
	const savedData = await getUser(parsedData.data.username);
	if (!savedData.success) {
		status.message = 'Tài khoản không tồn tại! Hãy liên lạc với HR để tạo tài khoản';
		status.success = false;
		return status;
	}
	//*Parse password and role from database
	const { role, password } = savedData.data;

	//*Checking user password
	const result = await bcrypt.compare(parsedData.data.password, password);

	//*Set success status to return
	status.message = result ? 'Đăng nhập thành công' : 'Sai mật khẩu';
	status.success = result;

	//*If failed
	if (!result) return status;

	//*If success
	const username = parsedData.data.username;

	//*Check if new year (mean 1st January), then delete all data from old year.
	if (DateInfo[0] == '1' && DateInfo[1] == '1') {
		for (let i = 1; i <= 12; i++) {
			await db.schema
				.dropTable(username + String(i))
				.ifExists()
				.execute();
		}
	}

	//*Create user checkin/checkout time for a month
	await db.schema
		.createTable(username + DateInfo[1])
		.ifNotExists()
		.addColumn('Days', 'integer')
		.addColumn('Checkin', 'text', (col) => col.defaultTo(null))
		.addColumn('Checkout', 'text', (col) => col.defaultTo(null))
		.execute();

	//*Insert into new table days data from 1 to 28/29/30/31 depends on current month
	for (let i = 1; i <= totalDay; i++) {
		await db
			.insertInto(username + DateInfo[1])
			.values({
				Days: i,
			})
			.executeTakeFirst();
	}

	//*Calculate expire time for cookie
	const CookieExpireTime =
		DayToSecond(String(totalDay), '23', '59', '59') -
		DayToSecond(DateInfo[0], TimeInfo[0], TimeInfo[1], TimeInfo[2]);

	cookies().set('currentUserName', username, {
		maxAge: CookieExpireTime,
	});
	cookies().set('currentUserRole', role, {
		maxAge: CookieExpireTime,
	});
	return status;
}

//*Array handler
export async function _JsonArrayStringify(arr: Array<any>, seperator: string) {
	arr = arr.map((e) => JSON.stringify(e));
	return arr.reduce((prev, e) => {
		return prev + e + seperator;
	}, '');
}

export async function _ArrayParseToJson(arr: string, seperator: string) {
	const result = arr.split(seperator);
	result.pop();
	return result.map((e) => JSON.parse(e));
}

export async function GetTableData(seperator: string) {
	const currentUser = cookies().get('currentUserName')!.value;
	const result = await db.selectFrom(currentUser).selectAll().execute();

	return result;
}
