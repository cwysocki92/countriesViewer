import {
    SET_COUNTRIES,
    RESET_COUNTRIES,
    SET_COUNTRY_NAME,
    SET_COUNTRY_CODE,
    TOGGLE_FULL_NAME,
    DISPLAY_NETWORK_ERROR,
    HIDE_NETWORK_ERROR,
    FETCHING_DATA,
} from './actionTypes.js';

const initialState = {
    countries: [],
    countryName: "",
    countryCode: "",
    fullName: false,
    networkError: false,
    fetchInProgress: false,
};

/**
 * This could possibly be broken up into an input reducer and a results,
 * but for now it is fine as is.  If further functionality is implemented,
 * this would be broken up if the input form was used in multiple places.
 */
const countriesViewer = (state = initialState, action) => {
    switch(action.type) {
        case SET_COUNTRIES:
            return {
                ...state, 
                countries: action.countries, 
                networkError: initialState.networkError
            }
        case RESET_COUNTRIES:
            return {
                ...state, 
                countries: initialState.countries
            }
        case SET_COUNTRY_NAME:
            return {
                ...state,
                countryName: action.countryName
            }
        case SET_COUNTRY_CODE:
            return {
                ...state,
                countryCode: action.countryCode
            }
        case TOGGLE_FULL_NAME:
            return {
                ...state,
                fullName: !state.fullName
            }
        case DISPLAY_NETWORK_ERROR:
            return {
                ...state,
                networkError: true,
                countries: initialState.countries
            }
        case HIDE_NETWORK_ERROR:
            return {
                ...state,
                networkError: false
            }
        case FETCHING_DATA:
            return {
                ...state,
                fetchInProgress: action.fetchInProgress
            }
        default:
            return state;
    }
}

export default countriesViewer;