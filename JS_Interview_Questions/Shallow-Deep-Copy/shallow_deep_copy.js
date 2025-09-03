/*
    Shallow copy: means that only the first level of the object is copied. Deeper levels are referenced.

        - A shallow copy can be achieved using the spread operator (…) or using Object.assign()

        - After updating a property in the first level of the cloned objects, the original property is not updated.
        - After updating a property in a deeper level, the original property is also updated. This happens because, 
          in this case, deeper levels are referenced, not copied.
    

    Deep copy: means that all levels of the object are copied. This is a true copy of the object.

        - A deep copy can be achieved using JSON.parse() + JSON.stringify().
        - After updating a property in the first level of the cloned objects, the original property is not updated.
        - After updating a property in a deeper level, the original property is neither updated. This happens because, 
          in this case, deeper levels are also copied.
*/



/* Example of Shallow Copy: */

/*
    How to Create a Shallow Copy
    
    1. Using the Spread Operator (...):

        const shallowCopy = { ...originalObject };

    2. Using Object.assign():

        const shallowCopy = Object.assign({}, originalObject);
*/

const original = {
    name: 'John',
    age: 30,
    address: {
        city: 'New York',
        country: 'USA'
    }
};

/* Creating a shallow copy */
const shallowCopy = { ...original };

/* Modifying the nested object in shallow copy */
shallowCopy.address.city = 'San Francisco';

console.log(original.address.city); // Output: 'San Francisco'





/* Example of Deep Copy: */

/*
    How to Create a Deep Copy
    
    1. Using JSON.stringify() and JSON.parse():
        
        - Converts the object into a JSON string and then parses it back into a new object.

        - Limitations:
            - Cannot handle circular references.
            - Ignores properties like functions, undefined, or Symbol.

        const deepCopy = JSON.parse(JSON.stringify(originalObject));

    2. Using Libraries:

        - Libraries like Lodash provide robust deep cloning methods.

    3. Custom Recursive Function:
        
        - For full control, you can write a recursive function to clone nested objects.
*/

const original2 = {
    name: 'Alice',
    age: 25,
    address: {
        city: 'London',
        country: 'UK'
    }
};

/* Creating a deep copy using JSON methods */
const deepCopy = JSON.parse(JSON.stringify(original2));



// ✅ Another ways to crate deep copy
const deepC = structuredClone(original2);



/* Modifying the nested object in deep copy */
deepCopy.address.city = 'Manchester';

console.log(original2.address.city); // Output: "London"


/*
    ✅ 2. Using Libraries (Lodash)

    - Lodash provides a reliable method for deep cloning with _.cloneDeep.

    📦 Step 1: Install Lodash (if not already)  - npm install lodash
            
    Use _.cloneDeep
        
*/
    const _ = require('lodash');

    const original3 = {
    name: 'Gajendera',
    address: {
        city: 'Delhi',
        coordinates: { lat: 28.6, lng: 77.2 }
    }
    };

    const deepCopy = _.cloneDeep(original3);

    deepCopy.address.city = 'Mumbai';

    console.log(original3.address.city); // "Delhi" ✅



/*  ✅ 3. Custom Recursive Function */

    function deepClone(obj) {
        if (obj === null || typeof obj !== 'object') {
            return obj; /* Return the value if obj is not an object */
        }

        /* Handle Arrays */
        if (Array.isArray(obj)) {
            return obj.map(item => deepClone(item));
        }

        /* Handle Objects */
        const clonedObj = {};
        for (const key in obj) {
            if (obj.hasOwnProperty(key)) {
                clonedObj[key] = deepClone(obj[key]);
            }
        }

        return clonedObj;
    };

    const original4 = {
        name: 'Gajendera',
        address: {
            city: 'Delhi',
            coordinates: { lat: 28.6, lng: 77.2 }
        }
    };

    const deepCopy4 = deepClone(original4);
    deepCopy4.address.city = 'Mumbai';

    console.log(original4.address.city); // "Delhi" ✅


/*
    📊 Comparing Shallow Copy and Deep Copy

    | Feature     |             Shallow Copy            |                   Deep Copy                    |
    |-------------|-------------------------------------| ---------------------------------------------- |
    | Scope       | Copies only top-level properties.   | Copies all levels, including nested data.      |
    | References  | Nested references are shared.       | Nested references are independent.             |
    | Performance | Faster and lightweight.             | Slower due to recursive operations.            |
    | Use Cases   | Flat or minimally nested objects.   | Deeply nested objects or immutable structures. |
*/

/*
    Note - 
    
    Performance - shallow copies are a lot faster than deep copies. But this doesn’t mean that you should always use 
    a shallow copy, because sometimes you will also need a copy of the nested objects. 
*/