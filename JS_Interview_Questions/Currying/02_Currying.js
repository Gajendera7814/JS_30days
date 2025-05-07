/*
    What is Currying?
    
    - Currying is a function that takes one argument at a time and returns a new function expecting the next argument. 
    It is a conversion of functions from callable as f(a, b, c)into callable as f(a)(b)(c).

    Basically Currying doesn’t call a function. It just transforms a function. They are constructed by chaining closures 
    by immediately returning their inner functions simultaneously.
*/

/* f(a, b) implementation */
function f(a, b) {
    return a * b;
};
console.log(f(5, 6)); // Output: [Function (anonymous)]


/* f(a)(b) implementation */
function f(a) {
    return function (b) {
        return a + b;
    }
};

console.log(f(3)(4)); // Output: 7


/*
    Why should currying be used ?

    Following are the reasons why currying is good :

    ✅ It makes a function pure which makes it expose to less errors and side effects.

    ✅ It helps in avoiding the same variable again and again.

    ✅ It is a checking method that checks if you have all the things before you proceed.

    ✅ It divides one function into multiple functions so that one handles one set of responsibility.
*/


/* 
    How does currying work?
    
    Currying is a function that takes multiple arguments as input. It transform the function into a number of functions 
    where every function will accept one argument.
*/

/* Simple function */

const add = (a, b, c)=>{
    return a + b + c
};
console.log(add(1, 2, 3)); // Output: 6



/* Curried Function */
const addCurry = (a) => { // takes one argument
    return (b) => {       // takes second argument
        return (c) => {   // takes third argument
            return a + b + c;
        }
    }
};
console.log(addCurry(1)(2)(3)); // Output: 6



/* Convert sum(2, 6, 1) to sum(2)(6)(1) */

function sum (a, b, c) {
    return a + b + c;
};
console.log(sum(2, 6, 7));


function sum(a) {
    return (b) => {
        return (c) => {
            return a + b + c
        }
    }
}
/* you can call it in two ways */
console.log(sum(1)(2)(3)); // Output: 6

const sum1 = sum(1);
const sum2 = sum1(2);
const result = sum2(3);
console.log(result); // Output: 6

console.log(sum1);
/*
    (b) => {
        return (c) => {
            return a + b + c
        }
    }
*/

/* 
    Why such output?

    Because you passed only one argument.Hence, it will return the other two functions expecting other 2 arguments.
*/


console.log(sum2); // (c) => { return a + b + c }





/* Write a function curry() that converts f(a, b, c) into a curried function f(a)(b)(c). */

function curry(func) {
    /* args takes arguments in the form of array eg - [a, b, c] */
    return function curriedFunc(...args) {
        /* check if current args passed equals the number of args function expects. */
        if (args.length >= func.length) {
            /* if yes, we spread args elements to pass into func (spread). This is our base case. */
            return func(...args);
        } else {
            /* if not, we return a function that collects the next arguments passed in next and we recursively call 
            curriedFunc, accumulating and spreading the values of args first and then the values of next. next will 
            take into consideration a variable amount of next arguments e.g (1, 2) (1) (1, 2, 3) */
            return function(...next) {
                return curriedFunc(...args,...next);
            }
        }
    }
};
  
const join = (a, b, c) => {
    return `${a}_${b}_${c}`;
};
const curriedJoin = curry(join);

console.log(curriedJoin(1, 2, 3)); // Output: '1_2_3'
  
console.log(curriedJoin(1)(2, 3)); // Output: '1_2_3'

console.log(curriedJoin(1, 2)(3)); // Output: '1_2_3'
  