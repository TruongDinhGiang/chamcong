import SideNav from '../../ui/Home/SideNav';

export default function Layout({ children }: { children: React.ReactNode }) {
	return (
		<div className="flex">
			<SideNav />
			{children}
		</div>
	);
}
