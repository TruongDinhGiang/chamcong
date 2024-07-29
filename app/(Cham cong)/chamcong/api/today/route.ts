// 'use server';

import { NextRequest, NextResponse } from 'next/server';

export async function GET(req: NextRequest) {
	const { headers } = req;
	// console.log(req.cookies.toString().split(';')[0]);
	// console.log(headers);
	return Response.json({
		data: req.cookies.toString(),
	});
}
