import * as Types from '../constants/ActionHistoryTypes';
import callApi from '../util/callApi';


export const actFectHistoryRequest = () => {
    return dispatch => {
        return callApi('historical/all?lastdays=30').then(res => {
            dispatch(actFectHistory(res.data));
        })
    }
}

export const actFectHistory = history => {
    return {
        type: Types.GET_HISTORY,
        payload: history
    }
}