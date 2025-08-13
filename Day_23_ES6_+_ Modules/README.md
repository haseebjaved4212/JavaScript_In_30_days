# Day 23: Modules (ES Modules) - Organizing Your Code


Welcome to Day 23! Until now, all of our JavaScript code has lived in a single file or a single script tag. This approach works for small projects, but for larger applications, it quickly becomes messy and difficult to manage. Modules are the solution. They allow you to split your code into separate, reusable files, keeping your codebase organized and easy to maintain.

***What are ES Modules?***

ES Modules (or ECMAScript Modules) are the official, standardized way to use modules in JavaScript. They introduce two simple keywords: export and import.

- *export*: This keyword is used to make variables, functions, or classes available to other files.

- *import:* This keyword is used to bring those exported items into the current file.

The primary benefit of using modules is that they create a local scope for each file, preventing the dreaded "global scope pollution" where variables from one file might accidentally overwrite variables from another.

***Key Concepts***

**1. Exporting**

You can export items in two main ways:

- *Named Exports:* Export multiple items from a single file by adding the export keyword before their declaration.
```js
// file: math.js
export const pi = 3.14;

export function add(a, b) {
  return a + b;
}
```
- *Default Exports:* You can have only one default export per module. This is often used for the main functionality of a file.
```js
// file: utils.js
const defaultMessage = "Hello from the default export!";
export default defaultMessage;
```
**2. Importing**

- When importing, the syntax depends on how the item was exported.

- Importing Named Exports: You must use the same names as the exports, wrapped in curly braces.
```js
// file: main.js
import { pi, add } from './math.js';

console.log(pi); // 3.14
console.log(add(5, 3)); // 8
```
- Importing Default Exports: You can give the imported item any name you want.
```js
// file: main.js
import greeting from './utils.js';
console.log(greeting); // "Hello from the default export!"
```

- *Important:* When using ES Modules in the browser, you must add type="module" to your script tag: &lt;script type="module" src="index.js"></script>.


## 📌 Todo List App — ES6 Modules Version

**📖 Overview**

This is a modern Todo List App built with HTML, CSS, and JavaScript (ES6 modules).
The project demonstrates how to organize code into separate modules and import/export functionalities for better readability, maintainability, and scalability.

**✨ Features**

- ✅ Add new tasks

- ✏️ Edit existing tasks

- ❌ Delete tasks

- ☑️ Mark tasks as completed

- 💾 Persistent data using LocalStorage

- 🌗 Light/Dark theme toggle

**📂 Project Structure**

(This Project Structure located in *index.tldr* file)

**🧠 Logic Breakdown (How It Works)**

1️⃣ main.js

- Acts as the entry point.

- Imports functions from other modules (dom.js, storage.js, actions.js, theme.js).

- Initializes event listeners for:

  * Adding a task

   - Toggling theme

  - Page load data rendering

```js
import { renderTasks } from './dom.js';
import { getTasks } from './storage.js';
import { initActions } from './actions.js';
import { initTheme } from './theme.js';

document.addEventListener('DOMContentLoaded', () => {
    renderTasks(getTasks());
    initActions();
    initTheme();
});
```
2️⃣ storage.js (Data Persistence)

- Stores all tasks in localStorage.

- Functions:

  - `getTasks()` → returns array of stored tasks.

  - `saveTasks(tasks) `→ saves updated tasks.

  - Uses `JSON.stringify()` and `JSON.parse()` for conversion.

3️⃣ dom.js (UI Rendering)

- Responsible for:

  - Creating new task elements in the DOM.

  - Updating the UI when tasks are added/removed/edited.

- Uses template literals to generate task HTML.

4️⃣ actions.js (Event Handling)

- Contains logic for:

  - Adding tasks

  - Deleting tasks

  - Editing tasks

  - Toggling completion status

- Updates both UI (via dom.js) and data (via storage.js).

5️⃣ theme.js (Light/Dark Mode)

- Adds theme toggle button.

- Saves user’s choice in localStorage so theme stays same after refresh.


## Practice Set:

<details><summary>
1. Modular Greeting App

Your task is to create a simple greeting app that uses modules to separate its logic.

greeting.js: Create a file that exports a single function named generateGreeting. This function should take a name as an argument and return a personalized greeting string (e.g., "Hello, John!").

main.js: Create a second file that imports the generateGreeting function from greeting.js.

index.html: Create an HTML file with a button and a paragraph element. Add a script tag with type="module" that links to your main.js.

Connect it all: In main.js, add a click event listener to the button. When clicked, it should use the imported generateGreeting function to create a greeting and display it in the paragraph element.
</summary>

**solution**

This solution requires three separate files. You can create them in the same folder and open index.html in your browser to see the result.

File 1: greeting.js
```js
// greeting.js

// This file exports a single function as a named export.
export function generateGreeting(name) {
    // We use a template literal for a clean, readable string.
    return `Hello, ${name}! Welcome to the modular world.`;
}
```
File 2: main.js
```js
// main.js

// Import the named export 'generateGreeting' from the greeting.js file.
// The file extension '.js' is required.
import { generateGreeting } from './greeting.js';

// Get the DOM elements from index.html
const greetButton = document.getElementById('greetButton');
const greetingOutput = document.getElementById('greetingOutput');

// Add a click event listener to the button
greetButton.addEventListener('click', () => {
    // Get a user name (we'll use a static one for this example)
    const userName = 'Alice';

    // Use the imported function to generate the greeting
    const greetingText = generateGreeting(userName);
    
    // Display the greeting on the page
    greetingOutput.textContent = greetingText;
});
```
File 3: index.html
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Modular Greeting App</title>
    <!-- Tailwind CSS for styling -->
    <script src="https://cdn.tailwindcss.com"></script>
    <style>
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap');
        body {
            font-family: 'Inter', sans-serif;
            background-color: #f3f4f6;
        }
    </style>
</head>
<body class="flex flex-col items-center justify-center min-h-screen p-4">

    <div class="bg-white p-8 rounded-2xl shadow-lg text-center max-w-sm">
        <h1 class="text-3xl font-bold mb-4">Modular App</h1>
        <p id="greetingOutput" class="text-gray-600 mb-6">Click the button to get a greeting.</p>
        <button id="greetButton" class="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-full transition-colors duration-200">
            Say Hello
        </button>
    </div>

    <!-- This script tag is crucial. The type="module" attribute tells the browser
         that this is a module, which allows it to use import and export. -->
    <script type="module" src="./main.js"></script>

</body>
</html>
```
</details>


--- 
## Key Takeaways ✨

- Organization: Modules keep your code clean by separating different functionalities into their own files.

- No Global Scope Pollution: Variables in a module are local to that module unless explicitly exported.

- Reusability: You can reuse the same module in many different parts of your application.

- Syntax: Use export to share code and import to use it. Remember to include type="module" in your script tag when linking to the main module file.