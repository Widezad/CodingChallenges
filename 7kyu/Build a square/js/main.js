/*
DESCRIPTION:

I will give you an integer. Give me back a shape that is as long and 
wide as the integer. The integer will be a whole number between 1 and 50.

Example

n = 3, so i expect a 3x3 square back just like below a string:
+++
+++
+++
*/

//Function
function generateShape(integer){
    return ('+'.repeat(integer) + '\n').repeat(integer).trim()
}
//Test Cases
console.log(generateShape(8)) //'++++++++\n++++++++\n++++++++\n++++++++\n++++++++\n++++++++\n++++++++\n++++++++'