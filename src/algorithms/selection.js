
function selectionSort(arr) {
    let min_idx = selectionIndex;
    let n = arr.length;

    for (let j = selectionIndex+1; j < n; j++){
        if (arr[j].height < arr[min_idx].height) {
            min_idx = j;
        }
    }
    console.log(arr, min_idx, selectionIndex)
    swap(arr, min_idx, selectionIndex);
    selectionIndex++;
    return arr;
}  