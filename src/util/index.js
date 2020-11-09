import numeral from "numeral";


// VARIABLES
export const reportView = {
    cases: {
        color: 'rgba(0, 0, 255, 1)',
        fillColor: 'rgba(0, 0, 255, 0.5)',
        fillOpacity: 0.4,
        multiplier: 600,
        borderColor: 'rgba(0, 0, 255, 1)',
        backgroundColor: "rgba(0, 0, 255, 0.5)",
    },
	recovered: {
		color: 'rgba(0, 255, 0, 1)',
		fillColor: 'rgba(0, 255, 0, 0.5)',
		fillOpacity: 0.4,
		multiplier: 800,
		borderColor: 'rgba(0, 255, 0, 1)',
		backgroundColor: "rgba(0, 255, 0, 0.5)",
	},
    deaths: {
		color: 'rgba(255, 0, 0, 1)',
		fillColor: 'rgba(255, 0, 0, 0.5)',
		fillOpacity: 0.4,
		multiplier: 3000,
		borderColor: 'rgba(255, 0, 0, 1)',
        backgroundColor: "rgba(255, 0, 0, 0.5)",
    }
};


export const lineChartOptions = {
	legend: {
		display: false,
	},
	element: {
		point: {
			radius: 0,
		},
	},
	maintainAspectRatio: false,
	tooltips: {
		mode: "index",
		intersect: false,
		callbacks: {
			label: function (tooltipItem) {
				return numeral(tooltipItem.value).format("+0,0");
			},
		},
	},
	scales: {
		xAxes: [
			{
				type: "time",
				time: {
					parser: "MM/DD/YY",
					tooltipFormat: "ll",
				},
			}
		],
		yAxes: [
			{

				gridLine: {
					display: false,
				},
				ticks: {
					callback: function (value, index, values) {
						return numeral(value).format("0a");
					},
				},
			}
		],
	},
};

export const barChartOptions = {
	legend: {
		display: false,
	},
	element: {
		point: {
			radius: 0,
		},
	},
	maintainAspectRatio: false,
	tooltips: {
		mode: "index",
		intersect: false,
		callbacks: {
			label: function (tooltipItem) {
				return numeral(tooltipItem.value).format("+0,0");
			},
		},
	},
	scales: {
		xAxes: [
			{
				stacked: true
			}
		],
		yAxes: [
			{

				gridLine: {
					display: true,
				},
				ticks: {
					callback: function (value, index, values) {
						return numeral(value).format("0a");
					},
				},
			}
		],
	},
};

















// FUNCTIONS
export const sortItems = (list, type = "cases") => {
    return [...list].sort((a, b) => a[type] > b[type] ? -1 : 1);
}

export const getDateAndValueByType = (obj, type = "cases") => {
	let charData = [];
	let lastPoint;
	let newPoint = {}
	if(obj) {
		for(let date in obj[type]) {
			if(lastPoint) {
				newPoint = {
					x: date,
					y: obj[type][date] - lastPoint
				}
				charData.push(newPoint);
			}
			lastPoint = obj[type][date];
		}
	}
	return charData;
}

export const findItem = (listItem, id) => {
	return listItem.find(item => item.countryInfo.iso2 === id);
}