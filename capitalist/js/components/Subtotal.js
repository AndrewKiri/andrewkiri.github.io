import React, { Component } from 'react';

class Subtotal extends Component {
	render() {
		return (
			<div class="row">
				<div className="container"><h5 className="strategy-title">Total Value of Portfolio</h5></div>	
				<div class="col s12 m6">
				<div class="card">
					<div class="card-content">
					<span class="card-title">Subtotal</span>
					<p>$ {this.props.total}</p>
					</div>
					<div class="card-action">
					<a href="#">Purchase Portfolio</a>
					</div>
				</div>
				</div>
			</div>	
		);
	}
}

export default Subtotal;