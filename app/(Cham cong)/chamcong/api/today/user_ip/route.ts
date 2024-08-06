'use server';

import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
	const userIP = req.headers.get('x-forwarded-for');
	console.log(req.headers);
	console.log(userIP);
	if (userIP == '115.78.238.137') {
		return NextResponse.json({ status: 200, success: true, uuid: '' });
	}
	return NextResponse.json({ status: 400, success: false, uuid: '' });
}
