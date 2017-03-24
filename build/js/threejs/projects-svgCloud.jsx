var projects = [
[{text: "<Literatim>", yPos: 15}, {text: "Coding beautiful things, letter-by-letter; literally.", yPos: 10}, {text: "I am Peter, a web developer with a heritage past.", yPos: 5}, {text: "Experienced working in HTML, CSS, Javascript & Wordpress for the past 3 years. Check out my projects.", yPos: 0}],
[{text: "<Literatim>", yPos: 15}, {text: "Coding beautiful things, letter-by-letter; literally.", yPos: 10}, {text: "I am Peter, a web developer with a heritage past.", yPos: 5}, {text: "Experienced working in HTML, CSS, Javascript & Wordpress for the past 3 years. Check out my projects.", yPos: 0}],
[{text: "<Literatim>", yPos: 15}, {text: "Coding beautiful things, letter-by-letter; literally.", yPos: 10}, {text: "I am Peter, a web developer with a heritage past.", yPos: 5}, {text: "Experienced working in HTML, CSS, Javascript & Wordpress for the past 3 years. Check out my projects.", yPos: 0}]
];

var views = [{"x": -30, "y": 0, "z": 0}, {"x": 0, "y": 0, "z": -30}, {"x": 30, "y": 0, "z": 0}];
var pi = Math.PI / 2;
var rotate = [1.75, 0, -1.75];

import React from 'react';
import TWEEN from 'tween.js';
import svgMesh3d from 'svg-mesh-3d';

var width, height;
var canvas, bmtext, font, randomFont, sphere;
var allPositions = [], randomAllPositions = [], allGlyphs = [];
var scene, renderer, camera, controls, manager;
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
  camera.position.set(0, 0, 20);

  controls = new THREE.TrackballControls(camera, canvas);
  controls.rotateSpeed = 1;
  controls.panSpeed = 1;
  controls.noZoom = true;

  // manager = new THREE.LoadingManager();
  // manager.onProgress = function ( item, loaded, total ) {
  //   console.log( item, loaded, total );
  // };

// var geometry = new THREE.BoxGeometry( 10, 10, 10 );
// var material = new THREE.MeshBasicMaterial( {color: 0x00ff00} );
// var cube = new THREE.Mesh( geometry, material );
// scene.add( cube );

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
  for ( var i = 0; i < projects.length; i++ ){
    var para = projects[i];
    var d = new THREE.Object3D();
    for ( var j = 0; j < para.length; j++ ){
      var text = para[j];
      var e = new TextBitmap({
              imagePath: '../fonts/karla/Karla-regular.png',
              text: text.text,
              renderer: renderer,
              width: 1000,
              align: "center",
              font: t,
              lineHeight: font.common.lineHeight,
              letterSpacing: 1,
              scale: 0.1,
              smoothing: 0.2,
              rotate: false,
              color: "#000",
              showHitBox: false
          });
      e.group.scale.set(e.config.scale, e.config.scale, e.config.scale),
      e.group.position.y = text.yPos,
      d.add(e.group)
      // e.mesh.renderOrder = 2;
      var n = new TextBitmap({
              imagePath: '../fonts/karla/Karla-regular.png',
              text: text.text,
              renderer: renderer,
              width: 1000,
              align: "center",
              font: t,
              lineHeight: font.common.lineHeight,
              letterSpacing: 1,
              scale: 0.1,
              smoothing: 0.2,
              rotate: false,
              color: "#000",
              showHitBox: false
          });
      n.group.scale.set(n.config.scale, n.config.scale, n.config.scale),
      n.group.position.y = text.yPos,
      d.add(n.group)
      var a = new TextBitmap({
              imagePath: '../fonts/karla/Karla-regular.png',
              text: text.text,
              renderer: renderer,
              width: 1000,
              align: "center",
              font: t,
              lineHeight: font.common.lineHeight,
              letterSpacing: 1,
              scale: 0.1,
              smoothing: 0.2,
              rotate: false,
              color: "#000",
              showHitBox: false
          });
      a.group.scale.set(a.config.scale, a.config.scale, a.config.scale),
      a.group.position.y = text.yPos,
      d.add(a.group)
      var o = new TextBitmap({
              imagePath: '../fonts/karla/Karla-regular.png',
              text: text.text,
              renderer: renderer,
              width: 1000,
              align: "center",
              font: t,
              lineHeight: font.common.lineHeight,
              letterSpacing: 1,
              scale: 0.1,
              smoothing: 0.2,
              rotate: false,
              color: "#000",
              showHitBox: false
          });
      o.group.scale.set(o.config.scale, o.config.scale, o.config.scale),
      o.group.position.y = text.yPos,
      d.add(o.group)
    }
    var viewPos = views[i];
    var viewRot = rotate[i];
    d.position.set(viewPos.x, viewPos.y, viewPos.z);
    d.rotation.y = viewRot;
    scene.add(d);
  }
};

function updateCamera(props){
    var a = views[props];
    var b = rotate[props];
    var point = new THREE.Vector3(a.x, a.y, a.z);
    camera.rotation.y = 90 * Math.PI / 180;
    // camera.lookAt(point);
    // console.log(point);
}

var ProjectsContainer = function(props) {
    return (
      <div id="three-projects-container"></div>
    );
};

var ProjectsMount = function() {
    return canvas
};

var ProjectsRender = function(props){
    init();
    resize();
    getFont();
    updateCamera(props);

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
      controls.update();
      TWEEN.update(time);
      render();
    }

    //Render function
    function render(){
      renderer.render(scene, camera);
    }
};

module.exports = {
  ProjectsContainer: ProjectsContainer,
  ProjectsMount: ProjectsMount,
  ProjectsRender: ProjectsRender
};