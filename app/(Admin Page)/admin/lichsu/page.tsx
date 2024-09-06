'use client';

import { Suspense, useState, useEffect, Dispatch, SetStateAction, useRef } from 'react';
import { usePathname } from 'next/navigation';

import { GetTotalEmployee } from '@/app/libs/actions';
import { DateInfo, GetCurrentDate, getTotalDayInCurrentMonth } from '@/app/libs/utilities';
import clsx from 'clsx';
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

function submitForm(
	setTableArray: Dispatch<SetStateAction<any[]>>,
	username: string,
	Month: number,
	path: string
) {
	//*Set pending state
	setTableArray([
		{
			Day: 'Đang lấy dữ liệu...',
			Checkin: 'Đang lấy dữ liệu...',
			Checkout: 'Đang lấy dữ liệu...',
		},
	]);

	//*Start to fetch data
	fetch(`${path}/api`, {
		method: 'POST',
		body: JSON.stringify({ username: username, month: Month }),
	})
		.then((res) => res.json())
		.then((data) => {
			//*If status is true, render table.
			if (data.status) {
				setTableArray(ArrayGenerator(data.data));
			}
			//*If status is false, render single row that show no data
			else {
				setTableArray([
					{
						Day: 'Không có',
						Checkin: 'Không có',
						Checkout: 'Không có',
					},
				]);
			}
		});
}

export default function Page() {
	//*Define URL path
	const path = usePathname();

	//*Define selected month, default will be current month
	const [Month, setMonth] = useState<number>(Number(DateInfo[1]));

	//*Define Array of table
	const [TableArray, setTableArray] = useState<Array<any>>([
		{
			Day: 'Không có',
			Checkin: 'Không có',
			Checkout: 'Không có',
		},
	]);

	//*Define total employee need to fetch
	const [TotalEmployee, setTotalEmployee] = useState<Array<{ username: string }>>([
		{ username: 'Đợi tí...' },
	]);

	//*Define current selected user
	const CurrentUser = useRef<any>('');

	//*Define activate array and current active user
	const [ActiveArray, setActiveArray] = useState<Array<boolean>>([false]);
	const CurrentActiveUser = useRef<number>(-1);

	//*Use "useEffect" to get total employee can be fetch on page loads
	useEffect(() => {
		GetTotalEmployee().then((e) => {
			//*On initialize, get total employee and init the active array
			const tempArray = [];
			for (let i = 0; i < e.length; i++) {
				tempArray.push(false);
			}
			setActiveArray(tempArray);

			setTotalEmployee(e);
		});
	}, []);

	return (
		<>
			<div className="w-full h-auto flex flex-col">
				<div className="mt-5 text-4xl font-bold text-center">
					<span>Bảng dữ liệu tháng</span>{' '}
					<span className="">
						<form
							className="inline"
							action={(formData: FormData) => {
								//*Get selected month
								const MonthSelector = formData.get('MonthSelector');

								//*Set current month to Month
								setMonth(Number(MonthSelector));

								//*If no user is selected, no form is submitted
								CurrentUser.current &&
									submitForm(setTableArray, CurrentUser.current, Number(MonthSelector), path);
							}}>
							<select
								onChange={(e) => {
									e.currentTarget.form?.requestSubmit();
								}}
								className="appearance-none border-0 py-0 *:text-center"
								name="MonthSelector"
								id="MonthSelector">
								{/* //*Use array to fast render 12 options equal to 12 months */}
								{[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((e) => {
									//*if current rendering month is current month, select it
									if (e == Number(DateInfo[1])) {
										return (
											<option selected key={e} value={e}>
												{e}
											</option>
										);
									}
									return (
										<option key={e} value={e}>
											{e}
										</option>
									);
								})}
							</select>
						</form>
					</span>
				</div>
				<form
					action={(formData: FormData) => {
						//*Get current selected user
						const username: any = formData.get('UserName');

						//*Month is initialized, so form can be submitted in any case
						submitForm(setTableArray, username, Month, path);
					}}
					className="flex gap-y-1 gap-x-3 px-3 py-3 mb-5 w-full h-fit overflow-x-auto">
					{/* //*Render all employee */}
					{TotalEmployee.map((e, i) => {
						return (
							<button
								onClick={() => {
									//*If there is an user is activated, change back to false and set current user to active.
									if (CurrentActiveUser.current >= 0) {
										console.log(ActiveArray, CurrentActiveUser.current);
										ActiveArray[CurrentActiveUser.current] = false;
										ActiveArray[i] = true;
									}
									//*If first click, set current user to active
									else {
										ActiveArray[i] = true;
									}
									//*Update current active user number.
									CurrentActiveUser.current = i;

									CurrentUser.current = e.username;
								}}
								name="UserName"
								value={e.username}
								type="submit"
								key={e.username}
								className={clsx(
									'w-[115px] h-[45px] transition-colors select-none border border-solid border-black rounded-full px-[35px] py-1 cursor-pointer',
									{
										'bg-black text-white': ActiveArray[i],
									}
								)}>
								<p className="mx-auto my-2 w-fit">{e.username}</p>
							</button>
						);
					})}
				</form>
				<div className="overflow-y-auto h-[600px] flex flex-cols px-5">
					<div className="h-full w-full bg-white rounded-2xl overflow-y-scroll">
						<Suspense fallback={'Đợi chút chíu'}>
							<div className="flex flex-col ">
								<div className="border-b-2 border-solid border-black text-xl w-full h-fit grid grid-cols-3 grid-rows-1 font-bold">
									<p className="text-center py-5 ">Ngày</p>
									<p className="text-center py-5 border-x-2 border-solid border-black">Giờ vào</p>
									<p className="text-center py-5 ">Giờ ra</p>
								</div>
								{/* //*After table is fetch, run through all and render every rows component */}
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
