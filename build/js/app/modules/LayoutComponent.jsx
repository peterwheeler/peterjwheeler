import React from "react";
import { Route, Switch, Link } from "react-router-dom";
import { Grid, Row, Col, Clearfix } from "react-bootstrap";
import Breadcrumbs from "react-breadcrumbs";

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
import FutureLearn from "../routes/portfolio/FutureLearn.jsx";
import WSInstitute from "../routes/portfolio/WSInstitute.jsx";
import Websites from "../routes/portfolio/Websites.jsx";
import Blogs from "../routes/portfolio/Blogs.jsx";
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
    const routes = this.props.routes;
    const params = this.props.params;
    const containerStyle = {
      height: "50%"
    };
    return (
      <div className="parent-container">
         <div className="content-container">
            <div className="top-content">
            {/*<div id="breadcrumbs"><Breadcrumbs breadcrumbName="askdasd" routes={routes} params={params} /></div>*/}
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
                    <Route path="/portfolio" exact render={(props) => (
                      <Portfolio/>)}
                    />
                    <Route path="/portfolio/juxtapose" component={Juxtapose}/>
                    <Route path="/portfolio/storytour" component={Storytour}/>
                    <Route path="/portfolio/portus" component={Portus}/>
                    <Route path="/portfolio/futureLearn" component={FutureLearn}/>
                    <Route path="/portfolio/websites" component={Websites}/>
                    <Route path="/portfolio/wsi-institute" component={WSInstitute}/>
                    <Route path="/portfolio/wordpress-blogs" component={Blogs}/>
                    <Route path="/contact" component={Contact}/>
                    <Route path="/coder" component={Coder}/>
                 </Switch>
               </div>
               <FooterComponent />
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