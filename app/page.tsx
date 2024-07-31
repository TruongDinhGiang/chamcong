import Image from 'next/image';
import Link from 'next/link';
import LOGO from '@/public/Images/LOGO CTY.png';
import { Josefin_Sans } from 'next/font/google';

import { Metadata } from 'next';
export const metadata: Metadata = {
	title: 'Home page',
	description: 'Chào mừng bạn đến với Công ty Hiếu Ngọc',
};

const JosefinSansFont = Josefin_Sans({
	weight: '700',
	style: 'normal',
	subsets: ['vietnamese'],
});

export default function Page() {
	return (
		<main className="w-screen h-screen bg-black text-white">
			<div className="w-full h-full flex flex-col items-center">
				<div className=" rounded-[5%] w-[35%] h-auto">
					<Image
						className="invert relative mx-auto w-[90%] p-[10%] h-auto"
						src={LOGO}
						alt="Logo"
						objectFit="fit"
					/>
				</div>
				<Link
					href="/login"
					id="LoginButton"
					className="transition-colors hover:[&]:text-black hover:bg-gray-400 w-[30%] h-fit rounded-full border-solid border-gray-400 border-[1px]">
					<p
						style={JosefinSansFont.style}
						className=" p-5 text-center text-[35px] font-semibold heavitas">
						Đăng nhập
					</p>
				</Link>
				<Link
					href="/chamcong/api/today"
					id="ChamcongButton"
					className="mt-5 transition-colors hover:[&]:text-black hover:bg-gray-400 w-[30%] h-fit rounded-full border-solid border-gray-400 border-[1px]">
					<p
						style={JosefinSansFont.style}
						className=" p-5 text-center text-[35px] font-semibold heavitas">
						Chấm công
					</p>
				</Link>
			</div>
		</main>
	);
}
