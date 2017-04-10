import React from 'react';
import TWEEN from 'tween.js';
import svgMesh3d from 'svg-mesh-3d';

var paragraphs = [
  {text: "<Literatim>", yPos: 45, margin: 150},
  {text: "Coding beautiful things, letter-by-letter.", yPos: 35, margin: 0},
  {text: "I'm Peter, a web developer with a heritage background.", yPos: 20, margin: 0},
  {text: "I have 3 years experience working in HTML5, CSS3, Javascript (Angular & React) & Wordpress.", yPos: 2, margin: 0},
  {text: "</Literatim>", yPos: -15, margin: 150},
  {text: "<!-- Click Events -->", yPos: -30, margin: 150},
  {text: "<a href='#' onclick='scrabble()'>Scrabble</a>", yPos: -45, margin: 150}
];

var width, height;
var canvas, bmtext, font, randomFont, sphere, textMaxWidth;
var allPositions = [], randomAllPositions = [], allGlyphs = [], textWidths = [];
var scene, renderer, camera, cameraView, controls, manager, wordScale, wordAlign;
var domEvents, clickObject;
var wordsGroup;
var clock;
var mesh 
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
  camera.position.set(0, 0, 200);

  clock = new THREE.Clock();

  controls = new THREE.FlyControls(camera);
    controls.movementSpeed = 100;
    controls.rollSpeed = 0.003;
    controls.autoForward = false;
    controls.dragToLook = false;
    controls.lookOnly = true;

  domEvents = new THREEx.DomEvents(camera, renderer.domElement);

  wordsGroup = new THREE.Object3D();
};

var mouseMoves = function (){
  var mouse = {x : 0, y : 0}
    document.addEventListener('mousemove', function(event){
      mouse.x = (event.clientX / window.innerWidth ) - 0.5
      mouse.y = (event.clientY / window.innerHeight) - 0.5
    }, false)
    onRenderFcts.push(function(delta, now){
      camera.position.x += (mouse.x*5 - camera.position.x) * (delta*3)
      camera.position.y += (mouse.y*5 - camera.position.y) * (delta*3)
      camera.lookAt( scene.position )
    })
}

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
        width: textWidths[i],
        align: 'left',
        font: current,
        lineHeight: font.common.lineHeight,
        letterSpacing: 1,
        scale: wordScale,
        smoothing: 0.2,
        rotate: false,
        color: "#000",
        showHitBox: false,
        manager: manager // for debugging
      });
      bmtext.group.position.x = wordAlign;
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
  clickObject = scene.getObjectByName("para-6");
  // domEvents.addEventListener(clickObject, 'click', function(e){
  //   document.body.style.cursor  = 'pointer';
  // }, false)
  // domEvents.addEventListener(clickObject, 'mouseout', function(e){  
  //   document.body.style.cursor  = 'default';
  // }, false)
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
  domEvents.addEventListener(clickObject, 'click', function(e){
    document.body.style.cursor = 'cursor';
    // alert("itswww");
  }, false);
};

var toggleScrabble = function(){
    var newPositions, currentPositions, currentGlyph, objectName;
  for ( var i = 0; i < allGlyphs.length; i++ ){
      currentGlyph = allGlyphs[i];
      currentPositions = randomAllPositions[i];
      newPositions = allPositions[i];
      objectName = scene.getObjectByName("para-" + i);

      tweener(currentGlyph, currentPositions, newPositions, objectName);
  }
  domEvents.removeEventListener(clickObject, 'click', false);
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

var screenCheck = function(){
  var margin, newWidth;
  for ( var i = 0; i < paragraphs.length; i++ ){
    margin = paragraphs[i].margin;
    if (window.innerWidth >= window.innerHeight && window.screen.width >= 1000) {
          newWidth = (window.innerWidth * 1.5) + margin;
          wordScale = 0.1;
          wordAlign = 30;
      } else if (window.innerWidth <= window.innerHeight && window.screen.width >= 768) {
          wordScale = 0.095;
          wordAlign = 0;
          newWidth = (window.innerWidth * 1.5) + margin;
      } else if (window.innerWidth <= window.innerHeight && window.screen.width <= 767) {
          wordScale = 0.075;
          wordAlign = 0;
          newWidth = (window.innerWidth * 3) + margin;
      }
    textWidths.push(newWidth);
  }
}

var resize = function() {
    width = window.outerWidth;
    height = window.outerHeight;
    screenCheck();
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