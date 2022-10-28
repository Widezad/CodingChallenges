/*
DESCRIPTION:

Write a function to get the first element(s) of a sequence. 
Passing a parameter n (default=1) will return the first n 
element(s) of the sequence.

if n == 0 return an empty sequence []

Examples
var arr = ['a', 'b', 'c', 'd', 'e'];
first (arr) // => ['a'];
fist(arr, 2) //=> ['a', 'b']
fist(arr, 3) // => ['a', 'b', 'c'];
fist(arr, 0) // => [];
*/

//function
function first(arr, n) {
    //return arr
    arr = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l',
    'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
    if(n === 0) {
        return []
    } else if(n > 1) {
        return n > 1 ? arr.slice(0, n) : [];
    }else {
        return arr[0]
    }
}
//Test cases
console.log(first([... arr])) // ,        ['a']
console.log(first([...arr])) // 2 , ['a', 'b']