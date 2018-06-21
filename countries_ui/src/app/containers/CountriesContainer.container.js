import { connect } from 'react-redux';
import CountriesComponent from '../components/CountriesComponent.component';
import { getCountryResults } from '../redux/selectors.js';

const mapStateToProps = (state) => {
    return {
       countries: getCountryResults(state)
    }
}

const CountriesContainer = connect(
  mapStateToProps,
  null
)(CountriesComponent);

export default CountriesContainer;