# Day 09: JavaScript Error Handling & Debugging (Project: Error-Resilient Calculator)


Welcome to Day 09 of my 30 Days of JavaScript Challenge! Today, we're focusing on two critical skills for any developer: Error Handling and Debugging. No matter how good you are, errors will happen. Knowing how to gracefully handle them in your code and efficiently find and fix bugs is essential for building reliable and user-friendly applications.

For our project, we'll build a Simple Error-Resilient Calculator, which will demonstrate how to use `try...catch` blocks to manage common calculation errors and provide a smooth user experience.

## 📚 Core Concepts Covered:

**1. Understanding Errors**
Errors are problems that occur during the execution of a program. They can prevent your code from running correctly or even cause it to crash.

### Types of Errors:

**- Syntax Errors:**

 Occur when you violate JavaScript's grammar rules (e.g., missing a parenthesis, a semicolon). These are usually caught by the browser/interpreter before execution.

// **Example:**

Syntax Error (missing closing parenthesis)

```js
// console.log("Hello";
```
**Runtime Errors (Exceptions):** 

Occur during the execution of the program. JavaScript throws an "exception" when something unexpected happens (e.g., trying to access a property of null, dividing by zero, network failure). These are what try...catch blocks are designed to handle.
```js
// Example: Runtime Error (TypeError)
// const obj = null;
// console.log(obj.property); // Cannot read properties of null
```


**Logical Errors:**  

The code runs without crashing, but it produces incorrect results because of a flaw in the program's logic. These are the hardest to find and require careful debugging.
```js
// Example: Logical Error (intended to add, but subtracts)
// function add(a, b) { return a - b; }
// console.log(add(5, 3)); // Expected 8, got 2
```
**2. try...catch Statement**

The `try...catch` statement is JavaScript's primary mechanism for handling runtime errors (exceptions). It allows you to "try" a block of code and "catch" any errors that occur within it, preventing the entire script from crashing.

**Syntax:**
```js
try {
    // Code that might throw an error
    // If an error occurs here, execution jumps to the catch block
} catch (error) {
    // Code to handle the error
    // The 'error' parameter contains information about the error that occurred
    console.error("An error occurred:", error);
} finally {
    // Optional: Code that will always execute, regardless of whether
    // an error occurred or was caught. Useful for cleanup.
}
```
**- try block:** Contains the code that you want to monitor for errors.

**- catch block:** Executes if an error is thrown within the try block. It receives an Error object as an argument.

**finally block (Optional)**: Executes after both the try and catch blocks, regardless of whether an error occurred or was handled. It's often used for cleanup operations (e.g., closing files, releasing resources).

**Example:**
```js
function divide(a, b) {
    try {
        if (b === 0) {
            throw new Error("Division by zero is not allowed."); // Manually throw an error
        }
        console.log("Result:", a / b);
    } catch (error) {
        console.error("Caught an error:", error.message);
    } finally {
        console.log("Division attempt finished.");
    }
}
divide(10, 2);  // Output: Result: 5, Division attempt finished.
divide(10, 0);  // Output: Caught an error: Division by zero is not allowed., Division attempt finished.
```
**3. throw Statement**

The throw statement allows you to create and throw a custom error (or any value) explicitly. When throw is executed, the normal flow of execution stops, and control is passed to the nearest catch block.

**Syntax:** throw value; (where value can be a string, number, object, or an Error object).

**Best Practice:** Always throw an Error object (or a custom error object inherited from Error) as it provides useful properties like name, message, and stack (call stack).

throw new Error("Something went wrong!");

**4. The Error Object**

- When an error occurs, JavaScript creates an Error object (or a more specific error type like TypeError, ReferenceError, etc.) and passes it to the catch block.

- Key Properties of Error objects:

- name: The type of error (e.g., "TypeError", "ReferenceError", "Error" for generic errors).

- message: A human-readable description of the error.

- stack:(Non-standard but widely supported) A string representing the call stack at the moment the error was thrown, useful for debugging.

**5. Common Built-in Error Types:**

ReferenceError: Occurs when you try to access a variable that hasn't been declared.
```js
// console.log(undeclaredVar); // ReferenceError
```
**TypeError:** Occurs when an operation is performed on a value that is not of the expected type (e.g., calling a non-function, accessing properties of null/undefined).
```js
// const x = 10;
// x.toUpperCase(); // TypeError: x.toUpperCase is not a function

SyntaxError: Occurs when JavaScript code is syntactically invalid.

// eval("alert('Hello');;"); // SyntaxError: Unexpected token ';'

RangeError: Occurs when a number is outside an allowable range of values.

// (100).toExponential(200); // RangeError: toExponential() argument must be between 0 and 100
```

**6. Debugging Techniques**


 Debugging is the process of finding and fixing errors or bugs in your code.

`console.log():` The simplest and most common debugging tool. You can log values of variables, messages, or objects at different points in your code to understand its flow.

`console.warn():` For warnings.

``console.error():`` For errors.

`console.info():` For informational messages.

`console.table():` To display tabular data (like arrays of objects).

`console.dir():` To display an interactive list of the properties of a specified JavaScript object.

**Browser Developer Tools (DevTools):** 

Your most powerful debugging ally.

- Opening DevTools: Right-click on your web page -> "Inspect" (or F12, Cmd+Option+I on Mac).

- Elements Tab: Inspect and modify HTML and CSS in real-time.

- Console Tab: View console.log messages, errors, warnings, and execute JavaScript code directly.

- Sources Tab: This is where the magic happens for JavaScript debugging:

**Breakpoints:** Click on a line number in your JavaScript file to set a breakpoint. When execution reaches this line, it will pause.

**Stepping Controls:**

  **Step Over:** Execute the current line and move to the next. If the line contains a function call, it executes the entire function without stepping into it.

  **Step Into:** Execute the current line. If it contains a function call, it steps into that function.

  **Step Out:** If you're inside a function, execute the rest of the function and jump back to where it was called.

  **Resume Script Execution:** Continue running the script until the next breakpoint or the end of the script.

  **Scope Panel:** View the values of variables in the current scope (local, closure, global).

  **Variables Panel:** Add specific variables to "watch" their values as you step through code.

 **Call Stack:** See the sequence of function calls that led to the current point of execution.

 **Network Tab:** Monitor network requests (API calls, image loads) – see their status, timing, and response data.

 **Application Tab:** Inspect local storage, session storage, cookies, and more.

## 🚀 Project for Day 09: Simple Error-Resilient Calculator


Today's project is an interactive Calculator that focuses on robust error handling. It will demonstrate how to prevent common calculation issues (like division by zero or invalid number input) from crashing the application, providing clear feedback to the user instead.

**Features:**
- Perform basic arithmetic operations: Addition, Subtraction, Multiplication, Division.

- Handle non-numeric input gracefully.

- Prevent division by zero and display an informative error.

- Display results or error messages clearly on the UI.

(This project's code is located in index.html and index.js within this Day09 folder.)

--- 

### 💻 Project Logic Breakdown (index.js)
The index.js file contains the calculator's logic, with a strong emphasis on error handling.

**1. DOM Element References**

```js
const num1Input = document.getElementById('num1');
const num2Input = document.getElementById('num2');
const resultDisplay = document.getElementById('resultDisplay');
const errorDisplay = document.getElementById('errorDisplay');
const operationButtons = document.querySelectorAll('.operation-btn');
```
These variables provide access to the input fields, result/error display areas, and all operation buttons.

**2. displayResult(message) and displayError(message)**

```js
function displayResult(message) {
    resultDisplay.textContent = message;
    resultDisplay.classList.remove('hidden');
    errorDisplay.classList.add('hidden'); // Hide error if result is displayed
}

function displayError(message) {
    errorDisplay.textContent = message;
    errorDisplay.classList.remove('hidden');
    resultDisplay.classList.add('hidden'); // Hide result if error is displayed
}
```
Helper functions to update the UI. They ensure that only one of the resultDisplay or errorDisplay is visible at a time.

**3. getNumbers() Function (Input Validation)**

```js
function getNumbers() {
    const num1 = parseFloat(num1Input.value);
    const num2 = parseFloat(num2Input.value);

    if (isNaN(num1) || isNaN(num2)) {
        throw new Error("Invalid input: Please enter valid numbers.");
    }
    return { num1, num2 };
}
```
This function attempts to parse the input values as floating-point numbers.

*Crucially:* It uses isNaN() to check if the parsing resulted in "Not a Number." If either input is not a valid number, it throws a custom Error object. This error will then be caught by the try...catch block in the event handler.

**4. Arithmetic Operations**

```js
function add(a, b) { return a + b; }
function subtract(a, b) { return a - b; }
function multiply(a, b) { return a * b; }
function divide(a, b) {
    if (b === 0) {
        throw new Error("Cannot divide by zero."); // Custom error for division by zero
    }
    return a / b;
}
```
Standard arithmetic functions.

The divide function includes a specific check for b === 0 and throws a custom Error if division by zero is attempted. This ensures a controlled error message instead of a generic JavaScript error.

**5. Event Listener for Operations**

```js
operationButtons.forEach(button => {
    button.addEventListener('click', (event) => {
        let result;
        try {
            const { num1, num2 } = getNumbers(); // This might throw an error
            const operation = event.target.dataset.operation; // Get operation from data-attribute

            switch (operation) {
                case 'add': result = add(num1, num2); break;
                case 'subtract': result = subtract(num1, num2); break;
                case 'multiply': result = multiply(num1, num2); break;
                case 'divide': result = divide(num1, num2); break; // This might throw an error
                default: throw new Error("Unknown operation.");
            }
            displayResult(`Result: ${result}`);
            console.log(`Operation: ${num1} ${operation} ${num2} = ${result}`); // Debugging log
        } catch (error) {
            // Catch any errors thrown by getNumbers() or divide()
            displayError(`Error: ${error.message}`);
            console.error("Calculation error:", error); // Detailed error for developers
        }
    });
});
```
It iterates over all buttons with the class operation-btn.

`try...catch` Block: The entire calculation logic for each button click is wrapped in a `try...catch` block.

 **Inside try:**

`getNumbers()` is called. If it throws an "Invalid input" error, the catch block will immediately execute.

 - The correct arithmetic function (e.g., add, divide) is called based on the data-operation attribute of the clicked button. If` divide() `throws a "Cannot divide by zero" error, the catch block handles it.

- If no errors occur, the resultDisplay is updated.

- `console.log` is used for successful operations – a good debugging practice to see normal flow.

**Inside catch(error):**

If any error is thrown within the try block (either by `getNumbers()`, `divide()`, or the `switch statement`), this block executes.

`displayError(error.message)` shows a user-friendly message based on the error's message property.

`console.error("Calculation error:", error);` logs the full Error object to the browser console. This is crucial for developers to see the stack trace and debug effectively, without showing raw error details to the end-user.

**6. Initial Setup**

```js
document.addEventListener('DOMContentLoaded', () => {
    // Initial state: clear displays
    resultDisplay.classList.add('hidden');
    errorDisplay.classList.add('hidden');
});
```
Ensures that the result and error displays are hidden when the page initially loads.

--- 

## ✅ Practice Set :

<details><summary>
1. Basic try...catch:
</summary>

```js
function processArray(arr) {
    try {
        if (arr === null) {
            throw new TypeError("Input array cannot be null.");
        }
        console.log("Accessing index 10:", arr[10]);
    } catch (error) {
        console.error("An error occurred in processArray:", error.message);
        // Also log the full error object for more details
        console.error(error);
    }
}
processArray([1, 2, 3]); // Output: Accessing index 10: undefined, then no error
processArray(null);      // Output: An error occurred in processArray: Input array cannot be null. (and full error object)
```
</details>
<details><summary>
2. Custom throw Error:
</summary>

```js
function checkAge(age) {
    if (age < 0 || age > 120) {
        throw new RangeError("Age must be between 0 and 120.");
    }
    console.log(`Age ${age} is valid.`);
}

try {
    checkAge(30);   // Output: Age 30 is valid.
    checkAge(150);  // Throws RangeError
} catch (error) {
    if (error instanceof RangeError) {
        console.error("Age validation error:", error.message);
    } else {
        console.error("Unexpected error:", error.message);
    }
}

try {
    checkAge(-5);   // Throws RangeError
} catch (error) {
    if (error instanceof RangeError) {
        console.error("Age validation error:", error.message);
    } else {
        console.error("Unexpected error:", error.message);
    }
}
// Expected output for invalid ages: Age validation error: Age must be between 0 and 120.
```
</details>
<details><summary>
3. finally Block Usage:
</summary>

```js
function resourceOperation(shouldFail = false) {
    try {
        console.log("Resource opened.");
        if (shouldFail) {
            throw new Error("Failed to process resource.");
        }
        console.log("Resource processed successfully.");
    } catch (error) {
        console.error("Caught error during operation:", error.message);
    } finally {
        console.log("Resource closed."); // Always runs
    }
}

console.log("\n--- Successful operation ---");
resourceOperation(false);
// Output:
// Resource opened.
// Resource processed successfully.
// Resource closed.

console.log("\n--- Failed operation ---");
resourceOperation(true);
// Output:
// Resource opened.
// Caught error during operation: Failed to process resource.
// Resource closed.
```
</details>
<details><summary>
4. Debugging with console.table and console.dir:
</summary>

```js
const users = [
    {id: 1, name: "Alice", email: "alice@example.com"},
    {id: 2, name: "Bob", email: "bob@example.com", isActive: true},
    {id: 3, name: "Charlie", email: "charlie@example.com", role: "admin"}
];

console.log("--- console.table(users) ---");
console.table(users);

console.log("\n--- console.dir(users[0]) ---");
console.dir(users[0]);

console.log("\n--- console.dir(users[1]) ---");
console.dir(users[1]);

// Open browser console (F12) to see the formatted output.
// console.table will show a nice table.
// console.dir will show an expandable object tree.
```
</details>
<details><summary>
5. Debugging with Breakpoints (Conceptual):
</summary>

```text 
- Breakpoint Location: Set a breakpoint on the line: let subtotal = price * quantity;

- Variables to Watch: price, quantity, subtotal.

- Reasoning: When execution pauses at this line, you can inspect the values of price and quantity before the multiplication happens. If quantity is a string (e.g., "2"), you'll immediately see that price * quantity will result in NaN because JavaScript tries to perform arithmetic on a string that cannot be fully converted to a number. This tells you the issue is with the quantity's data type before the calculation. You could then step over to let total = subtotal * (1 + taxRate); and see total also become NaN, confirming the propagation of the error.
```
</details>

--- 


### 💡 Key Takeaways for Day 09:
- Errors are inevitable; mastering error handling makes your applications robust.

- `try...catch` is your primary tool for gracefully handling runtime errors.

- Use throw new` Error()` for custom, meaningful errors.

- The finally block is perfect for cleanup operations that must always run.

 - Browser Developer Tools (especially the Console and Sources tabs with breakpoints) are indispensable for finding and fixing bugs efficiently.

- `console.log` and its variations are simple yet powerful debugging aids.