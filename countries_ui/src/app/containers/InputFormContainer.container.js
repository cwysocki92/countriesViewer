import { connect } from 'react-redux';
import InputFormComponent from '../components/InputFormComponent.component';
import  {
    getCountryResults,
    getCountryName,
    getCountryCode,
    useFullName,
    getNetWorkError,
    getFetchInProgress,
} from '../redux/selectors.js';
import { 
    setCountryName,
    setCountryCode,
    toggleFullName,
    setFetchingData,
    clearInput,
 } from '../redux/actions';
 import { getCountries } from '../redux/thunks';

const mapStateToProps = (state) => {
    return {
        countries: getCountryResults(state),
        countryName: getCountryName(state),
        countryCode: getCountryCode(state),
        fullName: useFullName(state),
        networkError:  getNetWorkError(state),
        fetchInProgress: getFetchInProgress(state),
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        setCountryName: (name) => {
            dispatch(setCountryName(name))
        },
        setCountryCode: (code) => {
            dispatch(setCountryCode(code))
        },
        toggleFullName: () => {
            dispatch(toggleFullName())
        },
        onSubmit: (countryName, countryCode, fullName) => {
            dispatch(setFetchingData(true));
            dispatch(getCountries(countryName, countryCode, fullName))
                .then(() => dispatch(setFetchingData(false)));
        },
        clearInput: () => (dispatch(clearInput()))
    }
}

const InputFormContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(InputFormComponent);

export default InputFormContainer;