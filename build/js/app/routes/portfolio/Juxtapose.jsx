import React from 'react';
import { Link } from "react-router-dom";
import { Grid, Row, Col, Clearfix, Image } from "react-bootstrap";

import PortfolioChanger from "../../components/PortfolioChanger.jsx";

export default class Juxtapose extends React.Component {
	constructor(props) {
	    super(props);
	};
	render() {
		return (
			<div className="project-container">
				<PortfolioChanger nextPage={"portus"} />
				<Grid fluid>
					<Row>
						<Col xs={10} xsOffset={1} md={6} mdOffset={0} mdPush={5} className="project-image">
							<Image src="../images/juxtapose/image-1.png" responsive />
						</Col>
						<Col xs={10} xsOffset={1} md={4} mdOffset={1} mdPull={6} className="project-headline">
							<h1>Multi-select Juxtapose</h1>
							<h3 className="light-text">Client: <i>Personal</i></h3>
							<div className="divider"></div>
							<p>JuxtaposeJS is an elegant site designed in response to user’s desire to better under maps produced as part of the Futurelearn course. Its principal function is to allow the sliding comparison of imagery content – in this case map graphics.</p>
							<h3 className="link"><a href="https://tour.portusproject.org">View site</a></h3>
						</Col>
					</Row>
					<Row>
						<Col xs={10} xsOffset={1} md={8} mdOffset={2} className="project-details">
							<h2>Details</h2>
							<p>After analysis and consideration of the user reviews, it was established that a single purpose page would be the best solution to the feedback. Producing a wireframe allowed me to envisage a simple layout that achieved this purpose. Navigation and menu content was kept to a minimum, enabling the maps and the interactive function to keep centre focus.</p>
						</Col>
					</Row>
					<Row className="project-gallery">
						<Col xs={10} xsOffset={1} md={6} mdOffset={3} className="project-image">
							<Image src="../images/juxtapose/image-2.png" responsive />
						</Col>
						<Col xs={10} xsOffset={1} md={8} mdOffset={2}>
							<p>A modern front-end framework, Materialize, was chosen for the layout as it enabled a simple clean navigation. JuxtaposeJS from Knightlabs was forked in order to produce the final resulting multi-selectable features.</p>
						</Col>
					</Row>
					<Row className="project-gallery">
						<Col xs={10} xsOffset={1} md={4} mdOffset={2}>
							<Image src="../images/juxtapose/image-3.png" responsive />
						</Col>
						<Col xs={10} xsOffset={1} md={4} mdOffset={0}>
							<p>Nullam sapien augue, gravida nec dolor ac, vestibulum pulvinar massa. Curabitur ac justo nisl.<br/><br/>Fusce dapibus, libero vel fringilla dictum, magna tellus pellentesque nulla, feugiat sagittis dolor turpis nec tellus. Duis bibendum lacus tellus, et malesuada turpis bibendum vitae.</p>
						</Col>
					</Row>
					<Row>
						<Col xs={10} xsOffset={1} md={8} mdOffset={2} className="project-result">
							<h2>Results</h2>
							<p>The resulting website was a richly informative product which I believe perfectly answers the user feedback. The interactive functions were kept intuitive and easily understood and complimented the capabilities of the original toolkit. Future iterations of the Futurelearn course will undoubtedly benefit this production.</p>
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