/*
DATA and STRUCTURE TYPES

-Primitive Data Types:
    -boolean
    -undefined
    -string
    -number
    -bigInt *
    -symbol *
-null
-Object
-Function
*/

/*
    BOOLEAN

    A boolean has two possible values: true and false
    */

let on = true;
let off = false;

console.log(on);
console.log(off);


/*
    NULL

    A null value is an empty value. Think of it as an empty container that has space to fill. Note: Null and Undefined are two different things.
    */

    let empty = null;
    console.log(empty);

    /*
        UNDEFINED
        
        No value has been assigned to a container and doesn't even act as an empty container.
    */

        let unknown;
        let undef = undefined;

    // What's the difference between null and undefined?
    /*
        -Null is like a container with nothing in it
        -Undefined is a variable that has never been set, or it hasn't been created yet
        */
    
        /*

        NUMBERS

        Literally just numbers
        */

        let degrees = 82;
        console.log(degrees);

        let precise = 999999999999999; // 15 9's in the console
        console.log(precise);

        let rounded = 9999999999999999; // 16 9's becomes 1 with 16 0's
        console.log(rounded);

        let notQuite = 0.2 + 0.1;
        console.log(notQuite);

        let  whatIf = (0.2 * 10 + 0.1 * 10) / 10;
        console.log(whatIf);

        /*
        STRINGS

        Strings represent text and are wrapped in either single or double quotes.
        */

        let doubleQuote = "Double Quote";
        let singleQuote = 'Single Quote';
        console.log(doubleQuote);
        console.log(singleQuote);

        let bothQuotes = 'I said, "How cool is that?"';
        let bothQuotesAlt = "I then said, 'It is pretty cool right?'";
        console.log(bothQuotes);
        console.log(bothQuotesAlt);

        //Numbers and Strings
        let addThese = 1050 + 100;
        console.log(addThese);

        let addTheseAlso = '1050' + '100';
        console.log(addTheseAlso);

        // We can use an operation called 'typeof' to return a string of the variable's type

        console.log(typeof addThese);
        console.log(typeof addTheseAlso);

        // let addTest = 1050 + '100';
        // console.log(addTest);


        /*
            Objects

            Objects are used to store many values instead of just one.
            Consider them as a collection of different variables in one container
            Denoted by Curly brackets {}

        */

        let frodo = {
            // an object has many properties inside of it
            race: 'Hobbit', // string
            // name : value
                // we must seperate properties in an object with a comma
            rings: 1, // number
            sting: true // boolean
        }

        console.log(frodo);
        console.log(typeof frodo);
        console.log(frodo.rings); // Dot Notation

    /*
        ARRAYS

        Containers that hold a list of items
        Denoted by square brackets: []
        all items are within the square brackets
        regardless of the data type, all items are separated by commas
        */
    
        let arrayList = ['position1 ', 'position 2', 'position 3' ];
        console.log(arrayList);

        let anotherExample = ['muffins', 'pizza toppings', true, 17, false, null, undefined];
        console.log(anotherExample);

        console.log(typeof anotherExample);


        /*
            ADDITION VS CONCATENATION

            JS sees the + symbol in two different ways
                -When we use it with numbers, it will use the built in math functionality
                -When we use it with strings, it will ignore the math functionality and concats, or combines, the two strings into one.

                */

        let strings = 'one' + ' ' + 'is a number';
        console.log(strings);

        let concatDiff = 1050 + '100';
        console.log(concatDiff);
        console.log(typeof concatDiff);


    let firstName = 'Matthew';
    let lastName = 'Ledwith';
    let houseNumber = 10310;
    let streetNumber = 'West County Road 1000 North';
    let cityName = 'Stilesville';
    let stateName = 'Indiana';
    let zipCode = 46180;

    console.log(houseNumber, streetNumber,',', cityName,',',stateName,',',zipCode);


    
    /*

    STRING: PROPERTIES

        Properties are qualities associated with a data type
        strings have properties, or qualities associated with them
        the length of a string is a property
    */

        let myName = 'Jerome';
        console.log(myName.length);


    
    /*
        STRING: METHODS

        methods are tools that can help us manipulate data
        .property .method()
        no parens    parens
    
*/

        let myNameIs = 'Jerome';
        console.log(myNameIs.toUpperCase());

        let home = 'My home is in Noblesville';
        console.log('Includes Method:', home.includes('Noblesville'));



    let sent = 'This sentence will be split into individual parts';

    const str = 'This sentence will be split into the individual parts';
    const word = sent.split(' ');
    console.log(word);
   

