import React from "react";
import { Bar, Line } from "react-chartjs-2";
import { 
	reportView, 
	barChartOptions, 
	lineChartOptions,
	getDateAndValueByType
} from "../../util";

Chart.propTypes = {};

function Chart({data, type, history}) {
	if(!data) return "Loading..."; 

	return (
		<div>
			<h3>Bar chart of World Wide</h3>
			<div className="bar__char">

				<Bar 
					data={{
						labels: [
							"Cases",
							"Recovered",
							"Deaths",
						],
						datasets: [{
							barPercentage: 0.5,
							barThickness: 50,
							maxBarThickness: 50,
							minBarLength: 2,
							label: "People",
							backgroundColor: [
								reportView['cases'].backgroundColor,
								reportView['recovered'].backgroundColor,
								reportView['deaths'].backgroundColor,
							],
							data: [data.cases, data.recovered, data.deaths]
						}],
					}}

					options={barChartOptions}
				
				/>

			</div>

			<h3>Line chart cases of World Wide</h3>

			<div className="line__char">
			
				<Line 
					data={{
						labels: getDateAndValueByType(history, type).map(his => his.x),
						datasets: [{
							label: "People",
							data: getDateAndValueByType(history, type).map(his => his.y),
							borderColor: reportView[type].borderColor,
							backgroundColor: reportView[type].backgroundColor
						}]
					}}
					options={lineChartOptions}
					
				/>
			</div>
		</div>
	);
}

export default Chart;
