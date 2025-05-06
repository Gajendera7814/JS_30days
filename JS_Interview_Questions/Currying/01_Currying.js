/*
    What is Currying ?

    Currying is a technique of converting a function with multiple arguments into a sequence of funtions each taking one 
    argument.
*/

/* Generic Currying Functions: */

function curry(fn) {
    return function curried(...args) {
        if (args.length >= fn.length) {
            /* if we have enough arguments, call original function. */
            return fn.apply(this, args); 
        } else {
            return function(...nextArgs) {
                /* Otherwise, return a funtion waiting for the rest. */
                return curried.apply(this, args.concat(nextArgs));
            };
        }
    };
}



/*  Example Usage: */

function multiply(a, b, c) {
    return a * b * c;
}
  
const curriedMultiply = curry(multiply);

console.log(curriedMultiply(2)(3)(4)); // 24
console.log(curriedMultiply(2, 3)(4)); // 24
console.log(curriedMultiply(2)(3, 4)); // 24


/*

    ✅ Why Use Generic Currying?

    1. Reusability of Functions

        - Currying helps create reusable and more specific functions from generic ones.

    2. Partial Application

        - You can fix some arguments and leave the rest to be passed later.
        - Great for building pipelines and reducing repetition.

    3. Cleaner and More Declarative Code

        - Code becomes easier to read and reason about.
        - Encourages smaller, composable functions.

    4. Better with Functional Libraries

        - Libraries like Lodash, Ramda, or Redux patterns often rely on currying.
        - It integrates well with .map(), .filter(), .reduce(), etc.

    5. Improves Testability

        - Smaller functions that do one thing are easier to test.


    ⚠️ When to Avoid Currying

        * When performance is critical (currying adds overhead).
        * When the function is used in simple, direct ways (overengineering).
        * If team members aren’t familiar with functional patterns—it may reduce code readability.
*/




/* When you should use currying */

/* Problem Statement -  you want to remove one of the objects if a specific property matches a value, for example if 
   the object name property is equal "John", you want to filter it out. The simplest way is to do it in this way. */

const list = [
    {
        id: 1,
        name: 'Steve',
        email: 'steve@example.com',
    },
    {
        id: 2,
        name: 'John',
        email: 'john@example.com',
    },
    {
        id: 3,
        name: 'Pamela',
        email: 'pam@example.com',
    },
    {
        id: 4,
        name: 'Liz',
        email: 'liz@example.com',
    },
];

const noJohn = list.filter(item => item.name !== 'John');
console.log(noJohn);

/*
    [
        { id: 1, name: 'Steve', email: 'steve@example.com' },
        { id: 3, name: 'Pamela', email: 'pam@example.com' },
        { id: 4, name: 'Liz', email: 'liz@example.com' }
    ]
*/

/* That works, but it's not reusable because you are hardcoding the name you want to remove. */


/* A better way is to wrap it into a function and pass the name as an argument: */
const filterByName = (list, name) => {
    return list.filter(item => item.name !== name);
}
console.log(filterByName(list, 'John'));

/*
    [
        { id: 1, name: 'Steve', email: 'steve@example.com' },
        { id: 3, name: 'Pamela', email: 'pam@example.com' },
        { id: 4, name: 'Liz', email: 'liz@example.com' }
    ]
*/


/* OR */

/* we add another function on top of the previous */
const filtering = (name) => (item) => item.name !== name;

const filterByNames = (list, name) => {
    return list.filter(filtering(name));
};
console.log(filterByNames(list, 'John'));

/*
    [
        { id: 1, name: 'Steve', email: 'steve@example.com' },
        { id: 3, name: 'Pamela', email: 'pam@example.com' },
        { id: 4, name: 'Liz', email: 'liz@example.com' }
    ]
*/


function filterByUserNames(list, name) {
    return list.filter(function(nameToFilter) {
        /* nameToFilter is declared at this point */
        return function(item) {
            /* item is declared here */
            return item.name !== nameToFilter;
        }
    }(name));
};
console.log(filterByUserNames(list, 'Pamela'));

/*
    [
        { id: 1, name: 'Steve', email: 'steve@example.com' },
        { id: 2, name: 'John', email: 'john@example.com' },
        { id: 4, name: 'Liz', email: 'liz@example.com' }
    ]
*/



/* we can achieve "function currying" using two main methods: */

/*
    1.  Using bind() - The bind() method in JavaScript creates a new function with a specified this value and optionally 
        preset arguments.

        */
            const Multiply = (x, y) => {
                console.log(x * y);
            };
            
            /* Here value of y is 3. */
            let multiplyByTwo = Multiply.bind(this, 2);
            multiplyByTwo(3); // Output: 6
            
            let multiplyBy2 = Multiply.bind(this, 2, 4);
            multiplyBy2(3); // Output: 4
            
            let multiplyByTwos = Multiply.bind(this);
            multiplyByTwos(2, 5); // Output: 10
            
            let multiplyByNewTwos = Multiply.bind(this, 7);
            multiplyByNewTwos(2, 3); // Output: 14

        /*
    
    2. Using Closures - A closure in JavaScript is a function that has access to variables from its lexical scope, 
        even when that function is executed outside of that scope. */
        
        const sumFun = function (a) {
            return function (b) {
               return a + b; // Output: 7
            }
        };
        
        let sumOfTwo = sumFun(2);
        console.log(sumOfTwo(5));