import { createKysely } from '@vercel/postgres-kysely';
import { NextRequest, NextResponse } from 'next/server';
import bcrypt from 'bcryptjs';
import { v6 } from 'uuid';

const db = createKysely<any>();

export async function GET(req: NextRequest) {
	const username = 'Quảng';
	const password = 'quangquang';
	const role = 'Printer';

	const result = bcrypt.genSalt(10, function (err, salt) {
		const result = bcrypt.hash(password, salt, async function (err, password) {
			const uuid = v6();
			await db
				.insertInto('accounts')
				.values({
					username: username,
					password: password,
					role: role,
					UUID: v6(),
				})
				.executeTakeFirst();
			return { data: err ? 'Failed' : 'Success' };
		});
		return result;
	});
	return NextResponse.json({ result });
}
