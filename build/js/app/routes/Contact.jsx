import React from 'react';
import { Link } from "react-router";
import { Grid, Row, Col, Form, FormGroup, FormControl, ControlLabel, Button } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

export default class Contact extends React.Component {

  render() {
    return (
      	<div className="contact-container">
      		<Grid fluid>
      			<Col xs={12}>
	      		  <Form inline>
				    <FormGroup controlId="formInlineName">
				      <ControlLabel>Name</ControlLabel>
				      {' '}
				      <FormControl type="text" placeholder="Your name" />
				    </FormGroup>
				    {' '}
				    <FormGroup controlId="formInlineEmail">
				      <ControlLabel>Email</ControlLabel>
				      {' '}
				      <FormControl type="email" placeholder="youremail@email.com" />
				    </FormGroup>
				    {' '}
				    <Button type="submit">
				      Send email
				    </Button>
				  </Form>
			  	</Col>
			</Grid>
   		</div>
    );
  }
}