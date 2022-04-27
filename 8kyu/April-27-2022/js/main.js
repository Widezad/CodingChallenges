/*
You ask a small girl,"How old are you?" She always says, 
"x years old", where x is a random number between 0 and 9.

Write a program that returns the girl's age (0-9) as an integer.

Assume the test input string is always a valid string. 
For example, the test input may be "1 year old" or 
"5 years old". The first character in the string is always 
a number.
*/

function getAge(inputString){
    // return the girl's correct age as an integer. Happy coding :) 
    return parseInt(inputString.charAt(0))
}
console.log(getAge('1'))


/*
Given a non-negative integer, 3 for example, return a string 
with a murmur: "1 sheep...2 sheep...3 sheep...". Input will 
always be valid, i.e. no negative integers.
*/
let countSheep = function (num){
    //your code here
    let sheep = "";
    for(let i = 1; i <= num; i++) {
        sheep +=  `${i} sheep...`;
    }
    return sheep
}
console.log(countSheep(3))