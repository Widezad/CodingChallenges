/*
Create a function that takes an integer as an argument and returns 
"Even" for even numbers or "Odd" for odd numbers.
*/

//Can take negative numbers -7 should return odd and -2 
//should return even
//Always a number
function even_or_odd(number) {
  //conditional to check for even or odd numbers and return even or odd
  if(number % 2 === 0) {
      return 'Even'
  }
  else{
      return 'Odd'
  }
}
//test cases
console.log(even_or_odd(2)) // 'Even'
console.log(even_or_odd(7)) //'Odd'
console.log(even_or_odd(-42)) // 'Even'
console.log(even_or_odd(-7)) // 'Odd'
console.log(even_or_odd(0)) // 'Even'
