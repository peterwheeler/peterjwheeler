var table = [
  [ "A", "Hydrogen", "1.00794", 1, 0 ],
  [ "B", "Helium", "4.002602", 18, 1 ],
  [ "C", "Lithium", "6.941", 1, 2 ],
  [ "D", "Beryllium", "9.012182", 2, 3 ],
  [ "E", "Boron", "10.811", 13, 4 ],
  [ "F", "Carbon", "12.0107", 14, 5 ],
  [ "G", "Nitrogen", "14.0067", 15, 6 ],
  [ "H", "Oxygen", "15.9994", 16, 7 ],
  [ "I", "Fluorine", "18.9984032", 17, 8 ],
  [ "J", "Neon", "20.1797", 18, 9 ],
  [ "K", "Sodium", "22.98976...", 1, 10 ],
  [ "L", "Magnesium", "24.305", 2, 3 ],
  [ "M", "Aluminium", "26.9815386", 13, 3 ],
  [ "N", "Silicon", "28.0855", 14, 3 ],
  [ "O", "Phosphorus", "30.973762", 15, 3 ],
  [ "P", "Sulfur", "32.065", 16, 3 ],
  [ "Q", "Chlorine", "35.453", 17, 3 ],
  [ "R", "Argon", "39.948", 18, 3 ],
  [ "S", "Potassium", "39.948", 1, 4 ],
  [ "T", "Calcium", "40.078", 2, 4 ],
  [ "U", "Scandium", "44.955912", 3, 4 ],
  [ "V", "Titanium", "47.867", 4, 4 ],
  [ "W", "Vanadium", "50.9415", 5, 4 ],
  [ "X", "Chromium", "51.9961", 6, 4 ],
  [ "Y", "Manganese", "54.938045", 7, 4 ],
  [ "Z", "Iron", "55.845", 8, 4 ],
  [ "a", "hydrogen", "1.00794", 1, 1 ],
  [ "b", "helium", "4.002602", 18, 1 ],
  [ "c", "lithium", "6.941", 1, 2 ],
  [ "d", "beryllium", "9.012182", 2, 2 ],
  [ "e", "boron", "10.811", 13, 2 ],
  [ "f", "carbon", "12.0107", 14, 2 ],
  [ "g", "nitrogen", "14.0067", 15, 2 ],
  [ "h", "oxygen", "15.9994", 16, 2 ],
  [ "i", "fluorine", "18.9984032", 17, 2 ],
  [ "j", "neon", "20.1797", 18, 2 ],
  [ "k", "sodium", "22.98976...", 1, 3 ],
  [ "l", "magnesium", "24.305", 2, 3 ],
  [ "m", "aluminium", "26.9815386", 13, 3 ],
  [ "n", "silicon", "28.0855", 14, 3 ],
  [ "o", "phosphorus", "30.973762", 15, 3 ],
  [ "p", "sulfur", "32.065", 16, 3 ],
  [ "q", "chlorine", "35.453", 17, 3 ],
  [ "r", "argon", "39.948", 18, 3 ],
  [ "s", "potassium", "39.948", 1, 4 ],
  [ "t", "calcium", "40.078", 2, 4 ],
  [ "u", "scandium", "44.955912", 3, 4 ],
  [ "v", "titanium", "47.867", 4, 4 ],
  [ "w", "vanadium", "50.9415", 5, 4 ],
  [ "x", "chromium", "51.9961", 6, 4 ],
  [ "y", "manganese", "54.938045", 7, 4 ],
  [ "z", "iron", "55.845", 8, 4 ],
  [ "0", "Cobalt", "58.933195", 9, 4 ],
  [ "1", "Nickel", "58.6934", 10, 4 ],
  [ "2", "Copper", "63.546", 11, 4 ],
  [ "3", "Zinc", "65.38", 12, 4 ],
  [ "4", "Gallium", "69.723", 13, 4 ],
  [ "5", "Germanium", "72.63", 14, 4 ],
  [ "6", "Arsenic", "74.9216", 15, 4 ],
  [ "7", "Selenium", "78.96", 16, 4 ],
  [ "8", "Bromine", "79.904", 17, 4 ],
  [ "9", "Krypton", "83.798", 18, 4 ],
  [ "!", "Rubidium", "85.4678", 1, 5 ],
  [ "£", "Strontium", "87.62", 2, 5 ],
  [ "$", "Yttrium", "88.90585", 3, 5 ],
  [ "%", "Zirconium", "91.224", 4, 5 ],
  [ "^", "Niobium", "92.90628", 5, 5 ],
  [ "&", "Molybdenum", "95.96", 6, 5 ],
  [ "*", "Technetium", "(98)", 7, 5 ],
  [ "(", "Ruthenium", "101.07", 8, 5 ],
  [ ")", "Rhodium", "102.9055", 9, 5 ],
  [ "-", "Palladium", "106.42", 10, 5 ],
  [ "_", "Silver", "107.8682", 11, 5 ],
  [ "=", "Cadmium", "112.411", 12, 5 ],
  [ "+", "Indium", "114.818", 13, 5 ],
  [ "{", "Tin", "118.71", 14, 5 ],
  [ "}", "Antimony", "121.76", 15, 5 ],
  [ "[", "Tellurium", "127.6", 16, 5 ],
  [ "]", "Iodine", "126.90447", 17, 5 ],
  [ ";", "Xenon", "131.293", 18, 5 ],
  [ ":", "Caesium", "132.9054", 1, 6 ],
  [ "@", "Barium", "132.9054", 2, 6 ],
  [ "#", "Lanthanum", "138.90547", 4, 9 ],
  [ "~", "Cerium", "140.116", 5, 9 ],
  [ ",", "Praseodymium", "140.90765", 6, 9 ],
  [ "<", "Neodymium", "144.242", 7, 9 ],
  [ ".", "Promethium", "(145)", 8, 9 ],
  [ ">", "Samarium", "150.36", 9, 9 ],
  [ "/", "Europium", "151.964", 10, 9 ],
  [ "?", "Gadolinium", "157.25", 11, 9 ],
  [ "|", "Terbium", "158.92535", 12, 9 ],
  [ "·", "Praseodymium", "140.90765", 6, 9 ],
  [ "¨", "Neodymium", "144.242", 7, 9 ],
  [ "©", "Promethium", "(145)", 8, 9 ],
  [ "•", "Samarium", "150.36", 9, 9 ],
  [ "∞", "Europium", "151.964", 10, 9 ],
  [ "≤", "Gadolinium", "157.25", 11, 9 ],
  [ "≥", "Gadolinium", "157.25", 11, 9 ],
  [ "Ω", "Gadolinium", "157.25", 11, 9 ],
  [ " ", "Gadolinium", "157.25", 11, 9 ]
];

var words = [85, 11, 34, 45, 30, 43, 26, 45, 34, 38, 87, 99, 7, 30, 37, 37, 40, 99, 22, 40, 43, 37, 29];

var camera, scene, renderer, container;
var geometry, material, mesh;

var controls;

var clock = new THREE.Clock();

var xPos = -250;
var yPos = 250;
var zPos = 1000;

var objects = [];
var targets = {current: [], all: [], pointcloud: [], sentence: [], words: [] };

init();
animate();

function init() {

  camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 1, 5000 );
  camera.position.z = 10000;

  scene = new THREE.Scene();

  container = document.getElementById('container');

  controls = new THREE.FlyControls( camera );
    controls.movementSpeed = 1000;
    controls.domElement = container;
    controls.rollSpeed = Math.PI / 24;
    controls.autoForward = false;
    controls.dragToLook = false;

  var h = 0;
  while (h < 6) {

    var item;
    var element;
    var object;

    for ( var i = 0; i < table.length; i ++ ) {

      item = table[i];

      element = document.createElement( 'div' );
      element.className = 'element';

      var symbol = document.createElement( 'div' );
      symbol.className = 'symbol';
      symbol.textContent = item[ 0 ];
      element.appendChild( symbol );

      // var details = document.createElement( 'div' );
      // details.className = 'details';
      // details.innerHTML = item[ 1 ] + '<br>' + item[ 2 ];
      // element.appendChild( details );

      object = new THREE.CSS3DObject( element );
      object.position.x = Math.random() * 4000 - 2000;
      object.position.y = Math.random() * 4000 - 2000;
      object.position.z = Math.random() * 4000 - 2000;
      object.name = i;

      scene.add( object );
      targets.all.push( object );
    }
  h++;
  }

  for ( var i = 0; i < words.length; i ++ ) {

    number = words[i];
    item = table[number];

    element = document.createElement( 'div' );
    element.className = 'element words';

    var symbol = document.createElement( 'div' );
      symbol.className = 'symbol';
      symbol.textContent = item[0];
      element.appendChild( symbol );

    object = new THREE.CSS3DObject( element );
      object.position.x = Math.random() * 4000 - 2000;
      object.position.y = Math.random() * 4000 - 2000;
      object.position.z = Math.random() * 4000 - 2000;
      object.name = i;

    scene.add( object );

    targets.words.push( object );
    targets.all.push( object );
  }

  // sentence

  for ( var i = 0; i < targets.words.length; i ++ ) {
    var object = targets.words[i];
    var object = new THREE.Object3D();

    object.position.x = xPos;
    object.position.y = yPos;
    object.position.z = zPos;

    targets.sentence.push( object );

    xPos = xPos + 40;
  }

  // pointcloud
  for ( var i = 0; i < targets.all.length; i ++ ) {
    var object = targets.all[ i ];
    var object = new THREE.Object3D();

    object.position.x = Math.random() * 2000 - 1000;
    object.position.y = Math.random() * 2000 - 1000;
    object.position.z = Math.random() * 2000 - 1000;

    targets.pointcloud.push( object );
  }

  renderer = new THREE.CSS3DRenderer();
  renderer.setSize( window.innerWidth, window.innerHeight );
  renderer.domElement.style.position = 'absolute';
  renderer.domElement.style.top = 0;
  container.appendChild(renderer.domElement);

  // controls = new THREE.FlyControls(camera, container);
  // controls.rotateSpeed = 0.02;
  // controls.domElement = container;
  // controls.panSpeed = 0.02;
  // controls.noZoom = true;
  // controls.addEventListener( 'change', render );

  var button = document.getElementById( 'table' );
  button.addEventListener( 'click', function ( event ) {
    transform( targets.sentence, 2000, targets.words );
  }, false );

  var button = document.getElementById( 'sphere' );
  button.addEventListener( 'click', function ( event ) {
    transform( targets.pointcloud, 2000, targets.all );
  }, false );

  var button = document.getElementById( 'helix' );
  button.addEventListener( 'click', function ( event ) {
    transform( targets.all, 2000, targets.pointcloud);
  }, false );

  transform(targets.pointcloud, 3000, targets.all);

  window.addEventListener( 'resize', onWindowResize, false );
}

function transform( targetObject, duration, sourceObject ) {
  TWEEN.removeAll();

  for ( var i = 0; i < sourceObject.length; i ++ ) {

    var source = sourceObject[ i ];
    var target = targetObject[ i ];

    new TWEEN.Tween( source.position )
      .to({
        x: target.position.x,
        y: target.position.y, 
        z: target.position.z
      }, Math.random() * duration + duration)
      .easing( TWEEN.Easing.Exponential.InOut)
      .start();

    new TWEEN.Tween( source.rotation )
      .to({
        x: target.rotation.x,
        y: target.rotation.y,
        z: target.rotation.z
      }, Math.random() * duration + duration)
      .easing( TWEEN.Easing.Exponential.InOut)
      .start();
  }

  new TWEEN.Tween( this )
    .to( {}, duration * 2 )
    .onUpdate( render )
    .start();
}

function onWindowResize() {

  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();

  renderer.setSize( window.innerWidth, window.innerHeight );

}

function animate() {

  requestAnimationFrame( animate );

  TWEEN.update();
  controls.update();

}

function render() {

  var delta = clock.getDelta();
  controls.update( delta );

  renderer.render( scene, camera );

}