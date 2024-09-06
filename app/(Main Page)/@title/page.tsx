'use client';
import { InterFont } from '@/app/ui/Style/Font/fonts';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';
import { useRef } from 'react';

export default function Page() {
	const Container = useRef<HTMLDivElement>(null);
	return (
		<div
			ref={Container}
			style={InterFont.bold.style}
			className="w-full h-full flex flex-col gap-y-5 items-center justify-center text-white ">
			<p className="text-4xl">Chào mừng quý khách đến với</p>
			<p className="text-7xl">Công ty TNHH May Mặc Hiếu Ngọc</p>
			<div
				onClick={(e) => {
					window.scroll({
						top:
							window.scrollY +
							Container.current!.getBoundingClientRect().height +
							Container.current!.getBoundingClientRect().y,
						behavior: 'smooth',
					});
				}}
				className="cursor-pointer flex flex-col animate-bounce opacity-25 mt-3">
				<svg
					width="27"
					height="45"
					viewBox="0 0 27 45"
					fill="none"
					xmlns="http://www.w3.org/2000/svg">
					<path
						d="M1 29.4118C6.11364 35.5 12.5909 43.6176 13.5 43.6176C14.4091 43.6176 20.3182 36.5147 26 29.4118M1 29.4118C6.11364 35.5 12.5909 43.6176 13.5 43.6176C14.4091 43.6176 20.3182 36.5147 26 29.4118"
						stroke="white"
						stroke-linecap="round"
						stroke-linejoin="round"
					/>
					<path
						d="M1 15.2059C6.11364 21.2941 12.5909 29.4118 13.5 29.4118C14.4091 29.4118 20.3182 22.3088 26 15.2059M1 15.2059C6.11364 21.2941 12.5909 29.4118 13.5 29.4118C14.4091 29.4118 20.3182 22.3088 26 15.2059"
						stroke="white"
						stroke-linecap="round"
						stroke-linejoin="round"
					/>
					<path
						d="M1 1C6.11364 7.08824 12.5909 15.2059 13.5 15.2059C14.4091 15.2059 20.3182 8.10294 26 1M1 1C6.11364 7.08824 12.5909 15.2059 13.5 15.2059C14.4091 15.2059 20.3182 8.10294 26 1"
						stroke="white"
						stroke-linecap="round"
						stroke-linejoin="round"
					/>
				</svg>
			</div>
		</div>
	);
}
