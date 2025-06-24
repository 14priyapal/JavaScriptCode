/* Loops in JS help you repeate a block of code multiple times - perfect for tasks like iterationg through arrays, numbers, or repeating logic.
Types of loop in JS

Basic Loops 
(1. for loop -> counting/repeating(known limit)
2. while loop -> repeat until condition fails
3. do...while loop -> run at least once)

// These loops require understanding of arrays, strings, or objects:
4. for...of loop -> looping through arrays/strings
5. for...in loop -> looping through object keys
6. forEach -> a  higher order array method that executes a provided function once of each array element
*/




// 🔁 Basic Loops

// 1. for loop → Counting/repeating (when the limit is known)
for (let i = 0; i < 5; i++) {
  console.log(i);
}

// 2. while loop → Repeats until the condition becomes false
let j = 0;
while (j < 5) {
  console.log(j);
  j++;
}

// 3. do...while loop → Runs at least once, then checks the condition
let k = 0;
do {
  console.log(k);
  k++;
} while (k < 5);


// 🔍 These loops require understanding of arrays, strings, or objects:

// 4. for...of loop → Loops through values of arrays or strings
let fruits = ["apple", "banana", "mango"];
for (let fruit of fruits) {
  console.log(fruit);
}

// 5. for...in loop → Loops through keys in an object
let person = { name: "Priya", age: 23 };
for (let key in person) {
  console.log(key, ":", person[key]);
}

// 6. forEach → A higher-order array method that executes a function once for each array element
fruits.forEach(function(fruit) {
  console.log(fruit);
});
