import React, { Component } from 'react';

class Stock extends Component {
	setQuantity(e) {
		var data = {
			quantity: e.target.value,
			ticker: this.props.data.ticker,
		}
		this.props.updateQuantity(data);
	}

	render() {
		return (
			<div>
				<p>
					{this.props.data.name}
					<br />
					$ {this.props.data.price}
				</p>	
				<p class="range-field">	
					<input onChange={this.setQuantity.bind(this)} type="range" id={this.props.data.ticker} min="0" max="100"/>
				</p>	
			</div>
		);
	}
}

export default Stock;