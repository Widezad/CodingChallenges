/*
Messi is a soccer player with goals in three leagues:

LaLiga
Copa del Rey
Champions
Complete the function to return his total number of goals in all three leagues.

Note: the input will always be valid.

For example:

5, 10, 2  -->  17
*/

//Create function with called goals and use the 3 goals as parameter values
function goals (laLigaGoals, copaDelReyGoals, championsLeagueGoals) {
    //return the total number of goals in all three leages
    return laLigaGoals + copaDelReyGoals + championsLeagueGoals
}
//Call function and print to the console
console.log(goals(2, 3, 4)) //9