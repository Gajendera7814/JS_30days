/*
    🚀 1. Problem Statement: find length of the array.
*/

let arr1 = [, , ,];
let arr2 = [1, 2, 3, 4];
let arr3 = [[1, 2, 3], [4, 5]];

console.log(arr1);        // Output: [ <3 empty items> ]
console.log(arr1.length); // Output: 3 → Because JavaScript counts the positions, not the actual values, So [ , , , ] has 3 slots, therefore .length = 3.
console.log(arr1[0]);     // Output: undefined → (because the slot is empty, not a value)


console.log(arr2.length); // Output: 4
console.log(arr3.length); // Output: 2

/*
    let arr1 = [, , ,];
    console.log(arr1.length); // Output: 3

    🔁 Why length = 3?

        🔹 Because JavaScript counts the positions, not the actual values.
        🔹 So [ , , , ] has 3 slots, therefore .length = 3.

    🔁 Explanation:

    🔸 In JavaScript, when you use commas inside an array without values, it creates empty slots (also called holes) in the array.
    🔸 The number of elements (or slots) is determined by the commas.
*/





/*
    🚀 2. Problem Statement: Sort the elements of the array in ascending order.

    🔸 Input: arr = [1, 18, 9, 81, 98, 124, 78]
    🔸 Output: [1, 9, 18, 78, 81, 98, 124]

    🔹 Note - Merge Sort (Efficient & Commonly Asked)
*/

function bubbleSort(arr) {
    let n = arr.length;
    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
            }
        }
    }
    return arr;
};
console.log(bubbleSort([1, 18, 9, 81, 98, 124, 78]));

/*
    Time Complexity: O(n²)
    Space Complexity: O(1).
*/





/*
    🚀 3. Problem Statement: What result do we get when using map and filter?

    🔸 Input: arr = [1, 18, 9, 81, 98, 124, 78]
*/

const arr = [1, 18, 9, 81, 98, 124, 78];

console.log(arr.map((item) => item > 100)); // Output: [false, false, false, false, false, true, false]

console.log(arr.filter((item) => item > 100)); // Output: [124]





/*
    🚀 4. What is the difference between slice() and splice().

    🔸 slice():

        🔹 The slice() method in JavaScript extracts a section of an array and returns a new array containing the 
           selected elements, without modifying the original array.

        OR

        🔹 Used to extract a portion of an array.
        🔹 Does not modify the original array.
        🔹 Returns a new array.
        🔹 Syntax: arr.slice(start, end)

            🔸 start → index where extraction begins (inclusive).
            🔸 end → index where extraction stops (exclusive). 


    🔸 splice():

        🔹 The splice() method in JavaScript is used to change the contents of an array by removing or replacing 
           existing elements and/or adding new elements in place, modifying the original array.

        OR

        🔹 Used to add, remove, or replace elements in an array.
        🔹 Modifies the original array.
        🔹 Returns an array of removed elements.
        🔹 Syntax: arr.splice(start, deleteCount, item1, item2, ...)
*/

let array = [10, 20, 30, 40, 50];
console.log(array.splice(1, 2, 99, 100)); // Output: [20, 30] (removed)
console.log(array);                       // Output: [10, 99, 100, 40, 50]


let cars = ['Benz', 'Innova', 'Breeza', 'Etios', 'Dzire'];
let new_cars = cars.slice(1, 4);
console.log("cars :", cars);         // Output: cars : [ 'Benz', 'Innova', 'Breeza', 'Etios', 'Dzire' ]
console.log("new_cars :", new_cars); // Output: new_cars : [ 'Innova', 'Breeza', 'Etios' ]



let carsRecords = ['Benz', 'Innova', 'Breeza', 'Etios', 'Dzire'];

carsRecords.splice(2, 0, 'ambassedor', 'BMW', 'Audi');
console.log(carsRecords); // Output: ['Benz', 'Innova', 'ambassedor', 'BMW', 'Audi', 'Breeza', 'Etios', 'Dzire']

let result = carsRecords.splice(2, 0, 'ambassedor', 'BMW', 'Audi');
console.log(result); // Output: []   → splice() always returns removed elements, If no elements are removed → it returns [].

// if → carsRecords.splice(2, 1, 'ambassedor', 'BMW', 'Audi'); →  Output: [ 'ambassedor' ]





/*
    🚀 5. How to clear all elements from an array?
*/

const clearArr = [10, 20, 30, 40, 50];

// ✅ Method 1: Set length = 0
clearArr.length = 0;
console.log(clearArr); // []


// ✅ Method 2: Use splice()
clearArr.splice(0, clearArr.length);
console.log(clearArr); // []


// ✅ Method 3: Reassign to a New Empty Arraylet clearArr2 = [10, 20, 30, 40, 50];
let clearArr2 = [10, 20, 30, 40, 50];
clearArr2 = [];
console.log(clearArr2); // []


/*
    🔑 In interviews:

    🔸 Best to mention arr.length = 0 (most efficient) and splice(0, arr.length) (explicit removal).
*/





/*
    🚀 6. How to create a new array in JavaScript.
*/

/* 1️⃣ Using Array Literals (Most Common) */
let arrays = [1, 2, 3];


/* 2️⃣ Using the Array Constructor */
let createArr = new Array(5);
console.log(createArr); // Output: [ <5 empty items> ] → creates an empty array of length 5

let createArr2 = new Array(1, 2, 3);
console.log(createArr2) // Output: [1, 2, 3]


/* 3️⃣ Using Array.of() */
const arrOf = Array.of(1, 2, 3, 4, 5);
console.log(arrOf) // Output: [1, 2, 3, 4, 5]


/* 4️⃣ Using Array.from() */
const arrFrom = Array.from('hello');
console.log(arrFrom); // Output: ['h', 'e', 'l', 'l', 'o']


/* 5️⃣ Using Spread Operator */
const originalArr = [1, 2, 3];
let copyArr = [...arr1];
console.log(copyArr); // Output: [1, 2, 3]


/* 6️⃣ Using concat() */
let arrConcat = [].concat(1, 2, 3);
console.log(arrConcat); // Output: [1, 2, 3]


/* 7️⃣ Using fill() */
let arrFill = new Array(3).fill(4);
console.log(arrFill); // Output: [4, 4, 4]





/*
    🚀 7. Remove all duplicate elements from an array.
*/

function removeDuplicate(arr) {
    let uniqueArr = [];
    let seen = {}; // Object to track seen elements

    for (let i = 0; i < arr.length; i++) {
        if (!seen[arr[i]]) {        // If element is not seen
            uniqueArr.push(arr[i]); // Add to result
            seen[arr[i]] = true;    // Mark as seen
        }
    }

    return uniqueArr;
};
console.log(removeDuplicate([1, 2, 3, 2, 4, 3, 5])); // Output: [1, 2, 3, 4, 5]





/*
    🚀 8. Predict the output and explain why.
*/

function fun(a, b, c) {

};
console.log(fun.length); // Output: 3

/*
    1️⃣ Regular Function

    🔑 Reason Explain: 

    🔸 The .length property of a function returns the number of parameters declared before the first one with a default value.
    🔸 Here, fun has 3 parameters (a, b, c) and none have default values.

    ✅ So fun.length = 3.
*/


function myFun(a = 1, b, c) {

};

console.log(myFun.length); // Output: 0

/*
    2️⃣ Function with Default Parameter

    🔑 Reason Explain: 

    🔸 Here, a has a default value (1).
    🔸 In JavaScript: The .length property counts only the parameters before the first one with a default value.
    🔸 Since the first parameter (a) has a default, no parameters are counted.

    ✅ So myFun.length = 0.
*/

function f1(a, b = 2, c) {}
console.log(f1.length); // Output: 1  → (only 'a' counted)

function f2(...args) {}
console.log(f2.length); // Output: 0  → (rest parameter ignored)





/*
    🚀 9. Capitalize the first word of a string and insert a newline after it.
*/

let str = "my name is gajendera";

let words = str.split(" ");

for (let i = 0; i < words.length; i++) {
    words[i] = words[i][0].toUpperCase() + words[i].slice(1);
}

let results = words.join("\n");
console.log(results);

/*
    Output:

    My
    Name
    Is
    Gajendera
*/