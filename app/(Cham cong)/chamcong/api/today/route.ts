'use server';

import { NextRequest, NextResponse } from 'next/server';

export async function GET(req: NextRequest) {
	console.log(req.cookies.toString().split(';')[0]);
	return Response.json(req);
}
