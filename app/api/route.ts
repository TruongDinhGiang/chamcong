import { createKysely } from '@vercel/postgres-kysely';
import { cookies } from 'next/headers';
import { NextRequest, NextResponse } from 'next/server';

const db = createKysely<any>();

export async function GET(req: NextRequest) {
	// await db.schema.dropTable('D13M8').execute();
	req.cookies.delete('isCheckin');
	return NextResponse.json({ status: 'done' });
}
