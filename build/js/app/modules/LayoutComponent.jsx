import React from "react";
import { Route, Switch, Link } from "react-router-dom";
import { Grid, Row, Col, Clearfix } from "react-bootstrap";
import Breadcrumbs from "react-breadcrumbs";
import ScrollUp from 'react-scroll-up';

import BreadComponent from "./BreadComponent.jsx";
import NavComponent from "./NavComponent.jsx";
import FooterComponent from "./FooterComponent.jsx";
import ProgressComponent from "./ProgressComponent.jsx";
import ParallaxComponent from './ParallaxComponent.jsx';

import Home from "../routes/Home.jsx";
import Portfolio from "../routes/Portfolio.jsx";
import Juxtapose from "../routes/portfolio/Juxtapose.jsx";
import Storytour from "../routes/portfolio/Storytour.jsx";
import Portus from "../routes/portfolio/Portus.jsx";
import Lifelong from "../routes/portfolio/Lifelong.jsx";
import WSInstitute from "../routes/portfolio/WSInstitute.jsx";
import Archaeology from "../routes/portfolio/Archaeology.jsx";
import ACRG from "../routes/portfolio/ACRG.jsx";
import Contact from "../routes/Contact.jsx";
import Coder from "../routes/Coder.jsx";

export default class LayoutComponent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      loadProgress: 0,
      nameProject: "",
      hrefProject: "",
      projectsStyle: {
        display: "none"
      },
      scrollProgress: 0,
      viewUpdate: this.props.location.pathname
    };

    this.handleProjectUpdate = this.handleProjectUpdate.bind(this);
    this.handleProjectStyle = this.handleProjectStyle.bind(this);
    this.scrollUpdate = this.scrollUpdate.bind(this);
  }

  componentDidMount() {
    this.setState({
      loadProgress: 0.5
    });
  }

  handleProjectUpdate(projectValue) {
    this.setState({
        hrefProject: projectValue.href,
        nameProject: projectValue.name
    });
  }

  handleProjectStyle(styleValue) {
      this.setState({
        projectsStyle: styleValue
    });
  }

  scrollUpdate(scrollValue){
      this.setState({
        scrollProgress: scrollValue
      });
  }

  render() {
        const routes = [{
            path: '/portfolio',
            exact: true,
            component: Portfolio,
          },{
            id: '1',
            path: '/portfolio/juxtapose',
            component: Juxtapose
          },{
            id: '2',
            path: '/portfolio/portus',
            component: Portus
          },{
            id: '3',
            path: '/portfolio/lifelong',
            component: Lifelong
          },{
            id: '4',
            path: '/portfolio/ws-institute',
            component: WSInstitute
          },{
            id: '5',
            path: '/portfolio/archaeology-wordpress',
            component: Archaeology
          },{
            id: '6',
            path: '/portfolio/acrg-wordpress',
            component: ACRG
          },{
            path: '/contact',
            component: Contact
          }]

        // wrap <Route> and use this everywhere instead, then when
        // sub routes are added to any route it'll work
        const RouteWithSubRoutes = (route, id) => (
          <Route path={route.path} render={props => (
            // pass the sub-routes down to keep nesting
            <route.component {...props} id={route.id} subRoutes={route.routes}/>
          )}/>
        )

        return (
          <div className="parent-container">
               <div className="content-container">
                  <div className="top-content">
                    <div className="navigation-container">
                      <NavComponent
                        load={this.state.loadProgress}
                        currentProjectName={this.state.nameProject}
                        currentProjectHref={this.state.hrefProject}
                        submenuStyle={this.state.projectsStyle}
                      />
                    </div>
                  </div>
                  <div className="middle-content">
                    <ProgressComponent load={this.state.loadProgress}/>
                      <div className="middle-content-container">
                        <Switch>
                          <Route path="/" exact component={Home}></Route>
                          {routes.map((route, i) => (
                            <RouteWithSubRoutes key={i} {...route}/>
                          ))}
                        </Switch>
                      </div>
                    <ParallaxComponent />
                    <FooterComponent />
                  </div>
                  <div id="scroll-component">
                  <ScrollUp showUnder={20} easing="easeOutCubic" duration={500}><i className="fa fa-chevron-up scroll-arrow" aria-hidden="true"></i></ScrollUp>
                  </div>
                 {/*<div className="bottom-content">
                     <ParallaxComponent />
                  </div>*/}
               </div>
            </div>
          )
    }
}

if (module.hot) {
  module.hot.accept();
}