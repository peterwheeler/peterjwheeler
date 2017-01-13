import React from 'react';
import { Link } from "react-router";
import { Grid, Row, Col, Clearfix, Image } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

export default class Projects extends React.Component {
  	render() {
	    return (
	    	<div className="projects-container">
	    	<Grid fluid>
		        <Row className="show-grid">	      
					<Col className="slanted-div" xs={12} sm={12} md={4}>
						<LinkContainer to={{ pathname: '/projects/portus'}}>
						  <Link className="menu-item">P.O.R.T.U.S</Link>
						</LinkContainer>
						<div className="item-image">
						  <Image src={'http://supplychainconference.co/wp-content/uploads/2014/03/320x200.png'} responsive />
						</div>
					</Col>
					<Col className="slanted-div" xs={12} sm={12} md={4}>
						<LinkContainer to={{ pathname: '/projects/portus-project-virtual-tour'}}>
						  <Link className="menu-item">Portus Tour</Link>
						</LinkContainer>
						<div className="item-image">
						  <Image src={'http://supplychainconference.co/wp-content/uploads/2014/03/320x200.png'}responsive />
						</div>
					</Col>
					<Col className="slanted-div" xs={12} sm={12} md={4}>
						<LinkContainer to={{ pathname: '/projects/photography'}}>
						  <Link className="menu-item">Photography</Link>
						</LinkContainer>
						<div className="item-image">
						  <Image src={'http://supplychainconference.co/wp-content/uploads/2014/03/320x200.png'} responsive />
						</div>
					</Col>
					<Clearfix />
		         </Row>
	    	</Grid>
	    	</div>
	    );
	}
}