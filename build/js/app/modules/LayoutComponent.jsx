import React from "react";
import { Route, Switch, Link } from "react-router-dom";
import { Grid, Row, Col, Clearfix } from "react-bootstrap";
import Breadcrumbs from "react-breadcrumbs";
import ScrollUp from 'react-scroll-up';
import { Preload } from 'react-preload';

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
import About from "../routes/About.jsx";
import Contact from "../routes/Contact.jsx";

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
            path: '/about',
            component: About
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

        const loadingIndicator = (<div className="loader-background"><div className="loader-ring"><div className="loader-ring-light"></div><div className="loader-ring-track"></div></div></div>)
        var images = ["/images/acrg/image-1.png", "/images/acrg/image-2.png", "/images/archaeology/image-1.png", "/images/archaeology/image-2.png", "/images/juxtapose/image-1.png", "/images/juxtapose/image-2.png", "/images/juxtapose/image-3.png", "/images/lifelong/image-1.png", "/images/lifelong/image-2.png", "/images/lifelong/image-3.png", "/images/lifelong/wireframe-1.png", "/images/portus/image-1.png", "/images/portus/image-2.png", "/images/portus/image-3.png", "/images/portus/image-4.png", "/images/portus/image-5.png", "/images/portus/image-6.png", "/images/portus/wireframe-1.png", "/images/wsi/image-1.png", "/images/wsi/image-2.png", "/images/wsi/image-3.png", "/images/wsi/image-4.png", "/images/wsi/image-5.png", "/images/wsi/wireframe-1.png", "/images/silhouttes/silhoutte-1.png", "/images/silhouttes/silhoutte-2.png", "/images/silhouttes/silhoutte-3.png", "/images/silhouttes/silhoutte-4.png", "/images/silhouttes/silhoutte-5.png", "/images/silhouttes/silhoutte-6.png", "/images/silhouttes/silhoutte-7.png", "/images/silhouttes/silhoutte-8.png", "/images/silhouttes/silhoutte-9.png"]

        return (
          <div className="parent-container">
          <Preload loadingIndicator={loadingIndicator} images={images} resolveOnError={true} mountChildren={true}>
               <div className="content-container">
                  <div className="top-content">
                      <NavComponent
                        load={this.state.loadProgress}
                        currentProjectName={this.state.nameProject}
                        currentProjectHref={this.state.hrefProject}
                        submenuStyle={this.state.projectsStyle}
                      />
                  </div>
                  <div className="middle-content">
                      <div className="middle-content-container">
                        <Switch>
                          <Route path="/" exact component={Home}></Route>
                          {routes.map((route, i) => (
                            <RouteWithSubRoutes key={i} {...route}/>
                          ))}
                        </Switch>
                      </div>
                    <div className="bottom-content-container">
                      <ParallaxComponent />
                      <FooterComponent />
                    </div>
                  </div>
                  <div id="scroll-component">
                  <ScrollUp showUnder={20} easing="easeOutCubic" duration={500}><i className="fa fa-chevron-up scroll-arrow" aria-hidden="true"></i></ScrollUp>
                  </div>
                 {/*<div className="bottom-content">
                     <ParallaxComponent />
                  </div>*/}
               </div>
              </Preload>
            </div>
          )
    }
}

if (module.hot) {
  module.hot.accept();
}