/*
Make multiple functions that will return the sum, difference, 
modulus, product, quotient, and the exponent respectively.

Please use the following function names:

addition = add

multiply = multiply

division = divide (both integer and float divisions are 
accepted)

modulus = mod

exponential = exponent

subtraction = subt

Note: All math operations will be: a (operation) b

*/
//add
function add(a, b) {
    return a + b
}
console.log(add(1, 2))

//divide
function divide(a,b){
    return (a / b)
}
console.log(divide(2, 1))

//multiply
function multiply(a,b){
    return a * b
}
console.log(multiply(1, 2))

//mod
function mod(a,b){
    return 1 % 2
}
console.log(mod(1, 2))  

//exp
function exponent(a,b){
    return a ** b
}
console.log(exponent(1, 2))    

//subt
function subt(a,b){
    return 1 -2
}
console.log(subt(1, 2))