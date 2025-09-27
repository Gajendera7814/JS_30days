/*
    🚀 How JavaScript code is executed:

        🌟 Execution context is created through two distinct phases.

        1. Memory Creation Phase (Hoisting Phase)
        2. Code Execution Phase

*/  

    var n = 2;

    function square(num) {
        var ans = num * num;
        return ans;
    };

    var square2 = square(n);
    var square4 = square(4);


    /*
        ✅ Step 1 – Memory Creation Phase (Hoisting Phase)

            🔸 In first phase of memory creation javaScript engine allocates memory for variables and function declarations.

                | Variable / Function | Initial Value in Memory                     |
                | ------------------- | ------------------------------------------- |
                | n                   | undefined                                   |
                | square              | reference to function square(num) { ... } |
                | square2             | undefined                                   |
                | square4             | undefined                                   |

            👉 At this point, the engine knows about n, square, square2, and square4, and functions are fully stored in memory.


        ✅ Step 2 – Code Execution Phase (Line by Line Execution)

            🔁 Line 1 – var n = 2;

                🔹 Assign the value 2 to variable n.

                🔸 Memory state now:

                | Variable / Function | Value              |
                | ------------------- | ------------------ |
                | n                   | 2                  |
                | square              | function reference |
                | square2             | undefined          |
                | square4             | undefined          |


            🔁 Line 2 – function square(num) { ... }

                🔸 Already handled in the Memory Creation Phase (function fully available).
                🔸 No additional action here.


            🔁 Line 3 – var square2 = square(n);

                🔸 Step A – Evaluate square(n) → Call square(2)

                    🔹 New Execution Context for square(2) is created.

                        Inside square function:

                        | Local Variable | Initial Value |
                        | -------------- | ------------- |
                        | num            | 2             |
                        | ans            | undefined     |


                🔸 Step B – Execute var ans = num * num;

                    🔹 ans = 2 * 2 = 4

                    | Local Variable | Value |
                    | -------------- | ----- |
                    | num            | 2     |
                    | ans            | 4     |

                🔸 Step C – return ans;

                    🔹 Returns 4

                    👉 Back to global context: square2 = 4

                    Memory state now:

                    | Variable / Function | Value              |
                    | ------------------- | ------------------ |
                    | n                   | 2                  |
                    | square              | function reference |
                    | square2             | 4                  |
                    | square4             | undefined          |


            🔁 Line 4 – var square4 = square(4);

                🔸 Step A – Call square(4)

                    👉 New Execution Context for square(4) is created.

                    | Local Variable | Initial Value |
                    | -------------- | ------------- |
                    | num            | 4             |
                    | ans            | undefined     |

                🔸 Step B – Execute var ans = num * num;

                    🔹 ans = 4 * 4 = 16

                    | Local Variable | Value |
                    | -------------- | ----- |
                    | num            | 4     |
                    | ans            | 16    |

                🔸 Step C – return ans;

                    🔹 Returns 16

                    👉 Back to global context: square4 = 16

                    
        ✅ Final Memory state:

            | Variable / Function | Value              |
            | ------------------- | ------------------ |
            | n                   | 2                  |
            | square              | function reference |
            | square2             | 4                  |
            | square4             | 16                 |

*/

/*
    ✅ Summary of Execution Flow

        1. Memory Creation Phase:

            🔸 All variables declared → initialized as undefined
            🔸 Function square stored in memory

        2. Code Execution Phase:

            🔸 n assigned 2
            🔸 square2 stores result of square(2) → 4
            🔸 square4 stores result of square(4) → 16


        ✅ Final Output Variables

            console.log(n);        → 2
            console.log(square2);  → 4
            console.log(square4);  → 16
*/