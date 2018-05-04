import React, { Component } from 'react';
import '../styles/InputForm.css';

const countriesApiUrl = 'http://localhost:8000/countries_api/countries';

// TODO prop types!
class InputForm extends Component {
	constructor(props) {
		super(props);
		this.state = {
			countryName: "",
			countryCode: "",
			submissionError: false,
			fullName: false,
		}
	}

	handleCountryNameChange = (name) => {
		this.setState({countryName: name});
		if (name) {
			this.setState({submissionError: false})
		}
	}

	handleCountryCodeChange = (code) => {
		this.setState({countryCode: code})
		if (code) {
			this.setState({submissionError: false})
		}
	}

	fetchCountries = () => {
		let {countryName, countryCode, submissionError, fullName} = this.state;
		let params = "?";
		if (countryName) {
			params += `name=${countryName}${fullName ? '&fullName=true' : ''}`;
		} else {
			params += `code=${countryCode}`;
		}
		fetch(`${countriesApiUrl}/${params}`)
	}

	onSubmit = () => {
		let {countryName, countryCode} = this.state;
		let {onSubmit} = this.props;
		if (countryName || countryCode) {
			this.fetchCountries();
			// onSubmit && onSubmit(countryName, countryCode);
		} else {
			this.setState({submissionError: true})
		}
		// TODO check if the country code is valid (2 or 3 characters)
	}

	onFullNameCheck = () => {
		this.setState({
			fullName: !this.state.fullName
		})
	}

	// TODO make sure only name or code is provided
	render() {
		let {
			countryName,
			countryCode,
			submissionError,
			fullName,
		} = this.state;

		return (
			<form className="input-form">
				<div className="input-form-wrapper">
					<label 
						htmlFor="countryName"
						className="input-form-label"			
					>
						Country Name
					</label>
					<input
						type="text"
						name="countryName" 
						value={countryName}
						onChange={(e) => this.handleCountryNameChange(e.target.value)}
						id="countryName"
						className="input-form-input"
					/>
					<label 
						htmlFor="countryName"
						className="input-form-label--checkbox"			
					>
						Use Country Full Name
					</label>
					<input
						type="checkbox"
						checked={fullName}
						onChange={this.onFullNameCheck}
					/>
				</div>
				<div className="input-form-wrapper">
					<label 
						htmlFor="countryCode"
						className="input-form-label"			
					>
						Country Code
					</label>	
					<input 
						type="text" 
						name="countryCode" 
						value={countryCode}
						maxLength="3"
						onChange={(e) => this.handleCountryCodeChange(e.target.value)}
						id="countryCode"
						className="input-form-input"
					/>
				</div>
				<div className="input-form-wrapper">
					<div className="input-form-button-wrapper">
						<button 
							type="button"
							onClick={this.onSubmit}
							className="input-form-submit"
						>
							Submit
						</button>
					</div>
					{submissionError && 
						<span className="submission-error">Country Name or Country code is required</span>
					}
				</div>
			</form>
		);
	}
}

export default InputForm;
