'use client';

import { useSearchParams, usePathname, useRouter } from 'next/navigation';
import Image from 'next/image';
import loading from '@/public/GIF//loading2.gif';
import { Suspense, useEffect, useState } from 'react';

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

	//*Define data using 'useState'
	const [data, setData] = useState({
		status: 1,
		success: false,
	});

	//* if successfully get data, direct to success page
	if (data.success) {
		router.replace('/chamcong/success');
		//*Otherwise, if data already have, redirect back to home page
	} else if (data.status == 406) {
		router.replace('/home');
	}
	useEffect(() => {
		//* fetch data
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
			<p className="mx-auto w-fit font-bold text-2xl text-center">Đợi chút xíu nhé...</p>
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
