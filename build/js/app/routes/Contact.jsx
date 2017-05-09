import React from 'react';
import { Link } from "react-router";
import { Grid, Row, Col } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

export default class Contact extends React.Component {

	render() {
	    return (
	      	<div className="contact-container">
	      		<Grid fluid>
				    <Row className="show-grid">
				    	<Col xs={8} xsOffset={2} md={4} className="contact-headline">
							<h1><strong>Contact me</strong></h1>
							<i>You can reach me on any one of these social networks or just send me a good old fashioned email.</i>
							<div className="divider"></div>
						</Col>
					    <Col className="contact-item" xs={6} xsOffset={2} md={6} lg={6}>
					    	<i className="fa fa-envelope" aria-hidden="true"></i><a href="mailto:PWheeler@soton.ac.uk">Email</a>
						</Col>
						<Col className="contact-item" xs={6} xsOffset={2} md={6} lg={6}>
					    	<i className="fa fa-twitter" aria-hidden="true"></i><a href="https://twitter.com/peter__wheeler">Twitter</a>
						</Col>
						<Col className="contact-item" xs={6} xsOffset={2} md={6} lg={6}>
					    	<i className="fa fa-linkedin" aria-hidden="true"></i><a href="https://uk.linkedin.com/in/peterjwheeler">LinkedIn</a>
						</Col>
						<Col className="contact-item" xs={6} xsOffset={2} md={6} lg={6}>
					    	<i className="fa fa-github" aria-hidden="true"></i><a href="https://github.com/peterwheeler">Github</a>
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