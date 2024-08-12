import localFont from 'next/font/local';
import { Josefin_Sans } from 'next/font/google';
import { Roboto } from 'next/font/google';

export const JosefinSans = Josefin_Sans({
	weight: '700',
	style: 'normal',
	subsets: ['vietnamese'],
});

export const Meditative = localFont({
	src: './Fonts/Meditative.ttf',
	display: 'swap',
});

export const Heavitas = localFont({
	src: './Fonts/Heavitas.ttf',
	display: 'swap',
});

export const roboto = Roboto({
	weight: '400',
	style: 'normal',
	subsets: ['vietnamese'],
});
