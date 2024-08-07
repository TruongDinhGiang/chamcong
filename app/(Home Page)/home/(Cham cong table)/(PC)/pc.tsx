'use client';

import { PCTable } from './pctable';
import { Suspense, useRef } from 'react';

export default function PC() {
	const currentDate = new Date().toLocaleDateString(['vi-vn'], {
		timeZone: 'Asia/Ho_Chi_Minh',
	});
	const currentMonth = Number(currentDate.split('/')[1]);
	const totalDay =
		currentMonth > 7 ? (currentMonth % 2 == 0 ? 31 : 30) : currentMonth % 2 == 0 ? 30 : 31;

	const infoContainer = useRef<HTMLDivElement>(null);
	const startTime = useRef<HTMLParagraphElement>(null);
	const endTime = useRef<HTMLParagraphElement>(null);
	const timeContainer = useRef({
		startTime: startTime,
		endTime: endTime,
	});
	return (
		<main className="mt-5">
			<div id="title" className="">
				<p className="text-center text-[25px] font-bold">Bảng chấm công tháng {currentMonth}</p>
			</div>
			<div id="data" className="my-5 w-screen border-y border-solid border-black">
				<div
					className="py-5 grid grid-cols-[max-content_max-content] grid-rows-[min-content] items-center justify-evenly font-bold bg-slate-300 "
					ref={infoContainer}>
					<p className="w-fit" ref={startTime}>
						Giờ vào: <span>null</span>
					</p>
					<p className="w-fit" ref={endTime}>
						Giờ ra: <span>null</span>
					</p>
				</div>
			</div>
			<div id="table" className="mx-3">
				<Suspense fallback={<p>Loading...</p>}>
					<PCTable
						days={totalDay}
						currentMonth={currentMonth}
						dataRef={infoContainer}
						timeContainer={timeContainer}
					/>
				</Suspense>
			</div>
		</main>
	);
}
