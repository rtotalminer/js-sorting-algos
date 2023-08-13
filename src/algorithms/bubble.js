function bubbleSort(rects) {
  for (let j=0; j<rects.length-1; j++) {
    rects[j].color = "#FFFFFF";
    if (rects[j].height > rects[j+1].height) {
      rects[j].color = "#FF0000";

      let temp = rects[j].height;
      rects[j].height = rects[j+1].height;
      rects[j+1].height = temp; 
    }
  }
  return rects;
}