
function selectionSort(rects) {
    let min_idx = selectionIndex;
    let n = rects.length;

    if (selectionIndex > n-1) {
        return rects;
    }

    // for (let k=selectionIndex; k<n; k++) {
    //     rects[k].color = "#FF0000";
    // }

    for (let j = selectionIndex+1; j < n; j++){
        rects[j].color = "#FF0000";
        if (rects[min_idx].height > rects[j].height ) {
            min_idx = j;
        }
    }

    let temp = rects[min_idx].height;
    rects[min_idx].height = rects[selectionIndex].height;
    rects[selectionIndex].height = temp; 

    rects[selectionIndex].color = "#FFFFFF";

    selectionIndex++;
    return rects;
}  