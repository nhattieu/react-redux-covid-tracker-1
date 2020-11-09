import * as Config from "../constants/Config.js";
import axios from "axios";

export default function callApi(endpoint, method = "GET", body = null) {
	return (

		axios({
			method: method,
			url: `${Config.URL_API}/${endpoint}`,
			data: body,
		}).catch((err) => console.log(err)));
	
}
