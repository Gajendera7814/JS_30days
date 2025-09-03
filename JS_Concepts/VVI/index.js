

/*<--------------------------------- Interview question ask to saif ------------------------------------->*/

var x = 21;
var fun = function () {
    console.log(x);
    var x = 20;
};
fun();


console.log(false - '1')
console.log(true + '1')


for(var i = 0; i < 5; i++) {
    setTimeout(function() {
        console.log(i)
    }, i * 1000);
}


const users = [
    { id: 1, name: "Alice", age: 25, role: "developer" },
    { id: 2, name: "Bob", age: 30, role: "designer" },
    { id: 3, name: "Charlie", age: 25, role: "developer" },
    { id: 4, name: "David", age: 35, role: "manager" },
    { id: 5, name: "Eve", age: 22, role: "developer" },
];

/*
    1. Find an object by property
    👉 "Find user with id = 3"
*/
const user = users.find(u => u.id === 3);
console.log(user); // Output: { id: 3, name: "Charlie", age: 25, role: "developer" }




/*
    2. Filter objects
    👉 "Get all developers"
*/
const devs = users.filter(u => u.role === "developer");
console.log(devs);




/* 
    3. Transform array of objects (map)
    👉 "Get an array of names"
*/
const names = users.map(u => u.name);
console.log(names); // Output: ["Alice", "Bob", "Charlie", "David", "Eve"]




/*
    4. Sort objects
    👉 "Sort users by age (ascending)"
*/
const sorted = [...users].sort((a, b) => a.age - b.age);
console.log(sorted);




/*
    5. Group by property
    👉 "Group users by role"
*/
const grouped = users.reduce((acc, u) => {
    acc[u.role] = acc[u.role] || [];
    acc[u.role].push(u);
    return acc;
}, {});
console.log(grouped);
/*
    {
        developer: [{...}, {...}, {...}],
        designer: [{...}],
        manager: [{...}]
    }
*/




/*
    6. Count frequency
    👉 "Count how many users per role"
*/
const roleCount = users.reduce((acc, u) => {
    acc[u.role] = (acc[u.role] || 0) + 1;
    return acc;
}, {});
console.log(roleCount); // Output: { developer: 3, designer: 1, manager: 1 }




/*
    7. Find max / min
    👉 "Find the oldest user"
*/
const oldest = users.reduce((max, u) => u.age > max.age ? u : max, users[0]);
console.log(oldest); // Output: { id: 4, name: "David", age: 35, role: "manager" }




/*
    8. Remove duplicates
    👉 "Remove duplicate ages"
*/
const uniqueAges = [...new Set(users.map(u => u.age))];
console.log(uniqueAges); // [25, 30, 35, 22]




/*
    9. Merge two arrays of objects by id
*/

const moreInfo = [
    { id: 1, salary: 5000 },
    { id: 3, salary: 6000 },
    { id: 5, salary: 4000 },
];

const merged = users.map(u => {
    const extra = moreInfo.find(e => e.id === u.id);
    return { ...u, ...extra };
});
console.log(merged);




/*
    10. Convert array of objects to object by id
*/
const objById = users.reduce((acc, u) => {
    acc[u.id] = u;
    return acc;
}, {});
console.log(objById);
/*
    {
        1: { id: 1, name: "Alice", ... },
        2: { id: 2, name: "Bob", ... },
        ...
    }
*/






/*<------------------------------------------------------------------------------------------------------------>*/

/*
    🔹 1. Find object by property
*/

const newusers = [
    { id: 1, name: "Aman", age: 25 },
    { id: 2, name: "Rahul", age: 30 },
    { id: 3, name: "Neha", age: 22 }
];
const userRe = newusers.find(u => u.id === 2);
console.log(userRe); // Output: { id: 2, name: "Rahul", age: 30 }




/*
    👉 Tests if you know find().
    🔹 2. Filter objects based on condition
*/
const result = users.filter(u => u.age > 25);
console.log(result); // Output: [{ id: 2, name: "Rahul", age: 30 }]




/*
    👉 Tests filter().
    🔹 3. Transform array of objects (pick certain properties)
*/
const newnames = users.map(u => u.name);
console.log(newnames); // Output: ["Aman", "Rahul", "Neha"]




/*
    👉 Tests map().
    🔹 4. Sum / Aggregate values using reduce
*/
const totalAge = users.reduce((sum, u) => sum + u.age, 0);
console.log(totalAge); // Output: 77




/*
    👉 Tests reduce().
    🔹 5. Remove duplicates (by id)
*/
const data = [
    { id: 1, name: "Aman" },
    { id: 2, name: "Rahul" },
    { id: 1, name: "Aman" }
];
const unique = [...new Map(data.map(item => [item.id, item])).values()];
console.log(unique); // Output: [{id:1, name:"Aman"}, {id:2, name:"Rahul"}]




/*
    👉 Tests knowledge of `Map`.
    🔹 6. Sort array of objects
*/
const newsorted = users.sort((a, b) => a.age - b.age);
console.log(newsorted); // Output: [{Neha}, {Aman}, {Rahul}]




/*
    👉 Tests sorting logic.
    🔹 7. Group objects by property
*/
const people = [
    { name: "Aman", city: "Delhi" },
    { name: "Rahul", city: "Mumbai" },
    { name: "Neha", city: "Delhi" }
];

const newgrouped = people.reduce((acc, person) => {
    (acc[person.city] = acc[person.city] || []).push(person);
    return acc;
}, {});

console.log(newgrouped);
/*
    {
        Delhi: [{Aman}, {Neha}],
        Mumbai: [{Rahul}]
    }
*/




/*
    👉 Tests grouping skills.
    🔹 8. Merge two arrays of objects (by id)
*/
const arr1 = [{ id: 1, name: "Aman" }, { id: 2, name: "Rahul" }];
const arr2 = [{ id: 2, age: 30 }, { id: 1, age: 25 }];

const mergeds = arr1.map(item => ({
    ...item,
    ...arr2.find(x => x.id === item.id)
}));

console.log(mergeds); // Output: [{ id:1, name:"Aman", age:25 }, { id:2, name:"Rahul", age:30 }]




/*
    👉 Tests merging logic.
    🔹 9. Find the maximum / minimum value object
*/
const oldests = users.reduce((max, u) => u.age > max.age ? u : max);
console.log(oldests); // Output: { id: 2, name: "Rahul", age: 30 }




/*
    👉 Tests reduce with comparison.
    🔹 10. Convert array of objects → object (dictionary)
*/
const dict = users.reduce((acc, u) => {
    acc[u.id] = u;
    return acc;
}, {});

console.log(dict);
/*
    {
        1: { id:1, name:"Aman", age:25 },
        2: { id:2, name:"Rahul", age:30 },
        3: { id:3, name:"Neha", age:22 }
    }
*/
