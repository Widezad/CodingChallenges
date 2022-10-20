/*
DESCRIPTION:

An isogram is a word that has no repeating letters, consecutive 
or non-consecutive. Implement a function that determines whether 
a string that contains only letters is an isogram. Assume the 
empty string is an isogram. Ignore letter case.

Example:(Inout --> Output)

"Dermatoglyphics" --> true "aba" --> false "moOse" --> false 
(ignore letter case)
*/

//Function
function isIsogram(str){
    var i, j;
    str = str.toLowerCase();
    for(i = 0; i < str.length; ++i) {
      for(j = i + 1; j < str.length; ++j) {
        if(str[i] === str[j]) {
          return false;
        }
      }
    }
    return true;
}

//Test Case
console.log(isIsogram("Dermatoglyphics")) //true
console.log(isIsogram("isogram")) //true
console.log(isIsogram("aba")) //false
console.log(isIsogram("mo0se")) //false
console.log(isIsogram("isIsogram")) //false
console.log(isIsogram(" ")) //true
