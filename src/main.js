
// Global Variables
const FPS = 1000 / 50;
const WHITE = "#FFFFFF";
const RED = "#FF0000";
const BLACK = "#000000"

// Algorithm Flags
NO_ALGO = -1;
BUBBLE_SORT = 0;
SELECTION_SORT = 1;

// Local Variables
var rects = createRectangles();
var temp = []
var startTime = new Date();
var algo = NO_ALGO;

// Algorithm Variables
var selectionIndex  = 0;

function createRectangles(count) {
  var rects = [];
  for (let i=0; i<count; i++) {//
    let rectHeight = Math.floor(Math.random() * canvas.height-1);
    let rect = new Rectangle(5, rectHeight, WHITE)
    rects.push(rect);
  }
  return rects;
}

function setBubble() {
  rects = createRectangles((canvas.width/10)-1);
  algo = BUBBLE_SORT;
}

function setSelection() {
  rects = createRectangles((canvas.width/10)-1);
  selectionIndex = 0;
  algo = SELECTION_SORT;
}

window.onload = function () {
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  setInterval(mainLoop, FPS);
};

function mainLoop() {

  let elapsed = getTime(10);
  
  if (elapsed % 5 == 0 && algo != NO_ALGO) {

    // Draw background
    ctx.fillStyle = BLACK;
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    if (algo != NO_ALGO) {

      // Create the integer array
      arr = [];
      for (let i=0; i<rects.length; i++) {
        arr.push(rects[i].height);
      }

      // Check if array is sorted
      if (!isSorted(arr)) {
        if (algo == BUBBLE_SORT) {
          rects = bubbleSort(rects);
        }
        if (algo == SELECTION_SORT) {
          rects = selectionSort(rects);
        }
      }

      // Draw the rectangles
      for (let i=0; i<rects.length; i++) {
        rects[i].draw(5 + 10*i, canvas.height-rects[i].height);
      }
    }
  }

  else if (algo == NO_ALGO){
    ctx.fillStyle = BLACK;
    ctx.fillRect(0, 0, canvas.width, canvas.height);  
  }
  
}
