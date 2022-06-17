/*
Given a non-empty array of integers, return the result of
multiplying the values together in order. Example:

[1, 2, 3, 4] => 1 * 2 * 3 * 4 = 24
*/

//Notes
/*
return all the numbers that were passed into the array multiplied.
*/

//write out function
function grow(x){
    return x.reduce((a, b) => a * b)
}
//test cases
console.log(grow([1,2,3])) //6
console.log(grow([4,1,1,1,4])) //16
console.log(grow([2,2,2,2,2,2])) //64