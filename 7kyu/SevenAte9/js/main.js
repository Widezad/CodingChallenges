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
    while (true) {
      if (str.search('797') !== -1) {
        str = str.replace('797', '77');
      } else {
        break;
      }
    }
    return str;
  }
//test cases
console.log(sevenAte9('789')) //'77'
console.log(sevenAte9('7979797')) //'7777'
console.log(sevenAte9('165561786121789797')) //'16556178612178977'