/*
CONDITIONALS

FALSY VALUES:
A falsy value is a value that is considered false when encountered in a boolean context. There are 6 falsy values in JS:
- false
- 0
- "", '', ``
- null
- undefined
- NaN (not a number)

What does this mean? Whenever JS is expecting a boolean value and is given one of these 6, it is evaluated as false

side note: there are also Truthy values in JS, which tend to be much less limited. Examples would include:
true, {}, [], 42, 3.14, "string"
*/

// test if fractions are truthy

/*
IF STATEMENTS;

When we use comparison operators, we typically are asking if we can move on to the next section of code. "IF" something is true do "this thing".
*/


//keyword       Expression
if            (true) {
// code to run if the expression evaluates to true
console.log('Truthy Test');
}

// condition
if(false){
    console.log('Falsy Test');
}

let light = 'on'; // if we change it to 'off' it will not display in the console

if(light == 'on'){
  console.log('The light is on');
}

let weather = 65;
let rain = true;

if( weather < 70 && rain == true){
    console.log('Maybe wear a jacket');
}


let batman = 'is the night';
let bruce = false;
// !bruce will check that bruce is not equal to true
if( batman == 'is the night' && !bruce){
    console.log('Batman');
}
//not equal if statement


/*
IF ELSE

We can think of this as not only providing an answer if our condition evaluates to be true, but also if it ends up being a false.

*/

let today = 75;

if(today < 70) {
    //          STRING INTERPOLATION
    console.log(`It's ${today}, wear a jacket!`);
} else {
    console.log(`It's ${today}. No jacket needed!`);
}


/*
ELSE IF

this is a condition that will be checked if the above condition was not met

*/

let cooktime = 60;

if(cooktime === 45) {
    console.log('Let us feast!');
} else if(cooktime > 45) {
    console.log(`It has been ${cooktime}??? Might want a glass of water!`);    
} else if(cooktime >= 30) {
    console.log(`It has only been ${cooktime} minutes. Wait another 5-15 minutes.`);
} else if(cooktime >= 20) {
    console.log(`It has only been ${cooktime} minutes. Wait another 10-25 minutes.`);

} else {
    console.log(`It has only been ${cooktime} minutes. Perhaps you could at least try cooking it...`);
}


let age = 18;

if(age >= 25){
    console.log(`You are ${age}, 'You can rent a car!'`)
} else if(age >= 21){
    console.log(`You are ${age}, 'You can drink!'`);
} else if(age >= 18){
    console.log(`You are ${age}, 'You can vote!'`);
} else if(age <= 17){
    console.log(`You are ${age}, 'Sorry, you're too young to do anything.'`);
}


/*

TERNARIES

They are if/else statements but they look weird!
*/

let myName = 'Jerome';
//condition
if(myName === 'Jerome') {
//if true run this
   console.log(`Hi, ${myName}!`);
} else {
    //else run this
    console.log(`Not sure I know ${myname}`);
}

// condition ? if true : else result
//condition             if true run this             else run this
myName === 'Jerome' ? console.log(`Hi, ${myName}!`) : console.log(`Not sure I know ${myName}`);

//condition
myName === 'Jerome' ?
//if true
console.log(`Hi, ${myName}!`) :
//else false
console.log(`Not sure I know ${myName}`);


let hero = 'Batman';
let villian = 'Mr. Freeze';

hero == 'Batman' && villian == 'Riddler' ? console.log('What has a head and a tail but no body?') : hero == 'Batman' && villian == 'Joker' ? console.log('Why so serious?') : hero == 'Batman' && villian == 'Mr. Freeze' ? console.log('Ice to meet you!') : console.log(`${hero} is the night!`);


let lampOn = false;
let daytime = true;

lampOn == true && daytime != true ? console.log('The lamp is on during the night')
: lampOn != true && daytime != true ? console.log('The lamp is off during the night')
: lampOn == true && daytime == true ? console.log('The lamp is on during the day')
: lampOn != true && daytime == true ? console.log('The lamp is off during the day')
: console.log('What lamp?');


/*
SWITCH STATEMENTS

The switch statement executes a block of code depending on different cases
*/

let instructor = 'Jerome';

switch(instructor) {
    //if instructor === 'Jerome'
case 'Jerome' : 
    console.log(`${instructor} is a part of the web development team`);
    // }
    break;
case 'Summer' :
    console.log(`${instructor} is a part of the web development team`);
    break;
case 'Josh' :
    console.log(`${instructor} is a part of the software development team`);
    break;
//else {
    default:
        console.log(`Sorry, I can't find what ${instructor} teaches at this time`);

}



let staff = 'Jerome';

switch(staff) {
    case 'Jerome' :
    case 'Summer' :
    case 'Levi' :
    case 'Adam' :
    case 'Hustin' :
        console.log(`${staff} is a part of the web development team`);
        break;
    case 'Josh' :
    case 'Amanda' :
    case 'Casey' :
    case 'Junior' :
        console.log(`${staff} is a part of the software development team`);
        break;
        default:
            console.log(`Sorry, I can't find what ${staff} teaches.`);
        break;
}



let switchConditional = true;

switch(typeof swithConditional == 'string' || typeof
switchConditional == 'boolean') {
    case true:
        console.log(`${switchConditional} is a string or a boolean!`)
        break;
        default:
            console.log(`${switchConditional} is NOT a string or boolean`);
}

// When we use || (or) only one side of the || needs to be true for the expression to be true.
// When we use && (and) BOTH sides of the && need to be true for the expression to be true.




//SWITCH STATEMENTS CHALLENGE

let grade=101;

switch (true) {
    case grade >= 89:
        console.log(`You're grade is ${grade} is an A.`);
        break;
    case grade >= 79:
        console.log(`You're grade is ${grade}, you have a B.`)
        break;
    case grade >= 66:
        console.log(`You're grade is ${grade}, you have a c.`)
        break;
    case grade >= 59:
        console.log(`You're grade is ${grade}, you have a D.`)
        break;
    case grade >= 0:
        console.log(`You're grade is ${grade}, you have a F.`)
        break;
    default:
        console.log("Please insert a value");
        break;
}



//! Challenge
/*
  Take this if else statement and translate it to both a ternary and a switch statement
*/
let character = "";
if(character === 'Michael'){
  console.log('That\'s what she said!');
} else if(character === 'Dwight') {
  console.log('It\'s not weed! It\'s hemp!');
} else if(character === 'Jim') {
  console.log('Bears. Beets. Battlestar Galactica.');
} else {
  console.log('*slow camera zoom*');
}

//TERNARY
let character = "Dwight";
character === 'Michael' ? console.log('That\'s what she said!')
: character === 'Dwight' ? console.log('It\'s not weed! It\'s hemp!')
: character === 'Jim' ? console.log('Bears. Beets. Battlestar Galactica.')
: console.log('slow camera zoom');

//SWITCH
let character = 'Dwight';

switch (true) {
    case character === 'Michael':
        console.log('That\'s what she said!');
        break;
        case character === 'Dwight':
        console.log('It\'s not weed! It\'s hemp!');
        break;
        case character === 'Jim':
        console.log('Bears. Beets. Battlestar Galactica.');
        break;

    default: console.log('*slow camera zoom*');
        break;
}






