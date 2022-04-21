/*
Rock Paper Scissors
Let's play! You have to return which player won! In case of a 
draw return Draw!.

Examples:

rps('scissors','paper') // Player 1 won!
rps('scissors','rock') // Player 2 won!
rps('paper','paper') // Draw!
*/
const rps = (p1, p2) => {
    //create condition for when player 1 wins 
    if(p1 === 'scissors' && p2 === 'paper' 
    || p1 === 'paper' && p2 === 'rock' 
    || p1 === 'rock' && p2 === 'scissors') {
        return `Player 1 won!`

    //create condition for when player 2 wins 
    }else if(p1 === 'paper' && p2 === 'scissors' 
    || p1 ==='rock' && p2 === 'paper' 
    || p1 === 'scissors' && p2 === 'rock') {
        return `Player 2 won!`

    //create condition for when there's a tie
    }else if(p1 === p2){
        return `Draw!`
    }
};
console.log(rps('scissors', 'rock'))