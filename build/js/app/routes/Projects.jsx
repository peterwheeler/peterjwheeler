import React from "react";
import { Link } from "react-router-dom";
import { Grid, Row, Col, Clearfix, Image} from "react-bootstrap";
import HorizontalScroll from "react-scroll-horizontal";
import MediaQuery from "react-responsive";

// import HorizontalScroll from "C:/Users/pw8g08/hubiC/webroot/htdocs/literatim/build/js/react-scroll-horizontal/react-scroll-horizontal.js"

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
				<Grid fluid>
					<Row className="show-grid header-div">
						<h1 className="projects-header">Projects</h1>
					</Row>
				    <Row className="show-grid">
					    <Col xs={12} md={6} lg={4}>
					    	<Link className="menu-item" to={{pathname: "/project/portus", search: "id=0"}}>
						    	<div className="image-item">
						    	    <h3 className="image-caption">Portus</h3>
									<Image src={'/images/image-0.png'} alt="Portus" style={{"height" : "auto", "width": "90vw"}}/>
								</div>
							</Link>
						</Col>
						<Col xs={12} md={6} lg={4}>
					      	<Link className="menu-item" to={{pathname: "/project/storytour", search: "id=1"}}>
						      	<div className="image-item">
						      		<h3 className="image-caption">StoryTour</h3>
							  		<Image src={'/images/image-1.png'} alt="Storytour" style={{"height" : "auto", "width": "90vw"}}/>
							  	</div>
						  	</Link>
						</Col>
						<Col xs={12} md={6} lg={4}>
					      	<Link className="menu-item" to={{pathname: "/project/futurelearn", search: "id=2"}}>
						      	<div className="image-item">
						      		<h3 className="image-caption">FutureLearn</h3>
							  		<Image src={'/images/image-2.png'} alt="Futurelearn" style={{"height" : "auto", "width": "90vw"}}/>
							  	</div>
						  	</Link>
					  	</Col>
					  	<Col xs={12} md={6} lg={4}>
					      	<Link className="menu-item" to={{pathname: "/project/soton-website", search: "id=3"}}>
						      	<div className="image-item">
						      		<h3 className="image-caption">Websites</h3>
								  	<Image src={'/images/image-3.png'} alt="Websites" style={{"height" : "auto", "width": "90vw"}}/>
								</div>
							</Link>
						</Col>
						<Col xs={12} md={6} lg={4}>
					      	<Link className="menu-item" to={{pathname: "/project/soton-blog", search: "id=4"}}>
						      	<div className="image-item">
						      		<h3 className="image-caption">Blogs</h3>
								  	<Image src={'/images/image-4.png'} alt="Blogs" style={{"height" : "auto", "width": "90vw"}}/>
								</div>
							</Link>
						</Col>
				    </Row>
				</Grid>
			</div>
	    );
	}
}

if (module.hot) {
  module.hot.accept();
}