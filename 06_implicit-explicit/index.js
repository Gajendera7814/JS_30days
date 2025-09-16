/*
    🚀 In JavaScript, Implicit and Explicit refer to how type conversions or actions happen in the code.  

        🔁 1. Implicit or Type Coercion (Automatic) -

        🔸 Implicit means something happens automatically without direct instructions from the developer.  
        🔸 In JavaScript, implicit type conversion (also called type coercion) happens when JS automatically converts one data type to another. 
*/

// 👉 Example 1: Implicit Type Conversion

console.log("5" + 2);  // "52" (Number is converted to String)
console.log("5" - 2);  // 3 (String is converted to Number)
console.log(5 == "5"); // true (Type coercion happens)

/*
    📌 How does it work?

    - In "5" + 2, JavaScript converts 2 to a string and performs string concatenation.
    - In "5" - 2, JavaScript converts "5" to a number and performs subtraction.
    - In 5 == "5", JavaScript converts "5" to a number and compares them.
*/



/*  
    🔁 2. Explicit or Type Conversion (Manual) - 
    
    🔸 Explicit means the developer manually forces a type conversion using built-in functions. 
*/

// 👉 Example 2: Explicit Type Conversion

console.log(Number("5") + 2);   // 7 (String is explicitly converted to Number)
console.log(String(5) + 2);     // "52" (Number is explicitly converted to String)
console.log(Boolean(0));        // false (0 is explicitly converted to Boolean)

/*
    📌 How does it work?

    - Number("5") converts "5" to a number before addition.
    - String(5) converts 5 to a string before concatenation.
    - Boolean(0) explicitly converts 0 to false.
*/
