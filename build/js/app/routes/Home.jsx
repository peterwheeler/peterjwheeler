import React from 'react';
import TypedComponent from '../modules/TypedComponent.jsx';
import ParallaxComponent from '../modules/ParallaxComponent.jsx';



export default class Home extends React.Component {
	constructor(props, context) {
	    super(props, context);
	};

	componentDidMount() {
		// HomeRender();
		// var canvas = HomeMount();
		// document.getElementById('three-container').appendChild(canvas); 
	}
	render() {
	return (
	  	<div className="home-container">
			<TypedComponent />
			<ParallaxComponent />
		</div>
	);
	}
}