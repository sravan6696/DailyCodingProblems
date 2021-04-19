// Given a dictionary of words and a string made up of those words (no spaces), return the original sentence in a list. If there is more than one possible reconstruction, return any of them. If there is no possible reconstruction, then return null.
// For example, given the set of words 'quick', 'brown', 'the', 'fox', and the string "thequickbrownfox", you should return ['the', 'quick', 'brown', 'fox'].
// Given the set of words 'bed', 'bath', 'bedbath', 'and', 'beyond', and the string "bedbathandbeyond", return either ['bed', 'bath', 'and', 'beyond] or ['bedbath', 'and', 'beyond'].

function sentenceList(sent, dict) {
    if(sent == '') return [];
    for(var i=0;i<dict.length;i++){
        if(dict[i] == sent.substr(0,dict[i].length)){
            var arr = sentenceList(sent.substr(dict[i].length), dict);
            if(arr != null){
                arr.unshift(dict[i]);
                return arr;
            }
        }
    }
    return null;
}

console.log(sentenceList("thequickbrownfox", ['quick', 'brown', 'the', 'fox']));
console.log(sentenceList("bedbathandbeyond", ['bed', 'bath', 'bedbath', 'and', 'beyond']));