// A unival tree (which stands for "universal value") is a tree where all nodes under it have the same value.

// Given the root to a binary tree, count the number of unival subtrees.

class Node{
    constructor(data, left = null, right = null){
        this.data = data;
        this.left = left;
        this.right = right;
    }
}

function unival(root, count) {
    if(root == null) return true;

    var left = unival(root.left, count);
    var right = unival(root.right, count);

    if(!(left & right)) return false;

    if(root.left && root.data != root.left.data) return false;
    if(root.right && root.data != root.right.data) return false;

    count[0] += 1;
    return true;

}

function unival_helper(root) {
    var count = [0];
    unival(root, count);

    return count[0];
}

var root = new Node(1);
var a = new Node(1);
root.left = a;
var b = new Node(0);
root.right = b;
console.log(root);

console.log(unival_helper(root));