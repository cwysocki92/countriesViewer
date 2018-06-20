import {
    SET_COUNTRIES,
    RESET_COUNTRIES,
} from './actionTypes.js';

const initialState = {
    countries: []
};

const countriesViewer = (state = initialState, action) => {
    switch(action.type) {
        case SET_COUNTRIES:
            return {...state, countries: action.countries}
        case RESET_COUNTRIES:
            return {...state, countries: initialState.countries}
        default:
            return state;
    }
}

export default countriesViewer;