import * as Types from '../constants/ActionCountryTypes';
import callApi from '../util/callApi';



export const actFectCountriesRequest = () => {
    return dispatch => {
        try {
            return callApi('countries').then(res => {
                dispatch(actFectCountries(res.data));
            })
        } catch (err) {
            console.log(err);
        }
    }
}

export const actFectCountries = countries => {
    return {
        type: Types.GET_COUNTRIES,
        payload: countries
    }

}