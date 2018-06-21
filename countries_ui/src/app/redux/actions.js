import {
    SET_COUNTRIES,
    RESET_COUNTRIES,
    SET_COUNTRY_NAME,
    SET_COUNTRY_CODE,
    TOGGLE_FULL_NAME,
    DISPLAY_NETWORK_ERROR,
    HIDE_NETWORK_ERROR,
} from './actionTypes.js';

export const setCountries = (countries) => ({
    type: SET_COUNTRIES,
    countries: countries
});

export const resetCountries = () => ({
    type: RESET_COUNTRIES
})

export const setCountryName = (name) => ({
    type: SET_COUNTRY_NAME,
    countryName: name
})

export const setCountryCode = (code) => ({
    type: SET_COUNTRY_CODE,
    countryCode: code
})

export const toggleFullName = () => ({
    type: TOGGLE_FULL_NAME
})

export const displayNetworkError = () => ({
    type: DISPLAY_NETWORK_ERROR
})

export const hideNetworkError = () => ({
    type: HIDE_NETWORK_ERROR
})

