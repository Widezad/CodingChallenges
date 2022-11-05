/*
Write a function that checks if a given string 
(case insensitive) is a palindrome
*/

//Function
function isPalindrome(x) {
    return x.roLowerCase() == x.tolowercase().split('').reverse().join('')
}
//Test Cases