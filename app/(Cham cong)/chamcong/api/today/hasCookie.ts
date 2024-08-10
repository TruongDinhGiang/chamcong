'use server';

import { cookies } from 'next/headers';

export default async function _hasCookie(name: string): Promise<boolean> {
	return cookies().has(name);
}
