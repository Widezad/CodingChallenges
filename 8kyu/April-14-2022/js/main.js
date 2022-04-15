/*
Write a method, that will get an integer array as parameter 
and will process every number from this array.

Return a new array with processing every number of the 
input-array like this:

If the number has an integer square root, take this, 
otherwise square the number.

Example
[4,3,9,7,2,1] -> [2,9,3,49,4,1]
*/

//write out function
function squareOrSquareRoot(array) {
    //declare variable, map through it and check if numbers have a square root if not multiply them.
    let arr = array.map(x => Math.sqrt(x) % 1 ? x * x : Math.sqrt(x))
    //return arr
    return arr;
}
console.log(squareOrSquareRoot([4,3,9,7,2,1]))