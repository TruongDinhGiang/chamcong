export default function RenderChart() {
	return (
		<div>
			<p id="caption" className="mx-auto text-[1.5em] font-bold text-center w-fit">
				Bảng chấm công
			</p>
			<p id="day" className="mx-auto text-base text-center w-fit">
				{new Date().toLocaleDateString(['vi-vn'], {
					timeZone: 'Asia/Ho_Chi_Minh',
					dateStyle: 'full',
				})}
			</p>
			<div className="mx-auto w-[95%]"></div>
		</div>
	);
}
