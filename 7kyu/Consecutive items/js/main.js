/*
You are given a list of unique integers arr, and two integers a 
and b. Your task is to find out whether or not a and b appear 
consecutively in arr, and return a boolean value (True if a and 
b are consecutive, False otherwise).

It is guaranteed that a and b are both present in arr.
*/

//Notes 
/*
return true if the numbers that are in a and b are include in arr
*/

//Write out function
function consecutive(arr, a, b) {
    for(let index - 0, index < arr.length - 1; index++) {
        if(arr[index == a]) {
            return arr[index + 1 == b]
        }
        if(arr[index == b]) {
            return arr[index + 1 == a]
        }
    }
    return false
}

//Test cases
console.log(consecutive([1, 3, 5, 7], 3, 7)) //false
console.log(consecutive([1, 3, 5, 7], 3, 1)) //true
console.log(consecutive([1, 6, 9, -3, 4, -78, 0], -3, 4)) //true