/*
You are trying to put a hash in ruby or an object in javascript or 
java into an array, but it always returns error, solve it and keep 
it as simple as possible!
*/

/*
items = []
items.push {a: "b", c: "d"}
*/

//Declare a Variable
const items = []
//put parentheses around curly braces.
items.push ({ a: 'b', c: 'd'})

/*
Input: Array of elements

["h","o","l","a"]

Output: String with comma delimited elements of the array in th same 
order.

"h,o,l,a"
*/
function printArray(array){
    //Use join method
    return array.join(',');

  }
  console.log(printArray(["h","o","l","a"]))
