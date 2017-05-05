import React from "react";
import { Link } from "react-router-dom";
import { Grid, Row, Col, Clearfix, Image, Thumbnail} from "react-bootstrap";
import HorizontalScroll from "react-scroll-horizontal";

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
	    	<div className="projects-container">
				<Grid fluid>
				    <Row className="show-grid">
					    <Col xs={12} sm={6} md={6} lg={4}>
					    	<Link className="menu-item" to={{pathname: "/project/portus", search: "id=0"}}>
						    	<div className="image-item">
						    	    <Image src={'/images/image-0.png'} alt="Portus" responsive/>
						    	    <h3 className="image-caption">Portus</h3>
						    	     <p>Creates a divider wrapping an image and other children elements.</p>
								</div>
							</Link>
						</Col>
						<Col xs={12} sm={6} md={6} lg={4}>
					      	<Link className="menu-item" to={{pathname: "/project/storytour", search: "id=1"}}>
						      	<div className="image-item">
							  		<Image src={'/images/image-1.png'} alt="Storytour" responsive/>
							  		<h3 className="image-caption">StoryTour</h3>
							  		 <p>Creates a divider wrapping an image and other children elements.</p>
							  	</div>
						  	</Link>
						</Col>
						<Col xs={12} sm={6} md={6} lg={4}>
					      	<Link className="menu-item" to={{pathname: "/project/futurelearn", search: "id=2"}}>
						      	<div className="image-item">
							  		<Image src={'/images/image-2.png'} alt="Futurelearn" responsive/>
							  		<h3 className="image-caption">FutureLearn</h3>
							  		 <p>Description</p>
							  	</div>
						  	</Link>
					  	</Col>
					  	<Col xs={12} sm={6} md={6} lg={4}>
					      	<Link className="menu-item" to={{pathname: "/project/soton-website", search: "id=3"}}>
						      	<div className="image-item">
								  	<Image src={'/images/image-3.png'} alt="Websites" responsive/>
								  	<h3 className="image-caption">Websites</h3>
								  	 <p>Description</p>
								</div>
							</Link>
						</Col>
						<Col xs={12} sm={6} md={6} lg={4}>
					      	<Link className="menu-item" to={{pathname: "/project/soton-blog", search: "id=4"}}>
						      	<div className="image-item">
								  	<Image src={'/images/image-4.png'} alt="Blogs" responsive/>
								  	<h3 className="image-caption">Blogs</h3>
								  	 <p>Description</p>
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