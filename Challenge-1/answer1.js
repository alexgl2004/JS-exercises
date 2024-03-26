 
console.log("\n-------------------Exercise 1: Object Destructuring-------------------");

// Task 1: Destructure the 'person' object to extract 'firstName', 'lastName', and 'age' into separate variables.
const person = {
    firstName: "John",
    lastName: "Doe",
    age: 30,
};
console.log("\n-------------------Task 1-------------------\n");
const { firstName, lastName, age } = person; // Task 1

console.log(firstName, lastName, age); // Task 1

// Task 2: Create a function that takes an object with properties 'width' and 'height' as an argument and uses object destructuring to return the area of a rectangle.
const rectangle = { width: 5, height: 10 };
console.log("\n-------------------Task 2-------------------\n");
function returnAreaRectagle(rectangle_obj){  // Task 2
    return (rectangle_obj.width + rectangle_obj.height) * 2; // Task 2
}
console.log( 'Area - ' + returnAreaRectagle(rectangle) ); // Task 2

// Task 3: Given an array of objects ('people'), destructure the 'name' and 'country' properties from each object and store them in a new array.
const people = [
  { name: "Alice", email: "alice@test.com", age: 24, country: "USA" },
  { name: "Bob", email: "bob@test.com", age: 52, country: "Canada" },
  { name: "Charlie", email: "charlie@test.com", age: 37, country: "UK" },
];
console.log("\n-------------------Task 3-------------------\n");
let newPeople = people.map(
    (elem)=>{
        return {
            name: elem.name,
            country: elem.country
        }
    }
); // Task 3

console.log(newPeople); // Task 3

// Task 4: Do the same as in Task 3, but now use the 'peopleExtended' array as input
const peopleExtended = [
  {
    name: "Alice",
    email: "alice@test.com",
    age: 24,
    address: { street: "Sesame Street", country: "USA" },
  },
  {
    name: "Bob",
    email: "bob@test.com",
    age: 52,
    address: { street: "Birch Lane", country: "Canada" },
  },
  {
    name: "Charlie",
    email: "charlie@test.com",
    age: 37,
    address: { street: "Abbey Road", country: "UK" },
  },
];

console.log("\n-------------------Task 4-------------------\n");
let newPeopleExtended = peopleExtended.map(
    (elem)=>{
        return {
            name: elem.name,
            country: elem.address.country
        }
    }
); // Task 4
console.log(newPeopleExtended); // Task 4

/*?????
const myName = { 
    fullName: { firstName: "Oluwatobi", lastName: "Sofela" }
};
const bio = { ...myName };
myName.fullName.firstName = "Tobi";
console.log(myName); // { fullName: { firstName: "Tobi", lastName: "Sofela" } }
console.log(bio); // { fullName: { firstName: "Tobi", lastName: "Sofela" } }
*/

console.log("\n-------------------Exercise 2: Rest Operator-------------------");

// Task 1: Create an array of numbers. Write a function that takes the first element and the rest of the elements using the rest operator and returns the sum of the rest of the elements.
const numbers = [1, 2, 3, 4, 5];
console.log("\n-------------------Task 1-------------------\n");
function summRest(first, ...restElems){
    return {
        'firstElement': first,
        'sumRestElements': restElems.reduce((accumulator, currentValue) => {
        return accumulator + currentValue
    },0)};
}; // Task 1

console.log(summRest(...numbers)); // Task 1

// Task 2: Create an array of words. Write a function that takes the first word and the rest of the words using the rest operator and returns a string by concatenating the rest of the words.
const words = ["Hello", "World", "of", "JavaScript"];
console.log("\n-------------------Task 2-------------------\n");
function concactRest(first, ...restElems){
    return {
        'firstWord': first,
        'sumRestWords': restElems.join(' ')
        /*
        'sumRestWords': restElems.reduce((accumulator, currentValue) => {
            return accumulator + currentValue
        },'')};
        */
    };
}; // Task 2

console.log(concactRest(...words)); // Task 2

console.log("\n-------------------Exercise 3: Spread Operator-------------------");
// Task 1: Create two arrays, 'fruits1' and 'fruits2'. Use the spread operator to combine these arrays into a single array called 'allFruits'.
const fruits1 = ["apple", "banana", "cherry"];
const fruits2 = ["orange", "grape", "kiwi"];
console.log("\n-------------------Task 1-------------------\n");
allFruits = [...fruits1,...fruits2]

console.log(allFruits); // Task 1

// Task 2: Create an object ('person1') with properties like 'name', 'age', and 'gender'. Clone this object into another object 'person2' using the spread operator, and change the 'name' property in 'person2'.
const person1 = {
    name: "Alice",
    age: 25,
    gender: "Female",
};
console.log("\n-------------------Task 2-------------------\n");  
const person2 = {...person1};
person2.name = 'Tom';

console.log(person1); // Task 2
console.log(person2); // Task 2