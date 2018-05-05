import React, { Component } from 'react';
import InputForm from './InputForm.component.js';

const countriesApiUrl = 'http://localhost:8000/countries_api/countries';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			countries: [],
		}
	}

	setData = (data) => {
		this.setState({data: data})
	}

	fetchCountries = (countryName, countryCode, fullName) => {
		let params = "?";
		if (countryName) {
			params += `name=${countryName}${fullName ? '&fullName=true' : ''}`;
		} else {
			params += `code=${countryCode}`;
		}
		fetch(`${countriesApiUrl}/${params}`)
			.then((response) => response.json())
			.then((response) => {
				if (response.status === 200) {
					this.setState({
						// Only insert response into state if the response contained countries
						countries: response.data.constructor === Array ? response.data : []
					})
				}
			})
	}

	render() {
		let {countries} = this.state;
		return (
			<div>
				<InputForm
					fetchCountries={this.fetchCountries}
					resultsFound={countries.length > 0}
				/>
			</div>
		);
	}
}

export default App;
