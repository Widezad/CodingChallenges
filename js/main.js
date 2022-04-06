/*
Given an array of integers, return a new array 
with each value doubled.

For example 

[1, 2, 3] --> [2, 4, 6] 
*/

/*P: IS it always going to be integers? Are we 
going to be given any speacial characters? Is 
it an empty array?

R: Return a new arr with each value dooubled

E: If we are given [2, 3, 4], should we 
return [4, 6, 8]

   If we are given [4, 5, 6], should we return 
   [8, 10, 12]
   If we are gi ven [2, 22], should we return [4, 44]
*/  

//PseudoCode
//Make a function that takes in an array
function doubled(arr) {
    return arr.map(n => n * 2)
}
//map through the array and multiply each elemeny by 2. aslo retun
console.log(doubled([1, 2, 3]))
