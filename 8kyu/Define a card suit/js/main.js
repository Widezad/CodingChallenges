/*
You get any card as an argument. Your task is to return the 
suit of this card (in lowercase).

Our deck (is preloaded):

('3♣') -> return 'clubs'
('3♦') -> return 'diamonds'
('3♥') -> return 'hearts'
('3♠') -> return 'spades'
*/


function defineSuit(card) {
    //return suit in lowercase

    //conditional 
    if(card.includes('♣')) {
        return 'clubs'
    }
    else if(card.includes('♦')) {
        return 'diamonds'
    }
    else if(card.includes('♥')) {
        return 'hearts'
    }
    else if(card.includes('♠')) {
        return 'spades'
    }

}
//console log
console.log(defineSuit('3♣')) // 'clubs'
console.log(defineSuit('3♦')) //'diamonds
console.log(defineSuit('3♥')) // 'hearts'
console.log(defineSuit('3♠')) // 'spades