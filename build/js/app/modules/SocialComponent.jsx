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
    		<div className="social-container">
    			<MediaQuery maxWidth={1023} className="mobile-social" id="mobile-social-id" component="div">
    				<div className="small-icon-container">
						<a href="mailto:PWheeler@soton.ac.uk"><i className="fa fa-envelope fa-lg" aria-hidden="true"style={{"paddingRight" : "3px"}}></i></a>
						<a href="https://twitter.com/peter__wheeler"><i className="fa fa-twitter  fa-lg" aria-hidden="true"></i></a>
						<a href="https://uk.linkedin.com/in/peterjwheeler"><i className="fa fa-linkedin  fa-lg" aria-hidden="true"></i></a>
						<a href="https://github.com/peterwheeler"><i className="fa fa-github  fa-lg" aria-hidden="true"></i></a>
					</div>
				</MediaQuery>
				<MediaQuery minWidth={1024} className="desktop-social" component="div">
					<div className="small-icon-container">
						<a href="mailto:PWheeler@soton.ac.uk"><i className="fa fa-envelope fa-lg" aria-hidden="true"style={{"paddingRight" : "3px"}}></i></a>
						<a href="https://twitter.com/peter__wheeler"><i className="fa fa-twitter fa-2x" aria-hidden="true"></i></a>
						<a href="https://uk.linkedin.com/in/peterjwheeler"><i className="fa fa-linkedin fa-2x" aria-hidden="true"></i></a>
						<a href="https://github.com/peterwheeler"><i className="fa fa-github fa-2x" aria-hidden="true"></i></a>
					</div>
		    	</MediaQuery>
	    	</div>
	    );
  	}
}

