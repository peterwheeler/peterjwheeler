import React from 'react';
import { Link } from "react-router-dom";
import { Grid, Row, Col, Clearfix, Image } from "react-bootstrap";

import PortfolioChanger from "../../components/PortfolioChanger.jsx";

export default class ACRG extends React.Component {
	constructor(props) {
	    super(props);
	};
	render() {
		return (
			<div className="project-container">
				<PortfolioChanger previousPage={"archaeology-wordpress"} />
				<Grid fluid>
					<Row>
						<Col xs={10} xsOffset={1} md={6} mdOffset={0} mdPush={5} className="project-image">
							<Image src="../images/acrg/image-1.png" responsive />
						</Col>
						<Col xs={10} xsOffset={1} md={4} mdOffset={1} mdPull={6} className="project-headline">
							<h1>ACRG WordPress</h1>
							<h3 className="light-text">Client: <i>University of Southampton</i></h3>
							<div className="divider"></div>
							<p>The ACRG are an internationally renowned research group based at the University of Southampton. The blog was seen as key element in the informal dissemination of news and research from this departmental group.</p>
							<h3 className="link"><a href="http://acrg.soton.ac.uk/">View site</a></h3>
						</Col>
					</Row>
					<Row>
						<Col xs={10} xsOffset={1} md={8} mdOffset={2} className="project-details">
							<h2>Details</h2>
							<p>I was requested to update the blog space refresh all content assist in the design layout. Working alongside the developer at the time I coordinated the content to be used for the site. I filtered content from the old site, while acquiring suitable new material and imagery.</p>
						</Col>
					</Row>
					<Row className="project-gallery">
						<Col xs={10} xsOffset={1} md={6} mdOffset={3} className="project-image">
							<Image src="../images/acrg/image-2.png" responsive />
						</Col>
						<Col xs={10} xsOffset={1} md={8} mdOffset={2}>
							<p>A key part of this system was the tagging, categorising and social media interactions for each page. Collating this and providing a strong linking between each blog post helped increase traffic between similar topics and drive the traffic throught the site.</p>
						</Col>
					</Row>
					<Row>
						<Col xs={10} xsOffset={1} md={8} mdOffset={2} className="project-result">
							<h2>Results</h2>
							<p>The update to this website encouraged a new wave of posts to be published and an increase in the effort by memebers of the group to produce public outreach pieces. Continued effort by myself in the content management and education of group members in how to use the WordPress CMS properly aided this process.</p>
						</Col>
					</Row>
				</Grid>
		</div>
		);
	};
}

if (module.hot) {
  module.hot.accept();
}