export function getCurrentDate() {
	const date = new Date().toLocaleDateString('vi-vn');
	return {
		string: date,
		array: date.split('/'),
	};
}
