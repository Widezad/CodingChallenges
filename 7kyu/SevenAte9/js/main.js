/*
Write a function that removes every lone 9 that is inbetween 7s.

"79712312" --> "7712312"
"79797"    --> "777"
*/

//Notes
/*
Remove every number 9 that is between 7
always a string
*/

//write out function
function sevenAte9(str) {
    //create a variable that splits the string
  let arr = str.split('');
  //create for loop 
  for(let i = 1; i < arr.length - 1; i++) {
      if(arr[i - 1] === '7' && arr[i] === '9' && arr[i + 1] === '7') {
          
      }
  }
}
//test cases
console.log(sevenAte9('789')) //'77'
console.log(sevenAte9('7979797')) //'7777'
console.log(sevenAte9('165561786121789797')) //'16556178612178977'