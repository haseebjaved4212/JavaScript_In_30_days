# Day 30: Final Day of The Series 


What a fantastic journey! Congratulations on reaching the final day of our JS series. It's been great exploring foundational concepts like Object-Oriented Programming and building practical applications.
## JavaScript Cheat Sheet

**_1. Variables and Data Types_**

- **var:**
  Old way to declare variables. Function-scoped.

- **let:**
  Block-scoped variable. Can be reassigned.

- **const:**
  Block-scoped constant. Cannot be reassigned.

**Primitive Data Types:**

- **string:** Text, e.g., "Hello".

- **number:** Integers and floats, e.g., 10, 3.14.

- **boolean:** true or false.

- **null:** Intentional absence of any value.

- **undefined:** A variable that has been declared but not assigned a value.

- **symbol:** Unique and immutable primitive value.

- **bigint:** For very large integer values.

**Complex Data Types:**

- object: Key-value pairs, e.g., { name: "Alice", age: 30 }.

- array: A list of values, e.g., [1, 2, 3].

**_2. Operators_**

- **Arithmetic:**

```
 +, -, *, /, % (modulus), ** (exponentiation).
```

- **Assignment:**

```
+=, -=, *=, /=.
```

- **Comparison:**

```
== (loose equality), === (strict equality), !=, !==, >, <, >=, <=.
```

- **Logical:**

```
 && (AND), || (OR), ! (NOT).
```

- **Ternary:**

```
condition ? valueIfTrue : valueIfFalse;.
```

---

**_3. Functions_**

- **Function Declaration:**

```js
function greet(name) {
  return `Hello, ${name}!`;
}
```

- **Function Expression:**

```js
const greet = function (name) {
  return `Hello, ${name}!`;
};
```

- **Arrow Function (ES6):**

```js
const greet = (name) => {
  return `Hello, ${name}!`;
};
// Concise syntax for a single return statement
const greet = (name) => `Hello, ${name}!`;
```

**_4. Control Flow_**

- **If/Else:**

```js
if (score > 100) {
  // do something
} else if (score > 50) {
  // do something else
} else {
  // default case
}
```

- **Switch Statement:**

```js
switch (day) {
  case "Monday":
    console.log("Start of the week");
    break;
  default:
    console.log("Some other day");
}
```

- **Loops:**

```js
// for loop
for (let i = 0; i < 5; i++) {
  console.log(i);
}
// while loop
let i = 0;
while (i < 5) {
  console.log(i);
  i++;
}
// forEach (for arrays)
const numbers = [1, 2, 3];
numbers.forEach((num) => console.log(num));
```

**_5. Array Methods_**

`.push()`: Adds an element to the end of an array.

`.pop()`: Removes the last element.

`.shift()`: Removes the first element.

`.unshift()`: Adds an element to the beginning.

`.map()`: Creates a new array by applying a function to each element.

`.filter()`: Creates a new array with elements that pass a test.

`.reduce()`: Reduces an array to a single value.

**_6. Object-Oriented Programming (OOP)_**

- **Classes (ES6):**

```js
class Car {
  constructor(make, model) {
    this.make = make;
    this.model = model;
  }
  drive() {
    console.log(`Driving the ${this.make} ${this.model}.`);
  }
}
const myCar = new Car("Toyota", "Camry");
myCar.drive(); // Output: Driving the Toyota Camry.
```

- **Inheritance:**

```js
class ElectricCar extends Car {
  constructor(make, model, battery) {
    super(make, model); // Call the parent constructor
    this.battery = battery;
  }
}
```

**_7. Asynchronous JavaScript_**

- **Promises:**

Represents the eventual completion (or failure) of an asynchronous operation.

```js
const myPromise = new Promise((resolve, reject) => {
  // ... async operation
  if (success) {
    resolve("Operation successful!");
  } else {
    reject("Operation failed.");
  }
});
myPromise
  .then((result) => console.log(result))
  .catch((error) => console.error(error));
```

- **async/await:**

Modern syntax for handling promises, making async code look synchronous.

```js
async function fetchData() {
  try {
    const response = await fetch("https://api.example.com/data");
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}
```

**_8. The Document Object Model (DOM)_**

- **Selecting Elements:**

```js
const elementById = document.getElementById("my-id");
const elementsByClass = document.getElementsByClassName("my-class");
const firstElement = document.querySelector(".my-class");
const allElements = document.querySelectorAll(".my-class");
```

- **Manipulating Elements:**

```js
element.textContent = "New Text"; // Change text content
element.innerHTML = "<strong>New HTML</strong>"; // Change inner HTML
element.style.color = "red"; // Change style
element.classList.add("new-class"); // Add a CSS class
```

- **Event Handling:**

```js
button.addEventListener("click", () => {
  console.log("Button clicked!");
});
```
--- 
## Project: Bounsing Ball Game

What a fantastic journey! Congratulations on reaching the final day of our JS series. It's been great exploring foundational concepts like Object-Oriented Programming and building practical applications that interact with powerful tools like the Gemini API.

- To wrap things up, we're going to build a classic and fun project: a web-based game. This project ties together many of the concepts we've covered, including state management, event handling, and real-time animation with the Canvas API.



- This game project brings together many of the topics we've covered, especially Object-Oriented Programming with the Ball and Paddle classes, event handling to capture user input, and the core concept of a game loop using requestAnimationFrame.

- This is a great starting point, but there are so many ways to expand it! You could try:

- Adding a scoring system to track how many times you hit the ball.

- Introducing bricks and making a "Block Breaker" style game.

- Implementing different ball speeds or paddle sizes.
---
The possibilities are endless. I'm excited to see what you build next! Congratulations again on completing this series👍💪.