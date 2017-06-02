import React from 'react';
import { Link } from "react-router";
import { Grid, Row, Col } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

export default class About extends React.Component {

	render() {
	    return (
	      	<div className="about-container">
	      		<Grid fluid>
				    <Row className="show-grid">
				    	<Col xs={8} xsOffset={1} md={4} className="about-headline">
							<h1><strong>About me</strong></h1>
							<i>Just a little bit about me and what I have done so far.</i>
							<div className="about-divider"></div>
						</Col>
					    <Col className="about-item" xs={10} xsOffset={1} md={8} lg={8}>
					    	<p>My name is Peter John Wheeler and I am originally from Ireland, though now working in both Ireland and the UK.</p>
					    	<p>I have 3 years experience working in HTML5, CSS3, Javascript & WordPress. I have been working for the Unviversity of Southampton since graduating there with a Masters in Archaeological Computing. Since then I been developing on a number of educational applications for archaeological projects. Most notably is my work with FutureLearn education platform in creating the Portus MOOC.</p>
					    	<p>I have a great interest in producing top quality and beautiful looking web content, especially for the heritage sector.</p>
					    	<p>In my spare time I am an avid DIY'r, along with football and learning a little Spanish.</p>
					    	<p>Thanks for visiting.</p>
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