import React, { Component } from 'react';
import InputForm from './InputForm.component.js';

class App extends Component {
  render() {
    return (
      <div>
        <InputForm
          onSubmit={() =>{console.log("form submitted")}} // TODO implement onSubmit
        />
      </div>
    );
  }
}

export default App;
