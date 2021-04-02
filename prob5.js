// cons(a, b) constructs a pair, and car(pair) and cdr(pair) returns the first and last element of that pair. For example, car(cons(3, 4)) returns 3, and cdr(cons(3, 4)) returns 4

function cons(a,b){
    function pair(f) {
        return f(a,b)
    }
    return pair
}

var p1 = cons(3,5);

// Implement car and cdr functions
function car(pair) {
    function first_element(a,b) {
        return a;
    }
    return pair(first_element)
}

function cdr(pair) {
    function last_element(a,b) {
        return b;
    }
    return pair(last_element)
}

console.log(car(p1), cdr(p1));