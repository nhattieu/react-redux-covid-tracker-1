import * as Types from '../constants/ActionReportTypes';
import callApi from '../util/callApi';



export const actFectReportsRequest = () => {
    return dispatch => {
        try {
            return callApi('all').then(res => {
                dispatch(actFectReports(res.data));
            })
        } catch (err) {
        console.log(err);
        }
    }
}

export const actFectReports = reports => {
    return {
        type: Types.GET_REPORTS,
        payload: reports
    }
}