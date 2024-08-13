'use client';

import { useSearchParams, usePathname, useRouter } from 'next/navigation';
import Image from 'next/image';
import { MutableRefObject, Suspense, useEffect, useRef, useState } from 'react';
import { AppRouterInstance } from 'next/dist/shared/lib/app-router-context.shared-runtime';

import loading from '@/public/GIF/loading2.gif';
import _hasCookie from './api/today/hasCookie';

async function CheckData(
	path: string,
	query: string | null,
	data: MutableRefObject<number>,
	router: AppRouterInstance
) {
	//*If cookie is given, abort fetching data.
	switch (query) {
		case 'start': {
			await _hasCookie('isCheckin').then((val) => {
				if (val) data.current = 401;
			});
		}
		case 'end': {
			await _hasCookie('isCheckout').then((val) => {
				if (val) data.current = 401;
			});
			break;
		}
	}
	if (data.current == 401) router.replace('/home');

	//*fetch userIP
	await fetch(path + '/user_ip', {
		method: 'POST',
	})
		.then((res) => res.json())
		.then((val) => {
			if (val.status == 400) {
				data.current = 400;
				router.replace('/chamcong/fail');
			}
		});

	//* fetch data
	if (data.current == 200) {
		fetch(path + '/api/today/' + query, {
			method: 'POST',
		})
			.then((res) => res.json())
			.then((val) => {
				if (val.status == 200) {
					router.replace('/chamcong/success');
				} else {
					router.replace('/home');
				}
			});
	}
}
function InsertData() {
	//*Define path and query
	const path = usePathname();
	const query = useSearchParams().get('query');

	//*Define router
	const router = useRouter();

	//*If wrong query, direct to notfound page
	if (query !== 'start' && query !== 'end') {
		router.replace('/not-found');
	}

	//*Define data using 'useRef'
	const data = useRef(200);

	const [loopTime, setLoopTime] = useState(false);

	useEffect(() => {
		//*For the second render
		if (loopTime) {
			CheckData(path, query, data, router);
		} else setLoopTime(true);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [loopTime]);
	return (
		<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-fit h-fit">
			<Image src={loading} alt="loading" objectFit="cover" className="relative" />
			<p className="mx-auto w-fit font-bold text-2xl text-center">Đợi chút xíu nhé...</p>
		</div>
	);
}

export default function Page() {
	return (
		<Suspense>
			<InsertData />
		</Suspense>
	);
}
