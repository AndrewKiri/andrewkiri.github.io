import React, {Component} from 'react';
import Navbar from './Navbar';
import CardGrid from './CardGrid';
import Switcher from './Switcher';
import Subtotal from './Subtotal';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			strategy: {},
			grid: [
				{
					id: 1,
					image: "images/tech.jpg",
					title: "Tech & Telecoms",
					description: "Investing in tech stocks is risky, but promises higher levels of returns if done right. Follow this strategy if your risk tolerance is high",
					stocks: [
						{
							ticker: "AAPL",
							name: "Apple",
							price: 118,
							quantity: 34
						}, {
							ticker: "VZ",
							name: "Verizon",
							price: 48,
							quantity: 34
						},
						{
							ticker: "PYPL",
							name: "PayPal",
							price: 42,
							quantity: 34
						},
						{
							ticker: "NVDA",
							name: "NVIDIA Corporation",
							price: 114,
							quantity: 34
						}],
					rate: "+33%",
					return: 5,
					risk: 5
				},
				{
					id: 2,
					image: "images/bio.jpg",
					title: "Biotech",
					description: "Biotech companies invest in bio technologies such as medical equipment, pharmacy or medical food supplements",
					stocks: [
						{
							ticker: "CGQ",
							name: "Celgene Corp",
							price: 115,
							quantity: 34
						}, {
							ticker: "GILD",
							name: "Gilead Sciences Inc.",
							price: 66,
							quantity: 34
						},
						{
							ticker: "JAZZ",
							name: "Jazz Pharmaceuticals PLC",
							price: 130,
							quantity: 34
						},
						{
							ticker: "EZB",
							name: "Enzo Biochem Inc.",
							price: 6,
							quantity: 34
						}],
					rate: "+19%",
					return: 4,
					risk: 3
				},
				{
					id: 3,
					image: "images/commodities.jpg",
					title: "Commodities",
					description: "Commodities companies generate returns by investing in exploration, extraction, development and manufacturing of commodity",
					stocks: [
						{
							ticker: "CVX",
							name: "Chevron",
							price: 113,
							quantity: 34
						}, {
							ticker: "XOM",
							name: "Exxon Mobil",
							price: 83,
							quantity: 34
						},
						{
							ticker: "KGHA",
							name: "KGHM Polska Miedz",
							price: 30,
							quantity: 34
						},
						{
							ticker: "RIO",
							name: "Rio Tinto",
							price: 45,
							quantity: 34
						}],
					rate: "+14%",
					return: 3,
					risk: 1
				},
				{
					id: 4,
					image: "images/banks.jpg",
					title: "Banks",
					description: "Banks generate returns for investors by providing financial products and services to wide range of customers",
					stocks: [
						{
							ticker: "C",
							name: "Citigroup",
							price: 57,
							quantity: 34
						}, {
							ticker: "GS",
							name: "Goldman Sachs",
							price: 242,
							quantity: 34
						},
						{
							ticker: "JPM",
							name: "JPMorgan Chase",
							price: 87,
							quantity: 34
						},
						{
							ticker: "BCS",
							name: "Barclays Bank PLC",
							price: 26,
							quantity: 34
						}],
					rate: "+23%",
					return: 4,
					risk: 2
				}
			]
		}
	}

	setStrategy(val) {
		this.setState({ strategy: val });
	}

	render() {
		if (this.state.strategy.stocks) {
			return (
				<div>
					<Navbar />
					<CardGrid grid={this.state.grid} setStrategy={this.setStrategy.bind(this)} />
					<Switcher data={this.state.strategy}/>
				</div>
			);	
		} else {
			return (
				<div>
					<Navbar />
					<CardGrid grid={this.state.grid} setStrategy={this.setStrategy.bind(this)} />
				</div>
			);
		}
	}
}

export default App;