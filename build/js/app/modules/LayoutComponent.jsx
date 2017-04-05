import React from "react";
import { Route, Switch, Link } from "react-router-dom";
import { Grid, Row, Col, Clearfix } from "react-bootstrap";
import Breadcrumbs from "react-breadcrumbs";

import BreadComponent from "./BreadComponent.jsx";
import NavComponent from "./NavComponent.jsx";
import FooterComponent from "./FooterComponent.jsx";
import SocialComponent from "./SocialComponent.jsx";
import ProgressComponent from "./ProgressComponent.jsx";

import Home from "../routes/Home.jsx";
import About from "../routes/About.jsx";
import Projects from "../routes/Projects.jsx";
import Project from "../routes/projects/Project.jsx";
import Coder from "../routes/Coder.jsx";

export default class LayoutComponent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      loadProgress: 0,
      nameProject: "",
      hrefProject: "",
      projectsStyle: {
        display: "table-cell"
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
          <div className="top-div" id="top-div-id"></div>
          <div className="middle-content" id="slanted-container">
            <ProgressComponent load={this.state.loadProgress}/>
            <div className="middle-content-container">
              <Switch>
                <Route path="/" exact component={Home}></Route>
                <Route path="/projects" exact render={(props) => (
                  <Projects updateProject={this.handleProjectUpdate} updateStyle={this.handleProjectStyle} scrollMove={this.state.scrollProgress}/>)}
                />
                <Route path="/project/:projectID" component={Project}/>
                <Route path="/coder" component={Coder}/>
              </Switch>
            </div>
          </div>
          <div className="bottom-content">
            <div className="social-container">
              <SocialComponent updateView={this.state.viewUpdate} updateScroll={this.scrollUpdate}/>
            </div>
          </div>
          <div className="bottom-div" id="bottom-div-id"></div>
        </div>
      </div>
      )
    }
}