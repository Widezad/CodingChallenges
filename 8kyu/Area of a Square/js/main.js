/*
DESCRIPTION:

Complete the function that calculates the area of the red square, 
when the length of the circular arc A is given as the input. 
Return the result rounded to two decimals.

Note:
use the π value provided in your language (Math::PI, M_PI, 
math.pi, etc)
*/

//Function
function squareArea (A) {
    return Math.pow(2 + A / Math.PI).toFixed(2)
}
//Test Cases
console.log(squareArea(2)) //1.62
console.log(squareArea(0)) //0
console.log(squareArea(14.05)) //80