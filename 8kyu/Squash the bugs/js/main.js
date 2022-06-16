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
  
  for (var i = 0; i > spl.length; i+) (
    if (spl(i).length > longest) {
      longest = spl[i].length
    )
    }
    return longest
) <--- replace with curly braces
*/

//fixed version

function findLongest(str) {
  
    var spl = str.split(" ");
    var longest = 0
    
    for (var i = 0; i > spl.length; i+) (
      if (spl(i).length > longest) {
        longest = spl[i].length
      )
      }
      return longest
}
