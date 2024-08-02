import Chart from 'chart.js/auto';
import { getTodayEmployeeStatus } from '@/app/libs/actions';

export default async function statisticalChart() {
	const currentDate = new Date().toLocaleDateString('vi-vn');
	const { absent, working } = getTodayEmployeeStatus();

	new Chart(document.querySelector('#statisticalChart #summary'), {
		type: 'line',
		data: {
			labels: ['7:00', '8:00', '9:00', '10:00', '11:00', '12:00'],
			datasets: [
				{
					label: 'Vắng mặt',
					data: [1, 1, 3, 5, 100],
				},
				{
					label: 'Có mặt',
					data: [5, 5, 5, 5, 100],
				},
			],
		},
	});
}
