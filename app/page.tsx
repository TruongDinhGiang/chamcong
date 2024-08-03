'use client';

import Image from 'next/image';
import Link from 'next/link';
import LOGO from '@/public/Images/LOGO CTY.png';
import { Josefin_Sans } from 'next/font/google';

const JosefinSansFont = Josefin_Sans({
	weight: '700',
	style: 'normal',
	subsets: ['vietnamese'],
});

export default function Page() {
	return (
		<main className="w-screen h-screen bg-black text-white">
			<div className="relative w-fit h-fit flex flex-col items-center top-20">
				<div className=" rounded-[5%] w-[35%] h-auto">
					<Image
						className="invert relative mx-auto w-[75%] p-[10%] h-auto"
						src={LOGO}
						alt="Logo"
						objectFit="fit"
					/>
				</div>
				<p style={JosefinSansFont.style} className="p-5 text-center text-[50px] font-bold">
					Chấm công
				</p>
				<Link
					onClick={() => {
						console.log('Chấm công giờ vào');
					}}
					href="/chamcong/api/today/?query=start"
					id="LoginButton"
					className="transition-colors hover:[&]:text-black hover:bg-gray-400 w-3/4 md:w-[30%] h-fit rounded-full border-solid border-gray-400 border-[1px]">
					<p
						style={JosefinSansFont.style}
						className="px-12 py-5 md:p-5 text-center text-[25px] md:text-[35px] font-semibold heavitas">
						Giờ vào
					</p>
				</Link>
				<Link
					onClick={() => {
						console.log('Chấm công giờ ra');
					}}
					href="/chamcong/api/today/?query=end"
					id="ChamcongButton"
					className="mt-5 transition-colors hover:[&]:text-black hover:bg-gray-400 w-3/4 md:w-[30%] h-fit rounded-full border-solid border-gray-400 border-[1px]">
					<p
						style={JosefinSansFont.style}
						className="px-12 py-5 md:p-5 text-center text-[25px] md:text-[35px] font-semibold heavitas">
						Giờ ra
					</p>
				</Link>
			</div>
		</main>
	);
}
