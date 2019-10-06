// Objective

// In this challenge, we learn about JavaScript Dates. Check out the attached tutorial for more details.

// Task

// Given a date string, , in the format MM/DD/YYYY, find and return the day name for that date. Each day name must be one of the following strings: Sunday, Monday, Tuesday, Wednesday, Thursday, Friday, or Saturday. For example, the day name for the date 12/07/2016 is Wednesday.

// Input Format

// Locked stub code in the editor reads the following input from stdin:
// The first line contains an integer, , denoting the number of dates to check.
// Each line  of the  subsequent lines contains a date in MM/DD/YYYY format; each date denotes some  that is passed to the function.

// Constraints

// It is guaranteed that the input only consists of valid dates.
// Output Format

// The function must return a string denoting the day of the week corresponding to the date denoted by .

// Sample Input 0

// 2
// 10/11/2009
// 11/10/2010
// Sample Output 0

// Sunday
// Wednesday
// Explanation 0

// The function is called for the following  dates:

// The date 10/11/2009 was a Sunday, so we return Sunday.
// The date 11/10/2010 was a Wednesday, so we return Wednesday.


'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.trim().split('\n').map(string => {
        return string.trim();
    });
    
    main();    
});

function readLine() {
    return inputString[currentLine++];
}

// The days of the week are: "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"
function getDayName(dateString) {
    let dayName;
    var d = new Date(dateString);
    var days = [ "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    dayName = days[d.getDay()];
    
    return dayName;
}


function main() {
    const d = +(readLine());
    
    for (let i = 0; i < d; i++) {
        const date = readLine();
        
        console.log(getDayName(date));
    }
}