import {
    SET_COUNTRIES,
    RESET_COUNTRIES,
} from './actionTypes.js';

export const setCountries = (countries) => ({
        type: SET_COUNTRIES,
        countries: countries
});

export const resetCountries = () => ({
    type: RESET_COUNTRIES
})