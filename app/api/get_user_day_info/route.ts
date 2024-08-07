import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
	const data: string = await req.json().then((e) => e);
	console.log(data);
}
