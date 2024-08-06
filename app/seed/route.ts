import { sql } from '@vercel/postgres';
import { NextRequest, NextResponse } from 'next/server';
import bcrypt from 'bcryptjs';
import { v6 } from 'uuid';

export async function GET(req: NextRequest) {
	const username = 'Thủy';
	const password = '210705';
	const role = 'Admin';

	const result = bcrypt.genSalt(10, function (err, salt) {
		const result = bcrypt.hash(password, salt, async function (err, password) {
			const uuid = v6();
			await sql`INSERT INTO accounts (userID, username, password, role)
	                VALUES (${uuid}, ${username},${password},${role})`;
			return { data: err ? 'Failed' : 'Success' };
		});
		return result;
	});
	return NextResponse.json({ result });
}
