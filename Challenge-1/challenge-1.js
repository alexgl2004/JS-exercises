// Exercise 1: Object Destructuring

// Task 1: Destructure the 'person' object to extract 'firstName', 'lastName', and 'age' into separate variables.

// Task 2: Create a function that takes an object with properties 'width' and 'height' as an argument and uses object destructuring to return the area of a rectangle.

// Task 3: Given an array of objects ('people'), destructure the 'name' and 'country' properties from each object and store them in a new array.

// Task 4: Do the same as in Task 3, but now use the 'peopleExtended' array as input

// Sample data for Exercise 1
const person = {
  firstName: "John",
  lastName: "Doe",
  age: 30,
};

const rectangle = { width: 5, height: 10 };

const people = [
  { name: "Alice", email: "alice@test.com", age: 24, country: "USA" },
  { name: "Bob", email: "bob@test.com", age: 52, country: "Canada" },
  { name: "Charlie", email: "charlie@test.com", age: 37, country: "UK" },
];

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

// Exercise 2: Rest Operator

// Task 1: Create an array of numbers. Write a function that takes the first element and the rest of the elements using the rest operator and returns the sum of the rest of the elements.

// Task 2: Create an array of words. Write a function that takes the first word and the rest of the words using the rest operator and returns a string by concatenating the rest of the words.

// Sample data for Exercise 2
const numbers = [1, 2, 3, 4, 5];

const words = ["Hello", "World", "of", "JavaScript"];

// Exercise 3: Spread Operator

// Task 1: Create two arrays, 'fruits1' and 'fruits2'. Use the spread operator to combine these arrays into a single array called 'allFruits'.

// Task 2: Create an object ('person1') with properties like 'name', 'age', and 'gender'. Clone this object into another object 'person2' using the spread operator, and change the 'name' property in 'person2'.

// Sample data for Exercise 3
const fruits1 = ["apple", "banana", "cherry"];
const fruits2 = ["orange", "grape", "kiwi"];

const person1 = {
  name: "Alice",
  age: 25,
  gender: "Female",
};

// You can now write the code for each exercise based on the provided comments and tasks.
