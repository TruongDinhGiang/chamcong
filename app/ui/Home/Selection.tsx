import clsx from 'clsx';
import { useState } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

export function Selections(props: any) {
	const pathname = usePathname();
	const { text, url } = props;
	return (
		<Link href={url} className="text-wrap cursor-pointer w-[80%]">
			<p
				className={clsx(
					'transition-colors flex items-center justify-center text-white hover:text-black text-[20px] text-center font-bold rounded-2xl border-white border-solid border-[2px] bg-transparent hover:bg-white py-5',
					{
						'[&]:bg-white [&]:text-black': pathname === url,
					}
				)}>
				{text}
			</p>
		</Link>
	);
}
