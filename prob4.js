// Given an array of integers, find the first missing positive integer in linear time and constant space. In other words, find the lowest positive integer that does not exist in the array. The array can contain duplicates and negative numbers as well.

// For example, the input [3, 4, -1, 1] should give 2. The input [1, 2, 0] should give 3.

// You can modify the input array in-place.


var A = [0,2,-1,3,5];

function segregate(A){
    var j = 0;
    for(var i=0;i<A.length;i++){
        if(A[i] <= 0){
            var temp = A[i];
            A[i] = A[j];
            A[j] = temp;
            j++;
        }
    }

    return A.slice(j);
}

function calculate(A){
    // console.log(A);
    for(var i=0;i<A.length;i++){
        if(Math.abs(A[i]) <= A.length && A[Math.abs(A[i])-1]){
            A[Math.abs(A[i])-1] = - A[Math.abs(A[i])-1];
        }
    }
    // console.log(A);
    for(var i=0;i<A.length;i++){
        if(A[i] > 0) return i+1;
    }
    
    return A.length+1;
}

function result(A){
    A = segregate(A);
    console.log(calculate(A));
}

// result([0,1,2,3]);
// result([]);
// result([-1,-2,-3]);
// result([2,3,-1,4]);
result([2,1,0,3,5,-2,7,9]);
