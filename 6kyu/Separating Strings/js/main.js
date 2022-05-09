/*
Create a function that takes a string and separates it into a 
sequence of letters.

The array will be formatted as so:

[['J','L','L','M']
,['u','i','i','a']
,['s','v','f','n']
,['t','e','e','']]
The function should separate each word into individual letters, 
with the first word in the sentence having its letters in the 
0th index of each 2nd dimension array, and so on.

Shorter words will have an empty string in the place once the 
word has already been mapped out. (See the last element in the 
last part of the array.)

Examples:

sepStr("Just Live Life Man")
// => [['J','L','L','M'],
// => ['u','i','i','a'],
// => ['s','v','f','n'],
// => ['t','e','e','']]);

sepStr("The Mitochondria is the powerhouse of the cell")
// => [ [ 'T', 'M', 'i', 't', 'p', 'o', 't', 'c' ],
// => [ 'h', 'i', 's', 'h', 'o', 'f', 'h', 'e' ],
// => [ 'e', 't', '', 'e', 'w', '', 'e', 'l' ],
// => [ '', 'o', '', '', 'e', '', '', 'l' ],
// => [ '', 'c', '', '', 'r', '', '', '' ],
// => [ '', 'h', '', '', 'h', '', '', '' ],
// => [ '', 'o', '', '', 'o', '', '', '' ],
// => [ '', 'n', '', '', 'u', '', '', '' ],
// => [ '', 'd', '', '', 's', '', '', '' ],
// => [ '', 'r', '', '', 'e', '', '', '' ],
// => [ '', 'i', '', '', '', '', '', '' ],
// => [ '', 'a', '', '', '', '', '', '' ]]
*/

function sepStr(str) {
  
    let sepArr = [];
    let words = str.split(' ');
    
    // find longest word to know how many times to repeat cycle
    let longestLen = 0;
    for (let word of words) {
      if (word.length > longestLen) {
        longestLen = word.length;
      }
    }
    
    // iterate over the array of words however many times to get every letter of the longest word
    for (let i = 0; i < longestLen; i++) {
      // make a new array for each row / index
      let rowStr = [];
      for (let word of words) {
        // if haven't gone past the length of a word, add the letter at that index to the array and remove it from the word
        if (word[i] !== undefined) {
          rowStr.push(word[i]);
        } else {
          // if we have gone past the length of a word, push in an empty string
          rowStr.push('');
        }
      }
      // add the array of letters to the whole array
      sepArr.push(rowStr);
    }
    
    return sepArr;
}