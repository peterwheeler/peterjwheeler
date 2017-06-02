import React from 'react';
import { Link } from "react-router-dom";
import { Grid, Row, Col, Clearfix, Image } from "react-bootstrap";

import PortfolioChanger from "../../components/PortfolioChanger.jsx";

export default class Archaeology extends React.Component {
	constructor(props) {
	    super(props);
	};
	render() {
		return (
			<div className="project-container">
				<PortfolioChanger previousPage={"ws-institute"} nextPage={"acrg-wordpress"} />
				<Grid fluid>
					<Row>
						<Col xs={10} xsOffset={1} md={6} mdOffset={0} mdPush={5} className="project-image">
							<Image src="../images/archaeology/image-1.png" responsive />
						</Col>
						<Col xs={10} xsOffset={1} md={4} mdOffset={1} mdPull={6} className="project-headline">
							<h1>Archaeology Department WordPress</h1>
							<h3 className="light-text">Client: <i>University of Southampton</i></h3>
							<div className="divider"></div>
							<p>This blog site provides an informal insight into the research and other activities of members of the Archaeology Department at the University of Southampton. The blog brings together the various work blogs written by members of the Department, and also the blogs run by individual centres and other groups.</p>
							<h3 className="link"><a href="https://generic.wordpress.soton.ac.uk/archaeology/">View site</a></h3>
						</Col>
					</Row>
					<Row>
						<Col xs={10} xsOffset={1} md={8} mdOffset={2} className="project-details">
							<h2>Details</h2>
							<p>I was requested to update the blog space and refresh all content while also assisting in the new design layout. Working alongside the developers from the University I coordinated the collection of content to be used for the site. I filtered content from any previous sites, while acquiring suitable new content and media content.<br/><br/>The design of the site was to follow the branding of all University websites. The principal colour of the site was agreed as olive green, and assigned to all departmental related blogs. A simple cards layout was chosen to allow numerous posts to be seen at any one time with a responsive design fitting to any device. The cards take two thirds of the available space to the left with additional space for social media content and category or tags controls to filter results on the right.</p>
						</Col>
					</Row>
					<Row className="project-gallery">
						<Col xs={10} xsOffset={1} md={6} mdOffset={3} className="project-image">
							<Image src="../images/archaeology/image-2.png" responsive />
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