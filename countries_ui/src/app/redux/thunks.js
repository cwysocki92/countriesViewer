import { 
    setCountries,
    displayNetworkError,
 } from './actions.js';

 // TODO probably move this to config somewhere
 const countriesApiUrl = 'http://localhost:8000/countries_api/countries';

export const getCountries = (countryName, countryCode, fullName) => (dispatch) => {
    let params = "?";
    if (countryName) {
        params += `name=${countryName}${fullName ? '&fullName=true' : ''}`;
    } else if (countryCode) {
        params += `code=${countryCode}`;
    }
    // TODO consider moving this to a service layer
    return fetch(`${countriesApiUrl}/${params}`)
        .then((response) => response.json())
        .then((response) => {
            let data = response.data ? response.data : [];
            if (response.status === 200) {
                dispatch(setCountries(response.data ? response.data : []));
            }
            // TODO else case for other response codes?
            return data;
        })
        .catch((err) => {
            dispatch(displayNetworkError());
            return [];
        })
}