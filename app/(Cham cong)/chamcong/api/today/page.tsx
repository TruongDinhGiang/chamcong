'use client';

import { useSearchParams, usePathname, useRouter } from 'next/navigation';
import Image from 'next/image';
import loading from '@/public/GIF//loading2.gif';
import { Suspense, useEffect, useState } from 'react';

function InsertData() {
	const path = usePathname();
	const query = useSearchParams().get('query');
	const router = useRouter();

	if (query !== 'start' && query !== 'end') {
		router.replace('/not-found');
	}

	const [data, setData] = useState({
		status: 1,
		success: false,
	});

	if (data.success) {
		router.replace('/chamcong/success');
	} else if (data.status == 406) {
		router.replace('/home');
	}
	useEffect(() => {
		fetch(path + '/' + query, {
			method: 'POST',
		})
			.then((res) => res.json())
			.then((data) => setData(data));
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);
	return (
		<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-fit h-fit">
			<Image src={loading} alt="loading" objectFit="cover" className="relative" />
			<p className="mx-auto w-fit font-bold text-2xl">Đợi chút xíu nhé...</p>
		</div>
	);
}

export default function Page() {
	return (
		<Suspense fallback={<p>hi</p>}>
			<InsertData />
		</Suspense>
	);
}
