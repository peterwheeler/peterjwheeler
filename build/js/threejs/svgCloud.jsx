var paragraphs = [{text: "<Literatim>", yPos: 15}, {text: "Coding beautiful things, letter-by-letter; literally.", yPos: 10}, {text: "I am Peter, a web developers with a heritage past.", yPos: 5}, {text: "Experienced working in HTML, CSS, Javascript & Wordpress for the past 3 years. Check out my projects.", yPos: 0}, {text: "</Literatim>", yPos: -5}, {text: "<!-- Click Events -->", yPos: -10}, {text: "<a href='#'onclick='scrabble()'>Scrabble</a>", yPos: -15}];

import React from 'react';
import TWEEN from 'tween.js';
import svgMesh3d from 'svg-mesh-3d';
var width, height;
var canvas, bmtext, font, randomFont, sphere;
var allPositions = [], randomAllPositions = [], allGlyphs = [];
var scene, renderer, camera, controls, manager;
var wordsGroup;
var clock;
// var container = document.getElementById('three-container');

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
  canvas.id = "three-canvas";

  // container.appendChild(canvas);

  camera = new THREE.PerspectiveCamera(50, window.innerWidth / window.innerHeight , 0.1, 1000);
  camera.position.set(0, 0, 120);

  // controls = new THREE.TrackballControls(camera, canvas);
  // controls.rotateSpeed = 1;
  // controls.panSpeed = 1;
  // controls.noZoom = true;
  clock = new THREE.Clock();

  controls = new THREE.FlyControls(camera);
    controls.movementSpeed = 100;
    controls.rollSpeed = 0.003;
    controls.autoForward = false;
    controls.dragToLook = false;
    controls.lookOnly = true;

  wordsGroup = new THREE.Object3D();
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

var setup = function(current) {
  var truePositions, truePositionsClone, glyphs;
  for ( var i = 0; i < paragraphs.length; i++ ){
      bmtext = new TextBitmap({
        imagePath: './fonts/karla/Karla-regular.png',
        text: paragraphs[i].text,
        renderer: renderer,
        width: 1000,
        align: 'left',
        font: current,
        lineHeight: font.common.lineHeight,
        letterSpacing: 1,
        scale: 0.1,
        smoothing: 0.2,
        rotate: false,
        color: "#000",
        showHitBox: false,
        manager: manager // for debugging
      });
      bmtext.group.position.y = paragraphs[i].yPos;
      bmtext.group.name = "para-" + i;

      truePositions = bmtext.group.children[0].geometry.attributes.position;
      truePositionsClone = truePositions.clone();
      allPositions.push(truePositionsClone);

      wordsGroup.add(bmtext.group);
      glyphs = bmtext.group.children[0].geometry.visibleGlyphs;
      allGlyphs.push(glyphs);
      scrabblePositions(glyphs, truePositions, bmtext.group);
  }
};

var scrabblePositions = function(inputGlyphs, inputPositions, inputObject){
  var randomPositions = new Float32Array(inputGlyphs.length * 4 * 2);
  var arrayPositions = inputPositions;
  var object = inputObject;
  var i = 0;
  inputGlyphs.forEach(function (glyph) {
    var bitmap = glyph.data;
    var randomX = Math.random() * 1000 - 200;
    var randomY = Math.random() * 1000 - 200;

    var plusX = glyph.position[0] + randomX;
    var plusY = glyph.position[1] + randomY;

    // bottom left position
    var x = plusX + bitmap.xoffset;
    var y = plusY + bitmap.yoffset;

    // quad size
    var w = bitmap.width;
    var h = bitmap.height;

    // BL
    randomPositions[i++] = x;
    randomPositions[i++] = y;
    // TL
    randomPositions[i++] = x;
    randomPositions[i++] = y + h;
    // TR
    randomPositions[i++] = x + w;
    randomPositions[i++] = y + h;
    // BR
    randomPositions[i++] = x + w;
    randomPositions[i++] = y;
  });

arrayPositions.array = randomPositions;
arrayPositions.needsUpdate = true;

randomAllPositions.push(arrayPositions);
// wordsGroup.add(object);
scene.add(wordsGroup);
};


var transform = function(){
  var newPositions, currentPositions, currentGlyph, objectName;
  for ( var i = 0; i < allGlyphs.length; i++ ){
      currentGlyph = allGlyphs[i];
      currentPositions = randomAllPositions[i];
      newPositions = allPositions[i];
      objectName = scene.getObjectByName("para-" + i);

      tweener(currentGlyph, currentPositions, newPositions, objectName);
  }
};

var tweener = function(g, c, n, o){
    var duration = 3000;
    var progress = { v: 0 };
    var deltaPositions, tweenPositions;
    var frozenPosition = c.clone();

    deltaPositions = new Float32Array(g.length * 4 * 2);
    for (var i = 0; i < frozenPosition.array.length; i++){
      deltaPositions[i] = n.array[i] - frozenPosition.array[i];
    }
    new TWEEN.Tween(progress)
      .to({v: 1}, duration)
      .easing(TWEEN.Easing.Exponential.InOut)
      .onUpdate( function(){
        // bottleneck?
        tweenPositions = frozenPosition.array.map(function(el, idx){
          return el + progress.v * deltaPositions[idx];
        });

        o.children[0].geometry.attributes.position.array = tweenPositions;
        o.children[0].geometry.attributes.position.needsUpdate = true;
      })
      .start();
};

var resize = function() {
    width = window.outerWidth;
    height = window.outerHeight;
    camera.aspect = width / height;
    camera.updateProjectionMatrix();
    renderer.setSize(width, height);
    render();
}

// Animate function
var animate = function(time) {
    requestAnimationFrame(animate);
    TWEEN.update(time);
    render();
}

//Render function
var render = function(){
    var delta = clock.getDelta();
    renderer.render(scene, camera);
    controls.update(delta);
}

var startTransform =  function(){
  setTimeout(function() {
        transform();
        console.log("transformed");
      }, 2000);
};

var HomeContainer = function(props) {
    return (
      <div id="three-container"></div>
    );
};

var HomeMount = function() {
    return canvas
};

var HomeRender = function(props){
    init();
    resize();
    requestAnimationFrame(animate);
    getFont();
    controls.domElement = document.getElementById('three-container');

    // document.getElementById('three-container').addEventListener("mouseover", mouseOver, false);
    // document.getElementById('three-container').addEventListener("mouseout", mouseOut, false);
};

module.exports = {
  startTransform: startTransform,
  HomeContainer: HomeContainer,
  HomeMount: HomeMount,
  HomeRender: HomeRender
};

if (module.hot) {
  module.hot.accept();
};