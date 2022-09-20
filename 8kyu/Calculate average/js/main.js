/*
Write a function which calculates the average of the numbers in a given list
Note: Empty array should return 0
*/ 

//Write function
function findAverage(array) {
    if(array === "") {
        return 0
    }else {
        return array.reduce((a,b) => a + b)
    }
}

//Console
console.log(findAverage([1,1,1])) //1
console.log(findAverage([1,2,3])) //2
console.log(findAverage([1,2,3,4])) //2.5