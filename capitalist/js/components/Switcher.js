import React, { Component } from 'react';
import Stock from './Stock';
import Subtotal from './Subtotal';

class Switcher extends Component {
	constructor(props){
		super(props);
		this.state = {
			portfolio: {},
			total: 0
		}
	}

	portfolio = {};

	calculateTotal() {
		var total = 0;
		$.each(this.portfolio, (ticker, valueObj) => {
			total += (valueObj.quantity * valueObj.price);
		})
		return total;
	}	

	componentWillMount() {
		this.props.data.stocks.map((stock) => {
			this.portfolio[stock.ticker] = {
				quantity: stock.quantity,
				price: stock.price,
				name: stock.name
			}
		});
		this.setState({
			portfolio: this.portfolio,
			total: this.calculateTotal()
		});
	}

	componentWillReceiveProps(nextProps) {
		this.portfolio = {};
		nextProps.data.stocks.map((stock) => {
			this.portfolio[stock.ticker] = {
				quantity: stock.quantity,
				price: stock.price,
				name: stock.name
			}
		});
		this.setState({
			portfolio: this.portfolio,
			total: this.calculateTotal()
		});
	}
	
	updateQuantity(data) {
		this.portfolio[data.ticker]["quantity"] = data.quantity;
		this.setState({
			portfolio: this.portfolio,
			total: this.calculateTotal()
		});
	};
	
	mapStocks(data) {
		return (
			data.map((stock, index) => <Stock key={stock.ticker} data={stock} updateQuantity={this.updateQuantity.bind(this)} />)
		);
	}

	render() {
		return (
			<div>
				<div className="row">
					<div className="container"><h5 className="strategy-title">Adjust the allocation</h5></div>
					<div class="col s12 m6">
						<div class="card horizontal">
						<div class="card-image">
							<img src={this.props.data.image} />
						</div>
						<div class="card-stacked">
							<div class="card-content">
								<h5>{this.props.data.title}</h5>
								<p>{this.props.data.description}</p>	
							</div>
							<div class="card-action">
								Expected Return: {this.props.data.rate}
							</div>
						</div>
						</div>
					</div>
					<div class="col s12 m6">
						<div class="card">
							<div class="card-content">
								<h5>{this.props.data.title}</h5>
								{this.mapStocks(this.props.data.stocks)}
							</div>
						</div>
					</div>
				</div>
				<Subtotal total={this.state.total} />
			</div>	
		);
	};
}

export default Switcher;