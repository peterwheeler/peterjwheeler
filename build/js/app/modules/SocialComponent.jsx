import React from 'react';
import { Link } from "react-router";
import { Grid, Row, Col, Clearfix } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import MediaQuery from "react-responsive";

export default class SocialComponent extends React.Component {
	constructor(props) {
	    super(props);

		this.scrollMove = this.scrollMove.bind(this);
	}

	scrollMove(value) {
		this.props.updateScroll(value);
	}

  	render() {
		if(this.props.updateView === "/" || this.props.updateView == "/coder"){
				var divStyle = {display: "none"};
			} else if (this.props.updateView === "/projects") {
				var isScrollOn = true;
				var divStyle = {display: "block"};
			} else if (this.props.updateView === "/project" + /\/[a-zA-Z]+?\?id\=\d/) {
				var isScrollOn = false;
				var divStyle = {display: "block"};
		}
	    return (
    		<div className="inner-social-container">
    			<MediaQuery maxWidth={1023} className="mobile-social" id="mobile-social-id" component="div">
    				<Grid fluid>
				        <Row className="show-grid">
					        <Col xs={6} sm={3} md={2} lg={2} smOffset={9} mdOffset={8}>
						    	<div className="small-icon-container">
							    	<i className="fa fa-twitter fa-2x" aria-hidden="true"></i>
							    	<i className="fa fa-linkedin fa-2x" aria-hidden="true"></i>
							    	<i className="fa fa-github fa-2x" aria-hidden="true"></i>
						    	</div>
					    	</Col>
				    	</Row>
			    	</Grid>
				</MediaQuery>
				<MediaQuery minWidth={1024} className="desktop-social" component="div">
					<div className="arrows-container" style={divStyle}>
						{isScrollOn ? (
								<div className="arrows-scroll scroller">
									<i className="fa fa-angle-left fa-45x" aria-hidden="true" onClick={() => this.scrollMove(250)}></i>
									<i className="fa fa-angle-right fa-45x" aria-hidden="true" onClick={() => this.scrollMove(-250)}></i>
								</div>
							):(
								<div className="arrows-scroll switcher">
									<i className="fa fa-angle-left fa-45x" aria-hidden="true" onClick={() => this.scrollMove(250)}></i>
									<i className="fa fa-angle-right fa-45x" aria-hidden="true" onClick={() => this.scrollMove(-250)}></i>
								</div>
						)}		
					</div>
			    	<Grid fluid>
				        <Row className="show-grid">
					        {/*<Col xs={6} sm={3} smHidden mdHidden lgHidden>
						    	<div className="small-icon-container">
						    		<i className="fa fa-bars fa-2x" aria-hidden="true"></i>
						    	</div>
						    </Col>*/}
					        <Col xs={6} sm={3} md={2} lg={2} smOffset={9} mdOffset={8}>
						    	<div className="small-icon-container">
							    	<i className="fa fa-twitter fa-2x" aria-hidden="true"></i>
							    	<i className="fa fa-linkedin fa-2x" aria-hidden="true"></i>
							    	<i className="fa fa-github fa-2x" aria-hidden="true"></i>
						    	</div>
					    	</Col>
				    	</Row>
			    	</Grid>
		    	</MediaQuery>
	    	</div>
	    );
  	}
}

