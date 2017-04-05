import React from 'react';
import { Link } from "react-router-dom";
import { Grid, Row, Col, Clearfix } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import MediaQuery from "react-responsive";

import SVGComponent from './SVGComponent.jsx';

export default class NavComponent extends React.Component {
	constructor(props) {
	    super(props);

	    this.state = {
	    	mobileOpen: false,
	    	mobileStyle:  {
		        display: "none"
		    },
		    mobileTopContainer: "",
		    mobileBottomContainer: "",
		    mobileSocialContainer: ""
	    };
		this.menuToggle = this.menuToggle.bind(this);
	}

	componentDidMount(){
		this.setState({
      		mobileTopContainer: document.getElementById("top-div-id"),
      		mobileBottomContainer: document.getElementById("bottom-div-id"),
      		mobileSocialContainer: document.getElementById("mobile-social-id")
	    });
	}

	menuToggle() {
		if(this.state.mobileOpen === false) {
			TweenLite.to(this.state.mobileTopContainer, 0.25, {
				top:"-100vh",
				ease:Linear.easeNone,
				onComplete: function(){
								this.setState({
									mobileOpen: true,
									mobileStyle:  {
						        		display: "block"
						    		}
								})
							}.bind(this)
			}),
			TweenLite.to(this.state.mobileBottomContainer, 0.25, {
				bottom:"-110vh", 
				ease:Linear.easeNone,
				onComplete: function(){
								this.state.mobileSocialContainer.style.display = "block"
							}.bind(this)
			});
		} else if (this.state.mobileOpen === true)
			TweenLite.to(this.state.mobileTopContainer, 0.25, {
				top:"-125vh",
				ease:Linear.easeNone,
				onStart: function(){
								this.setState({
									mobileOpen: false,
									mobileStyle:  {
		        						display: "none"
		    						}
								})
							}.bind(this)
			}),
			TweenLite.to(this.state.mobileBottomContainer, 0.25, {
				bottom:"-125vh",
				ease:Linear.easeNone,
				onStart: function(){
								this.state.mobileSocialContainer.style.display = "none"
							}.bind(this)
			});
	}

	render() {
	return (
		<div id="outer-container">
			<MediaQuery maxWidth={1023} className="mobile-navigation" component="div">
				<i className="fa fa-bars fa-2x" aria-hidden="true" onClick={() => this.menuToggle()}></i>
				<div className="mobile-menu" style={this.state.mobileStyle}>
					<Col md={4}>
						<Link to="/" className="menu-item">Literatim</Link>
					</Col>
					<Col md={4}>
						<Link to="/projects" className="menu-item">Projects</Link>
					</Col>
					<Col md={4}>
						<Link to="/coder" className="menu-item">Coder</Link>
					</Col>
				</div>
			</MediaQuery>
	    	<MediaQuery minWidth={1024} className="desktop-navigation">
				<Grid fluid>
					<Row className="show-grid">
						<Col md={4} xsHidden>
							<Link to="/"><SVGComponent load={this.props.load}/></Link>
						</Col>
						<Clearfix/>
						<Col md={4} xsHidden>
							<div className="project-link">
								<div className="projects-static-link">
									<Link to="/projects" className="menu-item">Projects</Link>
								</div>
								<div className="projects-dynamic-link" style={this.props.submenuStyle}>
									<i className="fa fa-angle-right fa-lg" aria-hidden="true"></i>
									<Link to={this.props.currentProjectHref} className="sub-menu-item project-link">{this.props.currentProjectName}</Link>
								</div>
							</div>
						</Col>
						<Clearfix/>
						<Col md={4} xsHidden>
							<Link to="/coder" className="menu-item">Coder</Link>
						</Col>
					</Row>
				</Grid>
	    	</MediaQuery>
	    </div>
		);
	}
}

if (module.hot) {
  module.hot.accept();
}