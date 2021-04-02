// Given the mapping a = 1, b = 2, ... z = 26, and an encoded message, count the number of ways it can be decoded.

// For example, the message '111' would give 3, since it could be decoded as 'aaa', 'ka', and 'ak'.

// You can assume that the messages are decodable. For example, '001' is not allowed.


function decode(A, end) {
    var ans = 0;
    if(end == -1 || end == 0) return 1;

    var a = A[end], b = A.substr(end-1,end+1);

    if (a != '0') {
        ans += decode(A, end-1);
    }

    if (b <= 26 && b >= 11){
        ans += decode(A, end-2);
    }
    
    return ans;
}

function decode_helper(A) {
    return decode(A, A.length-1);
}

console.log(decode_helper('1111')); // aaaa, aak, aka, kaa, kk
console.log(decode_helper('111'));