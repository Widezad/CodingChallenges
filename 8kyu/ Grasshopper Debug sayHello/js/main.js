/*
Debugging sayHello function
The starship Enterprise has run into some problem when creating a 
program to greet everyone as they come aboard. It is your job to fix
 the code and get the program working again!

Example output:

Hello, Mr. Spock
*/

//Notes 
/*
function sayHello(name) {
  return 'Hello'
}
code to fix
always a string 
must be able to great everyone as they come abord.
*/

//Write out function
function sayHello(name) {
    //Use template literals to plug in name parameter
    return `Hello, ${name}`
}


function solution(s1, s2) {
   let sub2 = s2.substr(s2.indexOf(s2))
   let sub1 = s1.substr(0,s1.indexOf(s1))
   return sub1 + sub2
}
console.log(solution("dce", "cccbd"))
console.log(solution("super","tower"))