// Given a array of numbers representing the stock prices of a company in chronological order, write a function that calculates the maximum profit you could have made from buying and selling that stock once. You must buy before you can sell it.

// For example, given [9, 11, 8, 5, 7, 10], you should return 5, since you could buy the stock at 5 dollars and sell it at 10 dollars.

var arr = [2, 11, 8, 5, 7, 10];

var maxProfit = (arr) => {
    var tempArr = [...arr];

    for(var i=arr.length-2;i>=0;i--){
        tempArr[i] = Math.max(tempArr[i+1], tempArr[i]);
    }
    var currMin = arr[0], profit = -1000;
    for(var i=0;i<arr.length;i++){
        currMin = Math.min(currMin, arr[i]);
        profit = Math.max(profit, tempArr[i] - currMin);
    }
    return profit;

}

console.log(maxProfit(arr));