import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class Counter extends Component {
  constructor(props){
	  super(props);
	  this.state = {
		  numero: 0, 
		  show: true
		};
	}
	
	IncrementItem = () => {
		this.setState({ numero: this.state.numero + 58});
	}
	
	DecreaseItem = () => {
		this.setState({ numero: this.state.numero - 58});
	}
	
	ToggleClick = () => {
		this.setState({ show: !this.state.show });
	}
	
	render(){
		return(
			<div className="Counter">
				<header className="Counter-header">
					<button onClick = {this.IncrementItem}>Clicca per aumentare di 58</button>
					<button onClick = {this.DecreaseItem}>Clicca per diminuire di 58</button>
					<button onClick = {this.ToggleClick}>
						{	this.state.show ? 'Scompari numero ma-chiko!!' : 'Appari numero ma-chiko!!' }
					</button>
					{	this.state.show ? <h2>{ this.state.numero } </h2> : ''}
					<img src={logo} className="Counter-logo" alt="logo" />
				</header>
			</div>
		);
	}
}

export default Counter;
