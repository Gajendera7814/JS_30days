/*
    ES6 (also known as ECMAScript 2015) introduced several important features that enhanced JavaScript's functionality 
    and syntax.
*/

/*
    1. Let and Const

    - let: Block-scoped variable declaration (replaces var for better scope handling).
    - const: Block-scoped, read-only constant declaration (can’t be reassigned).
*/

    let x = 10;
    const y = 20;
    console.log(x, y); // Output: 10, 20

    
/*
    2. Arrow Functions

    - Shorter syntax for writing functions and this keyword behaves lexically (inherited from the surrounding context).
*/
    const add = (a, b) => a + b;
    console.log(add(4, 5)); // Output: 9
    

/*

    3. Template Literals

    - String literals that support embedded expressions and multi-line strings using backticks   .
*/

    const names = "Alice";
    const greeting = `Hello, ${names}!`;
    console.log(greeting); // Output: Hello, Alice!
    

/*
    4. Destructuring Assignment

    - A concise way to unpack values from arrays or properties from objects into distinct variables.
*/

    let [a, b] = [1, 2];
    console.log(a, b);
   

    const persons = { myname: "John", age: 30 };
    let { myname, age } = persons;
    console.log(myname, age); // Output: 1, 2
    
   
/*
    5. Default Parameters

    - Function parameters can now have default values.
*/

    function greet(name = "Guest") {
        console.log(`Hello, ${name}`); // Output: Hello, Gajendera
    }
    greet("Gajendera");
   

/*
    6. Rest and Spread Operators

    - Rest: Collects multiple elements into an array.
    - Spread: Expands elements of an array or object into individual items.
*/
    /* Rest Example: */
    function sum(...numbers) {
       return numbers.reduce((acc, num) => acc + num, 0);
    }
    console.log(sum(1, 2, 3, 4)); // Output: 10
   

   /* Spread Example: */
   const arr1 = [1, 2, 3];
   const arr2 = [...arr1, 4, 5];
   console.log(arr2); // Output: [ 1, 2, 3, 4, 5 ]


/*
    7. Classes

    - A more structured way to create objects and deal with inheritance, similar to OOP in other languages.
*/

    class Person {
        constructor(name, age) {
           this.name = name;
           this.age = age;
        }

        greet() {
            console.log(`Hello, ${this.name}`);
        }
    };
   
/*
    8. Modules

    - import and export allow you to break your code into smaller files and reuse components.
*/

   // Exporting
   export const greet = () => "Hello";

   // Importing
   import { greet } from './module.js';
   

/*
    9. Promises

    - A way to handle asynchronous operations more effectively than callbacks (helps avoid "callback hell").
*/

    const fetchData = new Promise((resolve, reject) => {
       setTimeout(() => resolve("Data fetched"), 1000);
    });
    console.log(fetchData); // Output: Promise { <pending> }
   

/*
    10. Map and Set

    - Map: Key-value pairs with any data type as the key.
    - Set: A collection of unique values.
*/
    // Map Example -
    let map = new Map();
    map.set('name', 'Alice');
    console.log(map.get('name')); // Output: Alice
   

   // Set Example -
   let set = new Set();
   set.add(1);
   set.add(2);
   console.log(set.has(1)); // true
   
/*
    11. Iterators and Generators

    - Iterators: Objects that allow traversal of a collection.
    - Generators: Functions that can be paused and resumed, using yield.
*/

    // Generator Example:
    function* counter() {
       yield 1;
       yield 2;
       yield 3;
    }
    console.log(counter()); // Output: Object [Generator] {}
   
/*
    12. Enhanced Object Literals

    - Shorthand for properties and methods in objects.
*/

    const name = "John";
    const person = {
        name,
        greet() {
            console.log("Hello!");
        }
    };
    console.log(person.name); // Output: John


/*
    13. Symbol

    - A new primitive type that represents unique and immutable values, mainly used for object property keys.
*/
    const uniqueId = Symbol('id');
    console.log(uniqueId); // Output: Symbol(id)
