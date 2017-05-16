import React from 'react';
import ReactDOM from 'react-dom';
import { Grid, Row, Col } from "react-bootstrap";
  
export default class TypedComponent extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
  }

  render() {
    return (
		<main className="home-fade" role="main">
  			<Grid fluid>
  				<Col xs={12} xsOffset={0} md={8} mdOffset={2} lg={7} lgOffset={2}>
		  			<h1 className="home-text fade-1">Hey, I'm Peter</h1>
		   	 		<h3 className="home-text fade-2">A freelance <strong>web developer</strong> with a strong background in heritage.</h3>
		    		<h3 className="home-text fade-3">I have 4 years experience working in HTML5, CSS3, Javascript & WordPress.</h3>
            <h3 className="home-text fade-4">Please check out my portfolio!</h3>
	  			</Col>
  			</Grid>
		</main>
    );
  }
}

if (module.hot) {
  module.hot.accept();
}