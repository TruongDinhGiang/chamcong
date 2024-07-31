'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';

import successGIF from '@/public/GIF/successGIF.gif';
import failedGIF from '@/public/GIF/failedGIF.gif';
import { bgColor } from './bgConfig';
import Timer from './setTimer';
import notFound from './notFound';

export default function Page(params: any) {
	const { successState } = params.params;
	const [pagePreset, setPagePreset] = useState({
		color: '',
		GIF: successGIF,
	});
	const [timer, setTimer] = useState(5);

	useEffect(() => {
		switch (successState) {
			case 'success': {
				setPagePreset({
					color: bgColor.success,
					GIF: successGIF,
				});
				break;
			}
			case 'fail': {
				setPagePreset({
					color: bgColor.fail,
					GIF: failedGIF,
				});
				break;
			}
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [successState]);

	return successState === 'fail' || successState === 'success' ? (
		<main
			className={`bg-right-top bg-gradient-to-bl ${pagePreset.color} w-screen h-screen flex flex-col justify-center`}>
			<div className="mx-auto h-1/2 aspect-square rounded-[2rem] bg-white opacity-70 flex justify-center items-center">
				<Image src={pagePreset.GIF} alt="Success GIF" className="w-1/2 h-auto" objectFit="fit" />
			</div>
			<Timer url="/home" time={5} />
		</main>
	) : (
		notFound()
	);
}
