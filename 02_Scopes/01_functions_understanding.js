/*
    What is a Function?

        > A function is a subprogram designed to perform a particular task.
        > Functions are executed when they are called. This is known as invoking a function.
        > Values can be passed into functions and used within the function.
        > Functions always return a value. In JavaScript, if no return value is specified, the function will return undefined.
    
    Note - Functions are objects.
*/

/*
    Define a Function.

    > There are a few different ways to define a function in JavaScript:

        Function Declaration -

        A Function Declaration defines a named function. To create a function declaration you use the function keyword 
        followed by the name of the function. When using function declarations, the function definition is hoisted, thus 
        allowing the function to be used before it is defined.
*/

/*<-------------- 1. Function Declaration ----------------->*/

function greet() {
    console.log("Hello");
}


/*
    Function Expressions -

    A Function Expressions defines a named or anonymous function. An anonymous function is a function that has no name. 
    Function Expressions are not hoisted, and therefore cannot be used before they are defined. In the example below, 
    we are setting the anonymous function object equal to a variable.
*/

/*<-------------- 2. Function Expressions -------------------->*/

const greet = function() {
    console.log("Hello");
};


/*<----------- 3. Arrow Function Expression (ES6) ------------>*/

const greet = () => {
    console.log("Hello");
};


/*<-------------- 4. Named Function Expression --------------->*/

const greet = function sayHello() {
    console.log("Hello");
};


/*<--------------------- 5. Class Method --------------------->*/

class Greeter {
    greet() {
        console.log("Hello");
    }
}
