/*
Create a function called shortcut to remove the lowercase vowels 
(a, e, i, o, u ) in a given string.

Examples
"hello"     -->  "hll"
"codewars"  -->  "cdwrs"
"goodbye"   -->  "gdby"
"HELLO"     -->  "HELLO"

don't worry about uppercase vowels
y is not considered a vowel for this kata
*/

//Write out function
function shortcut (string) {
    let str = string.split('');
    for(let i = 0; i < string.length; i++) {
        let char = string[i].toLowerCase();
        if(char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u') {
            str[i] = '';
        }
    }
    return str.join('')
}

//test cases
console.log(shortcut('hello')) //'hll'
console.log(shortcut('how are you today?')) //'hw r y tdy?'
console.log(shortcut('complain'))// 'cmpln'
console.log(shortcut('never'))//'nvr'