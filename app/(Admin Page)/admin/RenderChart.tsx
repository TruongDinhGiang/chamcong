'use client';

import { GetCurrentDate } from '@/app/libs/utilities';
import { GetTotalEmployee } from '@/app/libs/actions';
import { useRef, useState, useEffect } from 'react';

const date = GetCurrentDate().array;

export default function RenderChart() {
	const NameElement = useRef<HTMLSpanElement>(null);
	const StartTimeElement = useRef<HTMLSpanElement>(null);
	const EndTimeElement = useRef<HTMLSpanElement>(null);

	const [TotalEmployee, setTotalEmployee] = useState<Array<{ username: string }>>([
		{ username: 'Đợi tí...' },
	]);
	useEffect(() => {
		GetTotalEmployee().then((e) => {
			console.log(e);
			setTotalEmployee(e);
		});
	}, []);

	return (
		<div>
			<p id="caption" className="mx-auto text-[1.5em] font-bold text-center w-fit">
				Bảng chấm công
			</p>
			<p id="day" className="mx-auto text-base text-center w-fit">
				{new Date().toLocaleDateString(['vi-vn'], {
					timeZone: 'Asia/Ho_Chi_Minh',
					dateStyle: 'full',
				})}
			</p>
			<div className="my-3 mx-auto w-[95%]">
				<div className="w-full flex overflow-x-auto gap-3">
					{TotalEmployee.map((e) => {
						return (
							<button
								onClick={() => {
									NameElement.current!.innerText = e.username;
									StartTimeElement.current!.innerText = 'Đợi chút xíu...';
									EndTimeElement.current!.innerText = 'Đợi chút xíu...';
									fetch('/api/admin/get_user_info', {
										method: 'POST',
										body: JSON.stringify({
											Name: e.username,
											Day: date[0],
										}),
									})
										.then((res) => res.json())
										.then((data) => {
											StartTimeElement.current!.innerText = data.checkin
												? data.checkin
												: 'Không có!';
											EndTimeElement.current!.innerText = data.checkout
												? data.checkout
												: 'Không có!';
										});
								}}
								// type="button"
								key={e.username}
								className="transition-colors select-none w-[115px] px-[35px] border border-solid border-black rounded-full focus:bg-black focus:text-white focus:cursor-pointer">
								<p className="mx-auto my-2 w-fit">{e.username}</p>
							</button>
						);
					})}
				</div>
				<div className="mt-5 rounded-xl border border-solid border-black bg-slate-300">
					<div className="flex items-center justify-evenly my-3">
						<p>
							Tên: <span ref={NameElement}></span>
						</p>
						<p>
							Giờ vào: <span ref={StartTimeElement}></span>
						</p>
						<p>
							Giờ ra: <span ref={EndTimeElement}></span>
						</p>
					</div>
				</div>
			</div>
		</div>
	);
}
