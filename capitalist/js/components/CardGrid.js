import React, { Component } from 'react';
import Card from './Card';

class CardGrid extends Component {
	constructor(props) {
		super(props);
	}

	buildGrid(val, handler) {
		return (
			val.map((card, index) => <Card key={card.id.toString()} card={card} index={index + 1} setStrategy={handler} />)
		);
	}
	
	render() {
		return (
			<div className="row">
				<div className="container"><h5 className="strategy-title">Pick your strategy</h5></div>
				{this.buildGrid(this.props.grid, this.props.setStrategy)}
			</div>
		);
	}
}

export default CardGrid;