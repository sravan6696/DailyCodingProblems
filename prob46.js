// Given a string, find the longest palindromic contiguous substring. If there are more than one with the maximum length, return any one.

// For example, the longest palindromic substring of "aabcdcb" is "bcdcb". The longest palindromic substring of "bananas" is "anana".

var longestPalindromicSubstring = (str) => {
    var res = str[0];
    for(var i=0;i<str.length;i++){
        var temp = 1, flag = true;
        while(flag){
            if(!(i-temp >= 0 && i+temp < str.length) || str[i-temp] != str[i+temp]){
                if(res.length < (2*temp)-1) {
                    res = str.substr(i-temp+1, (2*temp)-1);
                }
                flag = false;
            }
            else temp++;
        }

        temp = 1;
        flag = true;
        while(flag){
            if(!(i-temp+1 >= 0 && i+temp < str.length) || str[i-temp+1] != str[i+temp]){
                if(res.length < (2*temp)-2) res = str.substr(i-temp+2, (2*temp)-2);
                flag = false;
            }
            else temp++;
        }
    }

    return res;
}

console.log(longestPalindromicSubstring("aabcdcb"));
console.log(longestPalindromicSubstring("bannab"));