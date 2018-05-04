import React, { Component } from 'react';
import InputForm from './InputForm.component.js';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			data: []
		}
	}

	setData = (data) => {
		this.setState({data: data})
	}

	render() {
		return (
			<div>
				<InputForm
					onSubmit={(data) => {this.setState(data)}} // TODO implement onSubmit
				/>
			</div>
		);
	}
}

export default App;
