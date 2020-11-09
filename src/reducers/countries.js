import * as Types from '../constants/ActionCountryTypes';

const initialCountries = [];

const countries = (state = initialCountries, action) => {

    switch(action.type) {
        case Types.GET_COUNTRIES: {
            return {
                ...state,
                data: action.payload
            };
        }

        default: 
            return state;
    }

}

export default countries;