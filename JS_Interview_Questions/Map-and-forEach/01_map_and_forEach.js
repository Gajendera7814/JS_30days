/*
    Difference between map() and forEach()
    <------------------------------------->

    map() method:
    
    - The map() method creates a new array by applying a function to each element in the original array and returns the 
      results in a new array. It is used for transforming or mapping array elements.

    -  map() method returns a new array containing the values.

    - Chaining Can be applied. (e.g., map().filter())


    forEach() Method :-
    
    - The forEach() method executes a function once for each array element but does not create a new array. It is typically 
      used for performing actions on array elements without producing a new array.

    - The forEach() method returns "undefined"

    - The forEach() method doesn't return anything hence the method chaining technique cannot be applied here. 
*/


/* Examples based on forEach() Method - */

const todos = ['Buy groceries', 'Clean the house', 'Write code'];
todos.forEach(task => console.log(task));

/*
    Output -

    Buy groceries
    Clean the house
    Write code
*/



/* Examples based on map() Method - */

const users = [
    { id: 1, name: 'Alice' },
    { id: 2, name: 'Bob' },
    { id: 3, name: 'Charlie' }
];
const usernames = users.map(user => user.name);
console.log(usernames); // Outputs: ['Alice', 'Bob', 'Charlie']



/*
    Q. Can I use forEach() to transform array elements like map()?

        - No, forEach() is for iteration, not transformation. To transform array elements and create a new array, use map().
          It applies a function to each element, returning a new array with the transformed values.

    Q. Is map() faster than forEach()?

        - Performance-wise, they are similar. Use map() for creating a new array with transformed values, and forEach() for 
          executing actions on array elements without creating a new array. Choose based on your intended operation and code clarity.

    Q. Can I chain multiple map() or forEach() calls together?

        - You can chain map() calls to perform multiple transformations, but forEach() is not chainable.
*/