import React from "react";
import { Card as CardUI, CardContent, Typography } from "@material-ui/core";
import CountUp from "react-countup";

import styles from "./Cards.module.css";

Card.propTypes = {};

function Card({name, data, todayData, type, handleType}) {
	return (
		<div className={styles.card}>
			<CardUI variant="outlined" onClick={() => handleType(name)}>
				<CardContent>
					<Typography color="textSecondary" className={styles.name__card}>
						{name}
					</Typography>
					<Typography variant="h6">
                        <strong>+
							<CountUp 
								start={0}
								end={todayData}
								duration={2.5}
								separator={","}
							/>
                        </strong>
                    </Typography>
					<Typography color="textSecondary">
						<CountUp 
							start={0}
							end={data}
							duration={2.5}
							separator={","}
						/> total
					</Typography>
				</CardContent>
			</CardUI>
		</div>
	);
}

export default Card;
