'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { JSX } from 'react';

import LOGO from '@/public/Images/LOGO CTY.png';
import { JosefinSans } from '@/app/ui/Style/Font/fonts';
import Mobile from './(Cham cong table)/(Mobile)/mobile';
import PC from './(Cham cong table)/(PC)/pc';

export default function Page() {
	const [content, setContent] = useState<JSX.Element>();

	useEffect(() => {
		setContent(window.matchMedia('(orientation:portrait)').matches ? <Mobile /> : <PC />);
	}, []);
	return (
		<main className="w-screen h-screen">
			<header className="h-[15%] w-screen flex justify-center items-center">
				<Image src={LOGO} alt="logo" className="h-[75%] w-auto" objectFit="fit" />
			</header>
			<hr className="border-black" />
			<article className="grid grid-cols-2 grid-rows-1">
				<div id="chamcong" className="">
					<p
						style={JosefinSans.style}
						className="m-2 py-3 bg-black border border-black border-solid rounded-2xl text-white text-[1.25em] text-center select-none">
						Chấm công
					</p>
					<div className="m-2 grid grid-cols-1 md:grid-cols-2 grid-rows-2 md:grid-rows-1 gap-2">
						<div className="w-full h-full">
							<Link
								href="chamcong?query=start"
								style={JosefinSans.style}
								className="transition-colors block py-2 md:py-5 w-full hover:bg-black hover:text-white border border-black border-solid rounded-2xl text-center">
								Giờ vào
							</Link>
						</div>
						<div className="w-full h-full">
							<Link
								href="chamcong?query=end"
								style={JosefinSans.style}
								className="transition-colors block py-2 md:py-5 w-full hover:bg-black hover:text-white border border-black border-solid rounded-2xl text-center">
								Giờ ra
							</Link>
						</div>
					</div>
				</div>
				<div id="dangkinghiphep" className="h-full">
					<p
						style={JosefinSans.style}
						className="m-2 py-[0.9rem] md:py-3 bg-black border border-black border-solid rounded-2xl text-white text-[1em] md:text-[1.25em] text-center select-none">
						Đăng kí nghỉ phép
					</p>
					<div className="h-1/2 mt-3 md:m-0">
						<form className="mx-2 h-full flex flex-col md:flex-row items-center" action="">
							<input
								type="text"
								placeholder="Nhập đầy đủ họ tên"
								className="transition-colors h-full md:h-[60%] w-full md:w-[85%] px-3 my-1 md:mr-1 rounded-full outline-none border border-solid border-slate-400 focus:border-black"
							/>
							<button
								type="submit"
								className="transition-colors mt-1 md:mt-0 md:ml-1 focus:text-white focus:bg-black hover:text-white hover:bg-black border border-black border-solidtext-center h-full md:h-1/2 rounded-2xl w-full md:w-[15%]">
								Đăng kí
							</button>
						</form>
					</div>
				</div>
			</article>
			<article id="bangchamcongthang" className="">
				{content}
			</article>
		</main>
	);
}
