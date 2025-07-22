## Day 1: Introduction to JavaScript, Variables, Data Types, and Console Basics


Welcome to Day 1 of your 30-day JavaScript journey! Today, we'll lay the foundational bricks of your programming knowledge. We'll understand what JavaScript is, how to store information using variables, the different types of data we can work with, and how to see our code's output in the browser console.

### What is JavaScript?
JavaScript (JS) is a versatile, high-level, and interpreted programming language primarily used to make web pages interactive. It allows you to create dynamic content, handle multimedia, animate images, and much more. While it's famous for web development (frontend and backend with Node.js), it's also used in mobile apps, desktop apps, and even game development.

### Key Characteristics:

Client-Side Scripting: Runs directly in the user's web browser, reducing server load.

Interpreted: Code is executed line by line by the browser without a separate compilation step.

Object-Oriented: Supports object-oriented programming paradigms, allowing for organized and reusable code.

Dynamic and Flexible: Allows for a lot of flexibility in how you write code, including dynamic typing.

Variables: Storing Information
Think of variables as named containers that hold data. You give them a name, and then you can put different values into them. In JavaScript, you declare variables using var, let, or const.

#### var (Older way):

 Historically used, but has functional scope and can be re-declared and updated. This can lead to unexpected behavior and bugs in larger applications.

```js

var myName = "Ali";
var myName = "Ahmed"; // Can be re-declared (reassigns the variable)
myName = "Kamran";   // Can be updated
console.log(myName); // Output: Kamran
```
#### let (Modern way - ES6+): 

Block-scoped. This means it's only accessible within the block of code (e.g., inside {}) where it's defined. It can be updated but not re-declared within the same scope. This is generally preferred when your variable's value might change.

```Js

let age = 25;
age = 26; // Can be updated
console.log(age); // Output: 26
// let age = 27; // Error: Cannot re-declare block-scoped variable 'age'

```
#### const (Modern way - ES6+):
 Also block-scoped. It cannot be re-declared or updated once assigned. Use const for values that should remain constant throughout your program. This prevents accidental reassignments and makes your code more predictable.

```js

const PI = 3.14159;
// PI = 3.14; // Error: Assignment to constant variable.
console.log(PI); // Output: 3.14159
```
✅Best Practice: Always prefer const if the value won't change. If you know the value will need to be updated, then use let. Avoid var in new JavaScript code to prevent potential issues related to its scope.

## Data Types: Types of Information
JavaScript supports several data types to categorize the kind of value a variable holds. Understanding these is crucial for performing correct operations. You can use the typeof operator to check the data type of a variable.

### Primitive Data Types (represent a single, immutable value):

#### String:
 Represents textual data. Enclosed in single (' '), double (" "), or backticks (` `). Backticks allow for template literals, which enable embedding expressions (${expression}) and multiline strings.

```js

let greeting = "Hello, World!";
let userName = 'Sara';
let message = `Today is a good day.`; // Using backticks
let fullName = `${userName} Khan`; // Template literal with variable
console.log(typeof greeting); // Output: string
```
#### Number: 
Represents both integer and floating-point numbers. JavaScript handles all numbers as floating-point internally.

```js

let score = 100; // Integer
let price = 19.99; // Floating-point
let temperature = -5;
console.log(typeof score); // Output: number
```
#### Boolean:
 Represents a logical entity and can only have two values: true or false. Used for conditional logic.

```js

let isLoggedIn = true;
let hasPermission = false;
console.log(typeof isLoggedIn); // Output: boolean
```
#### Undefined:
 A variable that has been declared but not yet assigned a value is undefined. It means "no value has been assigned yet."

```js

let phoneNumber; // phoneNumber is undefined
console.log(phoneNumber);      // Output: undefined
console.log(typeof phoneNumber); // Output: undefined
```

####  Null: 
Represents the intentional absence of any object value. It means "no value," explicitly set by the programmer.

```js

let selectedUser = null; // No user selected yet (intentional absence)
console.log(selectedUser);      // Output: null
console.log(typeof selectedUser); // Output: object (This is a historical bug in JS, null is a primitive type)

```
#### Symbol (ES6+):
 A unique and immutable primitive value. Used for unique object property keys to avoid naming collisions. (More advanced, we'll touch on this later if needed).

#### BigInt (ES2020):
 Represents integers with arbitrary precision. Used for numbers larger than Number can safely handle (i.e., beyond 2^53 - 1). (More advanced, not commonly used in basic web dev).

### Non-Primitive Data Type (represent collections of values, and are mutable):

#### Object:
 A complex data type that allows you to store collections of data. Arrays and functions are special types of objects. Objects are fundamental in JavaScript.

```js

let person = { // An object with properties
    firstName: "John",
    lastName: "Doe",
    age: 30
};
let colors = ["red", "green", "blue"]; // An Array (which is a type of object)
console.log(typeof person); // Output: object
console.log(typeof colors); // Output: object
```
The Console: Your Debugging Friend
The browser console is an essential tool for JavaScript developers. It allows you to:

- See the output of your code.

- Check for errors.

- Interact with your code dynamically.

- Debug your programs.

You can open the console in most browsers by pressing F12 (or right-clicking on a page and selecting "Inspect" or "Inspect Element", then navigating to the "Console" tab).

**console.log():** The most commonly used console method. It prints whatever you pass to it onto the console.

```js

console.log("Hello from JavaScript!"); // Prints a string
let myAge = 30;
console.log("My age is:", myAge);    // Prints a string and a variable's value
console.log(10 + 5);                 // Prints the result of an expression
console.log(true);                   // Prints a boolean

```

**Practice Set Day 1:**

Variable & Data Type Exploration
Test your understanding with these small exercises. You can open your browser console and type these directly or create a new<script> tag in an HTML file.

### Declare and Assign:

- Declare a let variable called cityName and assign it the value of your favorite city (e.g., "Lahore").

- Declare a const variable called birthYear and assign it your birth year (as a number, e.g., 1995).

- Declare a let variable called isLearning and set it to true.

### Reassignment (for let):

- Change the value of cityName to another city (e.g., "Islamabad").

- Print the new value of cityName to the console.

**Check Data Types:**


- Use typeof with console.log() to print the data type of cityName, birthYear, and isLearning.

- Undefined vs Null:

- Declare a let variable futureGoal but do not assign it any value. What will console.log(futureGoal) show?

- Declare a let variable emptyBox and assign it null. What will console.log(emptyBox) show?

- Observe the difference in the console output.

 #### Bonus Tips :
- Semicolons are Optional (Mostly): JavaScript doesn't always require semicolons (;) at the end of statements, thanks to Automatic Semicolon Insertion (ASI). However, it's a good practice to use them consistently, especially when starting out, as it can prevent subtle bugs.

- Meaningful Variable Names: Always use descriptive names for your variables (e.g., productPrice instead of p). This makes your code much easier to read and understand, both for you and others.

- Comments are Your Friends: Use comments (// for single-line, /* ... */ for multi-line) to explain complex logic or add notes to your code. This is crucial for remembering why you wrote certain code later.

```js

// This is a single-line comment

/*
This is a
multi-line comment
*/
```
- Developer Tools are Powerful: Get comfortable with your browser's developer tools (F12). The "Console" is just the beginning. You'll use them extensively for debugging and inspecting web pages.

### Day 1 Project: "My Product Inventory Card" Console App

Goal: Create a simple HTML file with an embedded JavaScript block that simulates a product's inventory details. All information will be displayed in the browser's console using variables and console.log().

**Project Logic/Steps:**
```text
- HTML Setup (day1_project.html):

- Create a new folder named javascript-30-days.

- Inside this folder, create a file named day1_project.html.

- Add the basic HTML structure (<!DOCTYPE html>, <html>, <head>, <body>).

- Include a simple heading in the body , e.g., <h1>Check Console (F12) for Product Details</h1>.

- Place your JavaScript code inside a <script> tag. For best practice and to ensure the HTML content is ready, place this <script> tag just before the closing </body> tag.

- Declare Initial Product Variables (JavaScript):
```
- Inside your <script> tags, declare the following variables:
```js
const productName = "Wireless Bluetooth Speaker"; (String)

const modelNumber = "SPK-BT-3000"; (String)

let price = 49.99; (Number)

let stockQuantity = 120; (Number)

let isAvailable = true; (Boolean - assume initially available if stock > 0)

const manufacturer = "SoundTech Industries"; (String)
``` 
- Display Initial Product Details in Console:

- Use console.log() and template literals (backticks `) to display all the initial product details in a clear and organized way.

- Start with a section header, like: console.log("--- Initial Product Inventory ---");

- Then, for each piece of information, create a line using template literals:

```js

console.log(`Product Name: ${productName}`);
console.log(`Model: ${modelNumber}`);
console.log(`Price: $${price}`);
console.log(`Stock Quantity: ${stockQuantity} units`);
console.log(`Is Available: ${isAvailable}`);
console.log(`Manufacturer: ${manufacturer}`);
Simulate Sales/Update Stock:
```

Now, let's simulate a sale. Update the stockQuantity variable:

```js
stockQuantity = stockQuantity - 25; (Imagine 25 units were sold)
```

Re-evaluate isAvailable based on the new stockQuantity. For simplicity today, you can manually set it if stockQuantity is still above zero. (Later, we'll learn if statements to automate this).

```js
isAvailable = true; (If stockQuantity is still positive)
```

(Optional: If you want to challenge yourself, what if stockQuantity became 0 or less? How would isAvailable change?)

- Display Updated Product Details in Console:

- Add another section header: console.log("\n--- Updated Product Inventory (After Sales) ---"); (The \n creates a new line for better readability).

 Again, use console.log() with template literals to display the updated values of all variables. You can copy-paste the previous console.log block and just ensure the updated variables are reflected.

- Verify Output:

- Save your day1_project.html file.

- Open day1_project.html in your web browser.

- Press F12 to open the Developer Tools, and navigate to the "Console" tab.

You should see two blocks of product information, one showing the initial state and the other showing the updated state after sales.

