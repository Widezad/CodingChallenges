/*
Complete the square sum function so that it squares each number passed 
into it and then sums the results together.
For example, for [1, 2, 2] it should return 9 because 1^2 + 2^2 + 2^2
= 9.
*/

//Write out function
function squareSum(numbers){
    let sqaure = numbers * 2
    return sqaure
}
//test cases
console.log(squareSum([1,2])) //5
console.log(squareSum([0, 3, 4, 5])) //50
console.log(squareSum([])) //0
