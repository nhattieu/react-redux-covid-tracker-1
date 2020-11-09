import * as Types from '../constants/ActionHistoryTypes';

const initialState = [];

const history = (state = initialState, action) => {
    switch (action.type) {
        case Types.GET_HISTORY:
            return {
                ...state,
                data: action.payload
            }
        default:
            return state;
    }
}

export default history;