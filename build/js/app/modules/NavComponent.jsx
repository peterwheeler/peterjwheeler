import React from 'react';
import { Link } from "react-router-dom";
import { Grid, Row, Col, Clearfix } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

import SVGComponent from './SVGComponent.jsx';

export default class NavComponent extends React.Component {
	constructor(props) {
	    super(props);
	}
	render() {
	return (
		    <Grid fluid>
		         <Row className="show-grid">
	         		<Col md={12} xsHidden>
		         		<Link to="/"><SVGComponent load={this.props.load}/></Link>
					</Col>
	               	<Col md={12} xsHidden>
		               	<div className="projects-dynamic-link">
			         		<Link to="/projects" className="menu-item">Projects</Link><i className="fa fa-angle-right fa-lg" aria-hidden="true"></i><Link to={this.props.currentProjectHref} className="sub-menu-item project-link">{this.props.currentProjectName}</Link>
			         	</div>
	               	</Col>
	               	<Col md={12} xsHidden>
		                <Link to="/coder" className="menu-item">Coder</Link>
	               	</Col>
		         </Row>
	    	</Grid>
		);
	}
}

if (module.hot) {
  module.hot.accept();
}