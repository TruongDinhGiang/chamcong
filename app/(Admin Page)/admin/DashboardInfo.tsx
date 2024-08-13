'use client';

import { getTodayTotalEmployee } from '@/app/libs/actions';
import { Meditative, roboto } from '@/app/ui/Style/Font/fonts';
import { IconDefinition, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { useState, useEffect } from 'react';

function DashboardDetail({
	className,
	text,
	data,
	icon,
}: {
	className?: string;
	text: string;
	data: number;
	icon: IconDefinition;
}) {
	return (
		<div className={className}>
			<FontAwesomeIcon className="w-full h-full" icon={icon} size="2x" fixedWidth />
			<p className="text-[25px] text-[#000000] opacity-75" style={Meditative.style}>
				{data}
			</p>
			<p className="text-[15px] text-[#000000] opacity-50" style={roboto.style}>
				{text}
			</p>
		</div>
	);
}

export default function TopDashboardDetail() {
	const [TodayTotalEmployee, setTodayTotalEmployee] = useState(0);
	const [init, setInit] = useState(true);

	useEffect(() => {
		if (init) {
			getTodayTotalEmployee().then((x) => setTodayTotalEmployee(x));
			setInit(false);
		} else {
			setInterval(() => {
				getTodayTotalEmployee().then((x) => setTodayTotalEmployee(x));
			}, 10000);
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);
	return (
		<div className="relative h-[25vh]">
			<div
				id="dashboard"
				className="relative flex items-center justify-center h-full w-full gap-x-5">
				<DashboardDetail
					className="relative flex flex-col bg-white rounded-xl items-center p-5 h-[75%] aspect-square"
					icon={faUser}
					text={'Có mặt'}
					data={TodayTotalEmployee}
				/>
			</div>
		</div>
	);
}
