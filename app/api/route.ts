import { createKysely } from '@vercel/postgres-kysely';
import { cookies } from 'next/headers';
import { NextResponse } from 'next/server';

const db = createKysely<any>();

export async function GET() {
	cookies().delete('isCheckin');
	cookies().delete('isCheckout');
	await db.schema.dropTable('D13M8').execute();
	return NextResponse.json({ status: 'done' });
}
