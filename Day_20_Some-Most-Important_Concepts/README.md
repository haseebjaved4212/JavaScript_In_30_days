#  Day 20 - JavaScript Closures, Event Loop & TDZ 




Hello! Day 20 is a fantastic day for covering some of JavaScript's most fundamental and powerful concepts. Let's dive into closures, the event loop, and the temporal dead zone, and then build a digital stopwatch to see them in action.

**Closures**

A closure is a function that remembers the environment (or scope) in which it was created. It has access to the variables of its outer function even after that outer function has finished executing. 

Think of it like a backpack a function takes with it. It can go anywhere, but it always has access to the items (variables) it packed when it was first created. This allows you to create private data and functions, as the variables aren't accessible from the outside.

```js

function createCounter() {
  let count = 0; // 'count' is a private variable

  return function() {
    count++; // This inner function "remembers" and can modify 'count'
    console.log(count);
  };
}

const counter = createCounter();
counter(); // 1
counter(); // 2
```

Here, createCounter runs and returns a new function. Even though createCounter is done, the counter function still has access to count. This is a closure in action.

 **The Event Loop**

The Event Loop is the mechanism that allows JavaScript to handle asynchronous operations without blocking the main execution thread.

 🔄 *JavaScript* is single-threaded, so it can only do one thing at a time. The `Event Loop` ensures that long-running tasks, like network requests or timers, don't freeze the entire application.

**The key components are:**

- Call Stack: Where synchronous code (like function calls) is executed.

- Web APIs: Provided by the browser, they handle asynchronous tasks (e.g., setTimeout, fetch, DOM events).

- Callback Queue: Holds functions that are ready to be executed after a Web API task is complete.

- The Event Loop's job is to constantly check if the Call Stack is empty. If it is, it takes the first function from the Callback Queue and pushes it onto the Call Stack for execution.

```js
console.log("Start");

setTimeout(() => {
  console.log("Inside setTimeout");
}, 0); // This is moved to the Web APIs and then the Callback Queue

console.log("End");

// Output:
// Start
// End
// Inside setTimeout
```

Even with a 0-second delay, "Inside setTimeout" is logged last because the main synchronous code (Start and End) on the Call Stack must finish before the Event Loop can push the setTimeout callback onto it.

**The Temporal Dead Zone (TDZ)**

- The Temporal Dead Zone (TDZ) is the period of time during which let and const variables exist but cannot be accessed. 🚫 It begins at the start of the block scope and ends when the variable is declared. Accessing a variable in the TDZ results in a ReferenceError.

- The TDZ is a safety feature that prevents using a variable before it has been initialized. Variables declared with var are "hoisted" and initialized with undefined, so they don't have a TDZ.

```js

console.log(myVar); // Output: undefined (var is hoisted)

// console.log(myLet); // ERROR: ReferenceError (TDZ for 'myLet')

var myVar = "I'm a var";
let myLet = "I'm a let";
```

## Day 20 Project: Digital Stopwatch with Lap Feature

This project uses all three concepts. The start and pause buttons use `let` and` const` for their variables, the `setInterval` function relies on the `Event Loop `to tick every second, and the `startStopwatch` function creates a `closure` to manage the state of the timer.

**Core JavaScript Concepts**

- **Introduction**

Welcome to Day 20! This project is a digital stopwatch designed to help you understand three critical JavaScript concepts: closures, the event loop, and the temporal dead zone (TDZ). The application is built with a clear separation of concerns: HTML for structure, CSS for styling (via Tailwind CSS), and a dedicated JavaScript file for all the logic.

**Features**

- Start: Begins the stopwatch.

- Pause: Stops the stopwatch at the current time.

- Lap: Records and displays the current stopwatch time as a new lap.

- Reset: Clears all data, including the time and all recorded laps, and stops the timer.

**Key JavaScript Concepts in Action**

**1. Closures**

The `startStopwatch()` function creates a closure. The `setInterval()` callback function "remembers" the environment in which it was created, specifically the` totalTime` and `lapCounter` variables from its outer scope. This allows the callback to continuously update the stopwatch's state even after `startStopwatch()` has finished executing.

**2. The Event Loop**

The event loop is what makes the stopwatch tick. The `setInterval() `function is a Web API that handles the asynchronous timing. It places a callback function into a queue every second. The event loop then takes this function from the queue and pushes it onto the call stack for execution, but only when the stack is empty. This prevents the timer from freezing the entire application.

**3. Temporal Dead Zone (TDZ)**

We use `let` and` const` to declare variables. The TDZ is the period of time from the start of a variable's scope until its declaration is processed. Trying to access a let or const variable before this point would cause a ReferenceError. By declaring our DOM elements and state variables at the beginning of our index.js file, we avoid this error and follow best practices.


Hello there! Here are some key takeaways for Day 20, focusing on the concepts from the stopwatch project.

### 🎯 Core Concepts Revisited

* **Closures**: A **closure** is when a function remembers and can access variables from its outer scope, even after the outer function has finished executing. In our stopwatch, the `setInterval` callback function is a closure because it continues to access and update the `totalTime` and `lapCounter` variables long after the `startStopwatch` function has run. 

* **The Event Loop**: The **Event Loop** is what allows JavaScript to handle asynchronous tasks like our `setInterval` without blocking the main program. It constantly checks if the main Call Stack is empty. If it is, it moves a task (like our timer's update function) from the Callback Queue to the Call Stack for execution.

* **Temporal Dead Zone (TDZ)**: The **TDZ** is the period between when a `let` or `const` variable is declared and when it is initialized. Trying to access it during this time will cause a `ReferenceError`. It's a good practice to declare your variables at the top of their scope to avoid this.

***

###  Project Best Practices

* **Separation of Concerns**: We used three distinct files (`index.html`, `style.css`, `index.js` or in our case, we used Tailwind which is a CSS framework) for the project. This makes the code easier to read, debug, and maintain.

* **Organized Code**: Declaring all DOM elements and state variables at the beginning of the JavaScript file makes the code more readable and helps avoid errors related to the TDZ.

* **Preventing Multiple Timers**: By using a conditional check like `if (!timer)`, we prevent the user from accidentally starting multiple timers, which would lead to incorrect time tracking.

