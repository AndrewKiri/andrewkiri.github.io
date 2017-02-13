import React, {Component} from 'react';

class CardItem extends Component {
	constructor(props) {
		super(props);
	}

	clickHandler(e) {
		e.preventDefault();
		var targ = e.target;
		this.props.setStrategy(this.props.card);
	}

	render() {
		return (
			<div className="col s12 m4 l3">
				<div className="card">
					<div className="card-image">
						<img src={this.props.card.image} />
						<a onClick={this.clickHandler.bind(this)} className="btn-floating halfway-fab waves-effect waves-light"><i className="material-icons">add</i></a>
					</div>
					<div className="card-content">
						<h5>{this.props.card.title}</h5>
						<h5 className="rate-of-return">{this.props.card.rate}</h5>
						<p>{this.props.card.description}</p>
					</div>
				</div>
			</div>
		);
	}
}

export default CardItem;