console.log("\n-------------------Exercise 1: Chaining Array Methods-------------------");

// Task 1: Create an array of numbers and use a chain of array methods to filter out all even numbers, square the remaining numbers, and then find the sum of the squared values.
const numberArray2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log("\n-------------------Task 1-------------------\n");

const numberArray2New = numberArray2.filter((elem,index)=>{
    return index%2==0?true:false;//return odd
}).map((elem)=>{
    console.log({elem: elem, square: (elem * elem)})
    return elem * elem;
}).reduce((accumulator, currentValue) => {
    return accumulator + currentValue
},0); // Task 1

console.log({Summ:numberArray2New}); // Task 1

// Task 2: Create an array of objects with 'name' and 'age' properties. Use a chain of array methods to filter out people younger than 30, then map the remaining objects to an array containing only their names.
const peopleArray3 = [
    { name: "Alice", age: 25 },
    { name: "Bob", age: 35 },
    { name: "Charlie", age: 45 },
    { name: "David", age: 29 },
    { name: "Eva", age: 55 },
];
console.log("\n-------------------Task 2-------------------\n");
const peopleArray3New = peopleArray3.filter((elem)=>{
    return elem.age < 30
}).map((elem)=>{
    console.log(elem)
    return elem.name;
}); // Task 2

console.log(peopleArray3New); // Task 2

// Task 3: Create an array of strings and use a chain of array methods to filter out strings containing the letter 'a', convert the remaining strings to uppercase, and join them into a single string separated by a space.
const stringArray2 = ["apple", "banana", "cherry", "date", "citrus"];
console.log("\n-------------------Task 3-------------------\n");

const stringArray2New = stringArray2.filter((elem)=>{
    return elem.indexOf('a')==-1
}).map((elem)=>{
    console.log(elem)
    return elem.toUpperCase();
}).join(' '); // Task 3

console.log(stringArray2); // Task 3
console.log(stringArray2New); // Task 3

// Task 4: Create an array of numbers and use a chain of array methods to sort them in ascending order and then find the product of the two smallest numbers.
const numberArray3 = [7, 4, 12, 2, 8, 21, 14];
console.log("\n-------------------Task 4-------------------\n");
const productOfthewTwo = numberArray3.sort((a,b)=>{ 
    return a - b
}).filter((elem,index)=>{
    return index<2
}).reduce((accumulator, currentValue) => {
    return accumulator * currentValue
},1); // Task 4

console.log(numberArray3); // Task 4
console.log(productOfthewTwo); // Task 4


// Task 5: Create an array of objects with 'name' and 'score' properties. Use a chain of array methods to find the average score of all people with a score greater than 80.
const scoreArray = [
    { name: "Alex", score: 92 },
    { name: "Beth", score: 78 },
    { name: "Chris", score: 86 },
    { name: "Diana", score: 95 },
];

console.log("\n-------------------Task 5-------------------\n");
console.log(scoreArray); // Task 5
const scoreAverage = scoreArray.filter((elem)=>{ 
    return elem.score > 80
}).reduce((accumulator, currentValue, index , curArr) => {
    console.log(currentValue.score);
    return accumulator + (currentValue.score / curArr.length)
},0); // Task 5

console.log('Average - ', scoreAverage); // Task 5