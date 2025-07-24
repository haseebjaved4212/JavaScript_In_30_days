# Day 03: JavaScript Loops - Repetition and Iteration

Welcome to Day 03 of my 30 Days of JavaScript Challenge! Today, we're diving into one of the most fundamental concepts in programming: Loops. Loops allow us to execute a block of code repeatedly, which is crucial for tasks like iterating over collections of data, performing calculations multiple times, or generating patterns.

## 📚 Core Concepts Covered:

### 1. for Loop

The for loop is the most commonly used loop when you know exactly how many times you want the loop to run. It's perfect for iterating over arrays by index or performing a fixed number of repetitions.

#### Syntax:

```js
for (initialization; condition; increment / decrement) {
  // code to be executed repeatedly
}
```

**initialization:**

Executed once before the loop starts. Typically used to declare and initialize a loop counter variable (e.g., let i = 0;).

**condition:**

Evaluated before each iteration. If true, the loop continues; if false, the loop terminates.

**increment/decrement:**

Executed after each iteration. Typically used to update the loop counter (e.g., i++, i--, i += 2).

**When to use:**

- Iterating a specific number of times.

- Looping through arrays (using numerical index).

- Counting up or down.

**Example:**

```js
// Count from 1 to 5
for (let i = 1; i <= 5; i++) {
  console.log(`Count: ${i}`);
}
// Output: 1, 2, 3, 4, 5

// Iterate over an array by index
const colors = ["red", "green", "blue"];
for (let i = 0; i < colors.length; i++) {
  console.log(`Color at index ${i}: ${colors[i]}`);
}
// Output:
// Color at index 0: red
// Color at index 1: green
// Color at index 2: blue
```

### 2. while Loop

The while loop executes a block of code as long as a specified condition evaluates to true. It's ideal when the number of iterations is unknown beforehand, and the loop needs to continue until a certain condition is met.

**Syntax:**

```js
while (condition) {
  // code to be executed repeatedly
  // make sure to update the condition variable inside the loop
}
```

**Important:** You must ensure that the condition eventually becomes false inside the loop; otherwise, you'll create an infinite loop, which will crash your program.

**When to use:**

When the number of iterations is not predetermined (e.g., waiting for user input, processing data until a specific state is reached).

Simulating processes that continue until a resource is depleted (like energy, health points).

**Example:**

```js
// Count from 0 to 3
let j = 0;
while (j < 4) {
  console.log(`Current value of j: ${j}`);
  j++; // Increment to avoid infinite loop
}
// Output: 0, 1, 2, 3

// Simulate energy depletion
let energy = 10;
while (energy > 0) {
  console.log(`Energy remaining: ${energy}`);
  energy -= 3;
}
// Output:
// Energy remaining: 10
// Energy remaining: 7
// Energy remaining: 4
// Energy remaining: 1
```

### 3. do...while Loop

The do...while loop is similar to the while loop, but it guarantees that the loop body executes at least once before the condition is evaluated. If the condition is true after the first execution, the loop continues.

**Syntax:**

```js
do {
  // code to be executed at least once
  // make sure to update the condition variable inside the loop
} while (condition);
```

**When to use:**

When you need to perform an action at least once, regardless of the initial condition (e.g., prompting user input until valid input is received, or a game loop that runs at least once before checking for game over).

**Example:**

```js
// This loop runs once even if k is not < 0
let k = 5;
do {
  console.log(`Current value of k: ${k}`);
  k++;
} while (k < 0);
// Output: Current value of k: 5 (runs once, then condition is false)
```

### 4. for...in Loop

The for...in loop iterates over the enumerable properties (keys) of an object. It returns the property names as strings.

**Syntax:**

```js
for (variable in object) {
  // code to be executed for each property
}
```

**Key Points:**

- Primarily for iterating over object properties.

- It will iterate over inherited enumerable properties as well, which might not always be desired. You often need to use hasOwnProperty() to check if the property belongs directly to the object.

- Not recommended for iterating over arrays because it iterates over property names (indices as strings) and not values, and the order of iteration is not guaranteed for numerical indices (though modern JS engines usually maintain order for arrays). Use for or for...of for arrays.

**Example:**

```js
const person = {
  name: "Alice",
  age: 30,
  city: "New York",
};

for (let key in person) {
  // Using hasOwnProperty to ensure we only get own properties
  if (person.hasOwnProperty(key)) {
    console.log(`${key}: ${person[key]}`);
  }
}
// Output:
// name: Alice
// age: 30
// city: New York
```

### 5. for...of Loop

The for...of loop iterates over the values of iterable objects. This includes built-in iterables like Array, String, Map, Set, NodeList, etc.

**Syntax:**

```js
for (variable of iterable) {
  // code to be executed for each value
}
```

**Key Points:**

- Introduced in ES6 (ECMAScript 2015).

- Provides a simpler and more direct way to iterate over values.

- Recommended for iterating over arrays and other iterable collections.

- Does not iterate over object properties directly (for that, use for...in or Object.keys(), Object.values(), Object.entries()).

**Example:**

```js
const colors = ["red", "green", "blue"];

for (let color of colors) {
  console.log(color);
}
// Output:
// red
// green
// blue

const greeting = "Hello";
for (let char of greeting) {
  console.log(char);
}
// Output:
// H
// e
// l
// l
// o
```

### 6. Loop Control Statements

These statements allow you to control the flow of execution within loops:

- break: Immediately terminates the innermost loop and transfers control to the statement immediately following the loop.

- continue: Skips the rest of the current iteration of the loop and proceeds to the next iteration.

**Example (break):**

```js
for (let i = 1; i <= 10; i++) {
  if (i === 5) {
    console.log("Breaking loop at 5");
    break; // Loop stops when i is 5
  }
  console.log(i);
}
// Output:
// 1
// 2
// 3
// 4
// Breaking loop at 5
```

**Example (continue):**

```js
for (let i = 1; i <= 5; i++) {
  if (i === 3) {
    console.log("Skipping 3");
    continue; // Skips the rest of this iteration for i=3
  }
  console.log(i);
}
// Output:
// 1
// 2
// Skipping 3
// 4
// 5
```

## 🚀 Project for Day 03: Loop Visualizer & Pattern Generator

Today's project is an interactive web application that allows you to experiment with loops and see their output directly on the screen. You can:

- Visualize for and while loops by setting start, end, and step values.

- Generate simple patterns using nested loops.

- This project's code is located in index.html and index.js within this Day03 folder.

**Features:**

- Input fields for loop parameters.

- Buttons to trigger loop execution.

- Dynamic display of loop iterations.

- Pattern generation (e.g., star patterns).

## ✅🎯 Practice Set for Day 03.

<details><summary>
1. Sum of Even Numbers (For Loop):
</summary><code>
let sumOfEvens = 0;
for (let i = 2; i <= 100; i += 2) { // Start at 2, increment by 2
    sumOfEvens += i;
}
console.log("Sum of even numbers from 1 to 100:", sumOfEvens); // Output: 2550
</code></details>
<details><summary>
2. Countdown with while:
</summary><code>
let countdown = 10;
while (countdown >= 1) {
    console.log(countdown);
    countdown--;
}
console.log("Lift off!");
// Output: 10, 9, ..., 1, Lift off!
</code></details >
<details><summary>
3. Factorial Calculator (Do...While Loop):
</summary><code>
let numberForFactorial = 7; // Change this number to test
let factorialResult = 1;
let tempNum = numberForFactorial;

// Handle 0! = 1 and negative numbers (optional, but good practice)
if (numberForFactorial < 0) {
console.log("Factorial is not defined for negative numbers.");
} else if (numberForFactorial === 0) {
factorialResult = 1; // 0! is 1
} else {
do {
factorialResult \*= tempNum;
tempNum--;
} while (tempNum > 0);
}
console.log(`Factorial of ${numberForFactorial}: ${factorialResult}`); // Output: Factorial of 7: 5040
</code></details>
<details><summary>
4. Iterate Object Properties (for...in):
</summary><code>
const car = { make: "Toyota", model: "Camry", year: 2020 };
console.log("Car Properties:");
for (let key in car) {
if (car.hasOwnProperty(key)) { // Good practice to check for own properties
console.log(`${key}: ${car[key]}`);
}
}
// Output:
// Car Properties:
// make: Toyota
// model: Camry
// year: 2020
</code></details >
<details><summary>
5. Iterate Array Elements (for...of):
</summary><code>
const movies = ["Inception", "Interstellar", "Parasite", "Arrival"];
console.log("My Favorite Movies:");
for (let movie of movies) {
console.log(movie);
}
// Output:
// My Favorite Movies:
// Inception
// Interstellar
// Parasite
// Arrival
</code></details>
<details><summary>
6. Find Longest String (for...of):
</summary><code>
const words = ["apple", "banana", "kiwi", "strawberry", "grape"];
let longestString = "";

for (let word of words) {
if (word.length > longestString.length) {
longestString = word;
}
}
console.log("The longest string is:", longestString); // Output: The longest string is: strawberry
</code></details>
<details><summary>
7. Reverse a String (for loop):
</summary><code>
let originalString = "hello";
let reversedString = "";

for (let i = originalString.length - 1; i >= 0; i--) {
reversedString += originalString[i];
}
console.log("Original string:", originalString); // Output: Original string: hello
console.log("Reversed string:", reversedString); // Output: Reversed string: olleh
</code></details>

### 💡 Key Takeaways for Day 03:

- Loops are fundamental for automating repetitive tasks.

- Choose the right loop (for, while, do...while, for...in, for...of) based on your specific iteration needs (fixed count, condition-based, object properties, iterable values).

- Always ensure your loop conditions will eventually become false to avoid infinite loops.

- break and continue provide fine-grained control over loop execution.

- for...in is for object properties (keys), for...of is for iterable values. Use them appropriately!
