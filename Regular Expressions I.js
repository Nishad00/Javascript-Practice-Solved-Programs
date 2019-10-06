// Objective

// In this challenge, we use a Regular Expression to evaluate a string. Check out the attached tutorial for more details.

// Task

// Complete the function in the editor below by returning a RegExp object, , that matches any string  that begins and ends with the same vowel. Recall that the English vowels are a, e, i, o, and u.

// Constraints

// The length of string  is  .
// String  consists of lowercase letters only (i.e., [a-z]).
// Output Format

// The function must return a RegExp object that matches any string  beginning with and ending in the same vowel.

// Sample Input 0

// bcd
// Sample Output 0

// false
// Explanation 0

// This string starts with (and ends in) a consonant, so it cannot start and end with the same vowel.

// Sample Input 1

// abcd
// Sample Output 1

// false
// Explanation 1

// This string ends in a consonant, so it cannot start and end with the same vowel.

// Sample Input 2

// abcda
// Sample Output 2

// true
// Explanation 2

// This string starts and ends with the same vowel (a).

// Sample Input 3

// abcdo
// Sample Output 3

// false
// Explanation 3

// This string starts with the vowel a but ends in the vowel o.


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
    
function regexVar() {
    

    //  ^ => first item matches:
// () => stores matching value captured within
// [aeiou] => matches any of the characters in the brackets
// . => matches any character:
// + => for 1 or more occurrances (this ensures str length > 3)
// \1 => matches to previously stored match. 
    // \2 looks for matched item stored 2 instances ago 
    // \3 looks for matched item stored 3 ago, etc

//  $ ensures that matched item is at end of the sequence

    let re = /^([aeiou]).+\1$/;
    return re;
}


function main() {
    const re = regexVar();
    const s = readLine();
    
    console.log(re.test(s));
}