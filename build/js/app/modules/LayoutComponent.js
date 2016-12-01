import React from 'react'
import { Link } from "react-router";
import { Grid, Row, Col, Clearfix } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

import NavComponent from './NavComponent';
import FooterComponent from './FooterComponent';
import SocialComponent from './SocialComponent';

export default class LayoutComponent extends React.Component {
  render() {
    const content = this.props.children;

    const containerStyle = {
     height: "100%",
     width: "100%"
    };
    return (
      <div className="layout-container">
          <Grid fluid style={containerStyle}>
            <Row className="show-grid" style={containerStyle}>
              <Col xs={12}>
              <div className="social-container"><SocialComponent /></div>
              </Col>
              <Clearfix></Clearfix>
              <Col md={3} xsHidden smHidden>
                <div className="nav-container"><NavComponent /></div>
              </Col>
              <Col xs={12} sm={12} md={9}>
                <div className="content-container">{content}</div>
              </Col>
            </Row>
          </Grid>  
      </div>
      )
    }
}