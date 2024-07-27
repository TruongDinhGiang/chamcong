import SideNav from '../../ui/Admin/SideNav';
import { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'Admin',
};

export default function Layout({ children }: { children: React.ReactNode }) {
	return (
		<div className="bg-slate-200 grid grid-cols-[80vw_1fr] md:grid-cols-[25vw_1fr] lg:grid-cols-[15vw_1fr] grid-rows-[fit_content]">
			<div className="sticky top-0">
				<SideNav />
			</div>
			<div className="w-auto">{children}</div>
		</div>
	);
}
