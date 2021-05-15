// Suppose an arithmetic expression is given as a binary tree. Each leaf is an integer and each internal node is one of '+', '−', '∗', or '/'.
// Given the root to such a tree, write a function to evaluate it.


function evaluate(node) {
    if(typeof node.val == 'number') return node.val;
    else {
        if(node.val == '+') return evaluate(node.left) + evaluate(node.right);
        if(node.val == '-') return evaluate(node.left) - evaluate(node.right);
        if(node.val == '*') return evaluate(node.left) * evaluate(node.right);
        if(node.val == '/') return evaluate(node.left) / evaluate(node.right);
    }
}

class Node {
    constructor(val, left = null, right = null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

var a = new Node('+', new Node(3), new Node(2));
var b = new Node('+', new Node(5), new Node(4));

var main = new Node('*', a, b);

console.log(evaluate(main));