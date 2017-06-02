import React from 'react';
import { Link } from "react-router-dom";
import { Grid, Row, Col, Clearfix, Image } from "react-bootstrap";

import PortfolioChanger from "../../components/PortfolioChanger.jsx";

export default class Portus extends React.Component {
	constructor(props) {
	    super(props);
	};
	render() {
		return (
			<div className="project-container">
				<PortfolioChanger previousPage={"juxtapose"} nextPage={"lifelong"} />
				<Grid fluid>
					<Row>
						<Col xs={10} xsOffset={1} md={6} mdOffset={0} mdPush={5} className="project-image">
							<Image src="../images/portus/image-1.png" responsive />
						</Col>
						<Col xs={10} xsOffset={1} md={4} mdOffset={1} mdPull={6} className="project-headline">
							<h1>Portus Tour</h1>
							<h3 className="light-text">Client: <i>The Portus Project</i></h3>
							<div className="divider"></div>
							<p>To support the work of the Futurelearn course I was commissioned to create an interactive story tour with the main purpose of providing users with key information about the archaeological site of Portus, for which the online course was focused on.</p>
							<h3 className="link"><a href="https://tour.portusproject.org">View site</a></h3>
						</Col>
					</Row>
					<Row>
						<Col xs={10} xsOffset={1} md={8} mdOffset={2} className="project-details project-text">
							<h2>Details</h2>
							<p>The key elements of the storytelling for this web application were the periodic changes that have been recorded across the archaeological site. These changes were seen as fundamental to a learner's understanding of Portus. Meeting with the client led to interesting discussions about the type of information that could be passed to the public and what was considered still archaeologically sensitive data. Four key historic periods were identified and a modern tour was also added to deal with displaying the site as it is today. The key areas of interest pinpointed based on the information from the Futurelearn course. One point was expressed by the client - that the site could also act as an interactive element for the the public outreach programme for the Project and therefore needed to cater for more than just the learners of the online course.</p>
						</Col>
					</Row>
					<Row className="project-gallery">
						<Col xs={10} xsOffset={1} md={8} mdOffset={2} className="project-text">
							<h3>Layout</h3>
							<p>After discussing the purpose of the application I did a background check on what tools were already available. Some research into available these toolkits highlighted <a href="https://storymap.knilab.com/">StoryMap</a> by Knightlabs as a good starting point. Wireframing using the layout of the toolkit and the other aspects desired for the tour eventually led me to something that was agreed on by the client. This was a clear, open interaction with side menus allowing for changes to the period and map elements.</p>
						</Col>
						<Col xs={10} xsOffset={1} md={6} mdOffset={3} className="project-image">
							<Image src="../images/portus/wireframe-1.png" responsive />
						</Col>
						<Col xs={10} xsOffset={1} md={8} mdOffset={2} className="project-text">
							<p>The maps were considered vital to the overall success of the appearance of the site. Simplestic maps were created at the outset in order help with the development process. These would also act as line drawing plans that users could fallback to in case they required more simplistic illustrations.<br/><br/><a href="http://artasmedia.com">ArtasMedia</a> was requested to produce the 3D reconstructed maps of Portus for the website. Four maps were produced in total, one for each of the historic periods being used in the tour. Each map highlighed the key buildings and features from that period, which would then be complemented by a marker from the mapping system.</p>
						</Col>
						<Col xs={10} xsOffset={1} md={6} mdOffset={3} className="project-image">
							<Image src="../images/portus/image-4.png" responsive />
						</Col>
					</Row>
					<Row className="project-gallery">
						<Col xs={10} xsOffset={1} md={8} mdOffset={2} className="project-text">
							<h3>Design</h3>
							<p>The sidebar menu were the primary interactive element of the site. They give users the ability to change the either the tour or maps and overlays with ease. However, once selections have been made they can be minimised in order for the full extent of the screen to be used for viewing the map and related text content.</p>
						</Col>
						<Col xs={10} xsOffset={1} md={6} mdOffset={3} className="project-image">
							<Image src="../images/portus/image-2.png" responsive />
						</Col>
					</Row>
					<Row className="project-gallery">
						<Col xs={10} xsOffset={1} md={8} mdOffset={2} className="project-text">
							<p>In addition to the five map tours, an separate timeline tour was created. The intention of this tour was to discuss the key periods of change or event at Portus that occurred after the Roman period. This included much of the modern archaeological work that has been done at the site. Again <a href="https://timeline.knilab.com/">Timeline</a> by Knightlabs was chosen because of the simple functionality and the close UX similarities to that of the Storymap. This timeline was seen as enabling users to gain a better understanding of how the site has been investigated and researched over the previous number of years.</p>
						</Col>
						<Col xs={10} xsOffset={1} md={6} mdOffset={3} className="project-image">
							<Image src="../images/portus/image-3.png" responsive />
						</Col>
					</Row>
					<Row className="project-gallery">
						<Col xs={10} xsOffset={1} md={8} mdOffset={2} className="project-text">
							<h3>Mobile</h3>
							<p>The application was also built with a strong mobile functionality in mind. The layout was alternated from the original Knightlabs layout in order to expand the map are and allow users to view the map of Portus in fullscreen. Clicking on any marker would then bring the user to the related text content. A simple icon at the top of the screen allows users to switch between both the text content and the map cotent.<br/><br/>Both slideout menus remain with additional features, exclusive to mobile, such as the location aware feature being made prominent in the sidebar. The geolocator allows for anyone visiting the site today to move through the site and find their position within tour maps.</p>
						</Col>
						<Col xs={10} xsOffset={1} md={3} mdOffset={3} className="project-image">
							<Image src="../images/portus/image-5.png" responsive />
						</Col>
						<Col xs={10} xsOffset={1} md={3} mdOffset={0} className="project-image">
							<Image src="../images/portus/image-6.png" responsive />
						</Col>
					</Row>
					<Row className="project-gallery">
						<Col xs={10} xsOffset={1} md={8} mdOffset={2} className="project-text">
						<h3>Languages</h3>
							<p>The site of Portus is located just west of Rome, Italy. It was therefore expected that a proportion of users, either through the Futurelearn course or otherwise would be native Italian speakers. A multi-language site was therefore a vital part of the design. This is another reason why AngularJS was chosen as the building framework, as it has strong i18n/l10n support through additional <a href="https://angular-translate.github.io/">modules</a>. Localisation of the application based on location enabled Italian or English to be chosen based on the user's world location, however a streamless transition could also be made between languages if desired.</p>
						</Col>
						<Col xs={10} xsOffset={1} md={6} mdOffset={3} className="project-image">
							<Image src="../images/portus/image-3.png" responsive />
						</Col>
					</Row>
					<Row>
						<Col xs={10} xsOffset={1} md={8} mdOffset={2} className="project-result project-text">
							<h2>Results</h2>
							<p>This application has been the highlight of my development work so far, however, I feel it is only the beginning and wish to further this application with future projects that add to this concept of heritage web tours. The result of this work was a highly valuable application which on running in conjunction with the Futurelearn course proved invaluable to many users. Feedback was positive with further suggestions being made for future applications for the site. Overall, it enabled users to gain a spatial understanding of the site while also getting more direct information on each individual archaeological building and feature.
							</p>
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