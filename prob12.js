// There exists a staircase with N steps, and you can climb up either 1 or 2 steps at a time. Given N, write a function that returns the number of unique ways you can climb the staircase. The order of the steps matters.

// For example, if N is 4, then there are 5 unique ways:

// 1, 1, 1, 1
// 2, 1, 1
// 1, 2, 1
// 1, 1, 2
// 2, 2
// What if, instead of being able to climb 1 or 2 steps at a time, you could climb any number from a set of positive integers X? For example, if X = {1, 3, 5}, you could climb 1, 3, or 5 steps at a time.


function staircase(N, ways) {
    var arr = Array.from({ length: N+1 }).fill(0);
    for(var j=0;j<ways.length;j++){
        arr[ways[j]] = 1;
    }

    for(var i=1;i<=N;i++){
        for(var j=0;j<ways.length;j++){
            if(i-ways[j] > 0) arr[i] += arr[i-ways[j]];
            // else if(i == ways[j]) arr[i] += 1;
        }
    }
    console.log(arr);
    return arr[N];
}


console.log(staircase(10,[1,3,5]))