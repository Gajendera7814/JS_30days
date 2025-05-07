/* Question 1. Implement sum(4)(5)(7) */

function sum (a) {
    return function (b) {
        return function (c) {
            return a + b + c
        }
    }
};
console.log(sum(5));
/* 
    Output -

    ƒ (b){
        return function (c){
            return a + b + c
        }
    }
*/

console.log(sum(4)(9));
/*
    Output -
    
    ƒ (c){
        return a + b + c
    }
*/

console.log(sum(4)(5)(7)); // Output: 16




/* Question 2 -

    evaluate("sum")(4)(2) ---> Output: 6
    evaluate("multiply")(5)(4) ---> Output: 20
    evaluate("divide")(6)(2) ---> Output: 3
    evaluate("subtract")(7)(2) ---> Output: 5
*/

function evaluate(operation) {
    return function(a) {
        return function (b) {
            if (operation === "sum") return a + b;
            else if (operation === "multiply") return a * b;
            else if (operation === "divide") return a / b;
            else if (operation === "subtract") return a - b;
            else return "Invalid Operation";
        };
    };
};

const sumation = evaluate("sum");
console.log(sumation(4)(2)); // Output: 6
console.log(sumation(8)(3)); // Output: 11

const mult = evaluate("multiply");
console.log(mult(5)(4)); // Output: 20
console.log(mult(2)(6)); // Output: 12

const div = evaluate("divide");
console.log(div(6)(2)); // Output: 3
console.log(div(10)(2)); // Output: 5


const sub = evaluate("subtract");
console.log(sub(7)(2)); // Output: 5
console.log(sub(1)(3)); // Output: -2




/* Question - 3 
    
    Implement Infinite Currying ---> addition(1)(2)(3)(4).......(n) 
*/

function addition(a) {
    return function (b) {
        if (b) return addition(a + b);
        return a;
    }
};
console.log(addition(2)(3)(4)(5)()); // Output: 14




/* Question 4 - Currying Vs Partial Application */

/*
    Partial Application :- Partial application fixes some arguments of a function and returns a new function with fewer parameters.
*/

function partialAdd(a) {
    return function(b, c) {
        return a + b + c;
    };
};
const addWithOne = partialAdd(1);
console.log(addWithOne(2, 3)); // 6


/*
    Currying :- Currying is a function that takes one argument at a time and returns a new function expecting the next argument.
*/
function addNum(a) {
    return function(b) {
        return a + b;
    };
};
const addFive = addNum(5);
console.log(addFive(3)); // 8
  



/* Question 5 - curry() implemention ---> convert f(a, b, c) into f(a)(b)(c) */

function curry(func) {
    return function curriedFun(...args) {
        if (args.length >= func.length) {
            return func(...args);
        } else {
            return function(...next) {
                return curriedFun(...args, ...next);
            };
        }
    };
};
const Sum = (a, b, c) => a + b + c;
const totalSum = curry(Sum);
console.log(totalSum(10)(20)(30)); // Output: 60