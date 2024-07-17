'use client';
import { useEffect, useRef, useState } from 'react';
import summaryChart from '@/app/ui/Admin/summaryChart.js';

export default function RenderChart() {
	const chart = useRef<HTMLCanvasElement>(null);
	const [isRendered, setRender] = useState(false);
	useEffect(() => {
		isRendered ? summaryChart() : setRender(true);
	}, [isRendered]);
	return (
		<div id="statisticalChart" className="mx-auto w-3/4 h-auto">
			<canvas ref={chart} id="summary" />
		</div>
	);
}
