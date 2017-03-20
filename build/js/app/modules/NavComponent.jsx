import React from 'react';
import { Link } from "react-router-dom";
import { Grid, Row, Col, Clearfix } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

import SVGComponent from './SVGComponent.jsx';

export default class NavComponent extends React.Component {
  render() {
    return (
		    <Grid fluid>
		         <Row className="show-grid">
	         		<Col md={12} xsHidden>
		         		<Link to="/"><SVGComponent load={this.props.load}/></Link>
					</Col>
	               	<Col md={12} xsHidden>
		         		<Link to="/projects" className="menu-item">Projects</Link>
	               	</Col>
	               	<Col md={12} xsHidden>
		                <Link to="/coder" className="menu-item">Coder</Link>
	               	</Col>
		         </Row>
	    	</Grid>
    	);
  }
}