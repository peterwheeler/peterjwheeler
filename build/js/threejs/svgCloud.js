var paragraphs = [{text: "<Literatim>", yPos: 15}, {text: "Coding beautiful things, letter-by-letter; literally.", yPos: 10}, {text: "I am Peter, a web developer with a heritage past.", yPos: 5}, {text: "Experienced working in HTML, CSS, Javascript & Wordpress for the past 3 years. Check out my projects.", yPos: 0}, {text: "</Literatim>", yPos: -5}, {text: "<!-- Click Events -->", yPos: -10}, {text: "<a href='#'onclick='scrabble()'>Scrabble</a>", yPos: -15}];

import TWEEN from 'tween.js';
import svgMesh3d from 'svg-mesh-3d';

var canvas, bmtext, font, randomFont, sphere;
var allPositions = [], randomAllPositions = [], allGlyphs = [], wordsGroup;
var scene, renderer, camera, controls;
var container = document.getElementById('three-container');

function init(){

  scene = new THREE.Scene();
  window.scene = scene;

  renderer = new THREE.WebGLRenderer({
    antialias: true,
    alpha: true,
    devicePixelRatio: window.devicePixelRatio
  });
  renderer.setClearColor(0xfefefa, 0);
  renderer.setSize(window.innerWidth, window.innerHeight, false)
  canvas = renderer.domElement;
  canvas.id = "three-canvas"

  container.appendChild(canvas);

  camera = new THREE.PerspectiveCamera(50, window.innerWidth / window.innerHeight , 0.1, 1000)
  camera.position.set(0, 0, 60)

  controls = new THREE.TrackballControls(camera, canvas);
  controls.rotateSpeed = 1;
  controls.panSpeed = 1;
  controls.noZoom = true;

  wordsGroup = new THREE.Group();

  var button = document.getElementById( 'table' );
  button.addEventListener( 'click', function ( event ) {
    transform();
  }, false );
}

function resize () {
    // var [ width, height ] = cloud.shape
    var width = window.innerWidth,
    height = window.innerHeight
    camera.aspect = width / height
    renderer.setSize(width, height, false)
    camera.updateProjectionMatrix()
    render();
}

var getFont = function (){
  var r = new XMLHttpRequest();
  r.open('GET', './fonts/Karla/Karla-regular.json');
  r.onreadystatechange = function() {
    if (r.readyState === 4 && r.status === 200) {
      font = JSON.parse(r.responseText);
      setup(font);
    }
  };
  r.send();
}

var setup = function(current) {
  var truePositions, truePositionsClone, glyphs;
  for ( var i = 0; i < paragraphs.length; i++ ){
      bmtext = new TextBitmap({
        imagePath: './fonts/Karla/Karla-regular.png',
        text: paragraphs[i].text,
        renderer: renderer,
        width: 800,
        align: 'left',
        font: current,
        lineHeight: font.common.lineHeight - 20,
        letterSpacing: 1,
        scale: 0.1,
        rotate: false,
        color: "#000",
        showHitBox: false // for debugging
      });
      bmtext.group.position.y = paragraphs[i].yPos;
      bmtext.group.name = "para-" + i;

      truePositions = bmtext.group.children[0].geometry.attributes.position;
      truePositionsClone = truePositions.clone();
      allPositions.push(truePositionsClone);

      glyphs = bmtext.group.children[0].geometry.visibleGlyphs;
      allGlyphs.push(glyphs);
      scrabblePositions(glyphs, truePositions, bmtext.group);
  }
}

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
  })

arrayPositions.array = randomPositions;
arrayPositions.needsUpdate = true;

randomAllPositions.push(arrayPositions);
wordsGroup.add(object);
scene.add(object);
}

init();
resize();
getFont();

var transform = function(){
  var newPositions, currentPositions, currentGlyph, objectName;
  for ( var i = 0; i < allGlyphs.length; i++ ){
      currentGlyph = allGlyphs[i];
      currentPositions = randomAllPositions[i];
      newPositions = allPositions[i];
      objectName = scene.getObjectByName("para-" + i);

      tweener(currentGlyph, currentPositions, newPositions, objectName);
  }
}

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
        console.log(frozenPosition.array);
        tweenPositions = frozenPosition.array.map(function(el, idx){
          return el + progress.v * deltaPositions[idx];
        });

        o.children[0].geometry.attributes.position.array = tweenPositions;
        o.children[0].geometry.attributes.position.needsUpdate = true;
      })
      .onComplete( function(){
       console.log("done tweening")
     })
      .start();
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
