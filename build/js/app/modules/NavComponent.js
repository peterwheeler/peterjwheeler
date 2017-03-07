import React from 'react';
import { Link } from "react-router";
import { Grid, Row, Col, Clearfix } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

import SVGComponent from './SVGComponent';

export default class NavComponent extends React.Component {
  render() {
    return (
    	<div>
		    <Grid fluid>
		         <Row className="show-grid">
	         		<Col md={12} xsHidden>
		         		<LinkContainer to={{ pathname: '/'}}>
			    			<Link><SVGComponent/></Link>
			    		</LinkContainer>
			    		<button id="play">THANK ME AGAIN</button>
		    		</Col>
	               	{/*<Col md={12} xsHidden>
		               <LinkContainer to={{ pathname: '/about'}}>
		                  <Link className="menu-item">About</Link>
		               </LinkContainer>
	               	</Col>*/}
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