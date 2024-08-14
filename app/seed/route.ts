import { createKysely } from '@vercel/postgres-kysely';
import { NextRequest, NextResponse } from 'next/server';
import bcrypt from 'bcryptjs';
import { v6 } from 'uuid';

const db = createKysely<any>();

export async function GET(req: NextRequest) {
	const username = 'Quảng';
	const password = '875984';
	const role = 'Printer';

	const result = bcrypt.genSalt(10, function (err, salt) {
		const result = bcrypt.hash(password, salt, async function (err, password) {
			const uuid = v6();
			return { data: err ? 'Failed' : 'Success' };
		});
		return result;
	});
	return NextResponse.json({ result });
}
