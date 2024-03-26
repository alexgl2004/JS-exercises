// Exercise 1: Find the Smallest Number
// Write a function findSmallestNumber that takes an array of numbers and returns the smallest number in the array.
console.log("\n-------------------Exercise 1-------------------");
function smallestNumber(numbers){
    return numbers.sort((a,b)=>a-b).shift()
}

console.log(smallestNumber([2,3,4,5,8,6,2,1,9,7]))

// Exercise 2: Reverse a String
// Write a function reverseString that takes a string as input and returns the string reversed.
console.log("\n-------------------Exercise 2-------------------");
function ReverseAString(inString){
    return [...inString].reverse().join('');
}

console.log(ReverseAString('inString'))

// Exercise 3: FizzBuzz
// Write a function fizzBuzz that prints numbers from 1 to 100.
// For multiples of 3, print "Fizz" instead of the number.
// For multiples of 5, print "Buzz."
// For numbers that are multiples of both 3 and 5, print "FizzBuzz."
console.log("\n-------------------Exercise 3-------------------");
function fizzBuzz(){

    console.log("\nOne--------------------------\n");
    for(let i=1; i<=100; i++){

        if(i%3==0 && i%5==0) console.log('FizzBuzz')
        else if(i%3==0) console.log('Fizz')
        else if(i%5==0) console.log('Buzz')
        else console.log(i)

    }
    console.log("\nTwo--------------------------\n");
    let i=1;
    while(i<=100){
        switch (true) {
            case (i%3==0 && i%5==0):
                console.log('FizzBuzz');
            break;
            case (i%3==0):
                console.log('Fizz');
            break;
            case (i%5==0):
                console.log('Buzz');
            break;
            default:
                console.log(i);
            break;
        }
        i++;
    }
    console.log("\nThree--------------------------\n");
    [...Array(100).keys()].map((i) => {
            i += 1;
            console.log(
                (i%3==0 && i%5==0?
                    'FizzBuzz':
                    (i%3==0?
                        'Fizz':
                        (i%5==0?
                            'Buzz':
                            i
                        )
                    )
                )
            )
        }
    )


}

fizzBuzz()

// Exercise 4: Check for Palindrome
// Write a function isPalindrome that takes a string as input and returns true if the string is a palindrome (reads the same backward as forward), and false otherwise.
console.log("\n-------------------Exercise 4-------------------");

function isPalindrome(inString){
    return [...inString].reverse().join('')==inString;
}
console.log('function_ :' + isPalindrome('function'))
console.log('functionnoitcnuf :' + isPalindrome('functionnoitcnuf'))

// Exercise 5: Calculate Factorial
// Write a function calculateFactorial that calculates the factorial of a given number.
console.log("\n-------------------Exercise 5-------------------");

function calculateFactorial(number){
    return (number<0?'Not correct a number':[...Array(number).keys()].reduce((accumulator, currentValue) => {
        return accumulator * (currentValue+1)
    },1))
}
console.log(calculateFactorial(10))

// Exercise 6: Remove Duplicates from Array
// Write a function removeDuplicates that takes an array and returns a new array with duplicate values removed.
console.log("\n-------------------Exercise 6-------------------");

function removeDuplicates1(arrayIn){

    console.log("\nOne--------------------------\n");
    return arrayIn.filter((elem,index) => {
        return arrayIn.indexOf(elem)===index
    });
}
console.log(removeDuplicates1([2,2,2,4,5,6,2,5,7,5,3]))

function removeDuplicates2(arrayIn){

    console.log("\nTwo--------------------------\n");
    let newArray = []
    arrayIn.forEach(element => {
        if(!newArray.includes(element)){
            newArray.push(element)
        }
    });

    return newArray;

}
console.log(removeDuplicates2([2,2,2,4,5,6,2,5,7,5,3]))

function removeDuplicates3(arrayIn){

    console.log("\nThree--------------------------\n");
    return arrayIn.reduce((accumulator, currentValue) => {
        if (!accumulator.includes(currentValue)) accumulator.push(currentValue)
        return accumulator
    },[]);
    
}
console.log(removeDuplicates3([2,2,2,4,5,6,2,5,7,5,3]))

// Exercise 7: Validate Email Address
// Write a function validateEmail that checks if a given string is a valid email address.
console.log("\n-------------------Exercise 7-------------------");

function validateEmail(email){
    return /^([a-zA-Z0-9._-]+)@([a-zA-Z0-9_-]+)\.([a-zA-Z0-9-]+)*$/.test(email)
}

console.log(validateEmail('alexgl2004@gmail.com'));

// Exercise 8: Find Missing Number
// Write a function findMissingNumber that takes an array of consecutive numbers with one number missing and returns the missing number.
console.log("\n-------------------Exercise 8-------------------");

function findMissingNumbers1(arrayIn){
    console.log("\nOne--------------------------\n");    
    let outArray=[];
    arrayIn.forEach((elem,index)=>{
        if(index>0 && arrayIn[index-1]+1!=arrayIn[index]){
            outArray.push(arrayIn[index]-1)
        }
    })

    return outArray;
}
console.log(findMissingNumbers1([8,9,10,12,13,14,15,16,17,18,20]))

function findMissingNumbers1(arrayIn){
    console.log("\nTwo--------------------------\n");    
    return [...Array((arrayIn[arrayIn.length-1]-arrayIn[0]+1)).keys()].filter((elem)=>{
        return arrayIn.includes(arrayIn[0] + elem)?false:true
    }).map((elem)=>{
        return arrayIn[0] + elem
    })
}
console.log(findMissingNumbers1([8,9,10,12,13,14,15,16,17,18,20]))

function findMissingNumbers2(arrayIn){    
    console.log("\nThree--------------------------\n");
    return [...Array((arrayIn[arrayIn.length-1]-arrayIn[0]+1)).keys()].reduce((accumulator, currentValue) => {
        if (!arrayIn.includes(arrayIn[0] + currentValue)) accumulator.push(arrayIn[0] + currentValue)
        return accumulator
    },[]);
}
console.log(findMissingNumbers2([8,9,10,12,13,14,15,16,17,18,20]))

// Exercise 9: Capitalize Words
// Write a function capitalizeWords that takes a sentence as input and returns the same sentence with the first letter of each word capitalized.
console.log("\n-------------------Exercise 9-------------------");

function capitalizeWords1(sentense){
    console.log("\nOne--------------------------\n");
    return sentense.replace(/(^\S|\s\S)/g,function(fl){ return fl.toUpperCase()})
}
console.log(capitalizeWords1('Write a function capitalizeWords that takes a sentence as input and returns the same sentence with the first letter of each word capitalized'))

function capitalizeWords2(sentense){
    console.log("\nTwo--------------------------\n");
    return sentense.replace(/(^\S|\s\S)/g, m => m.toUpperCase())
}
console.log(capitalizeWords2('Write a function capitalizeWords that takes a sentence as input and returns the same sentence with the first letter of each word capitalized'))

// Exercise 10: Count Vowels
// Write a function countVowels that counts the number of vowels in a given string.
console.log("\n-------------------Exercise 10-------------------");

function countVowels1(sentense){
    console.log("\nOne--------------------------\n");
    let countOfVowels = 0
    sentense = sentense.replace(/[aeiouy]/g, function(g0){ countOfVowels +=1; return countOfVowels})
    return countOfVowels
}
console.log(countVowels1('Write a function capitalizeWords that takes a sentence as input and returns the same sentence with the first letter of each word capitalized'))

function countVowels2(sentense){
    console.log("\nTwo--------------------------\n");
    return sentense.match(/[aeiouy]/g).length
}
console.log(countVowels2('Write a function capitalizeWords that takes a sentence as input and returns the same sentence with the first letter of each word capitalized'))