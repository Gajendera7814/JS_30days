/*
    Promise -

        JavaScript Promises make handling asynchronous operations like API calls, file loading, or time delays easier. 
    
        It can be in one of three states

        - Pending: The task is in the initial state.
        - Resolve || Fulfilled: The task was completed successfully, and the result is available.
        - Rejected: The task failed, and an error is provided.
        
    */

    /*
        Create a Promise - 

        - To create a promise object, we use the Promise() constructor.
    */

        let promise = new Promise(function(resolve, reject) {
            // do something
        });

        /*
            The Promise() constructor takes a function as an argument. The function also accepts two functions resolve()
            and reject().

            If the promise returns successfully, the resolve() function is called. And, if an error occurs, the reject() 
            function is called.
        */

        /* Example 1: Program with a Promise */

        const count = true;

        let countValue = new Promise(function (resolve, reject) {
            if (count) {
                resolve("There is a count value.");
            } else {
                reject("There is no count value");
            }
        });

        console.log(countValue); /* Output: Promise { 'There is a count value.' } */

        /*
            In the above program, a Promise object is created that takes two functions: resolve() and reject(). 
            resolve() is used if the process is successful and reject() is used when an error occurs in the promise.

            The promise is resolved if the value of count is true.
        */

    
    
    /*<--------------------------------------- JavaScript Promise Chaining --------------------------------------->*/

    /*
        Promises are useful when you have to handle more than one asynchronous task, one after another. For that, we use 
        promise chaining.


        You can perform an operation after a promise is resolved using methods then(), catch() and finally().

        JavaScript then() method -
        
        The then() method is used with the callback when the promise is successfully fulfilled or resolved.

        The catch() method is used with the callback when the promise is rejected or if an error occurs.


        /* Example 2: Chaining the Promise with then() */

        
        /* returns a promise */

        let countValues = new Promise(function (resolve, reject) {
            resolve("Promise resolved");
            reject('Promise rejected');
        });

        /* executes when promise is resolved successfully */

        countValues.then(function successValue(result) {
            console.log(result); /* Output: Promise resolved */
        }).then(function successValue1() {
            console.log("You can call multiple functions this way."); /* You can call multiple functions this way. */
        }).catch(function errorValue(result) {
            console.log(result); /* Output: Promise rejected */
        });



/*<-------------------------------------------------  Promise Methods -------------------------------------------------->*/
    /*
        1. Promise.all() Method

        - Waits for all promises to resolve and returns their results as an array. If any promise is rejected, 
        it immediately rejects.
    */
        Promise.all([
            Promise.resolve("Task 1 completed"),
            Promise.resolve("Task 2 completed"),
            Promise.reject("Task 3 failed")
        ])
        .then((results) => console.log(results))
        .catch((error) => console.error(error));


        /* Output: Task 3 failed */
    
    
    
    /*
        2. Promise.allSettled() Method

        - Waits for all promises to settle (fulfilled or rejected) and returns an array of their outcomes.
    */

        Promise.allSettled([
            Promise.resolve("Task 1 completed"),
            Promise.reject("Task 2 failed"),
            Promise.resolve("Task 3 completed")
        ])
        .then((results) => console.log(results));

        /*
            Output:

            [
                { status: 'fulfilled', value: 'Task 1 completed' },
                { status: 'rejected', reason: 'Task 2 failed' },
                { status: 'fulfilled', value: 'Task 3 completed' }
            ]
        */
    
    
    
    /*
        3. Promise.race() Method

        - Resolves or rejects as soon as the first promise settles.
    */

        Promise.race([
            new Promise((resolve) =>
                setTimeout(() => resolve("Task 1 finished"), 1000)),
            new Promise((resolve) =>
                setTimeout(() => resolve("Task 2 finished"), 500)),
        ])
        .then((result) => console.log(result));


        /* Output: Task 2 finished */
    
    
    
    /*
        4. Promise.any() Method

        - Resolves with the first fulfilled promise. If all are rejected, it rejects with an AggregateError.
    */

        Promise.any([
            Promise.reject("Task 1 failed"),
            Promise.resolve("Task 2 completed"),
            Promise.resolve("Task 3 completed")
        ])
        .then((result) => console.log(result))
        .catch((error) => console.error(error));


        /* Output: Task 2 completed */
    
    
    
    /*
        5. Promise.resolve() Method

        - Returns a promise that resolves with the given value.
    */

        Promise.resolve("Immediate success").then((value) => console.log(value));


        /* Output: "Immediate success" */


    /*
        6. Promise.reject() Method

        - Returns a promise that immediately rejects with a given reason.
    */

        Promise.reject("Immediate failure").catch((error) => console.error(error));


        /* Output: "Immediate failure" */
    
    
    
    /*
        7. Promise.finally() Method

        - Runs a cleanup or final code block regardless of the promise’s result (fulfilled or rejected).
    */

        Promise.resolve("Task completed")
            .then((result) => console.log(result))
            .catch((error) => console.error(error))
            .finally(() => console.log("Cleanup completed"));

        /*
            Output:

            Task completed  
            Cleanup completed
        */
    
    
    
    /*
        8. Chaining with Promise.prototype.then() Method

        Allows sequential execution of promises.
    */

        Promise.resolve(5)
            .then((value) => value * 2) // 10
            .then((value) => value + 3) // 13
            .then((finalValue) => console.log(finalValue));


        /* Output: 13 */

    /*
        9. Sequential Execution with Array.prototype.reduce()

        - Executes an array of async tasks sequentially.
    */

        let tasks = [1, 2, 3];

        tasks.reduce((prevPromise, current) => {
            return prevPromise.then(() => {
                return new Promise((resolve) => {
                    console.log(`Processing task ${current}`);
                    setTimeout(resolve, 500);
                });
            });
        }, Promise.resolve());

        /*
            Output:

            Processing task 1  
            Processing task 2  
            Processing task 3
        */
    
    
    
    /*
        10. Dynamic Promise Creation

        - Create and resolve promises based on runtime decisions.
    */

        function asyncTask(taskName) {
            return new Promise((resolve) => {
                setTimeout(() => resolve(`${taskName} completed`), 1000);
            });
        }
        asyncTask("Download File").then((result) => console.log(result));
    
        /*
            Output: "Download File completed"
        */
    
    
    
    /*

        11. Timeout Handling with Promise.race() Method

        - Used to set a timeout for an async task.
    */

        let fetchData = new Promise((resolve) =>
            setTimeout(() => resolve("Data loaded"), 3000));

        let timeout = new Promise((_, reject) =>
            setTimeout(() => reject("Timeout!"), 2000));

        Promise.race([fetchData, timeout])
            .then((result) => console.log(result))
            .catch((error) => console.error(error));


        /* Output: "Timeout!" */
    
    
    
    /*
        12. Handling Multiple Failures with Promise.allSettled() Method

        - Ensures all outcomes are captured even if some fail.
    */

        Promise.allSettled([
            Promise.resolve("Task 1 done"),
            Promise.reject("Task 2 failed"),
            Promise.resolve("Task 3 done")
        ])
        .then((results) => console.log(results));


        /*
            Output:
    
            [
                { status: 'fulfilled', value: 'Task 1 done' },
                { status: 'rejected', reason: 'Task 2 failed' },
                { status: 'fulfilled', value: 'Task 3 done' }
            ]
        */
    
    
    
    /*
        13. Combining Promises with Parallel and Sequential Execution

        - Run some tasks in parallel, then act on the result sequentially.
    */

        Promise.all([
            new Promise((resolve) =>
                setTimeout(() => resolve("Task A done"), 1000)),
            new Promise((resolve) =>
                setTimeout(() => resolve("Task B done"), 500))
        ])
        .then(([resultA, resultB]) => {
            console.log(resultA, resultB);
            return new Promise((resolve) =>
                setTimeout(() => resolve("Final Task done"), 700));
        })
        .then((finalResult) => console.log(finalResult));


        /* 
            Output:

            Task A done Task B done  
            Final Task done
        */
    
    
    
    /*
        14. Wrapping Callbacks into Promises

        - Convert callback-based async code into promise-based.
    */
        function loadData(callback) {
            setTimeout(() => callback("Data loaded"), 1000);
        }

        function promisifiedLoadData() {
            return new Promise((resolve) => {
                loadData((result) => resolve(result));
            });
        }

        promisifiedLoadData().then((data) => console.log(data));


        /* Output: "Data loaded" */