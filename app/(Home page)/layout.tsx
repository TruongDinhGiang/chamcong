import SideNav from '../ui/Home/SideNav';

export default function Layout({ children }: { children: React.ReactNode }) {
	return (
		<div>
			<SideNav />
			{children}
		</div>
	);
}
