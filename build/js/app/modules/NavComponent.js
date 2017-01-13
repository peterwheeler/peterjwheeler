import React from 'react';
import { Link } from "react-router";
import { Grid, Row, Col, Clearfix } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';



export default class NavComponent extends React.Component {
  render() {
    return (
    	<div>
		    <Grid fluid>
		         <Row className="show-grid">
	         		<Col md={12} xsHidden>
		         		<LinkContainer to={{ pathname: '/'}}>
			    			<Link><h1>Literatim</h1></Link>
			    		</LinkContainer>
		    		</Col>
	               	<Col md={12} xsHidden>
		               <LinkContainer to={{ pathname: '/about'}}>
		                  <Link className="menu-item">About</Link>
		               </LinkContainer>
	               	</Col>
	               	<Col md={12} xsHidden>
	                   <LinkContainer to={{ pathname: '/projects'}}>
		                  <Link className="menu-item">Projects</Link>
		               </LinkContainer>
	               	</Col>
	               	<Col md={12} xsHidden>
	                   <LinkContainer to={{ pathname: '/coder'}}>
		                  <Link className="menu-item">Coder</Link>
		               </LinkContainer>
	               	</Col>
		         </Row>
	    	</Grid>
    	</div> 
    	);
  }
}