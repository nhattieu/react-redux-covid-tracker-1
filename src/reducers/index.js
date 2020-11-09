import { combineReducers } from "redux";
import countries from "./countries";
import history from "./history";
import reports from "./reports";

const rootReducer = combineReducers({
    countries,
    reports,
    history,
});

export default rootReducer;