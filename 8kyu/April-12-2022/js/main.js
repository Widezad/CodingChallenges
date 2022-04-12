/*
Write a function that will check if two given characters are the 
same case.

If either of the characters is not a letter, return -1
If both characters are the same case, return 1
If both characters are letters, but not the same case, return 0
Examples
'a' and 'g' returns 1

'A' and 'C' returns 1

'b' and 'G' returns 0

'B' and 'g' returns 0

'0' and '?' returns -1

*/
//Write out function
function sameCase(a, b) {

    //create if statement for when non of the characters aren't letters
    if(a.toUpperCase() === a.toLowerCase() || b.toUpperCase() === b.toLowerCase()) {
        //if they aren't return -1
        return -1

        //else if statement for when they are the same case
    }else if (a === a.toLowerCase() && b === b.toLowerCase() || a === a.toUpperCase() && b === b.toUpperCase()) {
        //if they are return 1
        return 1
        
    }else{
        return 0
    }
}
console.log(sameCase('a' ,'g'))
console.log(sameCase('A' ,'C'))
console.log(sameCase('b' ,'G'))

