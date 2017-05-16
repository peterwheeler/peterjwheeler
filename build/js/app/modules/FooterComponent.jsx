import React from 'react';
import { Link } from "react-router";
import { Grid, Row, Col, Clearfix } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

export default class Footer extends React.Component {
	constructor(props) {
	    super(props);
	}

  	render() {
  		return (
	  		<footer className="footer nav-fixed-bottom">
	  			<Grid fluid>
					<Row>
						<Col xs={6} xsOffset={1} md={8} mdOffset={1} className="footer-left">
							<i className="fa fa-copyright" aria-hidden="true"></i><span>2017 Peter Wheeler</span>
						</Col>
						<Col xs={4} xsOffset={0} md={2} mdOffset={0} className="footer-right">
							<p>Built with <a href="https://facebook.github.io/react/">React</a></p>
						</Col>
					</Row>
				</Grid>
			</footer>
		)
  	}
}

if (module.hot) {
  module.hot.accept();
}
