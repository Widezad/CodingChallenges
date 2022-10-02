/*
DESCRIPTION:

You're at the zoo... all the meerkats look weird. Something has 
gone terribly wrong - someone has gone and switched their heads 
and tails around!

Save the animals by switching them back. You will be given an 
array which will have three values (tail, body, head). It is
your job to re-arrange the array so that the animal is the right 
way round (head, body, tail).

Same goes for all the other arrays/lists that you will get in 
the tests: you have to change the element positions with the same 
exact logics

Simples!
*/

//Function
function fixTheMeerkat(arr) {
    return arr.reverse('')

}

//Test Cases
console.log(fixTheMeerkat(["tail", "body", "head"])) //["Head", "body", "tail"]
console.log(fixTheMeerkat(["tails", "body", "heads"])) //["heads", "body", "tails"]
console.log(fixTheMeerkat(["bottom", "middle", "top"])) //["top", "middle", "bottom"]
console.log(fixTheMeerkat(["lowe legs", "torso", "upper legs"])) //["upper legs", "torso", "lower legs"]
console.log(fixTheMeerkat("ground", "rainbow", "sky")) //["sky", "rainbow", "ground"]