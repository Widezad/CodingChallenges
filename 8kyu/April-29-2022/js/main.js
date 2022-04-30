/*
Our football team finished the championship. The result of 
each match look like "x:y". Results of all matches are recorded
 in the collection.

For example: ["3:1", "2:2", "0:1", ...]

Write a function that takes such collection and counts the 
points of our team in the championship. Rules for counting 
points for each match:

if x > y: 3 points
if x < y: 0 point
if x = y: 1 point
Notes:

there are 10 matches in the championship
0 <= x <= 4
0 <= y <= 4
*/

function points(games) {
    // create variable to add to
    let totalPoints = 0;
    
    for(let i = 0; i < games.length; i++) {

        let xScore = Number(games[i].charAt(0));
        let yScore = Number(games[i].charAt(2));

        if(xScore > yScore) totalPoints+=3
        if(xScore < yScore) totalPoints +=0
        if(xScore  === yScore) totalPoints+=1
    }
    return totalPoints
}
console.log(points(["1:0","2:0","3:0","4:0","2:1","3:1","4:1","3:2","4:2","4:3"]))


/*
Consider an array/list of sheep where some sheep may be missing 
from their place. We need a function that counts the number of 
sheep present in the array (true means present).

For example,

[true,  true,  true,  false,
  true,  true,  true,  true ,
  true,  false, true,  false,
  true,  false, false, true ,
  true,  true,  true,  true ,
  false, false, true,  true]
The correct answer would be 17.

Hint: Don't forget to check for bad values like null/undefined
*/

function countSheeps(arrayOfSheep) {
    // TODO May the force be with you
    let count = 0;
    for(let i = 0; i < arrayOfSheep.length; i++) {

        //Check to see if sheeps are present 
        if(arrayOfSheep[i] === true) {
            count++
        }

    }
    return count
}
console.log(countSheeps([true,  true,  true,  false,
    true,  true,  true,  true ,
    true,  false, true,  false,
    true,  false, false, true ,
    true,  true,  true,  true ,
    false, false, true,  true]))