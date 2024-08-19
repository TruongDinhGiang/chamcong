import { faUser as UserSolid, faQuestion, IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { faUser as UserRegular } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { getTodayTotalEmployee } from '@/app/libs/actions';

import RenderChart from '@/app/(Admin Page)/admin/RenderChart';
import TopDashboardDetail from './DashboardInfo';
import { Meditative, roboto } from '@/app/ui/Style/Font/fonts';

export default async function Page() {
	return (
		<>
			<div className="relative bg-white w-full h-fit">
				<p className="font-bold text-[20px] Roboto p-5">Bảng tóm tắt</p>
			</div>
			<TopDashboardDetail />
			<div>
				<RenderChart />
			</div>
		</>
	);
}
