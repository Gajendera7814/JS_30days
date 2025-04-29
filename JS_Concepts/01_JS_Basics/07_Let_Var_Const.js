/*
    Difference Between var, let, and const in JavaScript -

    1. Scope - Scope determines where a variable is accessible.

        | Keyword  |    Scope Type  |                       Behavior                            |
        |----------|----------------|-----------------------------------------------------------|
        |   var    | Function Scope | Accessible within the function where it is declared.      |
        |   let    | Block Scope    | Accessible only within the block {} where it is declared. |
        |   const  | Block Scope    | Same as let, but cannot be reassigned.                    |

        */
            function example() {
                if (true) {
                    var a = 10;  // Function-scoped
                    let b = 20;  // Block-scoped
                    const c = 30; // Block-scoped
                }
                console.log(a); // ✅ Accessible
                console.log(b); // ❌ ReferenceError: b is not defined
                console.log(c); // ❌ ReferenceError: c is not defined
            }
            example();
        /*

    2. Hoisting - Hoisting refers to how JavaScript moves variable declarations to the top of their scope before execution.

        | Keyword  | Hoisted? |                         Initialized as                           |
        |----------|----------|------------------------------------------------------------------|
        |   var    |  Yes     | undefined                                                        |
        |   let    |  Yes     | Not initialized (Reference Error if accessed before declaration) |
        |   const  |  Yes     | Not initialized (Reference Error if accessed before declaration) |

        */
            console.log(x); // ✅ Undefined (hoisted)
            var x = 5;

            console.log(y); // ❌ ReferenceError: Cannot access 'y' before initialization
            let y = 10;

            console.log(z); // ❌ ReferenceError: Cannot access 'z' before initialization
            const z = 15;
        /*

    3. Re-declaration  

        | Keyword  |     Can be Re-declared?   |
        |----------|---------------------------|
        |   var    | ✅ Yes                    |
        |   let    | ❌ No (in the same scope) |
        |   const  | ❌ No                     |

        */
            var a = 10;
            var a = 20; // ✅ Allowed

            let m = 30;
            // let m = 40; // ❌ SyntaxError: Identifier 'm' has already been declared

            const n = 50;
            // const n = 60; // ❌ SyntaxError: Identifier 'm' has already been declared
        /*

    4. Reassignment  

        | Keyword  | Can be Reassigned? |
        |----------|--------------------|
        |   var    | ✅ Yes            |
        |   let    | ✅ Yes            |
        |   const  | ❌ No             |

        */
            var x = 10;
            x = 20; // ✅ Allowed

            let Y = 30;
            Y = 40; // ✅ Allowed

            const Z = 50;
            Z = 60; // ❌ TypeError: Assignment to constant variable
        /*

    5. Use in Global Scope - When declared in the global scope:

        - var creates a global property (window.varName in browsers).
        - let and const do not create global properties.

        */
            var a = 100;
            console.log(window.a); // ✅ 100

            let b = 200;
            console.log(window.b); // ❌ undefined

            const c = 300;
            console.log(window.c); // ❌ undefined
        /*

    6. Behavior in Loops 

        - var leaks outside the loop.
        - let and const stay inside the loop.

        */
            for (var i = 0; i < 3; i++) {
                setTimeout(() => console.log(i), 1000); // 3, 3, 3
            }

            /*
                > var is function-scoped, not block-scoped.
                > By the time the setTimeout callbacks execute (after ~1000 ms), the loop has already completed and i is 3.
                > Each callback refers to the same i variable, which now holds the final value: 3.
            */

            for (let j = 0; j < 3; j++) {
                setTimeout(() => console.log(j), 1000); // 0, 1, 2
            }

            /*
                > let is block-scoped.
                > Each iteration creates a new binding of j for that block.
                > So each setTimeout callback closes over a different j.
            */
        /*

    Summary Table -

    |   Feature       |                 var               |             let           |         const            |
    |-----------------|-----------------------------------|---------------------------|--------------------------|
    | Scope           | Function                          | Block                     | Block                    |
    | Hoisting        | ✅ Yes (Initialized as undefined) | ✅ Yes (Not initialized) | ✅ Yes (Not initialized) |
    | Re-declaration  | ✅ Yes                            | ❌ No                    | ❌ No                    |
    | Reassignment    | ✅ Yes                            | ✅ Yes                   | ❌ No                    |
    | Global Property | ✅ Yes (window.varName)           | ❌ No                    | ❌ No                    |
    | Loop Behavior   | ❌ Leaks outside loop             | ✅ Block-scoped          | ✅ Block-scoped          |

*/

console.log(x); // ReferenceError: Cannot access 'x' before initialization (Reason - TDZ)
console.log(p); // undefined
let x = 10;
var p = 20;


let u;
const r = 1000;
u = 10;
console.log(u); // 10


let A;
// const B; SyntaxError: Missing initializer in const declaration
B = 1000;
A = 234;
console.log(A);


let X = 1000;
const K = 1000;
K = 2000; // TypeError: Assignment to constant variable.
X = 5000;

console.log(X);
console.log(K);



{
    var P = 89;
}
console.log(P); // 5


{
    let L = 90;
}
console.log(L); // ReferenceError: L is not defined



function myFun() {
    console.log(a);     // undefined
    console.log(b);     // ReferenceError: Cannot access 'b' before initialization
    console.log(c);     // ReferenceError: Cannot access 'c' before initialization

    var a = 1;
    let b = 2;
    const c = 3;
};
myFun();

