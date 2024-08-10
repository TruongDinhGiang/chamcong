import { NextRequest } from 'next/server';
import { promises as fs } from 'fs';

export async function GET(req: NextRequest) {
	console.log(process.cwd());
	const data = JSON.parse(await fs.readFile('/TableData.json', 'utf8'));
	return Response.json(data);
}

export async function POST(req: NextRequest) {
	const data = await req.json().then((e) => e);
	await fs.writeFile('/TableData.json', JSON.stringify(data));

	const result = JSON.parse(await fs.readFile('/TableData.json', 'utf8'));
	return Response.json(result);
	// const data = JSON.parse(await fs.readFile(process.cwd() + '/TableData.json', 'utf8'));
	// temp.data = data;
}
