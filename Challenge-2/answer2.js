console.log("\n-------------------Exercise 1: Object Destructuring-------------------");

// Task 1: Create an array of numbers and use the forEach method to log each number to the console.
const numberArray = [1, 2, 3, 4, 5];
console.log("\n-------------------Task 1-------------------\n");
numberArray.forEach((elem)=>{
    console.log(elem); // Task 1
}); // Task 1

// Task 2: Create an array of strings and use the map method to create a new array with the lengths of the strings.
const stringArray = ["apple", "banana", "cherry", "date"];
console.log("\n-------------------Task 2-------------------\n");
const stringArrayNew = stringArray.map((elemm)=>{
    return elemm.length;
}); // Task 2

console.log(stringArray); // Task 2
console.log(stringArrayNew); // Task 2

// Task 3: Create an array of objects with 'name' and 'age' properties. Use the filter method to create a new array containing only people with an age greater than 30.
const peopleArray = [
    { name: "Alice", age: 25 },
    { name: "Bob", age: 35 },
    { name: "Charlie", age: 45 },
];
console.log("\n-------------------Task 3-------------------\n");
const peopleArrayNew = peopleArray.filter((elem)=>{
    return elem.age>30
}); // Task 3

console.log(peopleArray); // Task 3
console.log(peopleArrayNew); // Task 3

// Task 4: Create an array of numbers and use the reduce method to find the sum of all the numbers in the array.
console.log("\n-------------------Task 4-------------------\n");
const sumArray = numberArray.reduce((accumulator, currentValue) => {
    return accumulator + currentValue
},0); // Task 4

console.log(numberArray); // Task 4
console.log(sumArray); // Task 4

// Task 5: Create an array of strings and use the join method to concatenate them into a single string separated by a comma.
console.log("\n-------------------Task 5-------------------\n");
const stringArrayNew2 = stringArray.join(', '); // Task 5

console.log(stringArray); // Task 5
console.log(stringArrayNew2); // Task 5 