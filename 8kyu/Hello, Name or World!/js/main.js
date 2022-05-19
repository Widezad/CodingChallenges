/*
Define a method hello that returns "Hello, Name!" to a given 
name, or says Hello, World! if name is not given (or passed as 
an empty String).

Assuming that name is a String and it checks for user typos to 
return a name with a first capital letter (Xxxx).

Examples:

* With `name` = "john"  => return "Hello, John!"
* With `name` = "aliCE" => return "Hello, Alice!"
* With `name` not given 
  or `name` = ""        => return "Hello, World!"
*/

//Notes
/*
use template string to return name passed in 
return hello world when giving empty string 
return name with a first capital letter
*/

function hello(name) {
    if (typeof name === "undefined" || name.length === 0) {
        return `Hello, World!`;
    } else {
        return `Hello, ${name[0].toUpperCase()}${name.substring(1,).toLowerCase()}!`;
    }
}
console.log(hello())

