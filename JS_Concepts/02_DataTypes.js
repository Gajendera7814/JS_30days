/*
    <------------------------------------------- Data Types ------------------------------------------------>

    > There are two categories of data types.

    - Primitive Data Types are simple and stored directly.
    - Non-Primitive Data Types are complex and stored by reference.


    Primitive Data Types - 
    
    There are 7 primitive types: string, number, bigint, boolean, symbol, null and undefined.

    | Data Type     |           Example              |          Description                |
    |---------------|--------------------------------|-------------------------------------|
    | Number        |  let a = 42;                   | Represents both integers and floats |
    | String        |  let name = "John";            | Represents text or characters       |
    | Boolean       |  let isAlive = true;           | Represents true or false            |
    | Undefined     |  let x;                        | Variable declared but not assigned  |
    | Null          |  let y = null;                 | Represents empty or unknown value   |
    | BigInt        |  let bigNum = 123401234567890n | For very large numbers              |
    | Symbol        |  let sym = Symbol('id');       | Unique and immutable value          |


    Non-Primitive Data Types -

    | Data Type     |                   Example                    |            Description                  |
    |---------------|----------------------------------------------|-----------------------------------------|
    | Object        |  let person = {name: "Alice", age: 25};      | Collection of key-value pairs           |
    | Array         |  let fruits = ["apple", "banana", "cherry"]  | Special type of object for ordered data |
    | Function      |  function greet() { console.log("Hello!") }  | Reusable block of code                  |



    Memory alocation -

    > Primitive types (stack storage) are quick because they hold values directly.
    > Non-primitive types (heap storage) are more complex because they are stored by reference.
*/


/*
    <------------------------------------------ Immutable and Mutable ---------------------------------------->

    1. Primitive Types Are Immutable -

        In JavaScript, primitive types (like Number, String, Boolean, null, undefined, BigInt, and Symbol) are immutable. 
        This means that once you assign a value to a primitive variable, the value cannot be changed directly.

        What does this mean?

            - If you try to modify the value of a primitive type, it doesn’t change the original value.
            - Instead, a new value is created and assigned.

        Example:
        
            let x = 10;
            x = x + 5;  ---> x is now 15, but the original 10 remains unchanged
            console.log(x); ---> 15

            Here, when x is updated, a new value is created (15), and the old value (10) stays unchanged in memory.


            const answer = 42
            answer.foo = "bar";
            console.log(answer); ---> 42
            console.log(answer.foo); ---> undefined


    2. Non-Primitive Types Are Mutable -

        Non-primitive types (like Object, Array, and Function) are mutable, meaning you can directly modify their values.

        What does this mean?

            - You can change, add, or remove properties from objects, modify array elements, or alter the behavior of functions.

        Example (for Objects and Arrays):
        
            let person = { name: "Alice", age: 25 };
            person.age = 26;  ---> Directly modifies the original object
            console.log(person);  ---> { name: "Alice", age: 26 }


            let fruits = ["apple", "banana"];
            fruits[1] = "cherry";  ---> Modifies the array
            console.log(fruits);  ---> ["apple", "cherry"]
            
            In both cases, the original object or array is modified directly.


    Key Difference:

        - Primitive types create a new value when you try to modify them, meaning they can’t be changed in place.
        - Non-Primitive types allow changes to their internal structure or values directly.
*/