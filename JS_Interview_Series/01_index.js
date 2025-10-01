/*
    🚀 1. Problem Statement: You have an array that contains mixed data types (numbers and strings) like:

        🔸 const mixed = [1, 'a', 'b', 2, 3, 'c', 4, 'e'];

    🚀 2. What is Currying in JavaScript with example?

    🚀 3. What is debouncing in javaScript?

    🚀 4. What is Scope and its types?

    🚀 5. Difference between Shallow Copy vs Deep Copy in JavaScript?

    🚀 6. Difference between map() and forEach().

    🚀 7. What is Event Bubbling and Capturing?

    🚀 8. What is a Pure Function?
*/



/*
    🚀 1. Problem Statement: You have an array that contains mixed data types (numbers and strings) like:

    🔸 const mixed = [1, 'a', 'b', 2, 3, 'c', 4, 'e'];
*/

const mixed = [1, 'a', 'b', 2, 3, 'c', 4, 'e'];

const number = [];
const string = [];

mixed.forEach((ele) => {
    if (typeof ele === 'string') {
        string.push(ele);
    } else {
        number.push(ele);
    }
});

console.log(number); // Output: [1, 2, 3, 4]
console.log(string); // Output: ['a', 'b', 'c', 'e']





/*
    🚀 2. What is Currying in JavaScript?

    Currying takes a function that receives more than one parameter and breaks it into a series of unray (one parameter) functions.
    Hence, the currying function takes only one parameter at a time.

    🔸 Uses of Currying Function
        
        Currying in JavaScript can be for the following reasons:

        🔹 Currying is helpful in Event handling.
        🔹 By using the currying function, we can avoid passing the same variable many times.
        🔹 Currying in JavaScript can be used to make a higher-order function.
*/

function curry(f) {
    return function(a) {
        return function(b) {
            return f(a, b);
        };
    };
};


// your normal function
const add = (a, b) => {
    return a + b;
};
console.log(add(1,2)); // Output: 3


// using currying
const adds = (a) => {
    return (b) => {
        return a + b;
    }
};
console.log(adds(1)(2)); // Output: 3





/*
    🚀 3. What is debouncing in javaScript?

    Debouncing is a programming technique used to limit the rate at which a function gets executed.

    🔸 It ensures that a function is called only after a certain amount of time has passed since the last time it was invoked.
    🔸 Commonly used to optimize performance for events that fire frequently, like scroll, resize, keyup, or input.


    Why use Debouncing?

    1️⃣ Avoid excessive API calls when user is typing in a search box.
    2️⃣ Reduce unnecessary re-renders or DOM manipulations.
    3️⃣ Improve performance for events that fire rapidly.
*/

// Example: Search Input with Debounce

// Debounce function
function debounce(func, delay) {
    let timeoutId;
    return function(...args) {
        clearTimeout(timeoutId); // Clear the previous timer
        timeoutId = setTimeout(() => {
            func.apply(this, args); // Call the function after delay
        }, delay);
    }
}

// Function to call
function searchQuery(e) {
    console.log("Searching for:", e.target.value);
}

// Input element
const input = document.querySelector("#search");

// Attach debounced event listener
input.addEventListener("input", debounce(searchQuery, 500));





/*
    🚀 4. What is Scope?

    🔸 Scope determines where a variable is accessible in your code.

        🔹 In JavaScript, there are mainly three types of scope:

        1️⃣ Global Scope
        2️⃣ Function Scope
        3️⃣ Block Scope
*/

/*
    1️⃣ Global Scope

    🔸 Variables declared outside any function have global scope.
    🔸 They can be accessed anywhere in your code.
*/
let globalVar = "I am global";

function test() {
    console.log(globalVar); // Accessible here
};
test();
console.log(globalVar); // Accessible here too



/*
    2️⃣ Function Scope

    🔸 Variables declared inside a function are only accessible inside that function.
    🔸 They are not visible outside the function.
*/
function myFunc() {
    let localVar = "I am local";
    console.log(localVar); // Accessible here
}

myFunc();
console.log(localVar); // Error: localVar is not defined



/*
    3️⃣ Block Scope

    🔸 Variables declared with let or const inside { } are block scoped.
    🔸 var is not block scoped.
*/
if (true) {
    let blockVar = "I am block scoped";
    var varVar = "I am function scoped";
    const constVar = "I am block scoped too";
    console.log(blockVar); // Works
}

console.log(varVar);   // Works (var is function scoped)
console.log(blockVar); // Error
console.log(constVar); // Error



/*
    🔸 Scope Chain

    🔹 When a variable is accessed, JavaScript searches for it in the current scope first, then outer scopes, and finally global scope.
    🔹 This is called the scope chain.
*/
let globalVars = "Global";

function outer() {
    let outerVar = "Outer";

    function inner() {
        let innerVar = "Inner";
        console.log(innerVar); // Inner
        console.log(outerVar); // Outer
        console.log(globalVars); // Global
    }

    inner();
}
outer();

/*
    🔁 Key Points for Interviews

    🔸 var → function-scoped.
    🔸 let & const → block-scoped.
    🔸 Functions create their own scope.
    🔸 Scope chain is used to look up variables.
    🔸 Avoid polluting the global scope to prevent conflicts.
*/





/*
    🚀 5. Shallow Copy vs Deep Copy in JavaScript?

    🔸 Shallow Copy:

        🔹 Creates a new object but only copies the first level of properties.
        🔹 Nested objects or arrays are still referenced, not cloned.

    🔸 Deep Copy:

        🔹 Creates a completely independent copy of an object, including all nested objects and arrays.
        🔹 Changes in the new object do not affect the original object.
*/

/*<---------------------------------- Example: Shallow Copy ---------------------------------->*/
let obj1 = { 
    name: "Alice", 
    address: { city: "New York" } 
};

// Shallow copy using Object.assign
let obj2 = Object.assign({}, obj1);

obj2.name = "Bob";
obj2.address.city = "Los Angeles";

console.log(obj1.name);         // Alice (primitive is copied)
console.log(obj1.address.city); // Los Angeles (nested object is referenced)

// ✅ Observation: Nested objects are shared, not cloned.

/*
    1. Using Object.assign()
    2. Using Spread Operator (...)
    3. Using Array.prototype.slice() (for arrays)
    4. Using Array.from() (for arrays)
    5. Using Object.create() (rarely used)
*/

/*<---------------------------------- Example: Deep Copy ---------------------------------->*/
let object1 = { 
    name: "Alice", 
    address: { city: "New York" } 
};

// Deep copy using structuredClone (modern JS)
let obj2 = structuredClone(object1);

obj2.name = "Bob";
obj2.address.city = "Los Angeles";

console.log(object1.name);        // Alice
console.log(object1.address.city); // New York

/*
    🔁 Other Ways to Deep Copy

    1. JSON.parse(JSON.stringify(obj)) – simple but doesn’t handle functions, Dates, or undefined.
    2. Libraries like Lodash: _.cloneDeep(obj)
*/





/*
    🚀 6. Difference between map() and forEach().

    🔸 forEach():

        🔹 To iterate over an array and execute a function for each element.
        🔹 Return Value: undefined
        🔹 Chaining: Cannot be chained (returns undefined)

    🔸 map():

        🔹 To iterate over an array and create a new array with the results.
        🔹 Return Value: A new array containing the returned values from the callback.
        🔹 Chaining: Can be chained with other array methods (returns array)
*/

const numbers = [1, 2, 3];
numbers.forEach(num => {
    console.log(num * 2); // Logs 2, 4, 6
});
console.log(numbers); // Original array remains [1, 2, 3]


const newNumbers = [1, 2, 3];
const doubled = newNumbers.map(num => num * 2);
console.log(doubled); // [2, 4, 6]
console.log(newNumbers); // Original array remains [1, 2, 3]

/*
    🔁 Key Points for Interviews

    1. Use forEach() for side effects, like logging or DOM updates.
    2. Use map() for transforming data and getting a new array.
    3. forEach() does not return a new array, map() always returns a new array.
*/





/*
    🚀 7. What is Event Bubbling and Capturing?

    🔸 Event Capturing:

        🔹 The event starts from the outermost element (root) and travels down to the target element.
        🔹 Less commonly used.
        🔹 You can enable capturing by passing true as the third argument in addEventListener.

    🔸 Event Bubbling:

        🔹 The event starts from the target element and bubbles up to the root.
        🔹 This is the default behavior in most browsers.
*/




/*
    🚀 8. What is a Pure Function?

    🔸 A pure function is a function that:

        🔹 Always returns the same output for the same input.
        🔹 Does not produce any side effects (does not modify external state, global variables, or perform I/O 
           like logging or API calls).


    🔸 Characteristics of Pure Functions:

        🔹 Deterministic → output depends only on input.
        🔹 No side effects → doesn’t change external state.
        🔹 Easy to test and debug.
        🔹 Can be used safely in functional programming and Redux reducers.
*/

/*<-------------------------------------- Pure Function Example -------------------------------------->*/
function add(a, b) {
    return a + b;
};
console.log(add(2, 3)); // 5
console.log(add(2, 3)); // 5 (always same output)
// ✅ Deterministic and no side effects.


/*<------------------------------------- Impure Function Example ------------------------------------>*/
let count = 0;

function increment() {
    count++; // modifies external variable
    return count;
};
console.log(increment()); // 1
console.log(increment()); // 2 (output changes without input)
// ❌ Not pure because it modifies external state and output is not predictable.



function getRandomNumber() {
    return Math.random();
};
console.log(getRandomNumber()); // 0.42
console.log(getRandomNumber()); // 0.87 (different each time)


/*
    🔁 Key Points for Interviews

    1. Pure functions return same output for same input.
    2. They don’t modify external state.
    3. Easier to test, debug, and reuse.
    4. Used heavily in functional programming and Redux reducers.
*/