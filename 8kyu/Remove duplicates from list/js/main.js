/*
DESCRIPTION

Define a function that removes duplicates from an array of 
numbers and returns it as a result.

THe order of the sequence has to stay the same
*/


//Define the function to get unique values from an array
function distinct(a) {
    let arr = []

    //Loop through the array values
    for(let i = 0; i < a.length; i++) {
        if(arr.indexOf(arr[i] === -1)) {
            arr.push(arr[i])
        }
    }
    return arr
}

//Test cases 
console.log(distinct([1])) //[1]
console.log(distinct([1,2])) //[1,2]
console.log(distinct([1,1,2])) //[1,2]