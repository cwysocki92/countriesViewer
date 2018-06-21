import { connect } from 'react-redux';
import InputFormComponent from '../components/InputFormComponent.component';
import  {
    getCountryResults,
    getCountryName,
    getCountryCode,
    useFullName,
    getNetWorkError,
} from '../redux/selectors.js';
import { 
    setCountryName,
    setCountryCode,
    toggleFullName,
 } from '../redux/actions';
 import { getCountries } from '../redux/thunks';

const mapStateToProps = (state, ownProps) => {
    return {
        countries: getCountryResults(state),
        countryName: getCountryName(state),
        countryCode: getCountryCode(state),
        fullName: useFullName(state),
        networkError:  getNetWorkError(state),
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
            /**
             * TODO
             * Set a flag to signal data has completed loading.  Or
             * possibly display a loading icon. Currently the no results
             * found flag will be displayed in between requests
             */
            dispatch(getCountries(countryName, countryCode, fullName))
        }
    }
}

const InputFormContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(InputFormComponent);

export default InputFormContainer;