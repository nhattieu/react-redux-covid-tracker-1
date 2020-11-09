import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Cards, Chart, CountryPicker, Map, Table } from "../components";
import { actFectCountriesRequest } from "../actions/actionCountry";
import { actFectReportsRequest } from "../actions/actionReport";
import { actFectHistoryRequest } from "../actions/actionHistory";
import "leaflet/dist/leaflet.css";

import Loading from "../components/Loading/Loading";
import styles from "./HomePage.module.css";
import { findItem } from "../util";

HomePage.propTypes = {};

function HomePage(props) {

	const [center, setCenter] = useState({lat: 34.80746, lng: -40.4796});
	const [zoom, setZoom] = useState(3);
	const [type, setType] = useState('cases');
	const [country, setCountry] = useState('worldwide');
	const [loaded, setLoaded] = useState(false);

    const countries = useSelector(state => state.countries);
	const reports = useSelector(state => state.reports);
	const history = useSelector(state => state.history);
	const dispatch = useDispatch();

    useEffect(() => {
		setLoaded(false);
        dispatch(actFectCountriesRequest());
		dispatch(actFectReportsRequest());
		dispatch(actFectHistoryRequest());
		setLoaded(true);
	}, []);
	
	const handleType = (type) => {
		setType(type);
	}

	const handleCountry = (id) => {
		setCountry(findItem(countries.data, id) || id)
	}

	if(!loaded || !reports) return <Loading />;


	return (
		<div className={styles.container}>
			<div className={styles.home__left}>
				<header className={styles.header}>
					<div className={styles.logo}>
						<h1>COVID 19 TRACKER</h1>
					</div>
					<CountryPicker countries={countries.data} handleCountry={handleCountry}/>
				</header>
				<Cards reports={reports.data} type={type} country={country} handleType={handleType}/>
				<Map center={center} zoom={zoom} type={type} countries={countries.data}/>
			</div>
			<div className={styles.home__right}>
				<div className={styles.home__right__content}>
					<Table countries={countries.data}/>
					<Chart data={reports.data} type={type} history={history.data}/>
				</div>
			</div>
		</div>
	);
}

export default HomePage;
