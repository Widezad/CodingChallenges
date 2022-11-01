/*
DESCRIPTION:

Your function takes two arguments

1. Current father's age (years)
2. Current age if his son (years)

Сalculate how many years ago the father was twice as old as his son 
(or in how many years he will be twice as old). The answer is 
always greater or equal to 0, no matter if it was in the past or 
it is in the future.
*/

//Function
function twiceAsOld(dadYearsOld, sonYearsOld) {
    let twice = dadYearsOld - sonYearsOld * 2
    return twice < 0 ? twice * (-1) : twice

}
//Test Cases
console.log(twiceAsOld(36, 7)) //22
console.log(twiceAsOld(55, 30)) //5
console.log(twiceAsOld(22, 1)) //20
console.log(twiceAsOld(29, 0)) //29