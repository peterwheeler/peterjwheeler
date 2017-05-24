import React from 'react';
import { Link, NavLink } from "react-router-dom";
import { Grid, Row, Col, Clearfix, Nav } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import MediaQuery from "react-responsive";

import SVGComponent from './SVGComponent.jsx';

export default class NavComponent extends React.Component {
	constructor(props) {
	    super(props);

	    this.state = {
	    	mobileOpen: false,
	    	mobileStyle:  {
		        display: "none"
		    },
		    mobileTopContainer: "",
		    mobileBottomContainer: "",
		    mobileSocialContainer: ""
	    };
	}

	componentDidMount(){
		this.setState({
      		mobileTopContainer: document.getElementById("top-div-id"),
      		mobileBottomContainer: document.getElementById("bottom-div-id"),
      		mobileSocialContainer: document.getElementById("mobile-social-id")
	    });
	}

	render() {
	return (
		<div className="navigation-container">
				<Grid className="desktop-navigation">
					<Row className="vertical-align">
						<Col xs={4} xsOffset={1} className="logo-container">
							<Link to="/"><div className="logo-item"></div></Link>
						</Col>
						<Col xs={2} className="pull-bottom">
							<NavLink to="/portfolio" className="menu-item pulse" activeClassName="pulse-active">Portfolio</NavLink>
						</Col>
						<Col xs={2} className="pull-bottom">
							<NavLink to="/about" className="menu-item pulse" activeClassName="pulse-active">About</NavLink>
						</Col>
						<Col xs={2} className="pull-bottom">
							<NavLink to="/contact" className="menu-item pulse" activeClassName="pulse-active">Contact</NavLink>
						</Col>
					</Row>
				</Grid>
		</div>
		);
	}
}

if (module.hot) {
  module.hot.accept();
}