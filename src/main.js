
// Global Variables
const FPS = 1000 / 50;

// Local Variables
var rects = createRectangles();
var temp = []
var sorted = false;
var startTime = new Date();
var algo = "none";

var selectionIndex  = 0;

// Bubble Sort
var bubbleButtonFlag = false;


function createRectangles() {
  var rects = [];
  for (let i=0; i<(canvas.width/10)-1; i++) {//
    let rectHeight = Math.floor(Math.random() * canvas.height-1);
    let rect = new Rectangle(5, rectHeight, "#FFFFFF")
    rects.push(rect);
  }
  return rects;
}

function bubbleSort(arr) {
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
  

function setBubble() {
  rects = createRectangles();
  algo = "bubble";
}

function setSelection() {
  rects = createRectangles();
  selectionIndex = 0;
  algo = "selection";
}


window.onload = function () {
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  setInterval(mainLoop, FPS);
};

function mainLoop() {

  let elapsed = getTime(10);
  
  if (0 == 0) {

    // Draw Background
    ctx.fillStyle = "rgba(0,0,0)";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    if (algo != "none") {
      // Create the integer array
      arr = [];
      for (let i=0; i<rects.length; i++) {
        arr.push(rects[i].height);
      }

      console.log(rects);

      if (!isSorted(arr)) {
        if (algo == "bubble") {
          rects = bubbleSort(rects);
        }
        if (algo == "selection") {
          rects = selectionSort(rects);
        }
      }
      else {
        if (algo == "selection") {
          
        }
      }

      

      // Compare the arrays
      // if (!(JSON.stringify(temp) == JSON.stringify(arr))) {
      //   temp = structuredClone(arr);
      //   if (algo == "bubble") {
      //     rects = bubbleSort(rects);
      //   }
        
      // }

      // if (algo == "selection") {
      //   console.log(temp, arr);
      //   rects = selectionSort(rects);
      // }
        
      // Draw Rectangles
      for (let i=0; i<rects.length; i++) {
        rects[i].draw(5 + 10*i, canvas.height-rects[i].height);
      }
    }
  }
}
