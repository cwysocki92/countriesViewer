import React, { Component } from 'react';
import InputForm from './app/components/InputForm.component.js';
import CountriesDisplay from './app/components/CountriesDisplay.component.js';
import './app/styles/App.css';

const countriesApiUrl = 'http://localhost:8000/countries_api/countries';

/**
 * TODO ideally, this should at least have a home route, but routes have yet to be
 * implemented.
 */
class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			countries: [],
			results: false,
			networkError: false,
		}
	}

	setData = (data) => {
		this.setState({data: data})
	}

	fetchCountries = (countryName, countryCode, fullName) => {
		let params = "?";
		if (countryName) {
			params += `name=${countryName}${fullName ? '&fullName=true' : ''}`;
		} else if (countryCode) {
			params += `code=${countryCode}`;
		}
		fetch(`${countriesApiUrl}/${params}`)
			.then((response) => response.json())
			.then((response) => {
				if (response.status === 200) {
					this.setState({
						countries: response.data,
						results: response.data.length > 0,
						networkError: false,
					});
				}
			})
			.catch((err) => {
				this.setState({networkError: true});
			})
	}

	render() {
		const {
			countries,
			results,
			networkError,
		} = this.state;
		return (
			<div className="app-wrapper">
				<InputForm
					fetchCountries={this.fetchCountries}
					results={results}
					networkError={networkError}
				/>
				<CountriesDisplay
					countries={countries}
				/>
			</div>
		);
	}
}

export default App;
