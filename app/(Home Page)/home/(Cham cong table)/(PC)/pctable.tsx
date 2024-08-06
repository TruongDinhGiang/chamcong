'use client';
import { MutableRefObject } from 'react';
import { tableConfig } from '../tableconfig';

function generateDayComponent(totalDay: number): Array<any> {
	const arr = [];
	for (let i = 1; i <= totalDay; i++) {
		arr.push('Ngày ' + i);
	}
	return arr;
}

export async function PCTable({
	days,
	currentMonth,
	dataRef,
}: {
	days: number;
	currentMonth: number;
	dataRef: MutableRefObject<null>;
}) {
	console.log(days);
	const PCGrid = tableConfig.PC.Grid;
	const numberOfGrid = days % 2 == 0 ? PCGrid[30] : PCGrid[31];
	console.log(days);
	return (
		<div className={`${numberOfGrid} gap-1`}>
			{/* //TODO:remove class hover. Replace with mouse over event listener in order to show the data inside <div id='data'> component that has passed as 'dataRef' variable. */}
			{generateDayComponent(days).map((e) => {
				return (
					<p
						key={e}
						className="py-2 rounded-md transition-colors hover:text-white hover:bg-black hover:cursor-pointer select-none text-center border border-solid border-black">
						{e}
					</p>
				);
			})}
		</div>
	);
}
