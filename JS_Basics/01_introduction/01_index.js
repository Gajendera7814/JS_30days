/*
    🚀 What is JavaScript?

    JavaScript is a high-level, interpreted programming language used to create dynamic and interactive content on websites.

    In simpler words:
    → JavaScript controls how a webpage behaves when users interact with it.

    ✅ Key Points:
    - Runs in the browser
    - Dynamically creates, updates, and manages content
    - Works together with HTML and CSS
*/


/*
    ⚙️ Execution Context in JavaScript

    Everything happens inside an "Execution Context".

    📂 Structure of Execution Context:

    Execution Context
    │
    ├── Memory Component (Variable Environment)
    │   └── Stores variables and function declarations
    │
    └── Code Component (Thread of Execution)
        └── Executes the code line by line
*/


/*
    ⏱️ JavaScript is Single-Threaded & Synchronous

    ▶️ Meaning:
    - JavaScript runs one task at a time
    - Tasks execute in a sequence (one after another)

    ✔️ Simple Analogy:
    Single-threaded = A single line at a store checkout — next task waits for the current one to finish
*/


/*
    📊 Execution Context Example

    | Execution Context   | Memory Component (Variable Environment)                     | Code Component (Thread of Execution)  |
    |---------------------|-------------------------------------------------------------|---------------------------------------|
    | Purpose             | Stores variables and function declarations                  | Executes code line by line            |
    | When it happens     | During "Memory Creation Phase"                              | During "Code Execution Phase"         |
    | Example             | var a = 10; (Memory allocated for 'a', initially undefined) | Assign '10' to 'a' during execution   |
*/


/*
    🔧 Example Code Illustration

    Code:
*/

var a = 10;
var b = 20;
console.log(a + b);  // Output: 30

/*
    📊 How It Works Step-by-Step

    | Execution Phase    |    Memory Component                               | Code Component                     |
    |--------------------|---------------------------------------------------|------------------------------------|
    | Before Execution   | a → undefined, b → undefined, console → reference |                                    |
    | During Execution   | a = 10, b = 20                                    | Executes console.log(30)           |
*/

var n = 2;

function square (num) {
    var ans = num * num;
    return ans;
}

var square2 = square(n);
var square4 = square(4);