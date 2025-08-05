# Day 15: Scopes - Global, Function & Block

Welcome to Day 15 of our 30 Days of JavaScript Challenge! Today, we're focusing on scope, a fundamental concept that governs the accessibility of variables, functions, and objects in your code. Mastering scope is key to avoiding bugs and writing clean, maintainable JavaScript.

Our project, the "Variable Scope Explorer," will give you a hands-on way to see how different types of scope behave in practice.

## 📚 Core Concepts Covered:
**1. What is Scope?**

Scope determines where in your program you can access a variable. In simple terms, it defines the "lifetime" and "visibility" of a variable. JavaScript has three main types of scope: Global, Function, and Block.

**2. Global Scope**

A variable declared in the global scope (outside of any function or block) is accessible from anywhere in your code, including inside functions and blocks.

- **Declaring a global variable:**

```js
const message = 'Hello from the global scope!';

function sayHi() {
  // You can access 'message' here
  console.log(message);
}
sayHi();
```


**Warning:** It's generally best to avoid creating too many global variables, as they can lead to naming conflicts and make your code harder to manage.

**3. Function Scope (Local Scope)**

A variable declared inside a function is only accessible within that function. It is a local variable. You cannot access it from outside the function.

- **Declaring a function-scoped variable:**
```js
function logMessage() {
  const greeting = 'Welcome!'; // This is local to logMessage()
  console.log(greeting);
}

logMessage(); // Output: Welcome!

// The next line will cause an error because 'greeting' is not accessible here
// console.log(greeting); // ReferenceError: greeting is not defined

```

**4. Block Scope**

Block scope is introduced with let and const. A variable declared with let or const inside a code block (defined by curly braces {}) is only accessible within that block. This includes if statements, for loops, and other code blocks.

- **Declaring a block-scoped variable:**

```js
let x = 10;
if (x > 5) {
  const y = 20; // 'y' is block-scoped
  console.log(x); // Output: 10 (x is in a wider scope)
  console.log(y); // Output: 20 (y is accessible here)
}

// The next line will cause an error
// console.log(y); // ReferenceError: y is not defined

```
**5. var vs. let and const**

This is a critical distinction related to scope:

- **var:**

 Is function-scoped. Variables declared with var inside a block will "leak" and be accessible outside that block (but still confined to the function they are in).

- **let and const:**

 Are block-scoped. This is the modern and preferred way to declare variables, as it helps prevent accidental variable overwrites and makes your code more predictable.

## 🚀 Project for Day 6: Variable Scope Explorer


Today's project is a simple web page with buttons that demonstrate each type of scope. The results will be logged to both the browser console and the page itself, making it easy to see what variables are accessible and what is not.

**Features:**
- A button to demonstrate Global Scope.

- A button to demonstrate Function Scope.

- A button to demonstrate Block Scope using an if statement.

- A results panel to display the output from the JavaScript functions.



**💻 Project Logic Breakdown (index.js)**


The index.js file contains the core logic for today's project.

**1. Global Variables:**

`const globalVar = 'I am a global variable.';` is declared outside of any function, making it accessible everywhere.

**2. demonstrateGlobalScope() Function:**

This function shows how a global variable can be accessed both inside and outside a function. The variable is available without being passed as an argument.


**3. `demonstrateFunctionScope()` Function:**

This function declares a variable functionVar inside it. When you try to access this variable from outside the function, JavaScript throws a ReferenceError, proving its local scope.

**4. `demonstrateBlockScope()` Function:**

This function uses an if block. A variable declared with let (blockVar) inside the block is not accessible outside of it, clearly demonstrating block scope. The code is wrapped in a try...catch block to handle the expected ReferenceError gracefully and log it to the console without crashing the application.



## ✅ Practice Set Solutions:

<details><summary>
1. Nested Scopes:
</summary>

```js
function outerFunction() {
    const x = 'I am from outerFunction';
    function innerFunction() {
        // Yes, this works! innerFunction has access to variables in its parent's scope.
        console.log(x);
    }
    innerFunction();
}
outerFunction(); // Output: I am from outerFunction
```
</details>
<details><summary>
2. var vs let in a Loop:
</summary>

```js
// Using var (function-scoped or global)
for (var i = 0; i < 3; i++) {
    console.log(`Inside the loop (var): ${i}`);
}
console.log(`Outside the loop (var): ${i}`); // Output: 3 (var leaks out of the block)

// Using let (block-scoped)
for (let j = 0; j < 3; j++) {
    console.log(`Inside the loop (let): ${j}`);
}
// This next line will cause a ReferenceError because 'j' is block-scoped
// console.log(`Outside the loop (let): ${j}`); // ReferenceError: j is not defined
```
</details>
<details><summary>
3. Variable Shadowing:
</summary>

```js
const name = 'Global Name';

function displayNames() {
    const name = 'Local Name'; // This local 'name' shadows the global one
    console.log(`Inside function: ${name}`);
}

displayNames(); // Output: Inside function: Local Name
console.log(`Outside function: ${name}`); // Output: Outside function: Global Name
```
</details>

--- 

## 💡 Key Takeaways for Day 15:

- Scope defines accessibility. It's the set of rules that determines where a variable can be used.

- Global scope variables are accessible everywhere. Use them sparingly to avoid conflicts.

- Function scope variables are only accessible within the function they are declared in.

- Block scope is created by curly braces {} and applies to variables declared with let and const. This is the modern standard for controlling variable visibility.

- `var` is function-scoped, which can lead to unexpected behavior (like a loop counter "leaking" outside the loop). Always prefer let and const for new code.

- Nested scopes can access variables from their parent scopes, but parent scopes cannot access variables from their nested child scopes.