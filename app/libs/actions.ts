import data from './placeholder-data';

export function getTodayEmployeeStatus() {
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
