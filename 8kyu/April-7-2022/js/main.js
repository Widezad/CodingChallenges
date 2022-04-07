/*
Your task is to sum the differences between consecutive pairs in 
the array in descending order.

For example:

sumOfDifferences([2, 1, 10])
Returns 9

Descending order: [10, 2, 1]

Sum: (10 - 2) + (2 - 1) = 8 + 1 = 9

If the array is empty or the array has only one element the result 
should be 0 (Nothing in Haskell).
*/


//create a function
function sumOfDifferences(arr) {
    //Get numbers in descending order
    arr.sort( (a, b) => b - a);
    console.log(arr)
    
     //create a loop to calculate the sum
    let sum = 0;
    for (let i = 0; i < arr.length - 1; i ++) {
      sum += arr[i] - arr[i + 1];
    }
    return sum
}
console.log(sumOfDifferences([1, 2, 10]))