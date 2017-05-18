import React from 'react';
import TypedComponent from '../modules/TypedComponent.jsx';
import FadeComponent from '../modules/FadeComponent.jsx';


export default class Home extends React.Component {
	constructor(props, context) {
	    super(props, context);
	};

	componentDidMount() {
	}
	render() {
	return (
	  	<div className="home-container">
			<FadeComponent />
		</div>
	);
	}
}