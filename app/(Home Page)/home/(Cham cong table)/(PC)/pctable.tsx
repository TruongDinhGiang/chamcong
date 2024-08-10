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
	days: number;
	currentMonth: number;
	timeContainer: MutableRefObject<{
		startTime: RefObject<HTMLParagraphElement>;
		endTime: RefObject<HTMLParagraphElement>;
		DaySelect: RefObject<HTMLParagraphElement>;
	}>;
}) {
	const PCGrid = tableConfig.PC.Grid;
	const numberOfGrid = days % 2 == 0 ? PCGrid[30] : PCGrid[31];

	const { startTime, endTime, DaySelect } = timeContainer.current;

	return (
		<div className={`${numberOfGrid} gap-1`}>
			{generateDayComponent(days).map((e) => {
				return (
					<Suspense key={e.text} fallback={<p>Loading...</p>}>
						<p
							onClick={async (element) => {
								await fetch('home/api', {
									method: 'GET',
									// body: JSON.stringify({
									// 	newcontent: 'xinchao',
									// }),
								})
									.then((res) => res.json())
									.then((result) => console.log(result));
								// await fetch('api/get_user_day_info?day=' + e.data, { method: 'POST', body: e.data })
								// 	.then((res) => res.json())
								// 	.then((data) => {
								// 		DaySelect.current!.innerText = String(e.data);
								// 		startTime.current!.innerText = String(data.checkin);
								// 		endTime.current!.innerText = String(data.checkout);
								// 		//TODO: Save all day infomation inside cookies. Update cookie everytime checkin/checkout
								// 	});
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
