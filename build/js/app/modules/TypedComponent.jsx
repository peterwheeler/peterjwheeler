import React from 'react';
import ReactDOM from 'react-dom';
import { Grid, Row, Col } from "react-bootstrap";
import Typist from 'react-typist';
  
export default class TypedComponent extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
  }

  render() {
    return (
		<main className="home-typed" id="content" role="main">
		  	<Typist cursor={{show: false}}>
		  			<Grid fluid>
		  				<Col xs={12} mdOffset={2} md={8} lgOffset={3} lg={8}>
				  			<h1>Hello, I'm Peter</h1>
				   	 		<h3>A freelance <strong>web developer</strong> with a heritage background.</h3>
				    		<h3>I have 4 years experience working in HTML5, CSS3, Javascript (Angular & React) & WordPress.</h3>
			  			</Col>
		  			</Grid>
		  	</Typist>
		</main>
    );
  }
}

if (module.hot) {
  module.hot.accept();
}