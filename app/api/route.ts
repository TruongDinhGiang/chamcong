import { createKysely } from '@vercel/postgres-kysely';
import { NextResponse } from 'next/server';

const db = createKysely<any>();

export async function GET() {
	await db.schema.dropTable('D10M8').execute();
	return NextResponse.json({ status: 'done' });
}
