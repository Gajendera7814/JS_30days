/*
    Map() Method - 
    
    The map() method is used for creating a new array from an existing one, applying a function to each one of the elements 
    of the first array.

    OR

    It applies a given function on all the elements of the array and returns the updated array.

    - map() creates a new array from calling a function for every array element.
    - map() does not execute the function for empty elements.
    - map() does not change the original array.
*/



const numbersMap = [1, 2, 3, 4];
const doubled = numbersMap.map(item => item * 2);
console.log(doubled); // Output: [2, 4, 6, 8]




const persons = [
    {firstname : "Malcom", lastname: "Reynolds"},
    {firstname : "Kaylee", lastname: "Frye"},
    {firstname : "Jayne", lastname: "Cobb"}
];

console.log(persons.map(getFullName));
/* Output: [ 'Malcom Reynolds', 'Kaylee Frye', 'Jayne Cobb' ] */

function getFullName(item) {
    return [item.firstname, item.lastname].join(" ");
}



/*
    Filter() Method -

    The filter() method takes each element in an array and it applies a conditional statement against it. 
    If this conditional returns true, the element gets pushed to the output array. 
    If the condition returns false, the element does not get pushed to the output array.

    OR

    - The filter() method creates a new array filled with elements that pass a test provided by a function.
    - The filter() method does not execute the function for empty elements.
    - The filter() method does not change the original array.
*/

const numbersFilter = [1, 2, 3, 4];
const evens = numbersFilter.filter(item => item % 2 === 0);
console.log(evens); // Output: [2, 4]

const students = [
  { name: 'Quincy', grade: 96 },
  { name: 'Jason', grade: 84 },
  { name: 'Alexis', grade: 100 },
  { name: 'Sam', grade: 65 },
  { name: 'Katie', grade: 90 }
];

const studentGrades = students.filter(student => student.grade >= 90);
console.log(studentGrades);

/* [ { name: 'Quincy', grade: 96 }, { name: 'Alexis', grade: 100 }, { name: 'Katie', grade: 90 } ] */



const ages = [32, 33, 16, 40];
const result = ages.filter(checkAdult);
console.log(result); /* Output: [ 32, 33, 40 ] */

function checkAdult(age) {
    return age >= 18;
};



/*
    Reduce() Method -

    The reduce() method reduces an array of values down to just one value. To get the output value, 
    it runs a reducer function on each element of the array.

    OR

    - The reduce() method executes a reducer function for array element.
    - The reduce() method returns a single value: the function's accumulated result.
    - The reduce() method does not execute the function for empty array elements.
    - The reduce() method does not change the original array.


    The callback argument is a function that will be called once for every item in the array. This function takes four 
    arguments, but often only the first two are used.

        - accumulator - the returned value of the previous iteration
        - currentValue - the current item in the array
        - index - the index of the current item
        - array - the original array on which reduce was called

    The initialValue argument is optional. If provided, it will be used as the initial accumulator value in the first 
    call to the callback function.
*/

const numbers = [1, 2, 3, 4];
const sum = numbers.reduce(function (result, item) {
    return result + item;
}, 0);

console.log(sum); // Output: 10