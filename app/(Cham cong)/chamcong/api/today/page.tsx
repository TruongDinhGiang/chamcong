'use client';

import { Params } from 'next/dist/shared/lib/router/utils/route-matcher';
import { usePathname } from 'next/navigation';
import { useEffect } from 'react';

async function temp(path: string, type: string) {
	await fetch(path + type, {
		method: 'POST',
	});
}

export default function Page(req: any) {
	const path = usePathname();
	console.log(req.searchParams.query);
	// useEffect(() => {
	// 	// temp(path, '/start');
	// }, [path]);
	return <p>hi</p>;
}
