import React from 'react';
import { HomeContainer, HomeMount, HomeRender } from 'C:/Users/pw8g08/hubiC/webroot/htdocs/literatim/build/js/threejs/svgCloud.jsx';

export default class Home extends React.Component {
	constructor(props, context) {
	    super(props, context);
	};

	componentDidMount() {
		HomeRender();
		var canvas = HomeMount();
		document.getElementById('three-container').appendChild(canvas); 
	}
	render() {
	return (
	  	<div className="home-container">
			<HomeContainer />
		</div>
	);
	}
}