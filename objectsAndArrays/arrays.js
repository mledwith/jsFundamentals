/*
-Populating and Referring
-Methods
-Length
-Iterating
*/

// POPULATING and REFERRING
            //0         1         2
let list = ['orange', 'banana', 'oreos'];
console.log(list[1]);
/*
-when we call an array, we can append, or add square brackets onto the end of the array name with the index number of the value we want to reference. This is known as SQUARE BRACKET NOTATION

-javascript starts with counting at 0, so when we console log 'list[1]' we should see 'banana'
*/



/*
let students = {
    0: 'Evan',
    1: 'Ricky',
    2: 'Kali',
    ...
}
*/
let students = ['Evan', 'Ricky', 'Kali', 'Richard', 'Matthew', 'Cameron', 'Phoenix', 25, true, ['Matthew', 'Shake n Bake', 'Sophie'], 15 % 5];
console.log(students[10]);
console.log(typeof students);
console.log(students instanceof Array); 
//console.log(students instanceof array); //array is not defined
// the instanceof operator is used to check the type of an object at run time. remember arrays are technically objects.

let students = ['Evan', 'Ricky', 'Kali', 'Richard', 'Matthew', 'Cameron', 'Phoenix', 25, true, ['Matthew', 'Shake n Bake', 'Sophie'], 15 % 5];
console.log(students[4]);
console.log(students[7]);
console.log(students [9][1]); 
console.log(`Hello ${students[9][2]}`);



//ARRAY METHODS

//we can call on multiple different array methods that will allow us to manipulate arrays as we need to.

let food = ['Pecan Pie', 'Shrimp', 'Quesadilla', 'Cheesecake', 'Hotdog'];

// Add to our array
food.push('Pizza'); // .push() will add a value to the end of the array
console.log(food.push('Spring Onion'));
console.log('push:', food);


//Remove from array
food.pop(); // this should remove the last item from the array
console.log('pop:', food);


food.shift(); // remove the first item in an array
console.log('shift:', food);

food.unshift('Chicken', 'Garlic');//adds item(s) to the beginning of an array
console.log('unshift:', food);

food.splice(2, 1, 'Bananas') // remove and insert item(s) from an array
console.log('splice:', food);
// (position to remove, how many to remove, what do add in that location)

food.splice(1, 0, 'Ice Cream'); // insert ice cream into position 1
console.log('second splice:', food);


// LENGTH

let long = [0,1,2,3,4,5,6,7,8,9,10];
console.log(long.length); // 11

let colors = ['blue', 'green', 'yellow', 'red', 'orange', 'purple'];
console.log(colors.length); // 6


/*
ITERATING

forEach - 

    -the forEach() method executes a provided function once for each element in an array.
    -the forEach() method does the same thing as a for loop or a for of loop ---> both iterate over the properties in an array
    -provide a callback function that has up to 3 arguments:
        1) The value.
        2) The index.
        3) The array of object itself
*/

let colorList = ['magenta', 'midnight blue', 'mahogany', 'pthaleo green', 'fuscia', 'orange', 'periwinkle', 'ocre'];

for(let i = 0; i < colorList.length; i++) {
console.log(colorList[i]);
}

colorList.forEach
//callback function
(color => console.log(color)
//a call back function is a function that is either called or passed as a parameter to another function
);
//how do i make an arrow function
// let something = (color) => { /* code here */ }


let colorList = ['magenta', 'midnight blue', 'mahogany', 'pthaleo green', 'fuscia', 'orange', 'periwinkle', 'ocre'];

let logItem = item => console.log(item);
colorList.forEach(logItem);


let colorList = ['magenta', 'midnight blue', 'mahogany', 'pthaleo green', 'fuscia', 'orange', 'periwinkle', 'ocre'];

colorList.forEach( (item, index) =>{
    console.log(item);
    console.log(index);
} )