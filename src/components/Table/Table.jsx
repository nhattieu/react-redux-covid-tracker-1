import React from "react";
import { sortItems } from "../../util";

import styles from "./Table.module.css";

Table.propTypes = {};

function Table({countries}) {
	return (
		<div className={styles.container}>
			<h3>Live case of countries</h3>
			<div className={styles.table}>
				<table>
					<tbody>
						{countries && sortItems(countries).map((country, index) => <tr key={index}><td>{country.country}</td><td>{country.cases}</td></tr>)}
					</tbody>
				</table>
			</div>


		</div>
	);
}

export default Table;
