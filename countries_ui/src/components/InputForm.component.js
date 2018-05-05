import React, { Component } from 'react';
import '../styles/InputForm.css';

// TODO prop types!
class InputForm extends Component {
	constructor(props) {
		super(props);
		this.state = {
			countryName: "",
			countryCode: "",
			submissionError: false,
			fullName: false,
			submitted: false,
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

	onSubmit = () => {
		let {countryName, countryCode, fullName} = this.state;
		let {fetchCountries} = this.props;
		// hitting rest countries with country code of 1 causes errors
		if (countryName || (countryCode && (countryCode.length === 2 || countryCode.length === 3))) {
			fetchCountries && fetchCountries(countryName, countryCode, fullName);
			// set flag stating a submission has been made
			this.setState({submitted:true});
		} else {
			this.setState({submissionError: true});
		}

	}

	onFullNameCheck = () => {
		this.setState({
			fullName: !this.state.fullName
		})
	}

	render() {
		const {results} = this.props;
		const {
			countryName,
			countryCode,
			submissionError,
			fullName,
			submitted,
		} = this.state;

		return (
			<form className="input-form">
				<div className="input-form-input--wrapper">
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
					<div className="input-form-label--wrapper">
						<label 
							htmlFor="fullName"
							className="input-form-label-checkbox"			
						>
							Use Country Full Name
						</label>
						<input
							id="fullName"
							type="checkbox"
							checked={fullName}
							onChange={this.onFullNameCheck}
						/>
					</div>
				</div>
				<div className="input-form-input--wrapper">
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
				<div className="input-form-input--wrapper">
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
						<span className="submission-error">Country Name or a 2 or 3 digit Country Code is required</span>
					}
					{submitted && !results &&
						<span className="submission-error">No Results found</span>
					}
				</div>
			</form>
		);
	}
}

export default InputForm;
