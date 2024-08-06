import { createKysely } from '@vercel/postgres-kysely';
import { NextRequest, NextResponse } from 'next/server';
import { v6 } from 'uuid';

const db = createKysely<any>();

export async function GET(req: NextRequest) {
	await db.schema.alterTable('accounts').addColumn('userID', 'uuid').execute();
	const query = ['Sang', 'Duyên', 'Tùng', 'Thủy'].map(async (e, i) => {
		const uuidV6 = v6();
		return await db
			.updateTable('accounts')
			.set({
				userID: uuidV6,
			})
			.where('username', '=', e)
			.executeTakeFirst();
	});
	return NextResponse.json(query);
}
