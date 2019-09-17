// Objective

// Today, we're discussing JavaScript functions. Check out the attached tutorial for more details.

// Task

// Implement a function named factorial that has one parameter: an integer,
// . It must return the value of (i.e.,

// factorial).

// Input Format

// Locked stub code in the editor reads a single integer,

// , from stdin and passes it to a function named factorial.

// Constraints

// Output Format

// The function must return the value of

// .

// Sample Input 0

// 4

// Sample Output 0

// 24

// Explanation 0

// We return the value of
// .



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

function factorial(n){
    fact = 1;
    while(n > 0){
        var fact = fact * n;
        n = n-1;
    }
    return fact;
}



function main() {
    const n = +(readLine());
    
    console.log(factorial(n));
}