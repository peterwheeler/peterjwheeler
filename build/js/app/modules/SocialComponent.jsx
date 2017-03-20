import React from 'react';
import { Link } from "react-router";
import { Grid, Row, Col, Clearfix } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

export default class SocialComponent extends React.Component {
  render() {
    return (
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
    	);
  }
}

