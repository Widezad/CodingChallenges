/*
DESCRIPTION:

Return the type of the sum of the two arguments
*/

//Function
function typeOfSum(a,b) {

}
//Test cases
console.log(typeOfSum(12,1)) //'number'
console.log(typeOfSum('d', 1)) //'string'
console.log(typeOfSum(1, 'a')) //'string'
console.log(typeOfSum('dd', '')) // 'string'
console.log(typeOfSum(true, 1)) // 'number'
console.log(typeOfSum('s', false)) // 'string'
console.log(typeOfSum(null, 1)) //'string'