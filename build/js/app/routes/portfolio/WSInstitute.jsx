import React from 'react';
import { Link } from "react-router-dom";
import { Grid, Row, Col, Clearfix, Image } from "react-bootstrap";

import PortfolioChanger from "../../components/PortfolioChanger.jsx";

export default class WSInstitute extends React.Component {
	constructor(props) {
	    super(props);
	};
	render() {
		return (
			<div className="project-container">
				<PortfolioChanger previousPage={"lifelong"} nextPage={"archaeology-wordpress"} />
				<Grid fluid>
					<Row>
						<Col xs={10} xsOffset={1} md={6} mdOffset={0} mdPush={5} className="project-image">
							<Image src="../images/wsi/image-1.png" responsive />
						</Col>
						<Col xs={10} xsOffset={1} md={4} mdOffset={1} mdPull={6} className="project-headline">
							<h1>Web Science Institute</h1>
							<h3 className="light-text">Client: <i>University of Southampton</i></h3>
							<div className="divider"></div>
							<p>The Web Science Institute brings together world-leading interdisciplinary expertise to tackle the most pressing global challenges facing the World Wide Web and wider society today. The institute was officially launched in 2014 and I was tasked with creating their principal website.</p>
							<h3 className="link"><a href="http://www.southampton.ac.uk/wsi/">View site</a></h3>
						</Col>
					</Row>
					<Row>
						<Col xs={10} xsOffset={1} md={8} mdOffset={2} className="project-details project-text">
							<h2>Details</h2>
							<p>I started by discussing the purpose and structure of the site with the client. It was seen as the formal web presence of the new institute and therefore a professional appearance was required. The website was to be designed using the University of Southampton CMS – Sitepublisher. This would keep it in line with the University branding scheme.</p>
						</Col>
					</Row>
					<Row className="project-gallery">
						<Col xs={8} xsOffset={2} md={4} mdOffset={0} mdPush={6} className="project-image">
							<Image src="../images/wsi/wireframe-1.png" responsive />
						</Col>
						<Col xs={10} xsOffset={1} md={4} mdOffset={1} mdPull={3} className="project-text">
							<h3>Layout</h3>
							<p>Wireframing using the common components found in Sitepublisher allowed me to get an understanding of how the CMS worked. Presenting these gave the client a clear idea of what was possible with the then available technology and the feedback allowed me to update the wireframes according to their requirements.<br/><br/>
							 	The key sections of the site were:
								<ul className="project-list">
									<li>About</li>
									<li>Education</li>
									<li>Research</li>
									<li>News and Events</li>
								</ul>
								Dealing with these as priorty was the first call when designing the website layout. Each one had to be given a prominent place within the site.<br/><br/>The leading navigational item linked to the About section, giving information on the staff member and their roles. The main title section presences the feature news of the institute, where there are more than one a slider is used to rotate the images.<br/><br/>The main selection section allows the user to select the key elements for Research and Education for the institute.<br/><br/>The news feed and latest tweets just below this feature were important for the leaders of the institute, who are avid social media users and want to push its use through the institute website.</p>
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
							<p>Education is a very important part of the institute, with PhDs and masters and other degree courses being crucial to its running and continuing development. The Education page was designed with this in mind - the key section being six feature boxes highlighing each of the different types of courses and leading to further information on these topics. Little else was added to this page in order to keep this the focus of the Education section. This being vital to visitors who are potential future students.</p>
						</Col>
						<Col xs={8} xsOffset={2} md={6} mdOffset={3} className="project-image">
							<Image src="../images/wsi/image-6.png" responsive />
						</Col>
					</Row>
					<Row className="project-gallery">
						<Col xs={10} xsOffset={1} md={8} mdOffset={2} className="project-text">
							<p>Advertising the public presentation dates and latest news from the institute was another key part of the website homepage. Distinguished guests and lecturers are seen as a fudamental part of the institute's success. As part of this was also the website's connection to the informal blog hosted by the WSI. Using this a place for written pieces by institute members it was also requested to have a prominent display within the formal site's navigation.</p>
						</Col>
						<Col xs={8} xsOffset={2} md={6} mdOffset={3} className="project-image">
							<Image src="../images/wsi/image-4.png" responsive />
						</Col>
					</Row>
					<Row className="project-gallery">
						<Col xs={10} xsOffset={1} md={8} mdOffset={2} className="project-text">
							<p>Another integral part of the institute is its relationships with other international bodies and the work that is carried out between them. These were given a primary position within the naviagation menu for this reason.</p>
						</Col>
						<Col xs={8} xsOffset={2} md={6} mdOffset={3} className="project-image">
							<Image src="../images/wsi/image-5.png" responsive />
						</Col>
					</Row>
					<Row>
						<Col xs={10} xsOffset={1} md={8} mdOffset={2} className="project-result project-text">
							<h2>Results</h2>
							<p>The outcome of the work presents a structured and professional website that provided clear information about the Web Science Institute, their aims and the news they wish to publised. On release, the client were satisfied with the outcome and presentation of the site. This was key first design project for me as a designer. It provided me with a basis to think about the key areas that are required when designing a new website, without having to code absolutely every element.</p>
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