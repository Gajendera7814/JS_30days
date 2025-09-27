
/*
    🚀 Difference Between undefined and not defined in JavaScript -  

    > Both undefined and not defined are related to variables in JavaScript, but they mean different things.  

    🔁 1. undefined

    🔹 A variable is declared but not assigned a value.  
    🔹 JavaScript automatically assigns undefined to uninitialized variables.  
    🔹 No error occurs when accessing undefined.  
*/

let a;
console.log(a); // ✅ undefined (Declared but not assigned)


function test() {
    let x;
    console.log(x); // ✅ undefined
}
test();


/* Example of a function returning undefined */

function myFunc() {}
console.log(myFunc()); // ✅ undefined (No return statement)


/*
    🔁 2. not defined (ReferenceError)

    🔹 A variable has not been declared anywhere in the code.  
    🔹 JavaScript throws a ReferenceError if you try to access it.  
*/

console.log(b); // ❌ ReferenceError: b is not defined


/*
    🔁 3. Key Differences -

    |   Feature      |                  undefined                    |          vvnot defined             |
    |----------------|-----------------------------------------------|------------------------------------|
    |   Meaning      | Variable is declared but not assigned a value | Variable is not declared at all    |
    |   Error?       | No error                                      | Throws ReferenceError              |
    |   Example      | let x; console.log(x); // undefined           | console.log(y); --> ReferenceError |
    |   Who sets it? | JavaScript assigns undefined by default       | Developer mistake                  |


    🔁 4. Special Cases - Property in an Object: 
*/
        
let obj = {};
console.log(obj.prop); // ✅ undefined (Property doesn't exist but no error)
console.log(obj.prop.subProp); // ❌ TypeError (Trying to access subProp of undefined)


console.log(typeof x); // ✅ "undefined" (Even if x is not declared!)
console.log(typeof y); // ✅ "undefined" (Avoids ReferenceError)
