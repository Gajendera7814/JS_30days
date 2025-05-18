
/*
    The call() method calls a function with a given this value and arguments provided individually.


    The Call() Method calls the function directly and sets this to the first argument passed to the call method, and if any
    other sequences of arguments preceding the first argument are passed to the call method, then they are passed as an
    argument to the function.


    The Apply() Method calls the function directly and sets this to the first argument passed to the apply method, and if any
    Other arguments provided as an array are passed to the call method and then passed as an argument to the function.


    The bind() method creates a new function that, when called, has this keyword set to the provided value.


    The Bind() Method creates a new function, and when that new function is called, it sets this keyword to the first
    argument that is passed to the bind method, and if any other sequences of arguments precede the first argument
    are passed to the bind method, then they are passed as an argument to the new function when the new function is called.
*/



/*
    Call() Method -

    The Call() Method calls the function directly and sets this to the first argument passed to the call method and if any 
    other sequences of arguments preceding the first argument are passed to the call method then they are passed as an 
    argument to the function.


    OR 

    - Invokes the function immediately, with a specified this and individual arguments.

    Syntax: func.call(thisArg, arg1, arg2, ..., argN)

    - The call method invokes a function immediately, with this set to the provided object and arguments passed individually.
*/

let nameObjCall = { name: "Tony" };

let PrintNameCall = {
    name: "steve",
    sayHi: function (age) {
        console.log(this.name + " age is " + age);
    }
};

PrintNameCall.sayHi.call(nameObjCall, 42); // Output: Tony age is 42



/*<------------------------------------ write our own call polyfill ------------------------------------->*/

let nameObjCallOwn = { name: "Tony" };

let PrintNameCallOwn = {
    name: "steve",
    sayHi: function (age) {
        console.log(this.name + " age is " + age);
    }
};

Object.prototype.MyCall = function (bindObj, ...args) {
    bindObj.myMethod = this;
    bindObj.myMethod(...args);
};

PrintNameCallOwn.sayHi.MyCall(nameObjCallOwn, 42);





/*
    Apply() Method -

    The Apply() Method calls the function directly and sets this to the first argument passed to the apply method and if 
    any other arguments provided as an array are passed to the call method then they are passed as an argument to the 
    function.

    OR 

    - Just like call(), but accepts arguments as a single array.

    Syntax: func.apply(thisArg, [arg1, arg2, ..., argN])

    - The apply() method works similarly to call(), but it takes arguments as an array.
*/

let nameObjApply = { name: "Tony" };

let PrintNameApply = {
    name: "steve",
    sayHi: function (...age) {
        console.log(this.name + " age is " + age);
    }
};
PrintNameApply.sayHi.apply(nameObjApply, [42]);


/*<------------------------------------ write our own apply polyfill ------------------------------------->*/


let nameObjApplyOwn = { name: "Tony" };

let PrintNameApplyOwn = {
    name: "steve",
    sayHi: function (age) {
        console.log(this.name + " age is " + age);
    }
};

Object.prototype.MyApply = function (bindObj, args) {
    bindObj.myMethod = this;
    bindObj.myMethod(...args);
};

PrintNameApplyOwn.sayHi.MyApply(nameObjApplyOwn, [42]);





/*
    Bind() Method -
    
    - The Bind() Method creates a new function and when that new function is called it set this keyword to the first 
      argument which is passed to the bind method, and if any other sequences of arguments preceding the first argument 
      are passed to the bind method then they are passed as an argument to the new function when the new function is called.

    
    OR

        - Returns a new function with a specific this value and optional pre-filled arguments.

        Syntax: const boundFunc = func.bind(thisArg, arg1, arg2, ..., argN);

    OR

        The bind() method creates a new function and sets this keyword to the provided object (thisArg).
        Optionally, you can pass arguments that will be prepended to arguments provided when the bound function is invoked.
*/

let nameObj = { name: "Tony" };

let PrintName = {
    name: "steve",
    sayHi: function () {
        /* Here "this" points to nameObj */
        console.log(this.name); 
    }
};
let HiFun = PrintName.sayHi.bind(nameObj);
HiFun(); // Output: "Tony"



/*<------------------------------------ write our own bind polyfill ------------------------------------->*/

let nameObj1 = { name: "Tony" };

let PrintName1 = {
    name: "steve",
    sayHi: function () {
        console.log(this.name);
    }
};

Object.prototype.MyBind = function (bindObj1) {
    /* Here "this" will be sayHi function */
    bindObj1.myMethod = this;
    return function () {
        bindObj1.myMethod();
    }
};
let HiFun1 = PrintName1.sayHi.MyBind(nameObj1);
HiFun1();


/*
    Summary
    
    In summary, the call(), apply(), and bind() methods allow you to manipulate the this keyword in JavaScript functions. 
    
    The call() and apply() methods are used to immediately invoke a function with a specified this value and arguments, 

    while the bind() method returns a new function with a specified this value that can be called later. 
    
    These methods are powerful tools for controlling the behaviour of functions in JavaScript and offer flexibility, code 
    reusability, and can make your code easier to read and maintain.
*/