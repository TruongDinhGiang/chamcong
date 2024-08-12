'use client';
import { MutableRefObject, RefObject, Suspense } from 'react';
import { tableConfig } from '../tableconfig';

function generateDayComponent(totalDay: number): Array<any> {
	const arr = [];
	for (let i = 1; i <= totalDay; i++) {
		arr.push({
			text: 'Ngày ' + i,
			data: i,
			// TableInfoArray: GetTableData(';'),
		});
	}
	return arr;
}

export function PCTable({
	days,
	currentMonth,
	timeContainer,
}: {
	days: 31 | 30 | 29 | 28;
	currentMonth: number;
	timeContainer: MutableRefObject<{
		startTime: RefObject<HTMLParagraphElement>;
		endTime: RefObject<HTMLParagraphElement>;
		DaySelect: RefObject<HTMLParagraphElement>;
	}>;
}) {
	const PCGrid = tableConfig.PC.Grid;
	const numberOfGrid = PCGrid[days];

	const { startTime, endTime, DaySelect } = timeContainer.current;

	return (
		<div className={`${numberOfGrid} gap-1`}>
			{generateDayComponent(days).map((e) => {
				return (
					<Suspense key={e.text} fallback={<p>Loading...</p>}>
						<p
							onClick={(element) => {
								DaySelect.current!.innerText = String(e.data);
								startTime.current!.innerText = 'Đợi chút xíu...';
								endTime.current!.innerText = 'Đợi chút xíu...';
								fetch('api/get_user_day_info?day=' + e.data, { method: 'POST', body: e.data })
									.then((res) => res.json())
									.then((data) => {
										startTime.current!.innerText = data.checkin ? data.checkin : 'Không có!';
										endTime.current!.innerText = data.checkout ? data.checkout : 'Không có!';
										//TODO: Save all day infomation inside cookies. Update cookie everytime checkin/checkout
									});
							}}
							key={e.text}
							className="py-2 rounded-md transition-colors hover:text-white hover:bg-black hover:cursor-pointer select-none text-center border border-solid border-black">
							{e.text}
						</p>
					</Suspense>
				);
			})}
		</div>
	);
}
