import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import clsx from 'clsx';
import Menu from './Menu';

export default function SideNav() {
	return (
		<main>
			<div className="absolute w-screen h-[10vh] bg-[#1A30A7]"></div>
			<Menu />
		</main>
	);
}
