import localFont from 'next/font/local';
import { Josefin_Sans } from 'next/font/google';
import { Roboto } from 'next/font/google';
import { Montagu_Slab } from 'next/font/google';
import { Inter } from 'next/font/google';
import { Baloo_Paaji_2 } from 'next/font/google';

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
	display: 'swap',
	weight: '400',
	style: 'normal',
	subsets: ['vietnamese'],
});

//*Montagu_Slab fonts
const MontaguSlabNormal = Montagu_Slab({
	weight: '400',
	style: 'normal',
	display: 'swap',
	subsets: ['vietnamese'],
});
const MontaguSlabBold = Montagu_Slab({
	weight: '700',
	style: 'normal',
	display: 'swap',
	subsets: ['vietnamese'],
});

export const MontaguSlab = {
	normal: MontaguSlabNormal,
	bold: MontaguSlabBold,
};

//*Inter fonts
const InterNormal = Inter({
	display: 'swap',
	weight: '400',
	style: 'normal',
	subsets: ['vietnamese'],
});
const InterSemiBold = Inter({
	display: 'swap',
	weight: '600',
	style: 'normal',
	subsets: ['vietnamese'],
});
const InterBold = Inter({
	display: 'swap',
	weight: '700',
	style: 'normal',
	subsets: ['vietnamese'],
});

export const InterFont = {
	normal: InterNormal,
	semibold: InterSemiBold,
	bold: InterBold,
};

//*Comfortaa fonts
const BalooPaaji2Normal = Baloo_Paaji_2({
	weight: '400',
	style: 'normal',
	display: 'swap',
	subsets: ['vietnamese'],
});
const BalooPaaji2Bold = Baloo_Paaji_2({
	weight: '700',
	style: 'normal',
	display: 'swap',
	subsets: ['vietnamese'],
});
export const BalooPaaji2 = {
	normal: BalooPaaji2Normal,
	bold: BalooPaaji2Bold,
};
