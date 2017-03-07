var projects = [
[{text: "<Literatim>", yPos: 15}, {text: "Coding beautiful things, letter-by-letter; literally.", yPos: 10}, {text: "I am Peter, a web developer with a heritage past.", yPos: 5}, {text: "Experienced working in HTML, CSS, Javascript & Wordpress for the past 3 years. Check out my projects.", yPos: 0}],
[{text: "<Literatim>", yPos: 15}, {text: "Coding beautiful things, letter-by-letter; literally.", yPos: 10}, {text: "I am Peter, a web developer with a heritage past.", yPos: 5}, {text: "Experienced working in HTML, CSS, Javascript & Wordpress for the past 3 years. Check out my projects.", yPos: 0}],
[{text: "<Literatim>", yPos: 15}, {text: "Coding beautiful things, letter-by-letter; literally.", yPos: 10}, {text: "I am Peter, a web developer with a heritage past.", yPos: 5}, {text: "Experienced working in HTML, CSS, Javascript & Wordpress for the past 3 years. Check out my projects.", yPos: 0}]
];

import React from 'react';
import TWEEN from 'tween.js';
import svgMesh3d from 'svg-mesh-3d';

var width, height;
var canvas, bmtext, font, randomFont, sphere;
var allPositions = [], randomAllPositions = [], allGlyphs = [];
var scene, renderer, camera, controls;
var wordsGroup;

function init(){
  scene = new THREE.Scene();
  window.scene = scene;

  renderer = new THREE.WebGLRenderer({
    antialias: true,
    alpha: true,
    devicePixelRatio: window.devicePixelRatio
  });
  renderer.setClearColor(0xfefefa, 0);
  renderer.setSize(window.innerWidth, window.innerHeight, false);
  canvas = renderer.domElement;
  canvas.id = "three-projects-canvas";

  camera = new THREE.PerspectiveCamera(50, window.innerWidth / window.innerHeight , 0.1, 1000);
  camera.position.set(0, 0, 60);

  controls = new THREE.TrackballControls(camera, canvas);
  controls.rotateSpeed = 1;
  controls.panSpeed = 1;
  controls.noZoom = true;

  wordsGroup = new THREE.Object3D();
}

var getFont = function (){
  var r = new XMLHttpRequest();
  r.open('GET', '../fonts/karla/Karla-regular.json');
  r.onreadystatechange = function() {
    if (r.readyState === 4 && r.status === 200) {
      font = JSON.parse(r.responseText);
      setup(font);
    }
  };
  r.send();
};

var setup = function(t) {
  var x;
  var d = new THREE.Object3D();
  for ( var i = 0; i < projects.length; i++ ){
    var para = projects[i];
    for ( var j = 0; j < para.length; j++ ){
      var text = para[j];
      var e = new TextBitmap({
              text: text.text,
              width: 1100,
              align: "center",
              font: t,
              lineHeight: t.common.lineHeight - 10,
              letterSpacing: 1,
              scale: 0.1,
              color: "#fff"
          }, 0);
      e.group.scale.set(e.config.scale, e.config.scale, e.config.scale),
      d.add(e.group),
      e.group.position.y = text.yPos,
      e.mesh.renderOrder = 2;

      var n = new TextBitmap({
              text: text.text,
              width: 1700,
              align: "center",
              font: t,
              lineHeight: t.common.lineHeight - 10,
              letterSpacing: 1,
              scale: 0.1,
              color: "#aaa"
          }, 0);
      n.group.scale.set(n.config.scale, n.config.scale, n.config.scale),
      d.add(n.group),
      n.group.position.y = text.yPos,
      n.mesh.renderOrder = 2;

      var a = new TextBitmap({
              text: text.text,
              width: 1800,
              align: "center",
              font: t,
              lineHeight: t.common.lineHeight,
              letterSpacing: 1,
              scale: 0.1,
              color: "#fff"
          }, 0);
      a.group.scale.set(a.config.scale, a.config.scale, a.config.scale),
      d.add(a.group),
      a.group.position.y = text.yPos,
      a.mesh.renderOrder = 2;

      var o = new TextBitmap({
              text: text.text,
              width: 1500,
              align: "center",
              font: t,
              lineHeight: t.common.lineHeight - 10,
              letterSpacing: 1,
              scale: 0.1,
              color: "#aaa"
          }, 0);
      o.group.scale.set(o.config.scale, o.config.scale, o.config.scale),
      d.add(o.group),
      o.group.position.y = text.yPos,
      o.mesh.renderOrder = 2;
    }
  }
scene.add(d);
};



var ProjectsContainer = function(props) {
    return (
      <div id="three-projects-container"></div>
    );
}

var ProjectsMount = function() {
    return canvas
}

var ProjectsRender = function(){
    init();
    resize();
    getFont();

    function resize () {
      width = window.outerWidth;
      height = window.outerHeight;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
      render();
    }

    requestAnimationFrame(animate);

    function animate(time) {
      requestAnimationFrame(animate);
      // controls.update();
      TWEEN.update(time);
      render();
    }

    //Render function
    function render(){
      renderer.render(scene, camera);
    }
}

module.exports = {
  ProjectsContainer: ProjectsContainer,
  ProjectsMount: ProjectsMount,
  ProjectsRender: ProjectsRender
  
};