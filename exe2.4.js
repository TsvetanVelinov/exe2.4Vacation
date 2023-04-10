function vacation (input){

let numOfPagers = Number (input[0]);
let pagersPerHour = Number (input[1]);
let countDays = Number (input[2]);

let sumTime = numOfPagers/pagersPerHour

let totalSumTime = sumTime/countDays

console.log(totalSumTime);


}

vacation(["212 ","20 ","2 "])