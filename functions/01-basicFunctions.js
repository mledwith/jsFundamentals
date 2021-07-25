/*
    FUNCTIONS
    
    Functions are processes that we call upon to run an action.
    They can do the following:
     - Take in an input to process, modify, or, respond to(required)
     - Return a value(not required)
     - Can be invoked (or called) as often as needed.
    */

     //let hi = function stuff;
    //(1)     (2)
     function hi() {
         // (3)
         console.log('Hi!');

         // 1: funcion keyword - we use this to define a function
         // 2: name of the function, followed by parentheses - this is how we will call the function
         // 3: code goes here - this will be the "brains" of the function
         //code goes here
     }

     //CALLING THE FUNCTION
     // a.k.a putting the "fun" in function
    // in order to invoke (call) a function, we will simply write
    // it's name and put parenthesis after it.
     hi()

    //  console.log(hi());
     //When we console.log a function, javascript will first evaluate 
     //the function, meaning it will run all of the code and look
     //for value from it. IF we do not have a return statement
     //within the function, we will get back undefined.


     let myName = 'Jerome';

     function myNameCap() {
         myName = myName.toUpperCase();
         // AVOID THIS IF YOU CAN (until much later)
         // THIS IS CALLED RECURSION
         // (calling a function within itself)
        //  myNameCap()
         }
         
         myNameCap();
         console.log(myName);

//          CODE BELOW         //


         function hi() {
             console.log('Hi!');

         }

         hi();

         let myName = 'Jerome';

         function myNameCap() {
             myName - myName.toUpperCase();
             hi();
         }

         myNameCap();
        console.log(myName);









    /* 
    FUNCTION DECLARATION

    A chunk of code that performs a set chunk 
    of code when it is invoked (or called)


    */

    function funcOne() {
        console.log('This is the code that we run in function one');
        }
        funcOne() // we invoke (or call) a function by writing it's declared name followed by parenthesis.


    /*
    FUNCTION EXPRESSIONS

    assigning a function to a variable is what we call an Expression.
    */

    let first = function funcTwo() {
        console.log('Code being run in the function expression');
    }
        first();

    let example = function() {
        console.log('What is my name?');
    }

        example();
        console.log(typeof example); // function
        console.log(typeof example()); //undefined




        /*
        ANONYMOUS FUNCTIONS

        anonymous functions are stored in memory but the runtime does not automatically create a reference to it.

        the main use would be to pass these functions through another function. Maybe we have a ternary where if something is true we one run function, else we run a different function.
        */


        //Common use would be to assign these to a variable
        let anon = function() {
            console.log('Anonymous Function');
        }

        anon();
        //Example of writing anonymous functions
        //fetch ('something')
        //   .then(function(response) {response.json()})



    /*
    PARAMETERS

    we will be using functions to pass in information and return a result

    parameters will allow our function to take in outside information.
    */


    function parameterFunc(num){
        console.log(num + 1);
        return num + 5;
    }
    // return will essentially set the function=to something.
    // parameterFunc(7);

    let returnTest = 5;
    parameterFunc(returnTest); // 6
    console.log(parameterFunc(returnTest)) // 10




    function parameterFunc(num){
        console.log(num + 1);
        return num + 5;
    }
    let returnTest = 15;
    let myReturn = parameterFunc(returnTest);
    console.log('RETURN:', myReturn)






    let firstName = 'Jane';
    let lastName = 'Doe';

    function greeting(first, last){
        console.log(`Hi, ${first}! Welcome back!`);
        console.log(`This is the first parameter: ${first}`);
        console.log(`This is the last parameter ${last}`);
    }

    greeting(firstName);
    greeting(lastName);
    greeting();
    greeting(firstName, lastName);
    greeting(firstName, null);
    greeting('', lastName);

    for ( let j = 0; j <= 10; j+= 2 ){
        console.log(j);
    }

    let count = 0;
    for ( ; count < 9; ++count ) {
        console.log(count);
    }