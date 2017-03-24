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
	         		<Col md={4} xsHidden>
		         		<Link to="/"><SVGComponent load={this.props.load}/></Link>
					</Col>
					<Clearfix/>
	               	<Col md={4} xsHidden>
	               		<div className="project-link">
			               	<div className="projects-static-link">
				         		<Link to="/projects" className="menu-item">Projects</Link>
				         	</div>
				         	<div className="projects-dynamic-link" style={this.props.submenuStyle}>
				         		<i className="fa fa-angle-right fa-lg" aria-hidden="true"></i>
				         		<Link to={this.props.currentProjectHref} className="sub-menu-item project-link">{this.props.currentProjectName}</Link>
				         	</div>
			         	</div>
	               	</Col>
	               	<Clearfix/>
	               	<Col md={4} xsHidden>
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