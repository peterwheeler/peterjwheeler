import React from 'react';
import queryString from 'query-string';
import { Grid, Row, Col, Clearfix, Image } from "react-bootstrap";

export default class Portus extends React.Component {
	constructor(props, context) {
	    super(props, context);
	};
	componentDidMount() {
		const parsed = queryString.parse(this.props.location.search);
	};
	render() {
		return (
			<div className="project-container">
				<Grid fluid>
					<Row>
						<Col xs={10} xsOffset={1} md={6} mdOffset={0} mdPush={5} className="project-image">
							<Image src="../images/portus/image-1.png" responsive />
						</Col>
						<Col xs={10} xsOffset={1} md={4} mdOffset={1} mdPull={6} className="project-headline">
							<h1>Portus Tour</h1>
							<h3 className="light-text">Client: <i>The Portus Project</i></h3>
							<div className="divider"></div>
							<p>To support the work of the Futurelearn course I was commissioned with creating an interactive story telling application. The main purpose of this was to provide users with key information about the archaeological site of Portus, for which the online course was focused on.</p>
							<h3 className="link"><a href="https://tour.portusproject.org">View site</a></h3>
						</Col>
					</Row>
					<Row>
						<Col xs={10} xsOffset={1} md={8} mdOffset={2} className="project-details">
							<h2>Details</h2>
							<p>The key elements of the storytelling were the periodic changes that have been recorded across the archaeological site. The historic periods were identified and the key areas of interest pinpointed. Research into available toolkits highlighted StoryMap by Knightlabs as a good starting point. I wireframed a variety of options, eventually settling on a clear, open interaction with side menus allowing for changes to the period and map elements.</p>
						</Col>
					</Row>
					<Row className="project-gallery">
						<Col xs={10} xsOffset={1} md={6} mdOffset={0} mdPush={5}>
							<Image src="../images/portus/wireframe-1.png" responsive />
						</Col>
						<Col xs={10} xsOffset={1} md={4} mdOffset={1} mdPull={6}>
							<p>Nullam sapien augue, gravida nec dolor ac, vestibulum pulvinar massa. Curabitur ac justo nisl.<br/><br/>Fusce dapibus, libero vel fringilla dictum, magna tellus pellentesque nulla, feugiat sagittis dolor turpis nec tellus. Duis bibendum lacus tellus, et malesuada turpis bibendum vitae.</p>
						</Col>
					</Row>
					<Row className="project-gallery">
						<Col xs={10} xsOffset={1} md={6} mdOffset={1}>
							<Image src="../images/image-1.png" responsive />
						</Col>
						<Col xs={10} xsOffset={1} md={4} mdOffset={0}>
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