'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

export default function Timer(props: any) {
	const { url, time }: { url: string; time: number } = props;
	const [timer, setTimer] = useState(time);
	const router = useRouter();

	if (timer == 0) {
		router.replace(url);
	}

	useEffect(() => {
		setTimeout(() => {
			setTimer(timer - 1);
		}, 1000);
	}, [timer]);
	return <p className="pt-3 self-center text-lg ">Bạn sẽ chuyển về trang chủ sau {timer} giây</p>;
}
