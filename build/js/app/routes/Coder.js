import React from 'react';
import { Link } from "react-router";
import	svgMesh3d from 'svg-mesh-3d';

const path = "M150 0 L75 200 L225 200 Z"

export default class Coder extends React.Component {


  render() {
    return (
      <div className="coder-container">
      	<h1>Coder</h1>
      	<div className="big-test"></div>
      	<canvas></canvas>
      </div>
    );
  }
}