'use client';

import PCTable from './pctable';
import { Suspense, useRef } from 'react';

export default function PC() {
	const currentDate = new Date().toLocaleDateString(['vi-vn'], {
		timeZone: 'Asia/Ho_Chi_Minh',
	});
	const currentMonth = Number(currentDate.split('/')[1]);
	const totalDay =
		currentMonth > 7 ? (currentMonth % 2 == 0 ? 31 : 30) : currentMonth % 2 == 0 ? 30 : 31;

	const dataOfDay = useRef(null);
	return (
		<main className="mt-5">
			<div id="title" className="mb-7">
				<p className="text-center text-[25px] font-bold">Bảng chấm công tháng {currentMonth}</p>
			</div>
			<div id="data" ref={dataOfDay}></div>
			<div id="table" className="mx-3">
				<Suspense fallback={<p>Loading...</p>}>
					<PCTable dataRef={dataOfDay} totalDay={totalDay} currentMonth={currentMonth} />
				</Suspense>
			</div>
		</main>
	);
}
