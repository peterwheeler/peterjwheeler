function preload(){

    var loadImage = function() {
      var preload = new createjs.LoadQueue();
      preload.addEventListener("fileload", handleFileComplete);
      preload.loadFile("assets/preloadjs-bg-center.png");
    }

    var loadData = function(){

    }



  function handleFileComplete(event) {
    console.log("Done!");
  }

}