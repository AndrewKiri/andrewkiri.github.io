import React, { Component } from 'react';

class Navbar extends Component {
	constructor(props) {
		super(props);
	}
	
	render() {
		return (
			<div className="navbar-container">
				<div className="container">
					<ul id="dropdown1" className="dropdown-content">
						<li><a href="#!">Our Company</a></li>
						<li><a href="#!">Our Goals</a></li>
						<li><a href="#!">Contact</a></li>
					</ul>
					<ul id="dropdown2" className="dropdown-content">
						<li><a href="#!">Stock</a></li>
						<li><a href="#!">Bonds</a></li>
						<li><a href="#!">Currencies</a></li>
						<li><a href="#!">Commodities</a></li>
						<li><a href="#!">Derivatives</a></li>
					</ul>
					<nav className="nav-full-width">
						<div className="nav-wrapper">
							<a href="#!" className="brand-logo">Capitalist</a>
							<ul className="right hide-on-med-and-down">
								<li><a href="">Investment Panel</a></li>
								<li><a className="dropdown-button" href="#!" data-activates="dropdown2">Pulse<i className="material-icons right">arrow_drop_down</i></a></li>
								<li><a href="">Market Scan</a></li>
								<li><a className="dropdown-button" href="#!" data-activates="dropdown1">About<i className="material-icons right">arrow_drop_down</i></a></li>
							</ul>
							<a href="#" data-activates="mobile-demo" className="button-collapse"><i class="material-icons">menu</i></a>
							<ul className="side-nav" id="mobile-demo">
								<li><a href="sass.html">Investment Panel</a></li>
								<li><a href="badges.html">Pulse</a></li>
								<li><a href="collapsible.html">Market Scan</a></li>
								<li><a href="mobile.html">About</a></li>
							</ul>	
						</div>
					</nav>
				</div>
			</div>	
		);
	}
}

export default Navbar;