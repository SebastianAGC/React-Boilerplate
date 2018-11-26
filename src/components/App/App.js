import React, { Component } from 'react';
import './App.css';
import { sum } from './sum';

class App extends Component {
  constructor() {
    super();
    this.state = {
      result: 0,
    };
    // This binding is necessary to make `this` work in the callback
    this.operacion = this.operacion.bind(this);
  }

  operacion() {
    const num1 = parseInt(document.getElementById('num1').value);
    const num2 = parseInt(document.getElementById('num2').value);
    const res = sum(num1, num2);
    this.setState({
      result: res,
    });
  }

  render() {
    const myVar = this.state.result;
    return (
			<div>
				<h1>React Boilerplate</h1>
				<label>Aplicación simple de suma</label>
				<input type="number" id="num1" />
				<input type="number" id="num2" />
				<button type="button" onClick={this.operacion}>Sumar</button>
				<br />
				<br />
				<br />
				<label>
El resultado de la suma es:
{myVar}
    </label>
			</div>
    );
  }
}
export default App;
