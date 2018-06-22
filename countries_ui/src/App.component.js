import React, { Component } from 'react';
import InputFormContainer from './app/containers/InputFormContainer.container.js';
import CountriesContainer from './app/containers/CountriesContainer.container.js';
import './app/styles/App.css';

/**
 * TODO ideally, this should at least have a home route, but routes have yet to be
 * implemented.
 */
class App extends Component {

	render() {
		return (
			<div className="app-wrapper">
				<InputFormContainer/>
				<CountriesContainer/>
			</div>
		);
	}
}

export default App;
