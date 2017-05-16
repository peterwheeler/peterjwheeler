import React from "react";
import { Link } from "react-router-dom";
import { Grid, Row, Col, Clearfix, Image, Thumbnail} from "react-bootstrap";
import HorizontalScroll from "react-scroll-horizontal";

export default class Portfolio extends React.Component {
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
					    	<Link className="menu-item" to={{pathname: "/portfolio/juxtapose", search: "id=0"}}>
						    	<div className="image-item">
						    	    <Image src={'/images/juxtapose/image-1.png'} alt="Juxtapose" responsive/>
						    	    <h3 className="image-caption">Multiselect Juxtapose</h3>
						    	     <p>Interactive image comparison toolkit.</p>
								</div>
							</Link>
						</Col>
					    <Col xs={12} sm={6} md={6} lg={4}>
					    	<Link className="menu-item" to={{pathname: "/portfolio/portus", search: "id=0"}}>
						    	<div className="image-item">
						    	    <Image src={'/images/portus/image-1.png'} alt="Portus" responsive/>
						    	    <h3 className="image-caption">Portus</h3>
						    	     <p>Interactive maps and tour of the archaeological site of Portus.</p>
								</div>
							</Link>
						</Col>
						<Col xs={12} sm={6} md={6} lg={4}>
					      	<Link className="menu-item" to={{pathname: "/portfolio/lifelong", search: "id=4"}}>
						      	<div className="image-item">
								  	<Image src={'/images/lifelong/image-1.png'} alt="Lifelong Learning" responsive/>
								  	<h3 className="image-caption">Lifelong Learning</h3>
								  	 <p>Website redesign for the Lifelong Learning centre at the University of Southampton.</p>
								</div>
							</Link>
						</Col>
						<Col xs={12} sm={6} md={6} lg={4}>
					      	<Link className="menu-item" to={{pathname: "/portfolio/wsi-institute", search: "id=4"}}>
						      	<div className="image-item">
								  	<Image src={'/images/wsi/image-1.png'} alt="Web Science Institute" responsive/>
								  	<h3 className="image-caption">Web Science Institute</h3>
								  	 <p>Creation of a new website for the WSI at the University of Southampton.</p>
								</div>
							</Link>
						</Col>
						<Col xs={12} sm={6} md={6} lg={4}>
					      	<Link className="menu-item" to={{pathname: "/portfolio/archaeology", search: "id=4"}}>
						      	<div className="image-item">
								  	<Image src={'/images/archaeology/image-1.png'} alt="Blogs" responsive/>
								  	<h3 className="image-caption">Archaeology department blog</h3>
								  	 <p>WordPress blog following the research of the archaeological department at the University of Southampton.</p>
								</div>
							</Link>
						</Col>
						<Col xs={12} sm={6} md={6} lg={4}>
					      	<Link className="menu-item" to={{pathname: "/portfolio/acrg-wordpress", search: "id=4"}}>
						      	<div className="image-item">
								  	<Image src={'/images/acrg/image-1.png'} alt="Blogs" responsive/>
								  	<h3 className="image-caption">ACRG blog</h3>
								  	 <p>WordPress blog belonging to the Archaeological Computing Research Group.</p>
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