import Chart from 'chart.js/auto';

export default async function statisticalChart() {
	const data = [
		{ year: 2010, count: 10 },
		{ year: 2011, count: 20 },
		{ year: 2012, count: 15 },
		{ year: 2013, count: 25 },
		{ year: 2014, count: 22 },
	];

	new Chart(document.querySelector('#statisticalChart #summary'), {
		type: 'bar',
		data: {
			labels: data.map((row) => row.year),
			datasets: [
				{
					label: 'Acquisitions by year',
					data: data.map((row) => row.count),
				},
			],
		},
	});
}
