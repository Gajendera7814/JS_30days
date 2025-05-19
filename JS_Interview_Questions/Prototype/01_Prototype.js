/*
    What is a Prototype in JavaScript?

    In JavaScript, prototype is a built-in mechanism that allows objects to inherit properties and methods from other objects.

    Every function in JavaScript (including constructor functions) has a prototype property, which is used when creating 
    new objects via new.

    
    📦 Basic Concept

    When you access a property or method on an object, JavaScript looks for it:

        1. On the object itself.
        2. If not found, it checks the object’s prototype (__proto__).
        3. This continues up the prototype chain until it finds it or reaches null.

    
        🔁 Prototype Chain Example
    */
        const person = {
            greet() {
                console.log("Hello!");
            }
        };

        const student = Object.create(person);
        student.name = "Gajendera";

        console.log(student.name); // Gajendera
        student.greet();           // Hello! (inherited from prototype)
    /*



    🔧 Function Prototype Example */


        function Person(name) {
            this.name = name;
        }

        Person.prototype.sayHi = function () {
            console.log(`Hi, I am ${this.name}`);
        };

        const p1 = new Person("Akash");
        p1.sayHi(); // Hi, I am Akash


        /* sayHi is not on p1, but it’s available via Person.prototype. */


    /*
        👨‍👩‍👧‍👦 __proto__ vs .prototype

        | Feature        | .prototype                    | __proto__                    |
        | -------------- | ------------------------------- | ------------------------------ |
        | Belongs to     | Functions                       | Objects                        |
        | Used to define | What future instances inherit   | Points to the prototype object |
        | Usage          | ConstructorFunction.prototype | object.__proto__             |


        ✅ Summary

        * Prototypes enable inheritance in JavaScript.
        * Each object has an internal [[Prototype]] (accessible as __proto__).
        * Functions have a .prototype property used when creating new objects with new.
        * The prototype chain allows property lookup up the inheritance hierarchy.
*/