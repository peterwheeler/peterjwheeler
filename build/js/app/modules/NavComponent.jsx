import React from 'react';
import { Link } from "react-router-dom";
import { Grid, Row, Col, Clearfix } from 'react-bootstrap';
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
		<Grid>
			<Row className="vertical-align">
				<Col xs={5} sm={8} className="logo-container">
					<Link to="/"><div className="logo-item"></div></Link>
				</Col>
				<Col xs={3} sm={2} className="pull-bottom">
					<Link to="/projects" className="menu-item">Projects</Link>
				</Col>
				<Col xs={3} sm={2} className="pull-bottom">
					<Link to="/contact" className="menu-item">Contact</Link>
				</Col>
			</Row>
		</Grid>
		);
	}
}

if (module.hot) {
  module.hot.accept();
}