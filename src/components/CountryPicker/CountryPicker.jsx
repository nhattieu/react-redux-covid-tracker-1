import React from "react";
import { Select, MenuItem } from "@material-ui/core";

import styles from "./CountryPicker.module.css";

CountryPicker.propTypes = {};

function CountryPicker({countries, handleCountry}) {

	return (
		<div className={styles.container}>
			<Select variant="outlined" defaultValue={10} className={styles.select__box} defaultValue="worldwide" onClick={(e) => handleCountry(e.target.value)}>
				<MenuItem value="worldwide">World Wide</MenuItem>
				{countries && countries.map((country, index) => <MenuItem key={index} value={country.countryInfo.iso2}>{country.country}</MenuItem>)}
			</Select>
		</div>
	);
}

export default CountryPicker;
