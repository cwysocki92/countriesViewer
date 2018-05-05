import React, { Component } from 'react';
import InputForm from './InputForm.component.js';
import CountriesDisplay from './CountriesDisplay.component.js';
import '../styles/App.css';

const countriesApiUrl = 'http://localhost:8000/countries_api/countries';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			countries: [],
			results: false
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
					});
				}
			})
	}

	render() {
		const {countries, results} = this.state;
		return (
			<div className="app-wrapper">
				<InputForm
					fetchCountries={this.fetchCountries}
					results={results}
				/>
				<CountriesDisplay
					countries={countries}
				/>
			</div>
		);
	}
}

export default App;
