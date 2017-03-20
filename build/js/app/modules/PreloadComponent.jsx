import React from 'react';

import ProgressComponent from './ProgressComponent.jsx';
import SVGComponent from './SVGComponent.jsx';
import LayoutComponent from './modules/LayoutComponent.jsx';
import NavComponent from './NavComponent.jsx';

	 //  	function move() {
		//   var elem = document.getElementById("myBar");   
		//   var width = 10;
		//   var id = setInterval(frame, 10);
		//   function frame() {
		//     if (width >= 100) {
		//       clearInterval(id);
		//     } else {
		//       width++; 
		//       elem.style.width = width + '%'; 
		//       elem.innerHTML = width * 1  + '%';
		//     }
		//   }
		// }


export default class PreloadComponent extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			meterWidth: null,
	      	meterValue: null
	    };
	}

	render(){
		return(
			<div className=""></div>
			)
	}
}
