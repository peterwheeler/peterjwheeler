import React from 'react';
import { Link } from "react-router";
import { Grid, Row, Col, Clearfix } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

export default class Projects extends React.Component {
  	render() {
	    return (
	    <div>
	    	<Grid fluid>
		        <Row className="show-grid">
					<Col xs={12} sm={12} md={6} lg={4}>
						<h1>Projects</h1>
					</Col>	      
					<Col xs={12} sm={12} md={6} lg={4}>
						<LinkContainer to={{ pathname: '/project/portus'}}>
						  <Link className="menu-item">P.O.R.T.U.S</Link>
						</LinkContainer>
					</Col>
					<Col xs={12} sm={12} md={6} lg={4}>
						<LinkContainer to={{ pathname: '/project/portus-project-virtual-tour'}}>
						  <Link className="menu-item">Portus Tour</Link>
						</LinkContainer>
					</Col>
					<Clearfix visibleLgBlock></Clearfix>
					<Col xs={12} sm={12} md={6} lg={4}>
						<LinkContainer to={{ pathname: '/project/photography'}}>
						  <Link className="menu-item">Jon Wheeler Photography</Link>
						</LinkContainer>
					</Col>
		         </Row>
	    	</Grid>
   		</div>
	    );
	}
}