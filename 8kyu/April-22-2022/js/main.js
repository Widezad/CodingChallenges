/*
Kata Task
I have a cat and a dog.

I got them at the same time as kitten/puppy. That was 
humanYears years ago.

Return their respective ages now as [humanYears,catYears,dogYears]

NOTES:

humanYears >= 1
humanYears are whole numbers only
Cat Years
15 cat years for first year
+9 cat years for second year
+4 cat years for each year after that
Dog Years
15 dog years for first year
+9 dog years for second year
+5 dog years for each year after that
*/

let humanYearsCatYearsDogYear = (humanYears) => {
    //declare variable for dog and cat years
    let dogYears = 0, catYears = 0

    //create loop
    for(let i = 1; i <= humanYears; i++) {

        //15 for first year
        if(i === 1) {
             dogYears += 15
             catYears +=15

        //Add 9 for Second Year
        }else if(i === 2) {
            dogYears += 24
            catYears += 24

        //Add 4 to cat and Add 5 to do years every year after first and second year
        }else if(humanYears >= 3) {
            catYears +=4
            dogYears  +=5
        }
    }
    return [humanYears, dogYears, catYears]

}
console.log(humanYearsCatYearsDogYear(1))