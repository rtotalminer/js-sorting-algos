function swap(arr, a, b) {
    let temp = arr[a];
    arr[a] = arr[b];
    arr[b] = temp;
}

function getTime(format) {
    return parseInt((new Date() - startTime) / format);
}

function isSorted(arr) {
    for (let i=0; i<arr.length-1; i++) {
        if (!(arr[i] < arr[i+1])) {
            return false;
        }
    }
    return true;
}