// LOOPS
/*
Loops allow us to go over a block of information or code 
in a determined amount of cycles. It's important to note that it
is possible for us to write code without declaring an endpoint.

Loops help us repeat a process without writing a lot of code
*/

/*
STRUCTURE

We have to setup our loops in a way that we can 
1) See where we are in a loop.
2) Consider what sort of condition we want to run it against.
3) Note when we are done with that condition move on to the next iteration.

We need to:
    1) Create an Index
    2) Run a Condition
    3) Change to the indexing variable (execution of condition)
*/

//? Let's count to 10:

for( let i = 0; i <= 10; i++){
    console.log(i);
}

/*
We state our loop with a "for" . Within this function, we are 
injecting some parameters that JS will run against. 
index; condition, change index -> result.

Within parameters, we are stating our index declaration to 0.
This is our baseline. We move on to asking if that variable is
less than or equal to the number 10, take that set number and add
1 to it. Once that is processed, return that value(in this case "console.log" of that number).
Once our condition is met, we return a FALSE which ends our loop.

This is important to note:
for(<create an index variable); <run condition>; <change index>){
    <return results>
    <continue until the condition is met>
}
*/

//? If we don't indicate what our condition is, the loop will
//? not have a finish line and thus run until we have to force it closed.

//INFINITE LOOP!

/*
for( let i = 0; i++){
    console.log(i);
}
*/

//No condition means that JS doesn't know when to stop and will never
//assume that information.

for(let i = 2; i > -10; i-= 4){
    console.log(i);
}


//We aren't limited by positive or negative numbers. We can even cycle
//through variables with strings.

let word="supercaligragilisticexpialidocious"

for(let b = 0; b < word.length; b++){
    // .lenth is a method we can use in JS that helps us determine
    // a value we may not know.
    console.log(b, word[b]);

    // 1) We set a value of each index and are displaying that.
    // 2) We set to display the value within the "object" of word.
    //    each character that is assigned to the variable of "word" is
    //    provided an index value and this is how we are cycling through it.
    console.log(`The letter ${word[b]} is in position ${b}`);

}



/*
FOR IN LOOPS

With For Loops, we are seeking an index value and running it against
a condition. For In Loops do not require an index number.
*/

let city = {
    name: 'Indianapolis',
    pop: 877000,
    speedway: true
}

for(info in city){
    console.log(info);
    // console.log(city.name);
    // console.log(city["name]);"//)
    console.log(city[info]);
}

/*
for (variable in object){
    run code
}
*/
//          0           1       2           3           4
let list = ['milk', 'eggs', 'lunch meat', 'bread', 'bananas'];
/*
let list = {
    0 milk
    1 eggs
    2 lunch meat
    3 bread
    4 bananas
}
    */

for(item in list){
    console.log(item);
    console.log(list[item]);
}


let myName = 'dwiGht';

let propCase;

for(let index = 0; index < myName.length; index++){
    //code here     
    // console.log(myName.split(''));
    // console.log(myName[index]);

    if(index === 0){
        propCase = myName[index].toUpperCase(); //propcase = 'D'
    } else{
        propCase += myName[index].toLowerCase(); // 'D' + 'w' = 'Dw'
    }

    // console.log(myName[index].toUpperCase());
}
console.log(propCase);



// FOR IN VERSION
let myName = 'dwIght';

let propCase;

for(index in myName){
    index == 0 ? propCase = myName[index].toUpperCase() : propCase += myName[index].toLowerCase();
}
console.log(propCase);

/*
FOR OF LOOP

In order to run a for of loop, the 'thing' must be numbered
like an array.
*/

//ERROR
// let myObject = {
//     string: 'Peter',
//     boolean: true,
//     number: 1
// };

// for(item of myObject){
//     console.log(item);
// }

let indexArray = ['spot 1', 2, true, 'not fifth'];

for(let pos of indexArray) {
    console.log(pos, 'was run through a for of loop.');
}

/*
for(variable of iterable) {
    code goes here
}

*an interable is something that has numbers assigned
to it, like an array, where the first item is 0,
the second item a 1, and so on..[ex. Arrays, Strings]
*/

let officeCharacters = ['Dwight', 'Michael', 'Jim', 'Stanley', 'Pam'];

for(worker of officeCharacters){
    if(worker === 'Dwight' || worker === 'Michael'){
        console.log(worker ,'works too much in the office.');
    }
    if(worker === 'Jim' && worker !== 'Dwight'){
        console.log('Bears. Beets. Battlestar Galactica.');
    }
}