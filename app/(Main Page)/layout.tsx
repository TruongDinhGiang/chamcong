'use client';
import Congty from '@/public/Images/main/congty.png';
import Logo from '@/public/Images/LOGO CTY.png';
import { MontaguSlab } from '../ui/Style/Font/fonts';

import Image from 'next/image';
import Link from 'next/link';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone } from '@fortawesome/free-solid-svg-icons';

export default function Layout({
	children,
	title,
}: {
	children: React.ReactNode;
	title: React.ReactNode;
}) {
	return (
		<div className="w-auto h-fit overflow-x-hidden">
			<div className="h-screen w-screen flex flex-col">
				<div className="select-none absolute -z-[2] w-full h-screen bg-black">
					<Image
						alt="Overview image"
						src={Congty}
						className="brightness-[.15] blur-[.25em] w-full h-full object-cover"
					/>
				</div>
				<div id="topbar" className="relative grid grid-cols-2 grid-rows-[10vh] w-full">
					<div id="background" className="-z-[1] absolute w-full h-full bg-white opacity-15"></div>
					<Image
						alt="LOGO"
						src={Logo}
						className="ml-[3em] h-[75%] w-fit select-none  self-center justify-self-start object-contain"
					/>
					<div
						id="Selections"
						style={MontaguSlab.normal.style}
						className="z-1 w-fit h-full col-start-2 justify-self-center flex justify-end items-center gap-x-12 px-5 text-xl text-white">
						<Link href="#" className="transition-opacity select-none opacity-50 hover:opacity-100">
							Trang chủ
						</Link>
						<Link href="#" className="transition-opacity select-none opacity-50 hover:opacity-100">
							Giới thiệu
						</Link>
						<Link href="#" className="transition-opacity select-none opacity-50 hover:opacity-100">
							Dịch vụ
						</Link>
						<Link href="#" className="transition-opacity select-none opacity-50 hover:opacity-100">
							Sản phẩm
						</Link>
						<Link
							href="#"
							className="transition-opacity select-none flex items-center gap-x-2 opacity-50 hover:opacity-100">
							<FontAwesomeIcon icon={faPhone} fixedWidth />
							Liên hệ
						</Link>
					</div>
				</div>
				<div className="h-full select-none">{title}</div>
			</div>
			<div className="w-full">{children}</div>
		</div>
	);
}
