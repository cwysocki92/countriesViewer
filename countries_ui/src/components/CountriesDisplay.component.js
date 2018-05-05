import React, { Component } from 'react';
import '../styles/CountriesDisplay.css';

// TODO prop types!
class CountriesDisplay extends Component {

	generateCountries() {
		const {countries} = this.props;
		return countries.map((country) => 
			(<div className="country-wrapper" key={country.alpha3Code}>
				<img
					src={country.flag}
					alt={`${country.name} flag`}
					className="country-flag"
				/>
				<div>
					<span className="country-property">{`Country Name: `}</span>
					<span>{country.name}</span>
				</div>
				<div>
					<span className="country-property">{`Alpha Code 2: `}</span>
					<span>{country.alpha2Code}</span>
				</div>
				<div>
					<span className="country-property">{`Alpha Code 3: `}</span>
					<span>{country.alpha3Code}</span>
				</div>
				<div>
					<span className="country-property">{`Region: `}</span>
					<span>{country.region}</span>
				</div>
				<div>
					<span className="country-property">{`Subregion: `}</span>
					<span>{country.subregion}</span>
				</div>
				<div>
					<span className="country-property">{`Population: `}</span>
					<span>{country.population}</span>
				</div>
			</div>)
		)
	}

	render() {
		const {countries} = this.props;
		return (
			<div className="countries-display">
				{countries && this.generateCountries()}
			</div>
		);
	}
}

export default CountriesDisplay;
