/*
Complete the function which converts hex number (given as a 
string) to a decimal number.
*/

//Write out function
function hexToDec(hexString){
    return parseInt(hexString, 16)
}

//test cases
console.log(hexToDec('1')) //1
console.log(hexToDec('a')) //10
console.log(hexToDec('10')) //16
console.log(hexToDec('FF')) // 255
console.log(hexToDec('-C')) //-12