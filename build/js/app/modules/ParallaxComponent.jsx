import React from 'react';
import ReactDOM from 'react-dom';
import Parallax from 'C:/Users/pw8g08/hubiC/webroot/htdocs/literatim/build/js/parallax/parallax.js';
  
export default class ParallaxComponent extends React.Component {
  constructor(props) {
    super(props);

    this.resizeHandler = this.resizeHandler.bind(this);
  }

  componentDidMount() {
    var scene = document.getElementById('scene');
    var parallax = new Parallax(scene);
    this.resizeHandler();
  }

  resizeHandler() {
    scene.style.width = window.innerWidth + 'px';
    // if (!$prompt.hasClass('hide')) {
    //   if (window.innerWidth < 600) {
    //     $toggle.addClass('hide');
    //   } else {
    //     $toggle.removeClass('hide');
    //   }
    // }
  }

  render() {
    return (
      <div className="home-silhoutte">
        <ul id="scene">
          <li className="layer" data-depth="0.01">
          	<div className="silhoutte" id="silhoutte-1"></div>
          </li>
          <li className="layer" data-depth="0.20">
          	<div className="silhoutte" id="silhoutte-2"></div>
          </li>
          <li className="layer" data-depth="0.30">
          	<div className="silhoutte" id="silhoutte-3"></div>
          </li>
          <li className="layer" data-depth="0.40">
            <div className="silhoutte" id="silhoutte-4"></div>
          </li>
        </ul>
      </div>
    	);
  }
}

if (module.hot) {
  module.hot.accept();
}