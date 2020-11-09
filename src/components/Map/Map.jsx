import React from "react";
import { MapContainer as LeafletMap, Popup, TileLayer, Circle } from 'react-leaflet'
import styles from "./Map.module.css";
import { reportView } from "../../util";
import CountUp from "react-countup"

Map.propTypes = {};

function Map({center, zoom, countries, type}) {
    console.log(type);
    const showCircle = () => {
        if(countries && countries.length > 0) {
            return countries.map((country,index) => (
                <Circle
                    key={index}
                    center={[country.countryInfo.lat, country.countryInfo.long]}
                    color={reportView[type].color}
                    fillColor={reportView[type].fillColor}
                    fillOpacity={reportView[type].fillOpacity}
                    radius={Math.sqrt(country[type]) * reportView[type].multiplier}
                > 
                    <Popup>
                        <div className={styles.popup}>
                            <div className={styles.flag} style={{backgroundImage: `url(${country.countryInfo.flag})`}}></div>
                            <div className={styles.name}><strong>{country.country}</strong></div>
                            <div className={styles.cases}>
                                Cases:&nbsp;
                                <CountUp 
                                    start={0}
                                    end={country.cases}
                                    duration={0.5}
                                    separator={","}
                                />
                            </div>
                            <div className={styles.recovered}>
                                Recovered:&nbsp;
                                <CountUp 
                                    start={0}
                                    end={country.recovered}
                                    duration={0.5}
                                    separator={","}
                                />
                            </div>
                            <div className={styles.deaths}>
                                Deaths:&nbsp;
                                <CountUp 
                                    start={0}
                                    end={country.deaths}
                                    duration={0.5}
                                    separator={","}
                                />
                                </div>
                        </div>
                    </Popup>
                </Circle>
            ))
        }
    }

	return (
		<div className={styles.container}>
            <LeafletMap center={center} zoom={zoom} id={styles.leaflet}>
                <TileLayer 
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />

                {showCircle()}

            </LeafletMap>
		</div>
	);
}

export default Map;
