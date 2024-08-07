'use client';
import { MutableRefObject, RefObject, useRef } from 'react';
import { tableConfig } from '../tableconfig';

function generateDayComponent(totalDay: number): Array<any> {
	const arr = [];
	for (let i = 1; i <= totalDay; i++) {
		arr.push({
			text: 'Ngày ' + i,
			data: i,
		});
	}
	return arr;
}

export async function PCTable({
	days,
	currentMonth,
	dataRef,
	timeContainer,
}: {
	days: number;
	currentMonth: number;
	dataRef: RefObject<HTMLDivElement>;
	timeContainer: MutableRefObject<{
		startTime: RefObject<HTMLParagraphElement>;
		endTime: RefObject<HTMLParagraphElement>;
	}>;
}) {
	const PCGrid = tableConfig.PC.Grid;
	const numberOfGrid = days % 2 == 0 ? PCGrid[30] : PCGrid[31];

	const { startTime, endTime } = timeContainer.current;

	return (
		<div className={`${numberOfGrid} gap-1`}>
			{generateDayComponent(days).map((e) => {
				return (
					<p
						onClick={() => {
							fetch('api/get_user_day_info?day=' + e.data, { method: 'POST', body: e.data })
								.then((res) => res.json)
								.then((data) => console.log(data));
							//TODO: onClick event, send data to getuser api and return checkin, checkout time from the user.
						}}
						key={e.text}
						className="py-2 rounded-md transition-colors hover:text-white hover:bg-black hover:cursor-pointer select-none text-center border border-solid border-black">
						{e.text}
					</p>
				);
			})}
		</div>
	);
}
