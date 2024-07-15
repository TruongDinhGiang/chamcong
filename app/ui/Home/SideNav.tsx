'use client';
import { Selections } from './Selection';
import Link from 'next/link';

export default function SideNav() {
	return (
		<div className="h-full w-full bg-[#060F3F] sticky">
			<div className="relative w-full flex items-center justify-center pt-3 pb-12">
				<Link href="/admin" className="z-1 w-fit h-fit text-white text-[40px] font-bold">
					Menu
				</Link>
			</div>
			<div className="flex flex-col items-center gap-y-5">
				<Selections url="/admin/thongke" text="Thống kê" />
				<Selections url="/admin/danhsachnhanvien" text="Danh sách nhân viên" />
				<Selections url="/admin/updating" text="Chờ cập nhật..." />
			</div>
		</div>
	);
}
