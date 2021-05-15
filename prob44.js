// We can determine how "out of order" an array A is by counting the number of inversions it has. Two elements A[i] and A[j] form an inversion if A[i] > A[j] but i < j. That is, a smaller element appears after a larger element.

// Given an array, count the number of inversions it has. Do this faster than O(N^2) time.

// You may assume each element in the array is distinct.

// For example, a sorted list has zero inversions. The array [2, 4, 1, 3, 5] has three inversions: (2, 1), (4, 1), and (4, 3). The array [5, 4, 3, 2, 1] has ten inversions: every distinct pair forms an inversion.


var arr = [2, 4, 1, 3, 5];

var mergeCount = (arr, l, m, r) => {
    var left = [], right = [];
    for(var i=l;i<m+1;i++) left.push(arr[i]);
    for(var i=m+1;i<r+1;i++) right.push(arr[i]);

    var i=0, j=0, k=l, count = 0;

    while(i<left.length && j<right.length){
        if(left[i] <= right[j]) arr[k++] = left[i++];
        else{
            count += (m+1) - (l+i);
            arr[k++] = right[j++];
        }
    }

    while(i<left.length) arr[k++] = left[i++];
    while(j<right.length) arr[k++] = right[j++];

    return count;
}

var mergeSortCount = (arr, l, r) => {
    var count = 0;
    if(l < r) {
        var m = Math.floor((l+r)/2);
        count += mergeSortCount(arr, l, m) + mergeSortCount(arr, m+1, r);
        count += mergeCount(arr, l, m, r);
    }
    // console.log(l, r, count);
    return count;
}

var inversions = (arr) => mergeSortCount(arr, 0, arr.length-1);

console.log(inversions(arr));