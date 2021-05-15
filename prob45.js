// Using a function rand5() that returns an integer from 1 to 5 (inclusive) with uniform probability, implement a function rand7() that returns an integer from 1 to 7 (inclusive).

function rand5() {
    var a = Math.random();
    if(a == 1) return rand5();
    return 1+ Math.floor(a*5);
}

function rand7() {
    var a = 5*rand5()+rand5() - 5;
    if(a<22) return a%7+1;
    return rand7();
}

var map = {};
for(var i=0;i<10000000;i++) {
    var a = rand7();
    if(!map[a]) map[a] = 1;
    else map[a]++;
}

console.log(map);