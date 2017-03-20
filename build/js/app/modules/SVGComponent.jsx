import React from 'react';
import ReactDOM from 'react-dom';
import {TweenLite, TimelineLite} from "gsap";

  
export default class SVGComponent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      meterWidth: null,
          meterValue: null
      };
  }

  componentDidMount() {
      // L
      var L = [document.getElementById('L1'), document.getElementById('L2')];
      // I
      var I_1 = [document.getElementById('I1_1')];
      // T
      var T_1 = [document.getElementById('T1_1'), document.getElementById('T2_1')];
      // E
      var E = [document.getElementById('E1'), document.getElementById('E2'), document.getElementById('E3'), document.getElementById('E4')];
      // R
      var R = [document.getElementById('R1'), document.getElementById('R2'), document.getElementById('R3')];
      // A
      var A = [document.getElementById('A1'), document.getElementById('A2'), document.getElementById('A3')];
      // T
      var T_2 = [document.getElementById('T1_2'), document.getElementById('T2_2')];
      // I
      var I_2 = [document.getElementById('I1_2')];
      // M
      var M = [document.getElementById('M1'), document.getElementById('M2'), document.getElementById('M3')];

      // MAIN TIMELINE
      var mainTimeline = new TimelineLite({});
      // ({onComplete: showReplay});

      // L TIMELINE
      var Lline = new TimelineLite();
      Lline
        .staggerFromTo(L, 1, {left: -100, top: -100, opacity: 0}, {x: 0, opacity: 1}, 0.2);
      mainTimeline.add(Lline, 0.5);

      // I TIMELINE
      var I1line = new TimelineLite();
      I1line
        .staggerFromTo(I_1, 1, {left: -100, top: -100, opacity: 0}, {x: 0, opacity: 1}, 0.2);
      mainTimeline.add(I1line, 0.9);

      // T1 TIMELINE
      var T1line = new TimelineLite();
      T1line
       .staggerFromTo(T_1, 1, {left: -100, top: -100, opacity: 0}, {x: 0, opacity: 1}, 0.2);
      mainTimeline.add(T1line, 1.1);

       // E TIMELINE
      var Eline = new TimelineLite();
      Eline
        .staggerFromTo(E, 1, {left: -100, top: -100, opacity: 0}, {x: 0, opacity: 1}, 0.2);
      mainTimeline.add(Eline, 1.3);

      // R TIMELINE
      var Rline = new TimelineLite();
      Rline
        .staggerFromTo(R, 1, {left: -100, top: -100, opacity: 0}, {x: 0, opacity: 1}, 0.2);
      mainTimeline.add(Rline, 1.5);
      
      // A TIMELINE
       var Aline = new TimelineLite();
      Aline
        .staggerFromTo(A, 1, {left: -100, top: -100, opacity: 0}, {x: 0, opacity: 1}, 0.2);
      mainTimeline.add(Aline, 1.7);
      
      // T2 TIMELINE
      var T2line = new TimelineLite();
      T2line
       .staggerFromTo(T_2, 1, {left: -100, top: -100, opacity: 0}, {x: 0, opacity: 1}, 0.2);
      mainTimeline.add(T2line, 2.3);

       // I2 TIMELINE
      var I2line = new TimelineLite();
      I2line
        .staggerFromTo(I_2, 1, {left: -100, top: -100, opacity: 0}, {x: 0, opacity: 1}, 0.2);
      mainTimeline.add(I2line, 2.1);

      // M TIMELINE
      var Mline = new TimelineLite();
      Mline
        .staggerFromTo(M, 1, {left: -100, top: -100, opacity: 0}, {x: 0, opacity: 1}, 0.2);
      mainTimeline.add(Mline, 1.8);
      
      mainTimeline.timescale = 0.6;
      // mainTimeline.start();

      var svg = document.getElementById('svg');
      if (window.innerWidth < 600) {
        svg.style.width = window.innerWidth+'px';
      }
  }

  render() {
    return (
    	<div className="svg-container">
			<svg id="svg" version="1.1" id="literatim" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
				 viewBox="60 0 300 100" enableBackground="new 60 0 300 100" xmlSpace="preserve">
				{/* L */}
					<rect id="L1" x="68.327" y="70.277" width="17.36" height="4.278"/>
					<rect id="L2" x="63.429" y="35.557" width="4.898" height="38.998"/>
				{/* I */}
					<rect id="I1_1" x="92.444" y="35.422" width="4.898" height="39.132"/>
				{/* T */}
					<rect id="T1_1" x="116.624" y="39.772" width="4.898" height="34.782"/>
					<rect id="T2_1" x="103.914" y="35.557" width="30.318" height="4.216"/>
				{/* E */}
					<rect id="E1" x="140.801" y="40" width="4.901" height="30.277"/>
					<rect id="E2" x="140.801" y="70.277" width="23.997" height="4.278"/>
					<rect id="E3" x="145.702" y="52.834" width="17.98" height="4.175"/>
					<rect id="E4" x="140.804" y="35.557" width="23.994" height="4.443"/>
				{/* R */}
					<polygon id="R1" points="203.857,74.555 197.533,74.555 195.169,70.827 190.789,63.921 187.427,58.621 192.697,58.373 195.004,61.718 
						199.555,68.316 		"/>
					<path id="R2" d="M180.607,55.21h8.308c0,0,1.655-0.107,2.206-0.155c1.379-0.118,3.57-1.148,4.459-1.984
						c1.628-1.53,2.274-3.738,2.263-5.642c-0.008-1.5-0.469-3.904-2.201-5.58c-1.309-1.266-3.746-2.1-6.355-2.077
						c-2.166,0.019-8.662,0-8.662,0v-4.216h9.271c0,0,3.792,0,6.293,1.189c1.365,0.648,3.123,1.463,4.756,3.73
						c1.006,1.397,2.055,3.753,1.914,6.613c-0.069,1.4-0.255,3.682-1.249,5.466c-0.541,0.971-1.423,2.382-2.86,3.405
						c-1.327,0.945-3.188,1.956-6.053,2.412c-1.302,0.208-5.27,0.248-5.27,0.248h-6.82V55.21z"/>
					<rect id="R3" x="175.709" y="35.557" width="4.898" height="38.998"/>
				{/* A */}
					<polygon id="A1" points="233.059,64.635 217.559,64.635 218.861,60.791 231.818,60.791 		"/>
					<polygon id="A2" points="236.406,74.555 241.49,74.555 238.776,66.464 234.949,55.056 232.276,47.089 230.405,41.511 228.408,35.557 
						225.371,35.557 225.371,41.571 227.399,47.617 229.895,55.056 233.676,66.464 		"/>
					<polygon id="A3" points="214.211,74.555 209.064,74.555 211.843,66.464 215.761,55.056 218.497,47.089 220.441,41.425 222.457,35.557 
						225.371,35.557 225.371,41.571 223.502,47.089 220.804,55.056 216.941,66.464 		"/>
				{/* T */}
					<rect id="T1_2" x="253.705" y="39.855" width="4.897" height="34.782"/>
					<rect id="T2_2" x="240.995" y="35.64" width="30.318" height="4.216"/>
				{/* I */}
					<rect id="I1_2" x="277.945" y="35.572" width="4.898" height="39.132"/>
				{/* M */}
					<rect id="M1" x="295.307" y="35.557" width="4.898" height="38.998"/>
					<polygon id="M2" points="300.205,35.557 302.313,35.557 315.457,61.969 328.477,35.557 330.461,35.557 330.461,42.5 317.069,69.657 
						313.783,69.657 300.205,42.067 		"/>
					<rect id="M3" x="330.461" y="35.557" width="4.898" height="38.998"/>
			</svg>
		</div>
    	);
  }
}
