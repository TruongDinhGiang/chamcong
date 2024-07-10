export default function Page() {
	return (
		<main className="flex items-center  justify-center bg-top bg-gradient-to-b from-[#00A0C4] to-teal-300 w-screen h-screen">
			<div className=" flex flex-col items-center bg-white py-5 px-12 rounded-lg">
				<p className="font-bold text-[35px]">LOGIN</p>
				<form action="" className="flex flex-col items-center gap-y-5">
					<input
						type="text"
						className="p-2 border-solid border-slate-300 border-[2.5px] rounded-lg"
						placeholder="User name"
					/>
					<input
						type="text"
						className="p-2 border-solid border-slate-300 border-[2.5px] rounded-lg"
						placeholder="Password"
					/>
					<input
						type="submit"
						name="Submit"
						className="cursor-pointer py-5 px-12 rounded-2xl border-solid border-slate-300 hover:font-bold hover:text-white hover:border-transparent hover:bg-[#1DFF5E] border-[2.5px]"
					/>
				</form>
			</div>
		</main>
	);
}
