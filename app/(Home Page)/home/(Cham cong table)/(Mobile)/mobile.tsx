import { GetCurrentDate } from '@/app/libs/utilities';
import MobileTable from './mobiletable';

export default function Mobile() {
	const date = GetCurrentDate().array;

	return (
		<main className="">
			<div id="title" className="my-3 w-screen flex justify-center">
				<p className="w-fit h-fit font-bold text-2xl">Bảng chấm công tháng {date[1]}</p>
			</div>
			<MobileTable />
		</main>
	);
}
