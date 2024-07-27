'use server';
import data from './placeholder-data';
import { sql } from '@vercel/postgres';
import z from 'zod';
import { cookies } from 'next/headers';
import bcrypt from 'bcryptjs';
import { redirect } from 'next/navigation';

const schema = z.object({
	username: z.string({
		invalid_type_error: 'Please enter your username',
	}),
	password: z.string({
		invalid_type_error: 'Please enter your password',
	}),
});

export type State = {
	message: string;
	success?: boolean;
	progress?: 'pending' | 'done';
};

export async function getTodayEmployeeStatus() {
	//* Extract employee is not working today
	const isAbsent = data.reduce((prevKey: Array<Object>, key) => {
		key.isAbsent && prevKey.push({ name: key.name, time: key.time });
		return prevKey;
	}, []);

	//* Extract employee is working today
	const isWorking = data.reduce((prevKey: Array<Object>, key) => {
		!key.isAbsent && prevKey.push({ name: key.name, time: key.time });
		return prevKey;
	}, []);
	return {
		absent: isAbsent,
		working: isWorking,
	};
}

export async function updateSession() {
	const currentUserName = cookies().get('currentUserName');
	const currentUserRole = cookies().get('currentUserRole');
	const haveData = currentUserName && currentUserRole ? true : false;
	return haveData
		? {
				success: true,
				data: {
					username: currentUserName?.value,
					role: currentUserRole?.value,
				},
		  }
		: {
				success: false,
				data: null,
		  };
}

async function getUser(username: string): Promise<any> {
	const user = await sql`SELECT password,role FROM accounts WHERE username=${username}`;
	return user.rows.length > 0
		? {
				data: user.rows[0],
				success: true,
		  }
		: {
				data: undefined,
				success: false,
		  };
}

export async function handleLogin(prevState: State, formData: FormData) {
	const status: State = {
		message: '',
		success: false,
		progress: 'done',
	};

	//*Parse login form
	const parsedData = schema.safeParse({
		username: formData.get('username') || null,
		password: formData.get('password') || null,
	});

	//* Checking form validation
	if (!parsedData.success) {
		status.message = 'Bạn hãy điền đầy đủ thông tin ạ!';
		status.success = false;
		return status;
	}

	//*Fetch user details from database
	const savedData = await getUser(parsedData.data.username);
	if (!savedData.success) {
		status.message = 'Tài khoản không tồn tại! Hãy liên lạc với HR để tạo tài khoản';
		status.success = false;
		return status;
	}
	//*Parse password and role from database
	const { role, password } = savedData.data;

	//*Checking user password
	const result = await bcrypt.compare(parsedData.data.password, password);

	//*Set success status to return
	status.message = result ? 'Đăng nhập thành công' : 'Sai mật khẩu';
	status.success = result;

	if (!result) return status;

	cookies().set('currentUserName', parsedData.data.username, {
		maxAge: 60 * 60 * 24 * 30, //1 month (30days)
	});
	cookies().set('currentUserRole', role, {
		maxAge: 60 * 60 * 24 * 30, //1 month (30days)
	});
	redirect(role == 'Admin' ? '/admin' : '/home');
}
