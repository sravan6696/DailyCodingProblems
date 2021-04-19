// Given two singly linked lists that intersect at some point, find the intersecting node. The lists are non-cyclical.
// For example, given A = 3 -> 7 -> 8 -> 10 and B = 99 -> 1 -> 8 -> 10, return the node with value 8.
// In this example, assume nodes with the same value are the exact same node objects.
// Do this in O(M + N) time (where M and N are the lengths of the lists) and constant space.

class Node{
    constructor(data, next = null){
        this.data = data;
        this.next = next;
    }
}

function intersecting(A, B) {
    var m=0, n=0;
    var x=A, y=B;
    while(x){
        m++;
        x=x.next;
    }
    while(y){
        n++;
        y=y.next;
    }

    x=A, y=B;
    if(m<n){
        var p = n-m;
        while(p--){
            y=y.next;
        }
    }
    else if(m>n){
        var p = m-n;
        while(p--){
            x = x.next;
        }
    }

    while(x){
        if(x==y) return x;
        else{
            // console.log(x.data)
            x = x.next;
            y = y.next;
        }

    }

    return null;
}

var k = new Node(8, new Node(10));
var x = new Node(7, k), y = new Node(1, k);
var A = new Node(3, new Node(2, x)), B = new Node(99, y);

console.log(intersecting(A, B));
console.log(intersecting(A, null));