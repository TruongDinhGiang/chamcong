'use client';

import { GetTotalEmployee } from '@/app/libs/actions';
import { GetCurrentDate, getTotalDayInCurrentMonth } from '@/app/libs/utilities';
import { Suspense, useState, useEffect } from 'react';
const date = GetCurrentDate().array;
const totalDay = getTotalDayInCurrentMonth();

function ArrayGenerator(data: Array<any>) {
	const result = [];
	for (let i = 1; i <= totalDay; i++) {
		result.push({
			Day: i,
			Checkin: data[i - 1].Checkin,
			Checkout: data[i - 1].Checkout,
		});
	}
	return result;
}

export default function Page() {
	const [TableArray, setTableArray] = useState<Array<any>>([]);
	const [TotalEmployee, setTotalEmployee] = useState<Array<{ username: string }>>([
		{ username: 'Đợi tí...' },
	]);

	useEffect(() => {
		GetTotalEmployee().then((e) => {
			setTotalEmployee(e);
		});
	}, []);

	return (
		<>
			<div className="w-full h-auto flex flex-col">
				<p className="mt-5 text-4xl font-bold text-center">Bảng dữ liệu tháng {date[1]}</p>
				<div className="flex gap-y-1 gap-x-3 px-3 py-3 mb-5 w-full h-fit overflow-x-auto">
					{TotalEmployee.map((e) => {
						return (
							<button
								onClick={() => {
									fetch('/api/admin/get_user_month_data', {
										method: 'POST',
										body: JSON.stringify(e.username),
									})
										.then((res) => res.json())
										.then((data) => setTableArray(ArrayGenerator(data)));
								}}
								type="button"
								key={e.username}
								className="w-[115px] h-[45px] transition-colors select-none border border-solid border-black rounded-full focus:bg-black focus:text-white focus:cursor-pointer px-[35px] py-1">
								<p className="mx-auto my-2 w-fit">{e.username}</p>
							</button>
						);
					})}
				</div>
				<div className="overflow-y-auto h-[600px] flex flex-cols px-5">
					<div className="h-full w-full bg-white rounded-2xl overflow-y-scroll">
						<Suspense fallback={'Đợi chút chíu'}>
							<div className="flex flex-col ">
								<div className="border-b-2 border-solid border-black text-xl w-full h-fit grid grid-cols-3 grid-rows-1 font-bold">
									<p className="text-center py-5 ">Ngày</p>
									<p className="text-center py-5 border-x-2 border-solid border-black">Giờ vào</p>
									<p className="text-center py-5 ">Giờ ra</p>
								</div>
								{TableArray.map((e) => {
									return (
										<div
											className="grid grid-cols-3 grid-rows-1 border-b-2 border-solid border-black"
											key={e.Day}>
											<p className="py-5 text-center font-bold text-lg">{e.Day}</p>
											<p className="py-5 text-center font-semibold border-x-2 border-solid border-black">
												{e.Checkin ? e.Checkin : 'Không có!'}
											</p>
											<p className="py-5 text-center font-semibold ">
												{e.Checkout ? e.Checkout : 'Không có!'}
											</p>
										</div>
									);
								})}
							</div>
						</Suspense>
					</div>
				</div>
			</div>
		</>
	);
}
