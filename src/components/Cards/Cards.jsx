import React from "react";
import Card from "./Card";

import styles from "./Cards.module.css";

Cards.propTypes = {};

function Cards({reports, type, country, handleType}) {
	if(!reports) return "Loading...";
	const data = country === 'worldwide' || '' ? reports : country;

	return (
		<div className={styles.container}>
			<Card name="cases" data={data.cases} todayData={reports.todayCases} type={type} handleType={handleType}/>
			<Card name="recovered" data={data.recovered} todayData={reports.todayRecovered} type={type} handleType={handleType}/>
			<Card name="deaths" data={data.deaths} todayData={reports.todayDeaths} type={type} handleType={handleType}/>
		</div>
	);
}

export default Cards;
