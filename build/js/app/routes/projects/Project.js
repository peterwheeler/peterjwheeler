import React from 'react';
import React3 from 'react-three-renderer';
import { Link } from "react-router";
import { ProjectsContainer, ProjectsMount, ProjectsRender } from 'C:/Users/pw8g08/hubiC/webroot/htdocs/literatim/build/js/threejs/projects-svgCloud.js';

export default class Project extends React.Component {
constructor(props, context) {
    super(props, context);
};

componentDidMount() {
	ProjectsRender();
	var canvas = ProjectsMount();
	document.getElementById('three-projects-container').appendChild(canvas);
	// 
}
render() {
return (
	<div className="testClass">
		<ProjectsContainer />
	</div>
);
}

}