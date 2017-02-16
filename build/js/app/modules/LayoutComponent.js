import React from 'react'
import { Link } from "react-router";
import { Grid, Row, Col, Clearfix } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import Breadcrumbs from 'react-breadcrumbs';

import BreadComponent from './BreadComponent';
import NavComponent from './NavComponent';
import FooterComponent from './FooterComponent';
import SocialComponent from './SocialComponent';

export default class LayoutComponent extends React.Component {
  render() {
    const content = this.props.children;
    const routes = this.props.routes;
    const params = this.props.params;
    const containerStyle = {
     height: "100%"
    };
    return (
      <div className="parent-container">
        <div className="content-container">
          <div className="top-content">
            <div id="breadcrumbs"><Breadcrumbs breadcrumbName="askdasd" routes={routes} params={params} /></div>
            <div className="nav-container"><NavComponent /></div>
          </div>
          <div className="middle-content">
            <div className="middle-straight">
              <div className="middle-content-container">{content}</div>
            </div>
          </div>
          <div className="bottom-content">
            <div className="social-container"><SocialComponent /></div>
          </div>
        </div>
      </div>
      )
    }
}