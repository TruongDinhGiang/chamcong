'use client';
import { handleLogin, State } from '@/app/libs/actions';
import { useFormState } from 'react-dom';
import { useEffect, useRef } from 'react';
import Image from 'next/image';
import LoadingGIF from '@/public/GIF/loadingGif.gif';

import clsx from 'clsx';
import { NextComponentType } from 'next';

export default function Page() {
	//*Defining waiting Message as a GIF and bind to Image element
	const waitingMessage = useRef<null | HTMLImageElement>(null);

	//*Set initial State for status
	const initialState: State = {
		message: '',
		success: false,
		progress: 'done',
	};

	//*use 'useFormState' for handle login errors
	const [state, action] = useFormState(handleLogin, initialState);

	//*Remove the waiting GIF when submit form successful
	useEffect(() => {
		waitingMessage.current?.classList.replace('block', 'hidden');
	}, [state]);

	return (
		<main className="flex items-center justify-center bg-top bg-gradient-to-b from-[#00A0C4] to-teal-300 w-screen h-screen">
			<div className=" flex flex-col items-center bg-white py-5 px-12 rounded-lg">
				<p className="font-bold text-[35px]">LOGIN</p>
				<form
					//*on submit button click, appear the waiting GIF
					onSubmit={() => {
						if (waitingMessage.current)
							console.dir(waitingMessage.current.classList.replace('hidden', 'block'));
					}}
					action={action}
					className="flex flex-col items-center gap-y-5">
					<div id="usernameField">
						<input
							name="username"
							type="text"
							className="p-2 border-solid border-slate-300 border-[2.5px] rounded-lg"
							placeholder="User name"
							aria-describedby="username-error"
							required
						/>
					</div>
					<div id="passwordField">
						<input
							name="password"
							type="password"
							className="p-2 border-solid border-slate-300 border-[2.5px] rounded-lg"
							placeholder="Password"
							aria-describedby="password-error"
							required
						/>
					</div>
					{/* //*Display status message */}
					<p
						id="message"
						className={clsx(`block text-[75%] text-green-600 font-bold`, {
							hidden: state.message == '',
							'[&]:text-red-600': !state.success,
						})}>
						{state.message}
					</p>
					{/* //*Loading GIF on waiting form */}
					<Image
						src={LoadingGIF}
						alt="Loading GIF"
						className="w-1/4 h-auto hidden"
						ref={waitingMessage}
					/>
					<button
						type="submit"
						name="Submit"
						className="transition-colors cursor-pointer py-5 px-12 rounded-2xl border-solid border-slate-300 focus:outline-none focus:font-bold focus:text-white focus:border-transparent focus:bg-[#1DFF5E] hover:font-bold hover:text-white hover:border-transparent hover:bg-[#1DFF5E] border-[2.5px]">
						Submit
					</button>
				</form>
			</div>
		</main>
	);
}
