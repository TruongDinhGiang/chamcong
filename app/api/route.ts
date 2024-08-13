'use server';

import { createKysely } from '@vercel/postgres-kysely';
import { NextRequest, NextResponse } from 'next/server';
import { cookies } from 'next/headers';

const db = createKysely<any>();

export async function GET(req: NextRequest) {
	// await db.schema.dropTable('D13M8').execute();
	cookies().set('isCheckin', '', { maxAge: 1, httpOnly: false });
	cookies().set('isCheckout', '', { maxAge: 1, httpOnly: false });
	return Response.json('done');
}
