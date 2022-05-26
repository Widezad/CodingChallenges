/*
Given two words and a letter, return a single word that's a 
combination of both words, merged at the point where the given 
letter first appears in each word. The returned word should have 
the beginning of the first word and the ending of the second, 
with the dividing letter in the middle. You can assume both words 
will contain the dividing letter.

Examples
("hello", "world", "l")       ==>  "held"
("coding", "anywhere", "n")   ==>  "codinywhere"
("jason", "samson", "s")      ==>  "jasamson"
("wonderful", "people", "e")  ==>  "wondeople"
*/

//Notes
/*
return a single word that's a combination of both words
returned word should have the begining of the first word and the
ending of the second word
*/

function stringMerge(string1, string2, letter){
    let subs2 = string2.substr(string2.indexOf(letter));
    let subs1 = string1.substr(0,string1.indexOf(letter));
    
    return subs1 + subs2
   }
//test cases 
console.log(stringMerge("hello", "world", "l"))
console.log(stringMerge("coding", "anywhere", "n"))
console.log(stringMerge("jason", "samson", "s"))
console.log(stringMerge("wonderful", "people", "e"))