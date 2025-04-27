/*
    Falsy Values -

    | Falsy Value        | Example          | Description                                        |
    |--------------------|------------------|----------------------------------------------------|
    | false              | let x = false;   | Boolean false                                      |
    | 0                  | let x = 0;       | The number zero                                    |
    | "" (empty string)  | let x = "";      | An empty string                                    |
    | null               | let x = null;    | Represents the absence of any value or object      |
    | undefined          | let x;           | Variable that is declared but not assigned a value |
    | NaN                | let x = NaN;     | Represents "Not a Number"                          |



    Truthy Values -

    | Truthy Value       | Example            | Description                      |
    |--------------------|--------------------|----------------------------------|
    | true               | let x = true;      | Boolean true                     |
    | 1                  | let x = 1;         | Any non-zero number              |
    | "Hello"            | let x = "Hello";   | A non-empty string               |
    | [] (empty array)   | let x = [];        | An empty array is truthy         |
    | {} (empty object)  | let x = {};        | An empty object is truthy        |
    | Infinity           | let x = Infinity;  | Infinity (positive or negative)  |
    | -1                 | let x = -1;        | Any negative number other than 0 |
    | new Date()         | let x = new Date() | A Date object                    |


    Summary -
    - Falsy values: false, 0, "", null, undefined, and NaN.
    - Truthy values: All other values that are not falsy (e.g., non-zero numbers, non-empty strings, objects, arrays).
*/


    /* Falsy Values Example: */

    let values = [false, 0, "", null, undefined, NaN];

    values.forEach(value => {
        if (!value) {
            console.log(value + " is falsy");
        } else {
            console.log(value + " is truthy");
        }
    });

    /*
        Output -
        
        false is falsy
        0 is falsy        
        is falsy
        null is falsy     
        undefined is falsy
        NaN is falsy
    */



    /* Truthy Values Example: */

    let newValues = [true, 1, "Hello", [], {}, Infinity, -1];

    newValues.forEach(value => {
        if (value) {
            console.log(value + " is truthy");
        } else {
            console.log(value + " is falsy");
        }
    });

    /*
        Output -

        true is truthy    
        1 is truthy       
        Hello is truthy   
        is truthy        
        [object Object] is truthy
        Infinity is truthy
        -1 is truthy
    */