/*
You will be given an array a and a value x. 
All you need to do is check whether the 
provided array contains the value.

Array can contain numbers or strings. X can be 
either.

Return true if the array contains the value, 
false if not.
*/

//write out function
function check(a, x) {
    return a.includes(x)
}
//test cases
console.log(check([66, 101], 66)) //true
//test cases
console.log(check([66, 101], 44)) //false