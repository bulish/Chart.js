var chart = {
	type: 'line',
	data: {
		labels: [],
		datasets: [
			{
				label: '',
				backgroundColor: 'rgb(26, 152, 184)',
				borderColor: 'rgb(26, 152, 184)',
				data: [],
				fill: false,
			},
		],
	},
	options: {
		maintainAspectRatio: true,
		responsive: true,
		plugins: {
			title: {
				text: '',
				padding: 10,
				display: true,
				align: 'center',
				color: 'black',
				font: {
					size: 40,
					family: "'Itim', cursive",
					weight: 50,
				},
			},
			legend: {
				labels: {
					color: 'black',
					font: {
						size: 15,
						family: "'Noto Sans JP', sans-serif",
					},
				},
			},
		},
		legend: {
			display: true,
		},
		scales: {
			y: {
				ticks: {
					beginAtZero: false,
					color: 'black',
					font: {
						size: 15,
						family: "'Noto Sans JP', sans-serif",
					},
				},
			},
			x: {
				ticks: {
					beginAtZero: false,
					color: 'black',
					font: {
						size: 15,
						family: "'Noto Sans JP', sans-serif",
					},
				},
			},
		},
	},
};

var ctx = document.getElementById('canvas').getContext('2d');
window.myLine = new Chart(ctx, chart);


function newTitle(chart){
	chart.options.plugins.title.text = document.myForm.titleChart.value;
	window.myLine.update();
}

function newLegend(chart) {
	chart.data.datasets[0].label = document.myForm.legend.value;
	window.myLine.update();
}

function update(chart) {
	var dataY = document.querySelectorAll(".dataY");
	var dataX = document.querySelectorAll('.dataX');
	console.log(dataY.length + " data length");
	if(dataY.length != 1){
		if (dataY[dataY.length - 2].value != "" && dataY[dataY.length - 2].value != "Y VALUE" && dataX[dataX.length - 2].value != "" && dataX[dataX.length - 2].value != "X VALUE"){
			chart.data.datasets[0].data.push((dataY[dataY.length - 2]).value);
			chart.data.labels.push((dataX[dataX.length - 2]).value);
		} else {
			dataY[dataY.length - 2].value = 'Y VALUE';
			dataX[dataX.length - 2].value = 'X VALUE';
		}
	} else {
		if (dataY[dataY.length - 1].value != "" && dataY[dataY.length - 1].value != "Y VALUE" && dataX[dataX.length - 1].value != "" && dataX[dataX.length - 1].value != "X VALUE"){
			chart.data.datasets[0].data.push((dataY[dataY.length - 1]).value);
			chart.data.labels.push((dataX[dataX.length - 1]).value);
		} else {
			dataY[dataY.length - 1].value = 'Y VALUE';
			dataX[dataX.length - 1].value = 'X VALUE';
		}
	}

	window.myLine.update();
}