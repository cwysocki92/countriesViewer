import React, { Component } from 'react';
import '../styles/InputForm.css';
import PropTypes from 'prop-types';

class InputFormComponent extends Component {

	static proptypes = {
		countries: PropTypes.array.isRequired,
		countryName: PropTypes.string.isRequired,
		countryCode: PropTypes.string.isRequired,
		fullName: PropTypes.bool.isRequired,
		networkError: PropTypes.bool.isRequired,
		onSubmit: PropTypes.func,
		setCountryName: PropTypes.func.isRequired,
		setCountryCode: PropTypes.func.isRequired,
		toggleFullName: PropTypes.func.isRequired,
	};

	constructor(props) {
		super(props);
		this.state = {
			submissionError: false,
			/**
			 * TODO set a flag in container level to signal when a request
			 * is complete.  This is clunky and awkward, and causes a small
			 * period of time where "No Results found" is displayed ahead of time
			 */
			submitted: false,
		}
	}

	componentWillReceiveProps(nextProps) {
		this.setState({networkError: nextProps.networkError});
	}

	handleCountryNameChange = (name) => {
		this.props.setCountryName(name);
		if (name) {
			this.setState({submissionError: false})
		}
	}

	handleCountryCodeChange = (code) => {
		this.props.setCountryCode(code);
		if (code) {
			this.setState({submissionError: false})
		}
	}

	onSubmit = () => {
		let {countryName, countryCode, fullName, onSubmit} = this.props;
		// hitting rest countries with country code of 1 causes errors
		if (countryName || (countryCode && (countryCode.length === 2 || countryCode.length === 3))) {
			onSubmit && onSubmit(countryName, countryCode, fullName);
			// set flag stating a submission has been made
			this.setState({submitted: true});
		} else {
			this.setState({
				submissionError: true,
			});
		}

	}

	render() {
		const {
			countries,
			countryName,
			countryCode,
			toggleFullName,
			fullName,
			networkError,
		} = this.props;
		const {
			submissionError,
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
							onChange={toggleFullName}
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
						{/* Add a clear button beside submit button*/}
						<button 
							type="button"
							onClick={this.onSubmit}
							className="input-form-submit"
						>
							Submit
						</button>
					</div>
					{submissionError && 
						<span className="submission-error">Country Name or a 2 or 3 character Country Code is required</span>
					}
					{submitted && !(countries.length > 0) && !networkError && !submissionError &&
						<span className="submission-error">No Results found</span>
					}
					{networkError &&
						<span className="submission-error">Network Error.  Please Try again.</span>

					}
				</div>
			</form>
		);
	}
}

export default InputFormComponent;
