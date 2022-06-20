/*
This kata is about converting numbers to their binary or hexadecimal 
representation:

If a number is even, convert it to binary.
If a number is odd, convert it to hex.
Numbers will be positive. The hexadecimal string should be lowercased.
*/

//Notes 
/* 
Numbers will always be positive
If pos turn into binary
if neg turn into a hex
always a number
*/

//write out function
function evensAndOdds(num){
	//your code here
    if(num % 2 === 0) {
        return num.toString(2)
    }
}
//test cases
console.log(evensAndOdds(2)) //10
console.log(evensAndOdds(13)) //d
console.log(evensAndOdds(47)) //2f
console.log(evensAndOdds(0)) //0
console.log(evensAndOdds(12800)) //11001000000000
console.log(evensAndOdds(8172381723)) //1e71ca61b