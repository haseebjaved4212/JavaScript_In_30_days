# 🚀 Day 27 : JavaScript Core Concepts – Detailed Guide with Practice

Welcome to the JavaScript Core Concepts guide!
This guide explains the most important and tricky topics of JavaScript with clear explanations, examples, practice exercises, and mini-project ideas. If you master these, you’ll have a strong foundation for frameworks like React, Node.js, and beyond.

## 📑 Table of Contents

1. Execution Context & Call Stack

2. Hoisting

3. this Keyword

4. Prototypes & Inheritance

5. Asynchronous JavaScript

6. Concurrency Model

7. ES6+ Modules


**1️⃣ Execution Context & Call Stack**

An Execution Context is the environment in which JavaScript code runs.

- Every program starts in the Global Execution Context.

- When a function is called, a new execution context is created and pushed onto the call stack.

📌 Example:

```js
function first() {
  console.log("First function");
  second();
}

function second() {
  console.log("Second function");
}

first();
```

📝 Practice Exercise:

- Write a function `greet()` that calls another function `sayName()`. Log the order in which they execute.

🎯 Mini Project Idea:

👉 Function Tracer – Create a small program that shows in the console which function was called and in what order.

**2️⃣ Hoisting**

Hoisting means moving variable and function declarations to the top of their scope during compilation.

- var → hoisted and initialized with undefined.

- let & const → hoisted but kept in TDZ until initialized.

📌 Example:
```js

console.log(a); // undefined
var a = 10;

console.log(b); // ❌ ReferenceError
let b = 20;
```
📝 Practice Exercise:

- Write a program using var, let, and const before declaration and observe the behavior.

🎯 Mini Project Idea:

👉 Hoisting Visualizer – Build a program that logs how each variable is hoisted and its initial value.


**3️⃣ this Keyword**

The value of this depends on how and where the function is called.

- Global scope → window (browser).

- Normal function → undefined in strict mode, window otherwise.

- Object method → the object itself.

- Arrow function → inherits this from outer scope.

📌 Example:
```js
const obj = {
  name: "Buddy",
  normalFunc: function() {
    console.log(this.name);
  },
  arrowFunc: () => {
    console.log(this.name);
  }
};

obj.normalFunc(); // "Buddy"
obj.arrowFunc();  // undefined
```

📝 Practice Exercise:

- Create an object with a normal function and arrow function. Compare their this values.

🎯 Mini Project Idea:

👉 this Playground – Build a tool that shows how this behaves in different cases.

**4️⃣ Prototypes & Inheritance**

Every object in JS has a hidden [[Prototype]] property. This enables inheritance via the prototype chain.

📌 Example:
```js 
function Person(name) {
  this.name = name;
}

Person.prototype.greet = function() {
  console.log("Hello " + this.name);
};

const user = new Person("Buddy");
user.greet(); // Hello Buddy
```
📝 Practice Exercise:

- Create a Car constructor and add a drive() method to its prototype.

🎯 Mini Project Idea:

👉 Prototype Library – Build a small program with Book and Author objects that share methods via prototype.


**5️⃣ Asynchronous JavaScript**

JavaScript is single-threaded, but async tasks are handled using callbacks, promises, and async/await.

📌 Example with Promise:
```js
function fetchData() {
  return new Promise((resolve) => {
    setTimeout(() => resolve("Data received!"), 2000);
  });
}

fetchData().then(data => console.log(data));
```
📌 Example with async/await:
```js
async function getData() {
  const data = await fetchData();
  console.log(data);
}

getData();
```

📝 Practice Exercise:

- Write a program using setTimeout that logs a message after 2 seconds.

🎯 Mini Project Idea:

👉 Fake API Fetcher – Simulate an API request using setTimeout and show loading + response messages.

**6️⃣ Event Loop & Concurrency Model**

The event loop manages how sync and async code runs.

📌 Example:
```js
console.log("Start");

setTimeout(() => console.log("Async Task"), 0);

console.log("End");


👉 Output:

Start
End
Async Task
```

📝 Practice Exercise:

- Write a program that uses both setTimeout and Promise, then analyze the order of execution.

🎯 Mini Project Idea:

👉 Event Loop Visualizer – Build a console-based program that demonstrates the execution order of synchronous vs asynchronous tasks.

**7️⃣ ES6+ Modules**

Modules let you split and reuse code across files.

📌 Example:
```js
// math.js
export function add(a, b) {
  return a + b;
}

// app.js
import { add } from "./math.js";
console.log(add(5, 3)); // 8
```

📝 Practice Exercise:

- Create a utils.js with a greet(name) function, then import and use it in app.js.

🎯 Mini Project Idea:

👉 Utility Module – Build a module with functions for date formatting and string manipulation.

## 🎯 Final Note

✔ Execution Context & Call Stack → controls code flow

✔ Hoisting & TDZ → variable behavior before initialization

✔ Closures → private state and memory

✔ Scope → variable accessibility rules

✔ this → depends on call site

✔ Prototype → inheritance model in JS

✔ Async JS → handles non-blocking tasks

✔ Event Loop → sync vs async execution

✔ Modules → clean & maintainable code structure


✅ Mastering these concepts will give you a rock-solid JavaScript foundation, making it much easier to dive into frameworks like React, Angular, or backend development with Node.js.