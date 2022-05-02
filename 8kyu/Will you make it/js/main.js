/*
Will you make it?
You were camping with your friends far away from home, 
but when it's time to go back, you realize that your fuel is 
running out and the nearest pump is 50 miles away! You know 
that on average, your car runs on about 25 miles per gallon. 
There are 2 gallons left. Considering these factors, write a 
function that tells you if it is possible to get to the pump
 or not. Function should return true (1 in Prolog, NASM and 
COBOL) if it is possible and false (0 in Prolog, NASM 
and COBOL) if not. The input values are always positive.
*/

const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
    // TODO

    //Wrong Approach
    /*
    if(Number(distanceToPump === 50 && mpg === 25 && fuelLeft === 2)) {
        return true
    }else {
        return false
    }
    */

    //should be
    if(distanceToPump <= mpg * fuelLeft) {
        return true
    }
    else{
        return false
    }
    ///You're Supposed to calculate whether you can or not reach the fuel
    //pump considering your car fuel and your car consumption.
};
console.log(zeroFuel(50, 25, 2))
console.log(zeroFuel(100, 50, 1))