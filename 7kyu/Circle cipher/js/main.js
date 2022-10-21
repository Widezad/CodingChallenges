/*
DESCRIPTION:

magine a circle. To encode the word codewars, we could split the circle 
into 8 parts (as codewars has 8 letters):

Then add the letters in a clockwise direction:

Then remove the circle:

If we read the result from left to right, we get csordaew.

Decoding is the same process in reverse. If we decode csordaew, get codewars.

Examples:

encode "codewars" -> "csordaew"
decode "csordaew" -> "codewars"

encode "white" -> "wehti"
decode "wehti" -> "white"
*/

//Function
function encode(s) {
}

function decode(s) {
}
//Test Cases
console.log(encode("codewars")) // csordaew
console.log(encode("white")) //wehti
console.log(encode("Assert")) //Atsrse
console.log(encode("Hello world!")) //H!edllroo w
console.log(encode("You have chosen to translate this kata.")) //Y.oaut ahka vsei hcth oesteanl stnoa rt