/*
    JavaScript is a high-level, interpreted programming language used to create dynamic and interactive content on websites.

    In even simpler words: JavaScript controls how a webpage behaves when users interact with it.

    Key points:
    - It runs in the browser.
    - It can create, update, and manage content dynamically.
    - It's an essential part of web development along with HTML and CSS.
*/

/*
    Everything in javaScript happens inside an "Execution Context".

    Execution Context
    │
    ├── Memory Component (Variable Environment)
    │   └── Stores variables and function declarations
    │
    └── Code Component (Thread of Execution)
        └── Executes the code line by line
*/

/*
    > JavaScript is a synchronous, single-threaded language.

    > JavaScript runs one task at a time in a synchronous, single-threaded manner.


    Here’s a simple explanation:

    > Single-threaded language means JavaScript can do only one task at a time in a single sequence (one after another).

    It has one "thread" of execution, like standing in a single line — the next task can't start until the current one finishes.
*/

/*

    | Execution Context   | Memory (Variable Environment)                             | Code (Thread of Execution)                     |
    |---------------------|-----------------------------------------------------------|------------------------------------------------|
    | What it does        | Stores variables and function definitions                 | Executes the code line-by-line                 |
    | When it happens     | Happens first (during "Memory Creation Phase")            | Happens second (during "Code Execution Phase") |
    | Example             | var a = 10; (Allocate memory for a, initially undefined)  | Assign 10 to a during execution                |


    javascript -

    var a = 10;
    var b = 20;
    console.log(a + b);


    | Execution Context  | Memory Component                                | Code Component                   |
    |--------------------|-------------------------------------------------|----------------------------------|
    | Before execution   | a → undefined b → undefined console → reference |                                  |
    | During execution   | a = 10, b = 20                                  | Run console.log(30) and print 30 |
*/

var a = 10;
var b = 20;
console.log(a + b); // Output: 30