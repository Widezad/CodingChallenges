/*
Description:
Remove an exclamation mark from the end of a string. For a 
//beginner kata, you can assume that the input data is always a 
//string, no need to verify it.

Examples
remove("Hi!") === "Hi"
remove("Hi!!!") === "Hi!!"
remove("!Hi") === "!Hi"
remove("!Hi!") === "!Hi"
remove("Hi! Hi!") === "Hi! Hi"
remove("Hi") === "Hi"
*/

//Write out my function
function remove (string) {
    //remove exclamation mark from end of string 
    //create a loop that iterates through and removes the last 
    //item from the string 
    //then create conditional that checks if a string ends in "!"
    for(let i = 1; i < string.length; i++) {
        if(string[string.length - 1] === "!") {
            return string.slice(0, string.length - 1)
        }
        else{
            return string
        }
    }
}

//test cases
console.log(remove("Hi!"))
console.log(remove("Hi!!!"))
console.log(remove("Hi"))