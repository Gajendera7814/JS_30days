/*
    🚀 Scopes in JavaScript – Function Scope, Block Scope & Lexical Scope. 

        🔸 Scope in JavaScript defines where variables and functions can be accessed in the code. 

        🔸 There are three main types of scope:  

            1️⃣ Function Scope – Variables are accessible only inside a function.  
            2️⃣ Block Scope – Variables are accessible only inside {} (if, loops, etc.).  
            3️⃣ Lexical Scope – Inner functions can access variables from their outer functions.  

            
    1️⃣ Function Scope (Local Scope) -

        📌 Variables declared with var are function-scoped.  
        📌 A variable inside a function cannot be accessed outside the function.  
        📌 Functions themselves are function-scoped unless assigned to a variable.

        */
            /*<------------------- Example of Function Scope ------------------->*/

            function example() {
                var x = 10;
                console.log(x); // ✅ 10 (Accessible inside function)
            }

            example();
            console.log(x); // ❌ ReferenceError: x is not defined
        
            // x is declared inside the function, so it cannot be accessed outside.


        /*<--------------------------------------------------------------------->*/

            function testVar() {
                if (true) {
                    var a = 50; // Function scoped
                }
                console.log(a); // ✅ 50 (Still accessible)
            }
            
            testVar();
            console.log(a); // ❌ ReferenceError: a is not defined 
            
        /*<--------------------------------------------------------------------->*/

            if (true) {
                var c = 30;
            }
            console.log(c); // ✅ 30 (var is function-scoped, NOT block-scoped)            
    /*

    2️⃣ Block Scope -

        📌 Variables declared with let and const are block-scoped.  
        📌 They exist only inside the block {} where they are defined.  

        */
            /*<-------------------- Example of Block Scope --------------------->*/

                {
                    let a = 20;
                    const b = 30;
                    var c = 40;
                }
                console.log(c); // ✅ 40 (var is function-scoped, not block-scoped)
                console.log(a); // ❌ ReferenceError: a is not defined
                console.log(b); // ❌ ReferenceError: b is not defined


            /*<------------------------------------------------------------------>*/

                if (true) {
                    let b = 20; // Block scoped
                    console.log(b); // ✅ 20 (Accessible inside block)
                }
                console.log(b); // ❌ ReferenceError: b is not defined
                
            
                /* a and b are not accessible outside the {} block. */ 
                /* c (declared with var) leaks outside the block. */


            /*<------------------------ Block Scope in Loops -------------------->*/

                for (let i = 0; i < 3; i++) {
                    console.log(i); // ✅ 0, 1, 2 (Accessible inside loop)
                }
                console.log(i); // ❌ ReferenceError: i is not defined
            
                /* let i exists only inside the loop. */ 
                /* If var i was used, i would be accessible outside the loop. */
        /*

    3️⃣ Lexical Scope (Scope Chain) -

        📌 A function can access variables from its parent function.  
        📌 Inner functions remember their parent’s variables, even after the parent function has finished executing.  
        📌 Lexical means "hierarchical" scope, based on where functions are written, not where they are called.  
        
        */
            /*<---------------------- Example of Lexical Scope ----------------->*/

                function outer() {
                    let outerVar = "I am outer!";

                    function inner() {
                        console.log(outerVar); // ✅ Accessible (Lexical Scope)
                    }
                    
                    inner();
                }

                outer();
        
                /* inner() can access outerVar because it is inside outer(). */


            /*<-------------------- Nested Lexical Scope ----------------------->*/

                function grandparent() {
                    let grandparentVar = "I am grandparent!";

                    function parent() {
                        let parentVar = "I am parent!";

                        function child() {
                            console.log(grandparentVar); // ✅ Accessible
                            console.log(parentVar);      // ✅ Accessible
                        }
                        
                        child();
                    };

                    parent();
                };
                grandparent();
        
                /* child() can access both parentVar and grandparentVar due to Lexical Scope. */
        
            /*

                Closure (Practical Use of Lexical Scope) - A closure is a function that remembers variables from its  lexical
                scope, even after the function has finished executing.*/

                function counter() {
                    let count = 0;

                    return function () {
                        count++;
                        console.log(count);
                    };
                };

                const increment = counter();
                increment(); // ✅ 1
                increment(); // ✅ 2
                increment(); // ✅ 3
            
    /*
        | Scope Type     | Variables Affected |             Accessible Where?              |                            Example                                   |
        |----------------|--------------------|--------------------------------------------|----------------------------------------------------------------------|
        | Function Scope | var                | Only inside function                       | { function() { var a = 10; } }                                       |
        | Block Scope    | let, const         | Only inside {}                             | { let b = 20; }                                                      |
        | Lexical Scope  | All                | Inner functions can access outer variables | { function outer() { let x; function inner() { console.log(x); } } } |
    */

    /*
        ✅ Interview Tips
        
            Q: What is the difference between function scope and block scope?  
            ✅ Function scope (var) is limited to functions, while block scope (let, const) is limited to {}.

            Q: What is lexical scope?  
            ✅ Lexical scope means inner functions can access outer variables but not vice versa.

            Q: What is the difference between lexical scope and closure?  
            ✅ Lexical scope means functions can access parent variables, while closure means functions remember those variables even after execution.
*/




/*<----------------------------------- ✅ Interview Questions ----------------------------------->*/


/*  🔁 Important Points -

    🔸 Scope of var -

    > The scope is global when a var variable is declared outside a function. This means that any variable that is 
      declared with var outside a function block is available for use in the whole window.

    > var is function scoped when it is declared within a function. This means that it is available and can be accessed 
      only within that function.
*/

var tester = "hey hi";

function newFunction() {
    var hello = "hello";
}
console.log(hello); // ReferenceError: hello is not defined

/*
    🔁 Explanation -

    > var is function scoped when it is declared within a function. This means that it is available and can be accessed 
      only within that function.

    > tester is globally scoped because it exists outside a function while hello is function scoped. So we cannot access 
      the variable hello outside of a function
*/


var greeter = "hey hi";
var times = 4;

if (times > 3) {
    var greeter = "say Hello instead"; 
}

console.log(greeter); // Output: "say Hello instead"


/*
    🔁 let is block scoped -

    Block - A block is a chunk of code bounded by {}. A block lives in curly braces. Anything within curly braces is a block.
*/

let greeting = "say Hi";
let times = 4;

if (times > 3) {
    let hello = "say Hello instead";
    console.log(hello); // Output: "say Hello instead"
};
console.log(hello); // ReferenceError: hello is not defined

/*
    Explanation - This is because let variables are block scoped .
*/



let greetings = "say Hi";
if (true) {
    let greetings = "say Hello instead";
    console.log(greetings); // Output: "say Hello instead"
};
console.log(greetings); // Output: "say Hi"


/*
    > var declarations are globally scoped or function scoped while let and const are block scoped.
    
    > var variables can be updated and re-declared within its scope; 
      let variables can be updated but not re-declared; 
      const variables can neither be updated nor re-declared.

    > They are all hoisted to the top of their scope. But while var variables are initialized with undefined, 
      let and const variables are not initialized.

    > While var and let can be declared without being initialized, const must be initialized during declaration.
*/


const hello = 'Hello CSS-Tricks Reader!'

function sayHello () {
  console.log(hello); // Output: 'Hello CSS-Tricks Reader!'
};

console.log(hello) // Output: 'Hello CSS-Tricks Reader!'
sayHello();



function sayHello () {
    const hello = 'Hello CSS-Tricks Reader!';
    console.log(hello); // Output: 'Hello CSS-Tricks Reader!'
};
  
sayHello(); 
console.log(hello); // ReferenceError: hello is not defined



/*<------------------------ Functions do not have access to each other’s scopes ----------------------->*/

function first () {
    const firstFunctionVariable = `I'm part of first`
};
  
function second () {
    first();
    console.log(firstFunctionVariable); // ReferenceError: firstFunctionVariable is not defined
}


/*<-------------------------- Nested scopes -------------------------->*/

/*
    🔁 Lexical Scoping -
    
    > When a function is defined in another function, the inner function has access to the outer function’s variables. 
      This behavior is called lexical scoping.

      However, the outer function does not have access to the inner function’s variables.
*/

function outerFunction () {
    const outer = `I'm the outer function!`;
  
    function innerFunction() {
        const inner = `I'm the inner function!`;
        console.log(outer); // Output: I'm the outer function!
    }
    
    innerFunction();
    console.log(inner); // ReferenceError: inner is not defined
};
outerFunction();