/*
When provided with a number between 0-9, return it in words.

Input :: 1

Output :: "One".

If your language supports it, try using a switch statement.
*/


//Notes 
/*
Always numbers between 0-9
always a number
return number in words

*/
function switchItUp(number){
    //Use Swutch statement 
    switch (number) {
        case 0:
            return 'zero';
        case 1:
            return 'one';
        case 2:
            return 'two';
        case 3: 
            return 'three';
        case 4:
            return 'four';
        case 5: 
            return 'five';
        case 6:
            return 'six';
        case 7:
            return 'seven';
        case 8:
            return 'eight';
        case 9:
            return 'nine'
    }
}
//test cases 
console.log(switchItUp(0)) // 'zero'
console.log(switchItUp(1)) // 'one'
console.log(switchItUp(2)) // 'two'
console.log(switchItUp(3)) // 'three'
console.log(switchItUp(4)) // 'four'
console.log(switchItUp(5)) // 'five'
console.log(switchItUp(6)) // 'six'
console.log(switchItUp(7)) // 'seven'
console.log(switchItUp(8)) // 'eight'
console.log(switchItUp(9)) // 'nine'