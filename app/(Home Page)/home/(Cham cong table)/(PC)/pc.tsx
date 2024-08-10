'use client';

import { PCTable } from './pctable';
import { Suspense, useRef } from 'react';
import { getTotalDayInCurrentMonth } from '@/app/libs/utilities';

export default function PC() {
	const currentDate = new Date().toLocaleDateString(['vi-vn'], {
		timeZone: 'Asia/Ho_Chi_Minh',
	});
	const currentMonth = Number(currentDate.split('/')[1]);
	const totalDay = getTotalDayInCurrentMonth();

	const startTime = useRef<HTMLParagraphElement>(null);
	const endTime = useRef<HTMLParagraphElement>(null);
	const DaySelect = useRef<HTMLParagraphElement>(null);

	const timeContainer = useRef({
		startTime: startTime,
		endTime: endTime,
		DaySelect: DaySelect,
	});
	return (
		<main className="mt-5">
			<div id="title" className="">
				<p className="text-center text-[25px] font-bold">Bảng chấm công tháng {currentMonth}</p>
			</div>
			<div id="data" className="my-5 w-screen border-y border-solid border-black">
				<div className="py-5 grid grid-cols-[max-content_max-content_max-content] grid-rows-[min-content] items-center justify-evenly font-bold bg-slate-300 ">
					<p className="w-fit">
						Ngày <span ref={DaySelect}>null</span>
					</p>
					<p className="w-fit">
						Giờ vào: <span ref={startTime}>null</span>
					</p>
					<p className="w-fit">
						Giờ ra: <span ref={endTime}>null</span>
					</p>
				</div>
			</div>
			<div id="table" className="mx-3">
				<PCTable days={totalDay} currentMonth={currentMonth} timeContainer={timeContainer} />
			</div>
		</main>
	);
}
