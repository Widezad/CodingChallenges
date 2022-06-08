/*
Simple Multiplication
This kata is about multiplying a given number
by eight if it is an even number and by nine otherwise.
*/


//To do 
/*
Create a coditional that returns the given number by eight and 
multiplies by nine if not even.
*/

//Notes
/*
Always a number
Always positive 
if enter 2 should return 16
if enter 1 should return 9
*/

//code here

//Create function
function simpleMultiplication(number) {
    //if statement for when numbers are even
    if(number % 2 === 0) {
        return number * 8
    }
    //else for when numbers are odd
    else{
        return number * 9
    }
}
//test cases
console.log(simpleMultiplication(2)) //16
console.log(simpleMultiplication(1)) //9
console.log(simpleMultiplication(8)) //64
console.log(simpleMultiplication(4)) //32
console.log(simpleMultiplication(5)) //45

//Refactored 

const simpleMultiplication = (number) => number % 2 === 0 ? number * 8 : number * 9

//If strings are entered 
function simpleMultiplication(number) {
    if(Number(number % 2 === 0)) {
        return number * 8
    }
    else number * 9
}
console.log(simpleMultiplication('2')) //16