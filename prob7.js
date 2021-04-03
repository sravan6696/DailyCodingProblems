// Given the mapping a = 1, b = 2, ... z = 26, and an encoded message, count the number of ways it can be decoded.

// For example, the message '111' would give 3, since it could be decoded as 'aaa', 'ka', and 'ak'.

// You can assume that the messages are decodable. For example, '001' is not allowed.

function decode(A) {
    var decodeArray = new Array(A.length+1);

    decodeArray[0] = 1;
    decodeArray[1] = 1;

    for(i=2;i<=A.length;i++){
        if (A[i-1] != '0') decodeArray[i] = decodeArray[i-1];
        if (A.substr(i-2,i) >= '11' && A.substr(i-2,i) <= '26') decodeArray[i] += decodeArray[i-2];
    }

    return decodeArray[A.length];
}

console.log(decode('1234')); // aaaa, aak, aka, kaa, kk
// console.log(decode_helper('111'));