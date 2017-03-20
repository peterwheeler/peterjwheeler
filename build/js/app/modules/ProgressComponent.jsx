import React from 'react';
import ProgressBar from 'progressbar.js';

export default class ProgressComponent extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			meterWidth: null,
	      	meterValue: null
	    };
	}

	updateDimensions() {
		var elWidth = document.getElementById('slanted-container').offsetWidth;
		var screenHeight = window.innerHeight;

		function pythagorean(sideA, sideB){
		  return Math.sqrt(Math.pow(sideA, 2) + Math.pow(sideB, 2));
		}

		var meterUpdate = function(w, h){
			var diagonal = pythagorean(h, h);
			var percentage = w / 100;
			var w2 = w / 2;
			var s = (w2 - diagonal);
			var spx = s  + "px";
			return spx;
		}

        this.setState({
        	meterWidth: pythagorean(screenHeight, screenHeight) + "px",
        	meterValue: meterUpdate(elWidth, screenHeight)
        });
    }

    componentDidMount() {
    	this.updateDimensions();
        window.addEventListener("resize", this.updateDimensions.bind(this));
    }

    render() {
		if(this.state.meterValue !== null){
			const meter = {
				width: this.state.meterWidth,
				left: this.state.meterValue
			}
			var progressBar = new ProgressBar.Line('#meter-id', {
			    strokeWidth: 4,
				easing: 'easeInOut',
				duration: 1400,
				color: '#FFEA82',
				trailColor: '#eee',
				trailWidth: 1,
				svgStyle: {width: '100%', height: '100%'}
			});
			progressBar.animate(this.props.load, {
			    duration: 800,
			}, function() {
			    console.log('Animation has finished');
			});
			return (
	        	<div id="meter-id" className="meter" style={meter}></div>
	   		)
		}
		else{
			const meter = {
				left: '600px'
			}
			return (
	        	<div id="meter-id" className="meter" style={meter}></div>
	   		)
		}
	}
}