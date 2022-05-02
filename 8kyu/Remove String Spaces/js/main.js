/*
Simple, remove the spaces from the string, then return the 
resultant string.
*/

function noSpace(x){
    //Use split method to create seperate arrays and use join method to join together without spaces
    return x.split(" ").join('');
}
console.log(noSpace('8 j 8   mBliB8g  imjB8B8  jl  B'))