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
							<p>The Web Science Institute brings together world-leading interdisciplinary expertise to tackle the most pressing global challenges facing the World Wide Web and wider society today. The institute was officially launched in 2014 and I was tasked with creating the official University website.</p>
							<h3 className="link"><a href="http://www.southampton.ac.uk/wsi/">View site</a></h3>
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
							<Image src="../images/wsi/wireframe-1.png" responsive />
						</Col>
						<Col xs={10} xsOffset={1} md={4} mdOffset={1} mdPull={6}>
							<p>I started discussing the structure of the site with the clients and the purpose of the site. It was seen as the formal web presence of the Institute and therefore a professional appearance was required. The website was to be designed using the University of Southampton CMS – sitepublisher. I therefore started by wireframing with the common components found in the CMS. Presenting these gave the client a clear idea of what was possible with the currently available technology and feedback allowed me to update the wireframes to the desired.</p>
						</Col>
					</Row>
					<Row className="project-gallery">
						<Col xs={10} xsOffset={1} md={6} mdOffset={1}>
							<Image src="../images/wsi/image-2.png" responsive />
						</Col>
						<Col xs={10} xsOffset={1} md={4} mdOffset={0}>
							<p>Nullam sapien augue, gravida nec dolor ac, vestibulum pulvinar massa. Curabitur ac justo nisl.<br/><br/>Fusce dapibus, libero vel fringilla dictum, magna tellus pellentesque nulla, feugiat sagittis dolor turpis nec tellus. Duis bibendum lacus tellus, et malesuada turpis bibendum vitae.</p>
						</Col>
					</Row>
					<Row>
						<Col xs={10} xsOffset={1} md={8} mdOffset={2} className="project-result">
							<h2>Results</h2>
							<p>The outcome of the work presents a clear and well branded site that provided clear information about the WSI, their aims and their public news.</p>
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