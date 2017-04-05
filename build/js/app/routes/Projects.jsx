import React from "react";
import { Link } from "react-router-dom";
import { Grid, Row, Col, Clearfix, Image, Carousel} from "react-bootstrap";
import { Scrollbars } from "react-custom-scrollbars";
import ReactScrollbar from "react-scrollbar-js";
import MediaQuery from "react-responsive";

import HorizontalScroll from "C:/Users/pw8g08/hubiC/webroot/htdocs/literatim/build/js/react-scroll-horizontal/react-scroll-horizontal.js"

export default class Projects extends React.Component {
	constructor(props) {
	    super(props);

	    this.state = {hoverLink: ""};

		this.handleHover = this.handleHover.bind(this);
		this.handleOut = this.handleOut.bind(this);
	}

	handleHover(evt) {
	    const style = {
			display: "table-cell"
		};
	    this.props.updateStyle(style)
		var url = evt.currentTarget.href;
		var href = url.split("/projects")[1];
	    var evtValues = {"href": "/project" + href, "name": evt.target.alt};
	    this.props.updateProject(evtValues)
	}

	handleOut() {
		const style = {
			display: "none"
		};
	    this.props.updateStyle(style)
	}

  	render() {
  		const myScrollbar = {
			"width": "100vw",
			"height": "100vh"
		};
	    return (
	    	<div className="gallery-container">
				<MediaQuery maxWidth={1023} className="mobile-gallery" component="div">
					<Grid fluid>
						<Row className="show-grid">
							<h3 className="image-caption">Projects</h3>
						</Row>
					    <Row className="show-grid">
					    	<Link className="menu-item" to={{pathname: "/project/portus", search: "id=0"}}>
						    	<div className="image-item">
						    	    <h3 className="image-caption">First slide label</h3>
									<Image src={'/images/image-0.png'} alt="Portus" style={{"height" : "50vh", "width": "auto"}}/>
								</div>
							</Link>
					    </Row>
					    <Row className="show-grid">
					      	<Link className="menu-item" to={{pathname: "/project/storytour", search: "id=1"}}>
						      	<div className="image-item">
						      		<h3 className="image-caption">First slide label</h3>
							  		<Image src={'/images/image-1.png'} alt="Storytour" style={{"height" : "50vh", "width": "auto"}}/>
							  	</div>
						  	</Link>
					    </Row>
					    <Row className="show-grid">
					      	<Link className="menu-item" to={{pathname: "/project/futurelearn", search: "id=2"}}>
						      	<div className="image-item">
						      		<h3 className="image-caption">First slide label</h3>
							  		<Image src={'/images/image-2.png'} alt="Futurelearn" style={{"height" : "50vh", "width": "auto"}}/>
							  	</div>
						  	</Link>
					    </Row>
					    <Row className="show-grid">
					      	<Link className="menu-item" to={{pathname: "/project/soton-website", search: "id=3"}}>
						      	<div className="image-item">
						      		<h3 className="image-caption">First slide label</h3>
								  	<Image src={'/images/image-3.png'} alt="Websites" style={{"height" : "50vh", "width": "auto"}}/>
								</div>
							</Link>
					    </Row>
					    <Row className="show-grid">
					      	<Link className="menu-item" to={{pathname: "/project/soton-blog", search: "id=4"}}>
						      	<div className="image-item">
						      		<h3 className="image-caption">First slide label</h3>
								  	<Image src={'/images/image-4.png'} alt="Blogs" style={{"height" : "50vh", "width": "auto"}}/>
								</div>
							</Link>
					    </Row>
					</Grid>
		    	</MediaQuery>
		    	<MediaQuery minWidth={1024} className="desktop-gallery" component="div">
			    	<HorizontalScroll scrollValue={this.props.scrollMove}>
				    	<div className="projects-container" onMouseOut={this.handleOut}>
				    		<ul className="floats-gallery">
				    			<li className="slanted">
					    			<div className="unslanted">
									  	<Link className="menu-item" to={{pathname: "/project/portus", search: "id=0"}} onMouseOver={this.handleHover}>
									  		<Image src={'/images/portus-tour.png'} alt="Portus" style={{"height" : "auto", "width": "1366px"}}/>
									  	</Link>
									</div>	
								</li>
								<li className="slanted">
									<div className="unslanted">
									  <Link className="menu-item" to={{pathname: "/project/storytour", search: "id=1"}} onMouseOver={this.handleHover}>
									  	<Image src={'/images/storytour.png'} alt="Storytour" style={{"height" : "auto", "width": "1366px"}}/>
									  </Link>						  
									</div>	
								</li>
								<li className="slanted">
									<div className="unslanted">
									  <Link className="menu-item" to={{pathname: "/project/futurelearn", search: "id=2"}} onMouseOver={this.handleHover}>
									  	<Image src={'/images/futurelearn.png'} alt="Futurelearn" style={{"height" : "auto", "width": "1366px"}}/>
									  </Link>
									</div>	
								</li>
								<li className="slanted">
									<div className="unslanted">
									  <Link className="menu-item" to={{pathname: "/project/soton-website", search: "id=3"}} onMouseOver={this.handleHover}>
									  	<Image src={'/images/soton-website.png'} alt="Websites" style={{"height" : "auto", "width": "1366px"}}/>
									  </Link>						  
									</div>	
								</li>
								<li className="slanted">
									<div className="unslanted">
									  <Link className="menu-item" to={{pathname: "/project/soton-blog", search: "id=4"}} onMouseOver={this.handleHover}>
									  	<Image src={'/images/soton-blog.png'} alt="Blogs" style={{"height" : "auto", "width": "1366px"}}/>
									  </Link>						  
									</div>	
								</li>
							</ul>
						</div>
					</HorizontalScroll>
				</MediaQuery>
			</div>
	    );
	}
}