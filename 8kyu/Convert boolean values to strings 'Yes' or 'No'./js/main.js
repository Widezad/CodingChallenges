/*
Complete the method that takes a boolean value and return a 
"Yes" string for true, or a "No" string for false.
*/

function boolToWord( bool ){
    //use conditonal 
    if(bool === true) {
        return 'yes'
    }
    else{
        return 'no'
    }
}
console.log(boolToWord(true)) //'yes
console.log(boolToWord(false)) //'no