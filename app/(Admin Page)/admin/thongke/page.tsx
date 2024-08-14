'use client';

import { GetCurrentDate, getTotalDayInCurrentMonth } from '@/app/libs/utilities';
import { Suspense, useState } from 'react';
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

	return (
		<>
			<div className="w-full h-screen flex flex-col">
				<p className="mt-5 text-4xl font-bold text-center">Bảng dữ liệu tháng {date[1]}</p>
				<div className="flex gap-x-3 mx-3 my-5">
					{['Thủy', 'Duyên', 'Tùng', 'Quảng'].map((e) => {
						return (
							<button
								onClick={() => {
									fetch('/api/admin/get_user_month_data', {
										method: 'POST',
										body: JSON.stringify(e),
									})
										.then((res) => res.json())
										.then((data) => setTableArray(ArrayGenerator(data)));
								}}
								type="button"
								key={e}
								className="transition-colors select-none w-full border border-solid border-black rounded-full focus:bg-black focus:text-white focus:cursor-pointer">
								<p className="mx-auto my-2 w-fit">{e}</p>
							</button>
						);
					})}
				</div>
				<div className="overflow-auto flex flex-cols px-5 pb-5">
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
