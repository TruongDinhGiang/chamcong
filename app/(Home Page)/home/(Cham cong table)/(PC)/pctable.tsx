'use server';
import { MutableRefObject } from 'react';
import { tableConfig } from '../tableconfig';

function generateDayComponent(totalDay: number): Array<any> {
	const arr = [];
	for (let i = 1; i <= totalDay; i++) {
		arr.push('Ngày ' + i);
	}
	return arr;
}

export default async function PCTable(
	option: { totalDay: number; currentMonth: number; dataRef: MutableRefObject<null> },
	props: any
) {
	const { totalDay, currentMonth } = option;
	const PCGrid = tableConfig.PC.Grid;
	const numberOfGrid = totalDay % 2 == 0 ? PCGrid[30] : PCGrid[31];
	console.log(totalDay);
	return (
		<div className={`${numberOfGrid} gap-1`}>
			{/* //TODO:remove class hover. Replace with mouse over event listener in order to show the data inside <div id='data'> component that has passed as 'dataRef' variable. */}
			{generateDayComponent(totalDay).map((e) => {
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
