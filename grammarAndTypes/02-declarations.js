/*
What is a variable?

Variables are named containers sorting data.
We can think of these containers as resources we can call upon later. Each variable allows us to store data, which coule be a value or a function, that we will want to reference back to.

*/

let a = 2;

/*
 -"let" is our KEYWORD.
 -"a" is our NAME of our variable.
 -"=" is our ASSIGNMENT OPERATOR.
 -"2" is our variable's VALUE.
 */

 let b = 1;

 console.log(a + b); 


 /*
 Restrictions with variables

 - a variable must begin with a letter, underscore, or dollar sign.
 - numbers may follow the above characters, but cannot come first in the name.
 - javascript is case sensitive - 'hello' and 'Hello' are different variables.
 - no spaces are allowed in variable names.
 - camelCase is best practice for naming variables in js. This will help keep names of variables readable.
    ex:
        let myName = 'Jerome';
        is easier to read than
        let myname = 'Jerome';
 
*/
 
 let startingWithLetter = 'Works';
 let _startingWithUnderscore = 'Works';
 let $startingWithDollarSign = 'Works';
//  let 5startingWithNumber = 'Breaks' // CANNOT start with a variable name with a number.
// let -startingWithDash = 'Breaks' // CANNOT start with a '-'

console.log(startingWithLetter, _startingWithUnderscore, $startingWithDollarSign)

// ctrl + alt + n will run code runner (windows)
// ctrl + option + n will run code runner (mac)

/*
KEYWORDS

var, let, const

 -var: the 'old' keyword for variables. We will not use this much but it is still used depending on the project and when it was made. We will focus on let and const.

-let: the 'new' keyword for variables which was introduced in ES6 *newest version of ECMAScript, which is standardization of JS

-const: also 'new' and declares and unchangeable, or constant, variable. The only limit to const variables is that once they are declared/assigned their value will NEVER change.

  */


var variable = 'var variable';
let letVariable = 'let variable';
const constVariable = 'const variable';

console.log(variable, letVariable, constVariable);


/*
Declarations are the LEFT SIDE of the operator (=) within a variable.
    -let x

Initializations are the RIGHT SIDE of the assignment operator (=) and sets the value of the variable.
    -let x = 10

    10 would be the initialization
*/

let x;
console.log('Declaration:',x);

x = 10;
console.log('Initialization1:',x);

x=33;
console.log('Initialization2:',x);

let y = 'Hello';
console.log('Both:',x,y);


let today = 'Great!';
const efa = 'Wonderful!';
console.log(today, efa); //Great! Wonderful!

today = 'Awesome!';
console.log(today, efa); //Awesome! Wonderful!

efa = 'Super!';
// console.log(today, efa); // error

const example; //Error

example = 'Testing';

console.log(example);