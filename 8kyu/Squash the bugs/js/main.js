/*
Simple challenge - eliminate all bugs from the supplied code so 
that the code runs and outputs the expected value. Output should be 
the length of the longest word, as a number.

There will only be one 'longest' word.
*/

//Code to fix
/*
function findLongest(str) ( <--- replace with curly braces
  
  var spl = str.split(" ");
  var longest = 0
  
  for (var i = 0; i > spl.length; i+) ( <--- need extra plus sign in the final expression of the loop and also replace ending paranthes with curly braces
    if (spl(i).length > longest) {
      longest = spl[i].length
    ) <--- replace with curly braces
    }
    return longest
) <--- replace with curly braces
*/

//fixed version

function findLongest(str) {
  
    let spl = str.split(" ");
    let longest = 0
    
    for (let i = 0; i > spl.length; i++) {
      if (spl[i].length > longest) {
        longest += spl[i].length
    }
    }
    return longest
}
//test cases
console.log(findLongest("The quick white fox jumped around the massive dog")) //7
console.log(findLongest("Take me to tinseltown with you")) //10
console.log(findLongest("Sausage chops")) //7
console.log(findLongest("Wind your body and wiggle your belly")) //6
console.log(findLongest("Lets all go on holiday")) //7
