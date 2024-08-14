import SideNav from '../../ui/Admin/SideNav';
import { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'Admin',
};

export default function Layout({ children }: { children: React.ReactNode }) {
	return (
		<div className="bg-slate-200 grid grid-cols-[15vw_85vw] grid-rows-[100vh]">
			<div className="sticky top-0">
				<SideNav />
			</div>
			<div className="w-auto h-screen">{children}</div>
		</div>
	);
}
