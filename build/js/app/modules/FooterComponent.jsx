import React from 'react';
import { Link } from "react-router";
import { Grid, Row, Col, Clearfix } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

export default class FooterComponent extends React.Component {
  render() {
    return (
	    	<Grid fluid>
			        <Row className="show-grid">
				        <Col xs={12} sm={3} md={2} lg={2} smOffset={9} mdOffset={8}>
					    	<div className="footerNav">React Router Footer!</div>
				    	</Col>
			    	</Row>
	    	</Grid>
    	);
  }
}
