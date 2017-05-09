import React from 'react';
import queryString from 'query-string';
import { Grid, Row, Col, Clearfix, Image } from "react-bootstrap";

export default class Websites extends React.Component {
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
						<Col xs={10} xsOffset={1} md={4} mdOffset={1} className="project-headline">
							<h1>Project Name</h1>
							<h3>Client: <i className="light-text">University of Southampton</i></h3>
							<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor tortor id sem eleifend vehicula. Nullam magna velit, hendrerit ultricies viverra quis, cursus ut risus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae.</p>
						</Col>
						<Col xs={10} xsOffset={1} md={5} mdOffset={1} className="project-image">
							<Image src="../images/image-0.png" responsive />
						</Col>
						<Clearfix />
						<Col xs={10} xsOffset={1} md={10} mdOffset={1} className="project-details">
							<h2>Details</h2>
							<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor tortor id sem eleifend vehicula. Nullam magna velit, hendrerit ultricies viverra quis, cursus ut risus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Proin vel porta magna. Aenean et sem sollicitudin, ornare erat nec, tristique ligula. Aenean non rutrum tellus. Nullam sapien augue, gravida nec dolor ac, vestibulum pulvinar massa. Curabitur ac justo nisl.<br/><br/>Fusce dapibus, libero vel fringilla dictum, magna tellus pellentesque nulla, feugiat sagittis dolor turpis nec tellus. Duis bibendum lacus tellus, et malesuada turpis bibendum vitae. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aliquam quis tristique tellus. Aliquam malesuada, arcu vitae mollis fermentum, quam felis pulvinar lacus, non faucibus velit purus id dolor. Sed semper arcu sit amet tristique volutpat. Curabitur ac interdum risus. Donec et eleifend neque. Maecenas quis turpis ac diam suscipit dapibus. Nunc in tristique eros. Quisque suscipit vehicula quam sed luctus. Etiam eleifend hendrerit lacus, quis congue ipsum faucibus nec. Fusce nec maximus elit. Cras non augue sem.</p>
						</Col>
						<Col xs={10} xsOffset={1} md={10} mdOffset={1} className="project-gallery">
							<h2>Gallery</h2>
							<div className="gallery-image"><Image src="../images/image-0.png" responsive /></div>
							<div className="gallery-image"><Image src="../images/image-1.png" responsive /></div>
							<div className="gallery-image"><Image src="../images/image-2.png" responsive /></div>
							<div className="gallery-image"><Image src="../images/image-3.png" responsive /></div>
						</Col>
						<Col xs={10} xsOffset={1} md={10} mdOffset={1} className="project-extra">
							<h2>Extra</h2>
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