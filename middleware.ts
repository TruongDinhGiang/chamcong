'use server';

import { NextRequest, NextResponse } from 'next/server';
import { updateSession } from './app/libs/actions';

export default async function middleware(req: NextRequest) {
	const path = req.nextUrl.pathname;
	const data = await updateSession();
	const role = data.data?.role;
	if (!data.success && path !== '/login' && path !== '/') {
		return NextResponse.redirect(new URL('/login', req.url));
	}
	if (path.split('/')[1] === 'admin' && role !== 'Admin') {
		return NextResponse.redirect(new URL('/home', req.url));
	}
	return NextResponse.next();
}

export const config = {
	matcher: ['/((?!api|_next/static|_next/image|favicon.ico|seed).*)'],
};
