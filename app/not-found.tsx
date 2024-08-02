import Link from 'next/link';

export default function NotFound() {
	return (
		<div className="w-screen h-screen flex flex-col items-center justify-center text-white bg-black">
			<p className="text-[10em] h-fit p-0 m-0">404</p>
			<p className="-translate-y-full">Page not found</p>
			<Link
				href="/home"
				className="transition-colors hover:text-black hover:bg-white text-white border border-solid border-white rounded-full">
				<p className="py-5 px-10">Home</p>
			</Link>
		</div>
	);
}
