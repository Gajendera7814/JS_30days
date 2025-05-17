/*

    JavaScript Callbacks -

    In JavaScript, callbacks play an essential role in handling asynchronous tasks like reading files, making API requests,
    and executing code after certain events. 


    What is a Callback Function?

    A callback function is a function that is passed as an argument to another function and executed later.

        - A function can accept another function as a parameter.  
        - Callbacks allow one function to call another at a later time.  
        - A callback function can execute after another function has finished.

    */

        function greet(name, callback) {
            console.log("Hello, " + name);
            callback();
        }

        function sayBye() {
            console.log("Goodbye!");
        }

        greet("Ajay", sayBye);

        /*
            Output:

            Hello, Ajay  
            Goodbye!

            Here, sayBye() is passed as a callback to greet(), which executes after the greeting.
        */


    /*   
        How Do Callbacks Work in JavaScript?

        JavaScript executes code line by line (synchronously), but sometimes we need to delay execution or wait for a task 
        to complete before running the next function. Callbacks help achieve this by passing a function that is executed 
        later.

    */
        
    /* Callbacks for Asynchronous Execution */

        console.log("Start");

        setTimeout(function () {
            console.log("Inside setTimeout");
        }, 2000);

        console.log("End");

    /*
        Output:

        Start  
        End  
        Inside setTimeout  (after 2 seconds)
    
        - setTimeout() is an asynchronous function that takes a callback to execute after 2 seconds.
        - The rest of the code continues executing without waiting.
    */


    /* 
        Where Are Callbacks Used?

        1. Handling Asynchronous Operations

            Callbacks are widely used in:

            * API requests (fetching data)
            * Reading files (Node.js file system)
            * Event listeners (clicks, keyboard inputs)
            * Database queries (retrieving data)

        2. Callbacks in Functions Handling Operations

            When a function needs to execute different behaviors based on input, callbacks make the function flexible.

            */
                function calc(a, b, callback) {
                    return callback(a, b);
                }

                function add(x, y) {
                    return x + y;
                }

                function mul(x, y) {
                    return x * y;
                }

                console.log(calc(5, 3, add));    
                console.log(calc(5, 3, mul));

            /*
                Output:
                8  
                15

                - calc() receives two numbers and a function (add or multiply).
                - The passed function is executed inside calc().
            *//*


        3. Callbacks in Event Listeners

            JavaScript is event-driven, and callbacks handle user interactions like clicks and key presses.

            */
                document.getElementById("myButton").addEventListener("click", function () {
                    console.log("Button clicked!");
                });


                /* Here, the anonymous function is a callback that runs when the button is clicked. */
            /*


        4. Callbacks in API Calls (Fetching Data)

            Callbacks are useful when retrieving data from APIs.

            */
                function fetchData(callback) {
                    fetch("https://jsonplaceholder.typicode.com/todos/1").then(response => response.json())
                        .then(data => callback(data))
                        .catch(error => console.error("Error:", error));
                }

                function handleData(data) {
                    console.log("Fetched Data:", data);
                }

                fetchData(handleData);
            /*

                Output: Fetched Data: { userId: 1, id: 1, title: 'delectus aut autem', completed: false }

                fetchData() gets data from an API and passes it to handleData() for processing.
            */

    /*
        Features of JavaScript Callbacks

        - Asynchronous Execution: Handle async tasks like API calls, timers, and events without blocking execution.
        - Code Reusability: Write modular code by passing different callbacks for different behaviors.
        - Event-Driven Programming: Enable event-based execution (e.g., handling clicks, keypresses).
        - Error Handling: Pass errors to callbacks for better control in async operations.
        - Non-Blocking Execution: Keep the main thread free by running long tasks asynchronously.
    */


    setTimeout(() => {
        console.log("timer");
    }, 5000);

    const x = (y) => {
        console.log("x");
        y();
    };

    x(() => {
        console.log("y");
    });

    /*
        Output: 

        x
        y
        timer (after 5sec)
    */

    /*

        Problems with Callbacks

        1. Callback Hell (Nested Callbacks)

            - When callbacks are nested deeply, the code becomes unreadable and hard to maintain.

        2. Error Handling Issues in Callbacks

            - Error handling can get messy when dealing with nested callbacks.
    */