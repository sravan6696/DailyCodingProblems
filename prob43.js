// Implement a stack that has the following methods:

// push(val), which pushes an element onto the stack
// pop(), which pops off and returns the topmost element of the stack. If there are no elements in the stack, then it should throw an error or return null.
// max(), which returns the maximum value in the stack currently. If there are no elements in the stack, then it should throw an error or return null.
// Each method should run in constant time.

class Stack{
    constructor(){
        this.stack = [];
        this.maxStack = [];
    }

    push(val){
        this.stack.push(val);
        if(this.maxStack.length == 0 || val >= this.maxStack[this.maxStack.length-1]) this.maxStack.push(val);
    }

    pop(){
        if(this.stack.length == 0) return null;
        var elem = this.stack.pop();
        if(elem == this.maxStack[this.maxStack.length-1]) this.maxStack.pop();
        return elem;
    }

    max(){
        if(this.stack.length == 0) return null;
        return this.maxStack[this.maxStack.length-1];
    }
}


var stack = new Stack();

stack.push(1);
console.log(stack.max());

stack.push(3);
stack.push(2);
console.log(stack.max());
console.log(stack.pop());
console.log(stack.max());

stack.push(0);
stack.push(5);
console.log(stack.max());
console.log(stack.pop());