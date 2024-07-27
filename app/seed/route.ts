import { sql } from '@vercel/postgres';
import { NextRequest, NextResponse } from 'next/server';
import bcrypt from 'bcryptjs';

export async function GET(req: NextRequest) {
	const username = 'Thủy';
	const password = '210705';
	const role = 'Coder';

	const result = bcrypt.genSalt(10, function (err, salt) {
		const result = bcrypt.hash(password, salt, async function (err, password) {
			await sql`INSERT INTO accounts
	                VALUES (${username},${password},${role})`;
			return { data: err ? 'Failed' : 'Success' };
		});
		return result;
	});
	return NextResponse.json({ result });
}