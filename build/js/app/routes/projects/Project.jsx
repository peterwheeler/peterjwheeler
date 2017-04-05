import React from 'react';
import queryString from 'query-string';
import { ProjectsContainer, ProjectsMount, ProjectsRender, ProjectsView } from 'C:/Users/pw8g08/hubiC/webroot/htdocs/literatim/build/js/threejs/projects-svgCloud.jsx';

export default class Project extends React.Component {
	constructor(props, context) {
	    super(props, context);
	};
	componentDidMount() {
		const parsed = queryString.parse(this.props.location.search);

		ProjectsRender(parsed.id);
		var canvas = ProjectsMount();
		document.getElementById('three-projects-container').appendChild(canvas);
		ProjectsView(parsed.id);
	};
	render() {
		return (
			<ProjectsContainer/>
		);
	};
}