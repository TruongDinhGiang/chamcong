'use client';
import { useEffect, useRef, useState } from 'react';
import summaryChart from '@/app/(Admin Page)/admin/summaryChart.js';

export default function RenderChart() {
	const chart = useRef<HTMLCanvasElement>(null);
	const [isRendered, setRender] = useState(false);
	useEffect(() => {
		isRendered ? summaryChart() : setRender(true);
	}, [isRendered]);
	return (
		<div id="statisticalChart" className="w-auto h-full">
			<canvas ref={chart} className="w-[90%] h-min" id="summary" />
		</div>
	);
}
