import React from 'react';
import { Route, Switch } from "react-router-dom";
import { Grid, Row, Col, Clearfix } from 'react-bootstrap';
import Breadcrumbs from 'react-breadcrumbs';

import BreadComponent from './BreadComponent.jsx';
import NavComponent from './NavComponent.jsx';
import FooterComponent from './FooterComponent.jsx';
import SocialComponent from './SocialComponent.jsx';
import ProgressComponent from './ProgressComponent.jsx';

import Home from '../routes/Home.jsx';
import About from '../routes/About.jsx';
import Projects from '../routes/Projects.jsx';
import Project from '../routes/projects/Project.jsx';
import Coder from '../routes/Coder.jsx';

export default class LayoutComponent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      loadProgress: 0
    };
  }

  componentDidMount() {
    this.setState({
      loadProgress: 0.5
    })
  }

  render() {
    const routes = this.props.routes;
    const params = this.props.params;
    const containerStyle = {
      height: "100%"
    };
    return (
      <div className="parent-container">
        <div className="content-container">
          <div className="top-content">
            {/*<div id="breadcrumbs"><Breadcrumbs breadcrumbName="askdasd" routes={routes} params={params} /></div>*/}
            <div className="nav-container"><NavComponent load={this.state.loadProgress}/></div>
          </div>
          <div className="middle-content" id="slanted-container">
            <ProgressComponent load={this.state.loadProgress}/>
            <div className="middle-straight">
              <div className="middle-content-container">
                <Switch>
                  <Route path="/" exact component={Home}></Route>
                  <Route path="/projects" exact component={Projects}/>
                  <Route path="/projects/:projectID" component={Project}/>
                  <Route path="/coder" component={Coder}/>
                </Switch>
              </div>
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