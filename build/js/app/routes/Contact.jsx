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
					    <Col xs={6} className="contact-item" xs={6} xsOffset={2} md={6} lg={6}>
					    	<i className="fa fa-envelope" aria-hidden="true"></i><a href="mailto:PWheeler@soton.ac.uk">Email</a>
						</Col>
						<Col xs={6} className="contact-item" xs={6} xsOffset={2} md={6} lg={6}>
					    	<i className="fa fa-twitter" aria-hidden="true"></i><a href="https://twitter.com/peter__wheeler">Twitter</a>
						</Col>
						<Col xs={6} className="contact-item" xs={6} xsOffset={2} md={6} lg={6}>
					    	<i className="fa fa-linkedin" aria-hidden="true"></i><a href="https://uk.linkedin.com/in/peterjwheeler">LinkedIn</a>
						</Col>
						<Col xs={6} className="contact-item" xs={6} xsOffset={2} md={6} lg={6}>
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