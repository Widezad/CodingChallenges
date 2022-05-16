/*
Combine strings function
Create a function named combineNames that accepts two 
parameters (first and last name). The function should return 
the full name.

Example:

combineNames('James', 'Stevens')
returns:

'James Stevens'
*/


//I'm cobining the parameters and returning the name
//Always a string 
//return full name

//Create the combineNames function 
function combineNames (first, last) {
    return `${first} ${last}`
}
//test cases
console.log(combineNames('James', 'Stevens'))