
// Global Variables
const FPS = 1000 / 50;

// Local Variables
var rects = createRectangles();
var temp = []
var sorted = false;
var startTime = new Date();
var algo = "none";

function createRectangles() {
  var rects = [];
  for (let i=0; i<(canvas.width/10)-1; i++) {
    let rectHeight = Math.floor(Math.random() * canvas.height-1);
    let rect = new Rectangle(5, rectHeight, "#FFFFFF")
    rects.push(rect);
  }
  return rects;
}

function getTime() {
  return parseInt((new Date() - startTime) / 10);
}

function singleBubbleSort(arr) {
  for (let j=0; j<arr.length-1; j++) {
    arr[j].color = "#FFFFFF";
    if (arr[j].height > arr[j+1].height) {
      arr[j].color = "#FF0000"
      let temp = arr[j].height;
      arr[j].height = arr[j+1].height;
      arr[j+1].height = temp; 
    }
  }
  return arr;
}

function bubbleSort() {
  rects = createRectangles();
  algo = "bubble";
}


window.onload = function () {
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  setInterval(mainLoop, FPS);
};

function mainLoop() {

  let elapsed = getTime();
  
  if (elapsed % 5 == 0) {

    // Draw Background
    ctx.fillStyle = "rgba(0,0,0)";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    if (algo != "none") {
      // Create the integer array
      arr = [];
      for (let i=0; i<rects.length; i++) {
        arr.push(rects[i].height);
      }

      // Compare the arrays
      if (!(JSON.stringify(temp) == JSON.stringify(arr))) {
        temp = structuredClone(arr);
        if (algo == "bubble") {
          rects = singleBubbleSort(rects);
        }
      }
        
      // Draw Rectangles
      for (let i=0; i<rects.length; i++) {
        rects[i].draw(5 + 10*i, canvas.height-rects[i].height);
      }
    }
  }
}
