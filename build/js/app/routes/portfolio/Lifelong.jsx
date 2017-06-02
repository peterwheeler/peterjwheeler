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
						<Col xs={10} xsOffset={1} md={8} mdOffset={2} className="project-details project-text">
							<h2>Details</h2>
							<p>Again the website was to be designed using the University of Southampton CMS – sitepublisher. After carrying out initial meetings with Lifelong Learning staff I proceeded to wireframe example pages with the common components found in the CMS. The key aspects of this project that were considered were the categorisation and clear presentation of all available courses. Also in consideration was providing clear and accurate information about the price, availability and timing of each course.</p>
						</Col>
					</Row>
					<Row className="project-gallery">
						<Col xs={10} xsOffset={1} md={4} mdOffset={0} mdPush={6} className="project-text">
							<h3>Layout</h3>
							<p>Wireframing using the common components found in Sitepublisher allowed me to get an understanding of how the CMS worked. Presenting these gave the client a clear idea of what was possible with the then available technology and the feedback allowed me to update the wireframes according to their requirements.<br/><br/>
								The key sections of the site were:
								<ul className="project-list">
									<li>About</li>
									<li>Find a course</li>
									<li>Study Days</li>
									<li>News and Events</li>
								</ul>
								Dealing with these as priorty was the first call when designing the website layout. Each one had to be given a prominent place within the site.<br/><br/>The leading navigational item linked to the About section, giving information on the staff member and their roles. The main title section presences the feature news of the institute, where there are more than one a slider is used to rotate the images.<br/><br/>The main selection section allows the user to select the key feature elements for the institute.<br/><br/>The news feed and latest tweets at this point were seen as important for the leaders of the institute, who are avid social media users and want to push its use through the institute website.</p>
						</Col>
						<Col xs={8} xsOffset={2} md={4} mdOffset={1} mdPull={3} className="project-image">
							<Image src="../images/lifelong/wireframe-1.png" responsive />
						</Col>
					</Row>
					<Row className="project-gallery">
						<Col xs={10} xsOffset={1} md={8} mdOffset={2} className="project-text">
							<h3>Design</h3>
							<p>Recieving text and image content from the client was an important step in the building process. This allowed me to fill out the website pages and create a basic working site. Using this basic site gave the client an idea of the final website and hence they were able to give their feedback.</p>
						</Col>
					</Row>
					<Row className="project-gallery">
						<Col xs={10} xsOffset={1} md={8} mdOffset={2} className="project-text">
							<p>Languages were highlighted as one of the most important elements of the website. These language courses make up a large proportion of what the Lifelong learning group offer and the greatest potential interest from potential users and students. A clear presentation of the available courses was therefore of the upmost importance for a successful design. Limitations from the CMS design was something that had to be taken into consideration when deciding how to present the courses.</p>
						</Col>
						<Col xs={8} xsOffset={2} md={6} mdOffset={3} className="project-image">
							<Image src="../images/lifelong/image-2.png" responsive />
						</Col>
					</Row>
					<Row className="project-gallery">
						<Col xs={10} xsOffset={1} md={8} mdOffset={2} className="project-text">
							<p>The public study days are also a vital part of the Lifelong learning scheme. These study days invite students and paying subscribers to events located in the University and usually involve keynote speakers and debates. They therefore need to be well advertised with time and location information clearly marked. Each study day is given its own event label and these are listed in order of date, with the closest being at the top.</p>
						</Col>
						<Col xs={8} xsOffset={2} md={6} mdOffset={3} className="project-image">
							<Image src="../images/lifelong/image-3.png" responsive />
						</Col>
					</Row>
					<Row>
						<Col xs={10} xsOffset={1} md={8} mdOffset={2} className="project-result project-text">
							<h2>Results</h2>
							<p>The outcome of the work presents a clear and well branded site that provided clear information about the WSI, their aims and their public news. While the limited technical scope did narrow our design options, it was a fun and challenging project to work on. I think it demonstrates how purely organisational changes to a website can have a significant impact on how the relevant information can be accessed by a user.</p>
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