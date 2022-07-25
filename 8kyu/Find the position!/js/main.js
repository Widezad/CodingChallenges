/*
When provided with a letter, return its position in the alphabet.

Input :: "a"

Ouput :: "Position of alphabet: 1"
*/

//function
function position(letter) {
    return "Position of alphabet: " + ((letter.charCodeAt(0)-97) + 1);
}
//test cases
console.log(position("a")) //"Position of alphabet: 1"
console.log(position("z")) //"Position of alphabet: 26"
console.log(position("e")) //"Position of alphabet: 5"
