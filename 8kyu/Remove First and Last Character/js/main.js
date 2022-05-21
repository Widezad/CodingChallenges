/*
It's pretty straightforward. Your goal is to create a function 
that removes the first and last characters of a string. 
You're given one parameter, the original string. You don't 
have to worry with strings with less than two characters.
*/

//Notes
/*
Remove the first letter and the last letter from the string .
Always a string 
don't worry about string with less than two characters
*/

function removeChar(str){

    //use split method to split string
    //use slice method to remove the first and last character
    //join back together with join method
    return str.split('').slice(1, str.length - 1).join('')

};
//test cases 
console.log(removeChar('eloquent')) //'loquen'
console.log(removeChar('country')) //'ountr'
console.log(removeChar('person')) // 'erso'
   