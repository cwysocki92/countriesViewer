import { connect } from 'react-redux';
import CountriesDisplay from '../components/CountriesDisplay.component.js';
​
const mapStateToProps = (state, ownProps) => {
  // TODO add props to get from state here
    return {
  }
}
​
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
  }
}
​
const CountriesContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(CountriesDisplay)
​
export default CountriesContainer;