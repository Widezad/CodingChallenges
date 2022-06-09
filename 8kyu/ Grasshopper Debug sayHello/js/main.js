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
//test cases
console.log(sayHello('Mr. Spock')) // 'Hello, Mr, Spock'
console.log(sayHello('Captain. Kirk')) // 'Hello, Captain Kirk'