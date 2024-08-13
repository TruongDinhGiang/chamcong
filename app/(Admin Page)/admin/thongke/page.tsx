import { GetCurrentDate } from '@/app/libs/utilities';
const date = GetCurrentDate().array;

export default function Page() {
	return (
		<>
			<div className="w-full h-full flex flex-col">
				<p className="mt-5 text-4xl font-bold text-center">Bảng dữ liệu tháng {date[1]}</p>
				<div className="flex gap-x-3 mx-3 my-5">
					{['Thủy', 'Duyên', 'Tùng', 'Quảng'].map((e) => {
						return (
							<button
								type="button"
								key={e}
								className="transition-colors select-none w-full border border-solid border-black rounded-full focus:bg-black focus:text-white focus:cursor-pointer">
								<p className="mx-auto my-2 w-fit">{e}</p>
							</button>
						);
					})}
				</div>
				<div className="w-full h-full">
					<div className="mx-5 mb-5 h-full w-auto bg-white"></div>
				</div>
			</div>
		</>
	);
}
