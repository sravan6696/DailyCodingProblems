// Given an array of time intervals (start, end) for classroom lectures (possibly overlapping), find the minimum number of rooms required.
// For example, given [(30, 75), (0, 50), (60, 150)], you should return 2.

function minRooms(arrival, departure) {
    var i = 0, j = 0, res = 0;
    arrival.sort((a, b) => a - b);
    departure.sort((a, b) => a - b);

    while (i < arrival.length) {
        if(arrival[i] < departure[j]) {
            res++;
            i++;
        }
        else {
            res--;
            j++;
        }
    }

    return res;

}


console.log(minRooms([30,0,60],[75,50,150]));


