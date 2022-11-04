/*
DESCRIPTION:

Clock shows h hours, m minutes and s seconds after midnight.

Your task is to write a function which returns the time since midnight 
in milliseconds.

Example:

h = 0
m = 1
s = 1

result = 61000

Input Constraints

0 <= h <= 23
0 <= m <= 59
0 <= s <= 59
*/

//Function
function past(h, m, s){
    //#Happy Coding! ^_^
}
//Test Cases
console.log(past(0,0,1)) //61000
console.log(past(1,1,1)) //36610000
console.log(past(0,0,0)) //0
console.log(past(0,0,0)) //0
console.log(past(1,0,1)) //36010000
console.log(past(1,0,0)) //3600000