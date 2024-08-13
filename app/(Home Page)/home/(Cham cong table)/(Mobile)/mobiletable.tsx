'use client';

import { getTotalDayInCurrentMonth } from '@/app/libs/utilities';
import { useRef } from 'react';
import { tableConfig } from '../tableconfig';

const totalDay = getTotalDayInCurrentMonth();
function generateDayComponent() {
	const arr = [];
	for (let i = 1; i <= totalDay; i++) {
		arr.push({
			text: String(i),
			data: String(i),
		});
	}
	return arr;
}

export default function MobileTable() {
	const DateElement = useRef<HTMLSpanElement>(null);
	const StartTimeElement = useRef<HTMLParagraphElement>(null);
	const EndTimeElement = useRef<HTMLParagraphElement>(null);

	const numberOfGrid = tableConfig.Mobile.Grid[totalDay];

	return (
		<div className="h-max grid grid-cols-2 grid-rows-1">
			<div id="selection" className={`${numberOfGrid} gap-2`}>
				{generateDayComponent().map((e) => {
					return (
						<button
							type="button"
							onClick={() => {
								DateElement.current!.innerText = e.text;
								StartTimeElement.current!.innerText = 'Đợi chút xíu...';
								EndTimeElement.current!.innerText = 'Đợi chút xíu...';
								fetch('api/get_user_day_info?day=' + e.data, {
									method: 'POST',
									body: e.data,
								})
									.then((res) => res.json())
									.then((data) => {
										StartTimeElement.current!.innerText = data.checkin ? data.checkin : 'Không có!';
										EndTimeElement.current!.innerText = data.checkout ? data.checkout : 'Không có!';
									});
							}}
							key={e.data}
							className="focus:bg-black focus:text-white py-2 border border-solid border-black rounded-2xl flex items-center justify-center">
							{e.text}
						</button>
					);
				})}
			</div>
			<div
				id="showing board"
				className="relative w-3/4 h-full left-1/2 -translate-x-1/2 font-bold bg-slate-300 rounded-2xl">
				<div className="h-full flex flex-col justify-evenly items-center my-2">
					<p>
						Ngày <span ref={DateElement}>null</span>
					</p>
					<div className="text-center">
						<p>Giờ vào</p>
						<p ref={StartTimeElement}>null</p>
					</div>
					<div className="text-center">
						<p>Giờ ra</p>
						<p ref={EndTimeElement}>null</p>
					</div>
				</div>
			</div>
		</div>
	);
}
