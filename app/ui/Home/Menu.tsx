'use client';

import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import clsx from 'clsx';
import { useState } from 'react';

export default function Menu() {
	const [onMenu, setMenuStatus] = useState(false);
	return (
		<div
			className={clsx('transition-colors absolute h-screen w-[80vw] md:w-[25vw] lg:w-[15vw]', {
				'bg-[#060F3F]': onMenu,
				'bg-transparent': !onMenu,
			})}>
			<div
				onClick={() => {
					setMenuStatus(!onMenu);
				}}
				className="cursor-pointer relative m-2.5 sm:m-3 md:m-4 w-[10%] sm:w-[25%] lg:w-[15%] h-auto">
				<FontAwesomeIcon className="w-full h-full" icon={faBars} style={{ color: 'white' }} />
			</div>
		</div>
	);
}
