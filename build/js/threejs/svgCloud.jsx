var paragraphs = [{text: "<Literatim>", yPos: 15}, {text: "Coding beautiful things, letter-by-letter; literally.", yPos: 10}, {text: "I am Peter, a web developers with a heritage past.", yPos: 5}, {text: "Experienced working in HTML, CSS, Javascript & Wordpress for the past 3 years. Check out my projects.", yPos: 0}, {text: "</Literatim>", yPos: -5}, {text: "<!-- Click Events -->", yPos: -10}, {text: "<a href='#'onclick='scrabble()'>Scrabble</a>", yPos: -15}];

import React from 'react';
import TWEEN from 'tween.js';
import svgMesh3d from 'svg-mesh-3d';
var width, height;
var canvas, bmtext, font, randomFont, sphere;
var allPositions = [], randomAllPositions = [], allGlyphs = [];
var scene, renderer, camera, controls, manager;
var wordsGroup;
// var container = document.getElementById('three-container');

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
  canvas.id = "three-canvas";

  // container.appendChild(canvas);

  camera = new THREE.PerspectiveCamera(50, window.innerWidth / window.innerHeight , 0.1, 1000);
  camera.position.set(0, 0, 60);

  // controls = new THREE.TrackballControls(camera, canvas);
  // controls.rotateSpeed = 1;
  // controls.panSpeed = 1;
  // controls.noZoom = true;

  manager = new THREE.LoadingManager();

  manager.onProgress = function (item, loaded, total) {
      console.log(item, loaded, total);
  };
  manager.onLoad = function () {
      console.log('all items loaded');
  };
  manager.onError = function () {
      console.log('there has been an error');
  };

  wordsGroup = new THREE.Object3D();

}

// function mouseMove(){
//   container.addEventListener("mouseover", function(t) {

//                       for (var i = 0; i < wordsGroup.length; i++) {

//                         var mouseObject = scene.getObjectByName("para-" + i);
//                         return TweenLite.to(mouseObject.children[0].material.uniforms.animationParam, 1.4, {
//                             value: 10,
//                             ease: Linear.easeNone,
//                             overwrite: !0,
//                             onUpdate: function() {
//                                 render();
//                             }
//                         });
//                     }
//                 }),
//   container.addEventListener('mouseout', function(t) {
//                       for (var i = 0; i < wordsGroup.length; i++) {
//                         var mouseObject = scene.getObjectByName("para-" + i);
//                         return TweenLite.to(mouseObject.children[0].material.uniforms.animationParam, 1.4, {
//                             value: 0,
//                             ease: Linear.easeNone,
//                             overwrite: !0,
//                             onUpdate: function() {
//                                 render();
//                             }
//                         });
//                     }
//                 });
// }

var onMouseMove = function(event){
var mouse = {};
  container.addEventListener("mousemove", function(event){
  // Update the mouse variable
    event.preventDefault();
    mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
    mouse.y = - (event.clientY / window.innerHeight) * 2 + 1;

    var mouse3D = new THREE.Vector3(mouse.x, mouse.y, 0.5);

    // Direction we are already facing (without rotation)
    var forward = new THREE.Vector3(0,0,-1);

      // Direction we want to be facing (towards mouse pointer)
      var target = new THREE.Vector3().subVectors(mouse3D, wordsGroup.position).normalize();

      // Axis and angle of rotation
      var axis = new THREE.Vector3().crossVectors(forward, target);
      var sinAngle = axis.length(); // |u x v| = |u|*|v|*sin(a)
      var cosAngle = forward.dot(target); // u . v = |u|*|v|*cos(a)
      var angle = Math.atan2(sinAngle, cosAngle); // atan2(sin(a),cos(a)) = a
      axis.normalize();

      // Overwrite rotation
      // mouseObject.rotation.makeRotationAxis(axis, angle);
      wordsGroup.quaternion.setFromAxisAngle(axis, angle);
      animate();
  });
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
        width: 800,
        align: 'left',
        font: current,
        lineHeight: font.common.lineHeight - 20,
        letterSpacing: 1,
        scale: 0.05,
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
     //  .onComplete( function(){
     //   console.log("done tweening");
     // })
      .start();
};

var startTransform =  function(){
  setTimeout(function() {
        transform();
        console.log("transformed");
      }, 2000);
}

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
};

module.exports = {
  startTransform: startTransform,
  HomeContainer: HomeContainer,
  HomeMount: HomeMount,
  HomeRender: HomeRender
};