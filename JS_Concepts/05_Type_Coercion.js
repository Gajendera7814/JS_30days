
console.log(typeof 23); // Output: number
console.log(typeof "abc"); // Output: string
console.log(typeof {}); // Output: object
console.log(typeof true); // Output: boolean
console.log(typeof null); // Output: object
console.log(typeof []); // Output: object
console.log(typeof function(){}); // Output: function
console.log(typeof undefined); // Output: undefined


console.log("hello" === "hello"); // Output: true

console.log(true === true); // Output: true

console.log(77 === '77'); // Output: false

console.log("cat" === "dog"); // Output: false

console.log(false === 0); // Output: false


/* Falsy Value Comparison */
console.log(false == 0); // Output: true
console.log(0 == ""); // Output: true
console.log("" == false); // Output: true


console.log(null == undefined); // Output: true
console.log(undefined == undefined); // Output: true
console.log(null == undefined); // Output: true


console.log(null === undefined); // Output: false
console.log(undefined === undefined); // Output: true
console.log(null === undefined); // Output: false


console.log(NaN == null); // Output: false
console.log(NaN == undefined); // Output: false
console.log(NaN == NaN); // Output: false


console.log(NaN === null); // Output: false
console.log(NaN === undefined); // Output: false
console.log(NaN === NaN); // Output: false


const objects = {};
console.log(objects === '{}'); // false (because objects are compared by reference)

console.log(objects === objects); // true (because the object is referentially equal to itself)


console.log(0 == false); // true (because the boolean was converted to a number)

console.log(0 == null); // false (because absent values are not considered equal to non-absent values)

console.log({} == {}); // false (because objects are compared by reference)

console.log(0 == undefined); // false (because absent values are not considered equal to non-absent values)

console.log(null == undefined); // true (because both are absent values)

console.log(undefined == null); // true (because both are absent values)

console.log('hello!' == false); // false

console.log('' == false); // true (because the string was converted to a boolean and an empty string sort of represents false in the realm of strings I guess)

console.log([] == false); // true (because the array was converted to a boolean and an empty array sort of represents false in the realm of arrays I guess)




/*
    <----------------------------------- Falsy Values ----------------------------------->

    The following values are considered falsy in JavaScript:-

        1. false – The boolean value false.
        2. 0, -0, and 0n – Numeric zero and BigInt zero.
        3. "" (empty string), '' (single quotes),  (template literals) – Empty strings.
        4. null – Represents the absence of a value.
        5. undefined – Represents a variable that has not been assigned a value.
        6. NaN – Represents a computational error.
        7. document.all – Special object that is falsy (legacy behavior).

    <-------------------------------------- Key Notes ------------------------------------>

        - Falsy values evaluate to false in a Boolean context.
        - NaN, undefined, and null are falsy but not loosely equal (==) to false.

    <----------------------------------- Truthy Values ----------------------------------->

        All other values in JavaScript are truthy, including:

        1. Non-empty strings, e.g., '0', 'false', 'hello'.
        2. Non-zero numbers, e.g., 1, -1, Infinity.
        3. Objects and arrays (even empty ones), e.g., {}, [].
        4. Functions, e.g., function() {}.
        5. Symbols, e.g., Symbol().
        6. Any non-zero BigInt, e.g., 1n.

    <--------------------------- Truthy and Falsy Conversion Rules ----------------------->

        Falsy:-

        - Boolean(undefined) → false
        - Boolean(null) → false
        - Boolean(0) → false
        - Boolean("") → false
        - Boolean(NaN) → false

        Truthy:

        - Boolean('false') → true
        - Boolean([]) → true
        - Boolean({}) → true
        - Boolean(function() {}) → true
*/

/*<------------------------------- 1. Logical Operators (&&) ----------------------------->

    - Returns the first falsy operand or the last truthy operand.  
    - If the first operand is truthy, the second operand is returned.

*/

console.log(true && "dog"); // "dog"
console.log(false && "dog"); // false
console.log([] && "cat"); // "cat" (empty array is truthy)
console.log(null && "cat"); // null


/*<--------------------------------- 2. Logical OR (||) ---------------------------------->

    Returns the first truthy operand or the last falsy operand -

*/

console.log(false || "dog"); // "dog"
console.log(null || 42); // 42
console.log(0 || ""); // ""
console.log("cat" || "dog"); // "cat"


/* <--------------------------------- 3. Logical NOT (!) --------------------------------->

    Converts the operand to a boolean and inverts it -

*/

console.log(!true); // false
console.log(!false); // true
console.log(!null); // true
console.log(!undefined); // true
console.log(!NaN); // true
console.log(!0); // true
console.log(!1); // false
console.log(!""); // true
console.log(!"hello"); // false
console.log(!!"hello"); // true
console.log(!![]); // true


console.log(undefined && 0); // undefined --> (First operand is falsy, so it short-circuits)
console.log(undefined || 0); // 0 --> (Both operands are falsy; returns the last operand)
console.log(undefined || null); // null --> (Both are falsy; returns the last operand)
console.log(undefined && null); // undefined --> (Short-circuits as the first operand is falsy)
console.log(1 && 2); // 2 --> (First operand is truthy; evaluates and returns the second operand)
console.log(1 || 2); // 1 --> (First operand is truthy; short-circuits and returns it)
console.log(false || undefined); // undefined --> (Both are falsy; returns the last operand)
console.log(true || undefined); // true --> (First operand is truthy; short-circuits and returns it)
console.log(undefined || true); // true --> (Second operand is truthy; returns it)
console.log(undefined || false); // false --> (Both are falsy; returns the last operand)
console.log(undefined && true); // undefined --> (Short-circuits as the first operand is falsy)
console.log(false && undefined); // false --> (Short-circuits as the first operand is falsy)
console.log(undefined && false); // undefined --> (Short-circuits as the first operand is falsy)
console.log(null && true); // null --> (Short-circuits as the first operand is falsy)
console.log(null && false); // null --> (Short-circuits as the first operand is falsy)
console.log(true && null); // null --> (First operand is truthy; evaluates and returns the second operand)
console.log(false && null); // false --> (Short-circuits as the first operand is falsy)
console.log("[]" === false); // false --> (Strict equality does not perform type coercion)
console.log(1 == '1'); // true --> (Loose equality performs type coercion)
console.log(1 === '1'); // false --> (Strict equality checks value and type)
console.log(1 == [1]); // true --> (Array [1] is coerced to the primitive 1)
console.log('1' == [1]); // true --> (Array [1] is coerced to the string '1')
console.log(false == 0); // true --> (Loose equality coerces false to 0)
console.log(false === 0); // false --> (Strict equality checks value and type)
console.log(0 == ''); // true --> (Loose equality coerces both to 0)
console.log(0 === ''); // false --> (Strict equality checks value and type)
console.log(null == undefined); // true --> (Loose equality treats them as equivalent)
console.log(null === undefined); // false --> (Strict equality checks value and type)
console.log([] == false); // true --> (Empty array coerces to "", which is falsy and equal to false)
console.log(!![0] == true); // true --> ([0] is a non-empty array, hence truthy)
console.log(!![0] === true); // true --> (Both sides are boolean true)
console.log(false == null); // false --> (null only loosely equals undefined)
console.log(false === null); // false --> (Strict equality checks value and type)
console.log(NaN == NaN); // false --> (NaN is not equal to itself per JavaScript rules)
console.log(NaN === NaN); // false --> (Same reason as above, strict equality does not change this behavior)
console.log([] == true); // false --> (Empty array coerces to "", which is not equal to true)
console.log(true && "dog"); // "dog" --> (First operand is truthy; returns the second operand)
console.log([] && "dog"); // "dog" --> (Empty array is truthy; returns the second operand)


console.log(!!{}); // true (empty objects are truthy)
console.log(!![]); // true (empty arrays are truthy)
console.log(!!''); // false (empty string is falsy)
console.log(!!"false"); // true (non-empty strings are truthy)
console.log(!!false); // false (boolean false is falsy)
console.log({} && "truthy"); // "truthy" (obj is truthy)
console.log('' && "truthy"); // "" (str is falsy)
console.log('' || "fallback"); // "fallback" (str is falsy)
console.log([] || "fallback"); // [] (arr is truthy)
console.log([] == false); // true  Empty array coerces to an empty string "", which is falsy and loosely equals false.
console.log({} == false); // false Objects are always truthy, so they are not equal to false.
console.log([] == false); // true (array is coerced to "")
console.log({} || ''); // {} (obj is truthy, returned as the first truthy value)
console.log([] && {}); // {} (arr is truthy, evaluates and returns obj)
console.log(!{} && ![]); // false (both obj and arr are truthy)
console.log("0" && 42); // 42 (The string "0" is truthy, so the second operand is returned.)
console.log(false || null || "hello"); // "hello" (The first truthy value is returned.)


console.log(0 === 0); // Output: true
console.log('hello!' === 'hello!'); // Output: true
console.log(null === null); // Output: true
console.log(undefined === undefined); // Output: true


console.log(0 === 5); // Output: false (same types, but different values)
console.log(0 === '0'); // Output: false (different types)
console.log(0 === 'hello!'); // Output: false (different types)
console.log(null === undefined); // Output: false (different types)


const object = {};
console.log(object === object); // Output: true (because the object is referentially equal to itself)


console.log(1 == 1); // Output: true
console.log(1 == '1'); // Output: true, (because the string was converted to a number)
console.log('1' == 1); // Output: true, (because the string was converted to a number)
console.log(0 == false); // Output: true, (because the boolean was converted to a number)
console.log(0 == null); // Output: false, (because absent values are not considered equal to non-absent values)
console.log({} == {}); // Output: false, (because objects are compared by reference)
console.log(0 == undefined); // Output: false, (because absent values are not considered equal to non-absent values)
console.log(null == undefined); // Output: true, (because both are absent values)
console.log(undefined == null); // Output: true, (because both are absent values)
console.log('hello!' == false); // Output: false
console.log('' == false); // Output: true, (because the string was converted to a boolean and an empty string sort of represents false in the realm of strings, I guess)
console.log([] == false); // Output: true, (because the array was converted to a boolean and an empty array sort of represents false in the realm of array,s I guess)


console.log(1 + "1"); // "11"  →  Number + String → String concatenation
console.log("2" - 1); // 1  →  String - Number → Number (2 - 1 = 1)
console.log("3" * "2"); // 6  →  String * String → Number (3 * 2 = 6)
console.log("6" / "3"); // 2  →  String / String → Number (6 / 3 = 2)


console.log(0 == ""); // true  →  Empty string coerced to 0
console.log(0 == "0"); // true  →  "0" coerced to number 0
console.log(false == "false"); // false →  "false" is a non-empty string → does not coerce to `false`
console.log(false == "0"); // true  →  "0" coerced to number 0, which is falsy


console.log(null == undefined); // true →  null and undefined are loosely equal
console.log(null === undefined); // false →  Strict equality → different types 
console.log(NaN == NaN); // false →  NaN is never equal to itself
console.log([] == 0); // true →  [] coerced to "" → empty string to number 0
console.log([] == false); // true →  [] coerced to "" → empty string is falsy


console.log([1, 2] + [3, 4]); // "1,23,4" →  Arrays are converted to strings → "1,2" + "3,4" = "1,23,4"
console.log([] + {}); // "[object Object]" →  [] becomes "", {} becomes "[object Object]"
console.log({} + []); // "[object Object]" →  `{}` is treated as an empty block, `+[]` converts to 0
console.log(true + true); // 2 →  true coerced to 1 → 1 + 1 = 2
console.log(true + false); // 1 →  true (1) + false (0) = 1


console.log("5" + 3 - 1); // "52" -→ "5" + 3 → "53", then "53" - 1 → 52 (number)
console.log("5" - 3 + "1"); // "21" -→ "5" - 3 → 2, then 2 + "1" → "21" (string)
console.log("10" - "5" - "2" + "3"); // "33" -→ "10" - "5" = 5, then 5 - "2" = 3, then 3 + "3" = "33"


console.log({} + []); // "[object Object]" -→ {} is coerced to a string -→ "[object Object]"
console.log([] + {}); // "[object Object]" -→ Similar case
console.log(![] == []); // true -→ ![] → false, and false == [] → [] coerces to "" (empty string), which is falsy
console.log([] == ![]); // true -→ [] coerces to "", ![] → false → "" == false → true


console.log([] + []); // "" -→ Empty arrays become empty strings → "" + "" = ""
console.log([] + {}); // "[object Object]" -→ {} becomes "[object Object]"
console.log({} + []); // "[object Object]" -→ {} becomes "[object Object]"
console.log({} + {}); // "[object Object][object Object]" -→ Both objects convert to strings and concatenate


console.log(Boolean([])); // true -→ Empty arrays are truthy
console.log(Boolean({})); // true -→ Empty objects are truthy
console.log(Boolean("")); // false -→ Empty string is falsy
console.log(Boolean(" ")); // true -→ Non-empty string is truthy
console.log(Boolean(0)); // false -→ 0 is falsy
console.log(Boolean("0")); // true -→ Non-empty string is truthy


console.log(typeof NaN); // "number" -→ NaN is a special case of number
console.log(typeof null); // "object" -→ null is an object (historical JS bug)
console.log(typeof []); // "object" -→ Arrays are also objects
console.log(typeof {}); // "object" -→ Regular objects
console.log(typeof function () {}); // "function" -→ Functions are functions
