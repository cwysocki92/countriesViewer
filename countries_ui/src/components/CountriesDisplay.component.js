import React, { Component } from 'react';
import '../styles/CountriesDisplay.css';

// TODO prop types!
class CountriesDisplay extends Component {

	get countriesDisplay() {
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

	getUniqueProperties = (countries, key) => {
		return countries.map(country => country[key]).filter((value, index, arr) => arr.indexOf(value) === index);
	}

	getRegionCounts = (countries, regions, key) => {
		let counts = {};
		regions.forEach((region) => {
			counts[region] = 0;
			countries.forEach((country) => {
				if (country[key] === region) {
					counts[region]++;
				}			
			})
		})
		return counts;
	}

	get countryInfoCounts() {
		const {countries} = this.props;
		let regionInfo = (<div/>);
		if (countries.length > 0) {
			let uniqueRegions = this.getUniqueProperties(countries, 'region');
			let uniqueSubregions = this.getUniqueProperties(countries, 'subregion');
			let regionCounts = this.getRegionCounts(countries, uniqueRegions, 'region');
			let subregionCounts = this.getRegionCounts(countries, uniqueSubregions, 'subregion');
			let regions = uniqueRegions.map((region) => {
				return (
					<div className="country-region-appearances-wrapper" key={region}>
						<span className="country-property">{`${region} - `}</span>
						<span>{regionCounts[region]}</span>
					</div>
				)
			});
			let subregions = uniqueSubregions.map((subregion) => {
				return (
					<div className="country-region-appearances-wrapper" key={subregion}>
						<span className="country-property">{`${subregion} - `}</span>
						<span>{subregionCounts[subregion]}</span>
					</div>
				)
			});
			regionInfo = (
				<div className="region-info-wrapper">
					<div className="region-count-header">
						Region Appearances
					</div>
					{regions}
					<div className="region-count-header">
						Subregion Appearances
					</div>
					{subregions}
				</div>
			)
		}
		return regionInfo
		
	}

	render() {
		const {countries} = this.props;
		return (
			<div className="countries-display">
				{countries && this.countriesDisplay}
				{countries && this.countryInfoCounts}
			</div>
		);
	}
}

export default CountriesDisplay;
