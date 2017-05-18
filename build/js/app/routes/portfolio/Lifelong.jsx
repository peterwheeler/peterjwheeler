import React from 'react';
import { Link } from "react-router-dom";
import { Grid, Row, Col, Clearfix, Image } from "react-bootstrap";

import PortfolioChanger from "../../components/PortfolioChanger.jsx";

export default class Lifelong extends React.Component {
	constructor(props) {
	    super(props);
	};
	render() {
		return (
			<div className="project-container">
				<PortfolioChanger previousPage={"portus"} nextPage={"ws-institute"} />
				<Grid fluid>
					<Row>
						<Col xs={10} xsOffset={1} md={6} mdOffset={0} mdPush={5} className="project-image">
							<Image src="../images/lifelong/image-1.png" responsive />
						</Col>
						<Col xs={10} xsOffset={1} md={4} mdOffset={1} mdPull={6} className="project-headline">
							<h1>Lifelong Learning</h1>
							<h3 className="light-text">Client: <i>University of Southampton</i></h3>
							<div className="divider"></div>
							<p>The academic coordination of Lifelong Learning provide a distinctive educational offer to the general public that reflects the strength of research carried out at the University of Southampton. They deliver excellent courses and events to staff, students and members of the local community.<br/><br/>With the growth in the number of their yearly courses I was requested by Lifelong Learning to carry out a revamp of the entire site.</p>
							<h3 className="link"><a href="http://www.southampton.ac.uk/lifelong/">View site</a></h3>
						</Col>
					</Row>
					<Row>
						<Col xs={10} xsOffset={1} md={8} mdOffset={2} className="project-details">
							<h2>Details</h2>
							<p>Again the website was to be designed using the University of Southampton CMS – sitepublisher. After carrying out initial meetings with Lifelong Learning staff I proceeded to wireframe example pages with the common components found in the CMS. The key aspects of this project that were considered were the categorisation and clear presentation of all available courses. Also in consideration was providing clear and accurate information about the price, availability and timing of each course.</p>
						</Col>
					</Row>
					<Row className="project-gallery">
						<Col xs={10} xsOffset={1} md={6} mdOffset={3} className="project-image">
							<Image src="../images/lifelong/wireframe-1.png" responsive />
						</Col>
						<Col xs={10} xsOffset={1} md={8} mdOffset={2}>
							<p>Nullam sapien augue, gravida nec dolor ac, vestibulum pulvinar massa. Curabitur ac justo nisl.<br/><br/>Fusce dapibus, libero vel fringilla dictum, magna tellus pellentesque nulla, feugiat sagittis dolor turpis nec tellus. Duis bibendum lacus tellus, et malesuada turpis bibendum vitae.</p>
						</Col>
					</Row>
					<Row className="project-gallery">
						<Col xs={10} xsOffset={1} md={6} mdOffset={3} className="project-image">
							<Image src="../images/lifelong/image-2.png" responsive />
						</Col>
						<Col xs={10} xsOffset={1} md={8} mdOffset={2}>
							<p>Nullam sapien augue, gravida nec dolor ac, vestibulum pulvinar massa. Curabitur ac justo nisl.<br/><br/>Fusce dapibus, libero vel fringilla dictum, magna tellus pellentesque nulla, feugiat sagittis dolor turpis nec tellus. Duis bibendum lacus tellus, et malesuada turpis bibendum vitae.</p>
						</Col>
					</Row>
					<Row className="project-gallery">
						<Col xs={10} xsOffset={1} md={6} mdOffset={3} className="project-image">
							<Image src="../images/lifelong/image-3.png" responsive />
						</Col>
						<Col xs={10} xsOffset={1} md={8} mdOffset={2}>
							<p>Nullam sapien augue, gravida nec dolor ac, vestibulum pulvinar massa. Curabitur ac justo nisl.<br/><br/>Fusce dapibus, libero vel fringilla dictum, magna tellus pellentesque nulla, feugiat sagittis dolor turpis nec tellus. Duis bibendum lacus tellus, et malesuada turpis bibendum vitae.</p>
						</Col>
					</Row>
					<Row>
						<Col xs={10} xsOffset={1} md={8} mdOffset={2} className="project-result">
							<h2>Results</h2>
							<p>The results of this work was a highly valuable website which on the running of the Futurelearn course proved invaluable to many users.<br/><br/>StoryTour is an interactive map tour using AngularJS. It was built with two intentions in mind – to support the Futurelearn learners and to give information to the archaeological site as users visited the site.</p>
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