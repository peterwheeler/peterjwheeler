var projects = [
{"headline": "Portus Tour", "subheadline": "The Portus tour is a interactive app allowing users to explore the archaeology of Portus.", "text": "It is built on the KnightLabs StoryMap framework and AngularJS.", "key": "Key skills: AngularJS, JavaScript, HTML5, CSS3", "url": "https://tour.portusproject.org"},
{"headline": "StoryTour", "subheadline": "Coding beautiful things, letter-by-letter; literally.", "text": "I am Peter, a web developer with a heritage past.", "key": "Key skills: AngularJS, JavaScript, HTML5, CSS3", "url": "https://github.com/peterwheeler/storytour"},
{"headline": "FutureLearn", "subheadline": "Coding beautiful things, letter-by-letter; literally.", "text": "I am Peter, a web developer with a heritage past.", "key": "Key skills: Educational content creation", "url": "https://www.futurelearn.com/courses/portus"},
{"headline": "Websites", "subheadline": "Coding beautiful things, letter-by-letter; literally.", "text": "I am Peter, a web developer with a heritage past.", "key": "Key skills: WordPress, HTML5, Content creation", "url": "https://www.southampton.ac.uk/lifelonglearning"},
{"headline": "Blogs", "subheadline": "Coding beautiful things, letter-by-letter; literally.", "text": "I am Peter, a web developer with a heritage past.", "key": "Key skills: CMS, HTML5", "url": "https://acrg.soton.ac.uk"}
];

var views = [], prop;

import React from 'react';
import TWEEN from 'tween.js';
import svgMesh3d from 'svg-mesh-3d';

var width, height;
var canvas, bmtext, font, randomFont, sphere;
var scene, renderer, camera, controls, manager;
var wordsGroup = [], headlineLinks = [];
var clock;
var raycaster, projector;
var mouse;

var init = function(){
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
  camera.position.set(0, 250, 0);

  // clock = new THREE.Clock();

  // controls = new THREE.FlyControls(camera);
  //   controls.movementSpeed = 500;
  //   controls.rollSpeed = 0.015;
  //   controls.autoForward = false;
  //   controls.dragToLook = false;
  //   controls.lookOnly = true;

  raycaster = new THREE.Raycaster();
  // projector = new THREE.Projector();
  mouse = new THREE.Vector2();

  // wordsGroup = new THREE.Object3D();
};

var getFont = function (){
  var r = new XMLHttpRequest();
  r.open('GET', './fonts/karla/Karla-regular.json');
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
    var d = new THREE.Object3D();
    var text = projects[i];
    var headline = new TextBitmap({
            imagePath: './fonts/karla/Karla-regular.png',
            text: text.headline,
            renderer: renderer,
            width: 1000,
            align: "center",
            font: t,
            lineHeight: font.common.lineHeight + 2,
            letterSpacing: 1,
            scale: 0.2,
            smoothing: 0.2,
            rotate: false,
            color: "#000",
            showHitBox: false
        });
    headline.group.scale.set(headline.config.scale, headline.config.scale, headline.config.scale),
    headline.group.userData = {url: text.url},
    headlineLinks.push(headline.group),
    d.add(headline.group)
    var subheadline = new TextBitmap({
            imagePath: './fonts/karla/Karla-regular.png',
            text: text.subheadline,
            renderer: renderer,
            width: 1500,
            align: "center",
            font: t,
            lineHeight: font.common.lineHeight,
            letterSpacing: 1,
            scale: 0.15,
            smoothing: 0.2,
            rotate: false,
            color: "#000",
            showHitBox: false
        });
    subheadline.group.scale.set(subheadline.config.scale, subheadline.config.scale, subheadline.config.scale),
    subheadline.group.position.y = headline.group.position.y - headline.height - 10,
    d.add(subheadline.group)
    var text = new TextBitmap({
            imagePath: './fonts/karla/Karla-regular.png',
            text: text.text,
            renderer: renderer,
            width: 1500,
            align: "center",
            font: t,
            lineHeight: font.common.lineHeight + 2,
            letterSpacing: 1,
            scale: 0.15,
            smoothing: 0.2,
            rotate: false,
            color: "#000",
            showHitBox: false
        });
    text.group.scale.set(text.config.scale, text.config.scale, text.config.scale),
    text.group.position.y = subheadline.group.position.y - subheadline.height - 10,
    d.add(text.group)
    var key = new TextBitmap({
            imagePath: './fonts/karla/Karla-regular.png',
            text: text.key,
            renderer: renderer,
            width: 1000,
            align: "center",
            font: t,
            lineHeight: font.common.lineHeight + 2,
            letterSpacing: 1,
            scale: 0.15,
            smoothing: 0.2,
            rotate: false,
            color: "#000",
            showHitBox: false
        });
    key.group.scale.set(key.config.scale, key.config.scale, key.config.scale),
    key.group.position.y = text.group.position.y - text.height - 10,
    d.add(key.group)
    // }

    var images = imageSetup(i);
    d.add(images);
    d.name = "project-" + i;
    wordsGroup.push(d)
  }
  setPosition(wordsGroup);
};

var imageSetup = function(t){
  var loader = new THREE.TextureLoader();
    var image = loader.load("images/image-" + t + ".png");
    image.minFilter = THREE.LinearFilter;
    var geometry = new THREE.PlaneBufferGeometry(170.75, 96);
    var material = new THREE.MeshBasicMaterial({
        transparent: !0,
        depthTest: !1,
        color: 16777215,
        opacity: 1,
        map: image
    });
  var plane = new THREE.Mesh(geometry, material);
  plane.position.y = 75;
  plane.scale.set(1, 1, 1);
  return plane;
};

var setPosition = function(objects){
  var helix = new THREE.Object3D();
  var vector = new THREE.Vector3();
  var cylindrical = new THREE.Cylindrical();

  for (var i = 0; i < objects.length; i++){
    var theta = i * 0.75 + Math.PI;
    // var y = - ( i * 8 ) + 225;
    var y = 500;
    var object = objects[i];

    cylindrical.set(350, theta, y);

    object.position.setFromCylindrical(cylindrical);
    object.position.y = 250;
    vector.x = object.position.x / 2;
    vector.y = object.position.y;
    vector.z = object.position.z / 2;

    object.lookAt(vector);
    views.push(object.position)
    helix.add(object);
  }
  scene.add(helix);
  var first = new THREE.Vector3(views[0]);
  camera.lookAt(first);
  // updateCamera(prop);
};

var updateCamera = function(a){
  var b = views[a];
  console.log(b);
  new TWEEN.Tween(camera.lookAt).to( {
      x: b.x,
      y: b.y,
      z: b.z}, 600)
  .easing(TWEEN.Easing.Exponential.InOut).start();
};

var onMouseMove = function(event) {

  // calculate mouse position in normalized device coordinates
  // (-1 to +1) for both components

  mouse.x = ( event.clientX / window.innerWidth ) * 2 - 1;
  mouse.y = - ( event.clientY / window.innerHeight ) * 2 + 1;
};

var onDocumentMouseDown = function(event) {
    event.preventDefault();
    var vector = new THREE.Vector3((event.clientX / window.innerWidth) * 2 -
        1, -(event.clientY / window.innerHeight) * 2 + 1, 0.5);
    // projector.unprojectVector(vector, camera);
    var raycaster = new THREE.Raycaster(camera.position, vector.sub(camera.position)
        .normalize());
    var intersects = raycaster.intersectObjects(headlineLinks);
    if (intersects.length > 0) {
        window.open(intersects[0].object.userData.URL);
    }
};

var resize = function() {
  width = window.outerWidth;
  height = window.outerHeight;
  camera.aspect = width / height;
  camera.updateProjectionMatrix();
  renderer.setSize(width, height);
  render();
};

var animate = function(time) {
    requestAnimationFrame(animate);
    TWEEN.update(time);
    render();
};

//Render function
var render = function(){
    // var delta = clock.getDelta();
    renderer.render(scene, camera);
    // controls.update(delta);

    // // update the picking ray with the camera and mouse position
    // raycaster.setFromCamera( mouse, camera );

    // // calculate objects intersecting the picking ray
    // var intersects = raycaster.intersectObjects(scene.children);
    // if(intersects.length != 0){
    //   console.log(intersects);
    // }
    // else {
    //   console.log("Nope");
    // }
    // for ( var i = 0; i < intersects.length; i++ ) {
    //   intersects[ i ].object.material.color.set( 0xff0000 );
    // }
};

var ProjectsContainer = function(props){
    return (
      <div id="three-projects-container"></div>
    );
};

var ProjectsMount = function(props){
    return canvas
};

var ProjectsRender = function(props){
    prop = props;
    init();
    resize();
    getFont();
    // controls.domElement = document.getElementById('three-projects-container');
    window.addEventListener('mousedown', onDocumentMouseDown, false);
    requestAnimationFrame(animate);
};

var ProjectsView = function(props){
    updateCamera(props)
};

module.exports = {
  ProjectsContainer: ProjectsContainer,
  ProjectsMount: ProjectsMount,
  ProjectsRender: ProjectsRender,
  ProjectsView: ProjectsView
};

if (module.hot) {
  module.hot.accept();
};