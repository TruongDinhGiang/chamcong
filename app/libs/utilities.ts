export function getTotalDayInCurrentMonth(): 31 | 30 | 29 | 28 {
	const date = new Date()
		.toLocaleDateString('vi-vn', {
			timeZone: 'Asia/Ho_Chi_Minh',
		})
		.split('/');
	const currentMonth = Number(date[1]);
	const currentYear = Number(date[2]);
	let totalDay: 31 | 30 | 29 | 28 = 30;
	//*Nếu không phải là tháng 2
	if (currentMonth != 2) {
		totalDay =
			currentMonth > 7 ? (currentMonth % 2 == 0 ? 31 : 30) : currentMonth % 2 == 0 ? 30 : 31;
	}
	//*Nếu là tháng 2, trường hợp đặc biệt vì có năm nhuận/năm không nhuận
	else {
		//*Nếu là năm chia hết cho 100 (vd: 1900, 2000)
		if (currentYear % 100 == 0) {
			//*Nếu năm đó chia hết cho 400 mới là năm nhuận, ngược lại thì không
			totalDay = currentYear % 400 == 0 ? 29 : 28;
		}
		//*Nếu là năm không chia hết cho 100 (vd: 1999, 2024);
		else {
			//*Nếu năm đó chia hết cho 4 mới là năm nhuận, ngược lại thì không
			totalDay = currentYear % 4 == 0 ? 29 : 28;
		}
	}
	return totalDay;
}

export function DayToSecond(day: string, hour: string, min: string, sec: string) {
	return Number(day) * 24 * 3600 + Number(hour) * 3600 + Number(min) * 60 + Number(sec);
}

export function HourToSecond(hour: string, min: string, sec: string): number {
	return Number(hour) * 3600 + Number(min) * 60 + Number(sec);
}

export function GetCurrentDate() {
	const date = new Date().toLocaleDateString('vi-vn', {
		timeZone: 'Asia/Ho_Chi_Minh',
	});
	return {
		string: date,
		array: date.split('/'),
	};
}

/**
 * *[0]:Day
 * *[1]:Month
 * *[2]:Year
 */
export const DateInfo = new Date()
	.toLocaleDateString('vi-vn', {
		timeZone: 'Asia/Ho_Chi_Minh',
	})
	.split('/');

/**
 * *[0]:Hour
 * *[1]:Minute
 * *[2]:Second
 */
export const TimeInfo = new Date()
	.toLocaleTimeString('vi-vn', {
		timeZone: 'Asia/Ho_Chi_Minh',
		timeStyle: 'medium',
	})
	.split(':');
