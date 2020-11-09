import * as Types from '../constants/ActionReportTypes';

const initialState = [];

const reports = (state = initialState, action) => {

    switch (action.type) {
        case Types.GET_REPORTS:
            return {
                ...state,
                data: action.payload
            }

        default: 
            return state;
    }


}


export default reports;