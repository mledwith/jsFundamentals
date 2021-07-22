/*
    SCOPE

    what is scope?

    -scope is how a computer keeps track of all of its variables
    in a program.
    -scope can be nested, where there is an outer scope that 
    encloses an inner scope.

    - Global:  Variables that are defined outside of a function.  
    Functions can have acess to variables that are within the global scope.  
    Consider global scope just like we would consider Earth in relation to Indiana.  
    There are a lot of "things" that could be happening outside of our local environment that could affect our state and a lot of "things" that wouldn't.
    In relation to JS, we could have multiple functions within one JS file.
  - Local:  Variables that are defined within a function. Within Indiana, 
    there are aspects that we can focus on that our Global aspect doesn't consider unless we make it available.  
  - As long as your application exist, your Global Scope exist.  
  Local Scope only exist when your functions are called and executed.

*/

let scope = 'Earth'; // globally scoped variable, think of this as the "Earth" level

let getFromGlobal = 'the moon!';

if(true){
    let scope = 'Indiana'; // locally scoped variable, think of this as "State" level.
    console.log(scope, 'marks the local scope');
    
    let kindaLocal = 'Noblesville'

    if(true) {
        let scope = 'Indianapolis'; //local scope inside of a local scope ("city level")
        console.log(scope, 'is the capital of Indiana');

        console.log(`While looking outside of my very local area, I went to ${kindaLocal} and saw ${getFromGlobal}`);
    }
    console.log(scope, 'should be closest to Indianapolis');
   
}




/*
    LET vs VAR

    Var and Let seem to operate the same way, but while they do
    have a lot of the same functionality (both let us declare
    and initialize variables), they behave differently.
    - var is scoped to the nearest function block
    - let is scoped to the nearest enclosing block
*/

