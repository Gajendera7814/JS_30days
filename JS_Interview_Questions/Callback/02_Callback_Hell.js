
/*
    📌 Callback Hell in JavaScript

    ➤ What is Callback Hell?

    Callback Hell happens when you have to perform multiple asynchronous tasks one after another, and you write nested 
    callback functions to handle each step.

    As each callback is placed inside the previous one, it creates a "pyramid" shape —  often called the "Pyramid of Doom".

    This kind of code becomes:
    - Hard to read
    - Difficult to debug
    - Tough to maintain
*/

    /* Example: Simple Callback Hell */

    step1(function () {
        step2(function () {
            step3(function () {
                step4(function () {
                    console.log("✅ All steps done");
                });
            });
        });
    });

    /*
        ❓ Why does Callback Hell happen?

        - When you’re handling many asynchronous tasks in sequence.
        - When each task depends on the result of the previous one.
        - Common in Node.js (e.g., file I/O, database calls, network requests).

        💥 Problems:
        - Code becomes deeply nested and unreadable
        - Error handling gets complicated
        - Harder to scale or update

        ✅ How to Fix It?

        1. Use Promises to flatten the nesting.
        2. Use async/await to write asynchronous code that looks like synchronous code.
    */


    /* 🔧 Real-Life Example (eCommerce Flow)

        You’re building an eCommerce website. Here’s the async flow:

        1. Create an order
        2. Proceed to payment
        3. Show order summary
        4. Update wallet balance
    */

    const cart = ["Jeans", "Shirt", "Shoes", "Kurta"];

    /* ❌ Callback Hell Version */
    api.createOrder(cart, function () {
        api.proceedToPayment(function () {
            api.showOrderSummary(function () {
                api.updateWallet();
            });
        });
    });

    /*
        - The structure becomes deeply nested and hard to manage.
        - This is what we call "Callback Hell" or "Pyramid of Doom".
    */



    /*
        🌀 What is Inversion of Control?

        Inversion of control happens when you give control of your code to a third-party function (e.g., a callback).

        You depend on that function to call your callback correctly — but if it fails or misbehaves, you have no control.

        Example:
    */

    api.createOrder(cart, function () {
        api.proceedToPayment(); // You assume it will be called properly
    });

    /*
        If the API doesn’t call the callback or calls it multiple times, you lose control over the flow.
        This is one major issue with relying too much on callbacks.
    */



    /*
        ✅ Better Alternatives to Callbacks

        1. Promises – Fixing Callback Hell

            Promises let you handle async operations in a cleaner, flatter way.*/

            api.createOrder(cart)
                .then(() => api.proceedToPayment())
                .then(() => api.showOrderSummary())
                .then(() => api.updateWallet())
                .then(() => console.log("✅ Order completed successfully"))
                .catch(error => console.log("❌ Error:", error));

    /*
        2. Async/Await – Even Cleaner Approach

            With async/await, your code looks synchronous and is easier to read:

    */

        async function placeOrder() {
            try {
                await api.createOrder(cart);
                await api.proceedToPayment();
                await api.showOrderSummary();
                await api.updateWallet();
                console.log("✅ Order completed successfully");
            } catch (error) {
                console.log("❌ Error:", error);
            }
        };

        placeOrder();

        
    /*
    
        | Aspect               | Callback Hell  | Promises            | Async/Await       |
        |----------------------|----------------|---------------------|-------------------|
        | Readability          | 😵 Poor       | 🙂 Better           | 😍 Best           |
        | Nesting              | Deep & messy   | Flat with .then()   | Flat with await   |
        | Error Handling       | Hard to manage | .catch()            | try/catch         |
        | Inversion of Control | Yes            | Less                | Minimal           |

    */

    

    /* Dummy API to simulate async operations */

    const api = {
        createOrder: function (cart, callback) {
            console.log("Creating order...");
            setTimeout(() => {
                console.log("🛒 Order created for:", cart.join(", "));
                callback && callback();
            }, 1000);
        },

        proceedToPayment: function (callback) {
            console.log("Processing payment...");
            setTimeout(() => {
                console.log("💳 Payment successful");
                callback && callback();
            }, 1000);
        },

        showOrderSummary: function (callback) {
            console.log("Generating order summary...");
            setTimeout(() => {
                console.log("📦 Order summary displayed");
                callback && callback();
            }, 1000);
        },

        updateWallet: function (callback) {
            console.log("Updating wallet balance...");
            setTimeout(() => {
                console.log("💰 Wallet updated");
                callback && callback();
            }, 1000);
        }
    };

    /* Example usage with callbacks */
    const carts = ["Shirt", "Jeans", "Shoes"];

    api.createOrder(carts, function () {
        api.proceedToPayment(function () {
            api.showOrderSummary(function () {
                api.updateWallet(function () {
                    console.log("✅ Order flow complete (Callback version)");
                });
            });
        });
    });


    /*
        Output -
        
        Creating order...
        🛒 Order created for: Shirt, Jeans, Shoes
        Processing payment...
        💳 Payment successful
        Generating order summary...
        📦 Order summary displayed
        Updating wallet balance...
        💰 Wallet updated
        ✅ Order flow complete (Callback version)
    */
