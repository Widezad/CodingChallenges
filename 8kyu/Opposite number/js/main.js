/*
Very simple, given an integer or a floating-point number, find its 
opposite.

Examples:

1: -1
14: -14
-34: 34
*/

function opposite(number) {
    if(Number(number === number)) {
        return -number
    }
    else{
        return number
    }
    
}
//test cases
console.log(opposite(1))
console.log(opposite(14))
console.log(opposite(-34))