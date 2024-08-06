'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import QRCode from 'qrcode';

export default function Page() {
	const [url, setURL] = useState('');
	const container = useRef(null);

	useEffect(() => {
		if (!url) {
			QRCode.toDataURL(
				'https://hieungocdesign.com/',
				{
					errorCorrectionLevel: 'H',
					version: 10,
					type: 'image/png',
				},
				(err, text) => {
					console.log(err);
					setURL(text);
				}
			);
		} else {
			url.replace('image/png', 'image/octet-stream');
		}
	}, [url]);

	return (
		<div ref={container}>
			<Image width={500} height={500} src={url} alt="QRCode" />
		</div>
	);
}
