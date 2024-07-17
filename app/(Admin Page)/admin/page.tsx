import { faUser as UserSolid, faQuestion, IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { faUser as UserRegular } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { getTodayEmployeeStatus } from '@/app/libs/actions';

import RenderChart from '@/app/ui/Admin/RenderChart';

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
			<FontAwesomeIcon className="w-auto h-full" icon={icon} />
			<p className="text-[25px] text-[#000000] opacity-75 mediative">{data}</p>
			<p className="text-[15px] text-[#000000] opacity-50 roboto">{text}</p>
		</div>
	);
}

export default async function Page() {
	getTodayEmployeeStatus();
	return (
		<>
			<div className="relative bg-white w-full h-fit">
				<p className="font-bold text-[20px] Roboto p-5">Bảng tóm tắt</p>
			</div>
			<div className="relative h-[25vh]">
				<div
					id="dashboard"
					className="relative flex items-center justify-center h-full w-full gap-x-5">
					<DashboardDetail
						className="relative bg-white rounded-xl flex flex-col items-center p-5 h-[75%] w-auto"
						icon={UserSolid}
						text={'Có mặt'}
						data={900}
					/>
					<DashboardDetail
						className="relative bg-white rounded-xl flex flex-col items-center p-5 h-[75%] w-auto"
						icon={UserRegular}
						text={'Vắng mặt'}
						data={100}
					/>
					<DashboardDetail
						className="relative bg-white rounded-xl flex flex-col items-center p-5 h-[75%] w-auto"
						icon={faQuestion}
						text={'Chờ cập nhật'}
						data={100000000}
					/>
				</div>
			</div>
			<div>
				<RenderChart />
			</div>
		</>
	);
}
