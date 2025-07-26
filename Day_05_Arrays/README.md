# Day 05: JavaScript Arrays & Common Methods

Welcome to Day 05 of my 30 Days of JavaScript Challenge! Today, we're diving into Arrays, which are fundamental data structures in JavaScript. An array is a special type of variable that can store multiple values (elements) in a single variable, ordered by index. We'll also explore many built-in methods that make working with arrays incredibly powerful and efficient.

## 📚 Core Concepts Covered:

**1. What are Arrays?**

An array is an ordered collection of values. Each value is called an element, and each element has a numerical position called an index (starting from 0).

**Why use arrays?**

- To store lists of related items (e.g., a list of names, numbers, or objects).
- To perform operations on multiple items efficiently.
  **Declaring Arrays:**

- Array Literal (Most Common):

```js
const fruits = ["Apple", "Banana", "Cherry"];
const numbers = [1, 2, 3, 4, 5];
const mixed = [1, "hello", true, { key: "value" }]; // Arrays can hold mixed data types
```

**Array() Constructor (Less Common):**

```js
const emptyArray = new Array();
const fiveElements = new Array(5); // Creates an array with 5 empty slots
const specificElements = new Array("Red", "Green", "Blue");
```

**2. Accessing Array Elements**
You access array elements using their index (position), which starts at 0

**Syntax: arrayName[index]**

**Example:**

```js
const colors = ["Red", "Green", "Blue"];
console.log(colors[0]); // Output: Red
console.log(colors[1]); // Output: Green
console.log(colors[2]); // Output: Blue
console.log(colors[3]); // Output: undefined (index out of bounds)
```

**3. Modifying Array Elements**

You can change an element's value by assigning a new value to its index.
**Example:**

```js
const scores = [80, 85, 90];
scores[1] = 95; // Change the second element
console.log(scores); // Output: [80, 95, 90]
```

**4. Array length Property**

The length property returns the number of elements in an array. It's always one greater than the highest index.
**Example:**

```js
const items = ["A", "B", "C"];
console.log(items.length); // Output: 3
console.log(items[items.length - 1]); // Accessing the last element: C
```

**5. Array Methods5. Adding and Removing Elements (Mutating Methods)**

These methods change the original array.

##### push():

Adds one or more elements to the end of an array and returns the new length.
**Example:**

```js
const fruits = ["apple", "banana"];
fruits.push("orange", "grape");
console.log(fruits); // Output: ["apple", "banana", "orange", "grape"]
```

##### pop ():

Removes the last element from an array and returns that element.
**Example:**

```js
const fruits = ["apple", "banana", "orange"];
const lastFruit = fruits.pop();
console.log(fruits); // Output: ["apple", "banana"]
console.log(lastFruit); // Output: orange
```

#### unshift():

Adds one or more elements to the beginning of an array and returns the new length.

**Example:**

```js
const fruits = ["banana", "cherry"];
fruits.unshift("apple");
console.log(fruits); // Output: ["apple", "banana", "cherry"]
```

#### shift():

Removes the first element from an array and returns that element.
**Example:**

```js
const fruits = ["apple", "banana", "cherry"];
const firstFruit = fruits.shift();
console.log(fruits); // Output: ["banana", "cherry"]
console.log(firstFruit); // Output: apple
```

#### splice():

A powerful method that can add, remove, or replace elements at any position.
**Syntax:**

```js
array.splice(startIndex, deleteCount, item1, item2, ...)
```

- startIndex: Index at which to start changing the array.
- deleteCount: Number of elements to remove from startIndex.
- item1, item2, ...: Elements to add to the array at startIndex.

**Example- Example (Remove):**

```js
const arr = [1, 2, 3, 4, 5];
arr.splice(2, 1); // Remove 1 element starting at index 2 (value 3)
console.log(arr); // Output: [1, 2, 4, 5]
```

**- Example (Add):**

```js
const arr = [1, 2, 5];
arr.splice(2, 0, 3, 4); // At index 2, delete 0 elements, add 3 and 4
console.log(arr); // Output: [1, 2, 3, 4, 5]
```

**Example (Replace):**

```js
const arr = [1, 2, 3, 4, 5];
arr.splice(1, 2, 10, 11); // At index 1, delete 2 elements (2, 3), add 10, 11
console.log(arr); // Output: [1, 10, 11, 4, 5]
```

**6. Non-Mutating Array Methods (Return New Array/Value)**

These methods do not change the original array; they return a new array or a new value.

#### indexOf():

Returns the first index at which a given element can be found in the array, or -1 if it is not present.

**Example:**

```js
const arr = ["a", "b", "c", "a"];
console.log(arr.indexOf("b")); // Output: 1
console.log(arr.indexOf("a")); // Output: 0
console.log(arr.indexOf("d")); // Output: -1
```

**includes() (ES6):**

Checks if an array includes a certain value among its entries, returning true or false.

**Example:**

```js
const arr = [10, 20, 30];
console.log(arr.includes(20)); // Output: true
console.log(arr.includes(5)); // Output: false
```

**slice():**

Returns a shallow copy of a portion of an array into a new array.

- Syntax:

```js
array.slice(startIndex, endIndex) (endIndex is exclusive)
```

- Example:

```js
const original = [1, 2, 3, 4, 5];
const newArr = original.slice(1, 4); // Elements from index 1 up to (but not including) 4
console.log(newArr); // Output: [2, 3, 4]
console.log(original); // Output: [1, 2, 3, 4, 5] (original unchanged)
```

- concat():

Used to merge two or more arrays. This method does not change the existing arrays, but instead returns a new array.

- Example:

```js
const arr1 = [1, 2];
const arr2 = [3, 4];
const combined = arr1.concat(arr2);
console.log(combined); // Output: [1, 2, 3, 4]
```

- join():

Joins all elements of an array into a string.

- Syntax:

```js
array.join(separator) (default separator is comma)
```

- Example:

```js
const words = ["Hello", "World"];
console.log(words.join(" ")); // Output: "Hello World"
console.log(words.join("-")); // Output: "Hello-World"
```

- split()

(String Method, but related): This is a string method that splits a string into an array of substrings.

- Syntax:

```js
string.split(separator);
```

- Example:

```js
const sentence = "JavaScript is fun";
const wordsArray = sentence.split(" ");
console.log(wordsArray); // Output: ["JavaScript", "is", "fun"]
```

**7. Higher-Order Array Methods (Introduction)**

These methods take a function as an argument (a "callback function") and apply it to each element. They are incredibly powerful for common data transformations.

- forEach():

Executes a provided function once for each array element. It does not return a new array.

- Example:

```js
  const numbers = [1, 2, 3];
  numbers.forEach(function(num) {
  console.log(num \* 2);
  });
  // Output:
  // 2
  // 4
  // 6
```

- map():

Creates a new array populated with the results of calling a provided function on every element in the calling array.

- Example:

```js
  const numbers = [1, 2, 3];
  const doubled = numbers.map(function(num) {
  return num \* 2;
  });
  console.log(doubled); // Output: [2, 4, 6]
  console.log(numbers); // Output: [1, 2, 3] (original array unchanged)
```

- filter():

Creates a new array with all elements that pass the test implemented by the provided function.

- Example:

```js
const numbers = [1, 2, 3, 4, 5];
const evens = numbers.filter(function (num) {
  return num % 2 === 0;
});
console.log(evens); // Output: [2, 4]
console.log(numbers); // Output: [1, 2, 3, 4, 5] (original array unchanged)
```

- reduce():

(Briefly): Executes a reducer function on each element of the array, resulting in a single output value. Used for summing, flattening arrays, etc. (More advanced, but good to know it exists).

- Example (Summing):

```js
const numbers = [1, 2, 3, 4];
const sum = numbers.reduce(function (accumulator, currentValue) {
  return accumulator + currentValue;
}, 0); // 0 is the initial value of accumulator
console.log(sum); // Output: 10
```

## 🚀 Project for Day 05: ToDo List

The index.js file is the brain of our To-Do List application. It manages the data (your tasks) and dynamically updates the HTML to reflect changes.

**1. Global State Management (tasks Array)**
At the very top of index.js, you'll find:

```JavaScript

let tasks = [];
This tasks array is the core data structure of our application. It holds all your to-do items.
```

Each item in this array is an object, not just a string. This is crucial because a task needs more than just its text; it also needs to know if it's completed or not.

**Example of a task object:**

{ text: "Learn JavaScript Arrays", completed: false }

All operations (adding, deleting, marking complete, clearing) directly modify this tasks array, and then the UI is re-rendered based on its current state.

**2. DOM Element References**

Next, we grab references to the key HTML elements we'll be interacting with. This makes it easier to manipulate them in JavaScript without repeatedly searching the DOM.

```JavaScript

const taskInput = document.getElementById('taskInput');
const addTaskBtn = document.getElementById('addTaskBtn');
const taskList = document.getElementById('taskList');
const clearCompletedBtn = document.getElementById('clearCompletedBtn');
const errorMessageDiv = document.getElementById('errorMessage');

```

- taskInput: The text field where users type new tasks.

- addTaskBtn: The "Add Task" button.

- taskList: The <ul> element where the to-do items (<li>s) will be displayed.

- clearCompletedBtn: The "Clear Completed Tasks" button.

- errorMessageDiv: The div used to show temporary error messages.

**3. Core Application Functions**

These functions are the main logic units that perform specific actions in our To-Do List.

- a. showErrorMessage(message)

Purpose: Displays a temporary error or feedback message to the user.

- How it works:

* It takes a message string.

* Sets the textContent of the errorMessageDiv.

* Removes the hidden CSS class to make it visible.

* Uses setTimeout() to re-add the hidden class after 3 seconds, making the message disappear automatically.

- b. renderTasks()

Purpose: This is the most critical function. It takes the current state of the tasks array and updates the HTML list (taskList) to reflect it.

- How it works:

* taskList.innerHTML = '';: It first clears all existing <li> elements from the <ul>. This is important to prevent duplicate entries when the list is re-rendered.

* Empty List Check: If tasks.length is 0, it displays a friendly "No tasks yet!" message.

* Iterating Tasks (tasks.forEach()):

* It uses the forEach() array method to loop through each task object and its index in the tasks array.

- For each task:

```js
- document.createElement('li'): A new <li>//  element is created.

listItem.classList.add('todo-item'): //Adds base styling.

if (task.completed) { listItem.classList.add('completed'); }: // Conditionally adds the completed class, which applies the strike-through and muted styles.
```

- Task Text: A <span> is created for the task's text and appended.

- Delete Button: A "Delete" button is created and appended.

- Event Listeners for Each Item:

```js
taskText.addEventListener('click', () => toggleTaskComplete(index)): //When the task text is clicked, it calls toggleTaskComplete() for that specific task's index.

deleteBtn.addEventListener('click', (event) => { event.stopPropagation(); deleteTask(index); }): //When the delete button is clicked, it calls deleteTask() for that task's index. event.stopPropagation() is used to prevent the click on the delete button from also triggering the toggleTaskComplete on the parent <li>.

taskList.appendChild(listItem): // The fully constructed <li> is added to the <ul>.
```

- c. addTask():

* Purpose: Adds a new task to the list.

- How it works:

```js
taskInput.value.trim():// Gets the text from the input field and removes any leading/trailing whitespace.

// Validation: If the taskText is empty, it calls showErrorMessage() and stops.

// Adding to Array
(tasks.push()): tasks.push({ text: taskText, completed: false });
//uses the push() array method to add a new task object (initially not completed) to the end of the tasks array.

taskInput.value = '';: // Clears the input field.

renderTasks();: Calls renderTasks() to redraw the UI, now including the newly added task.
```

- d. toggleTaskComplete(index)

* Purpose: Changes a task's status between completed and incomplete.

* How it works:
```js
tasks[index].completed = !tasks[index].completed;: //It directly accesses the task object at the given index in the tasks array and flips its completed boolean property (e.g., true becomes false, and false becomes true).

renderTasks();: Calls renderTasks() //to update the UI, which will apply or remove the completed styling.
`
``` 


* e. deleteTask(index):

- Purpose: Removes a specific task from the list.

* How it works:

```js
tasks.splice(index, 1);: // This is where the powerful splice() array method comes in. It removes 1 element starting from the given index. This directly modifies the tasks array.

renderTasks();: Calls renderTasks() to update the UI, removing the deleted task.
```
* f. clearCompletedTasks()
- Purpose: Removes all tasks that are currently marked as completed.

* How it works:
```js
tasks = tasks.filter(task => !task.completed);: //This is a very efficient way to remove multiple items.
```
The filter() array method creates a new array containing only the elements for which the provided callback function returns true.

The callback task => !task.completed means "keep this task if its completed property is false (i.e., it's not completed)."

The tasks global array is then reassigned to this new, filtered array. The old array (with completed tasks) is discarded.

renderTasks();: Calls renderTasks() to update the UI, showing only the remaining (incomplete) tasks.

* 4. Event Listeners (Connecting UI to Logic)
These lines connect user interactions (clicks, keypresses) to our JavaScript functions.

```JavaScript

addTaskBtn.addEventListener('click', addTask);

taskInput.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
        addTask();
    }
});

clearCompletedBtn.addEventListener('click', clearCompletedTasks);
//When the "Add Task" button is clicked, addTask() runs.

//When you press Enter in the task input field, addTask() also runs.

// When the "Clear Completed Tasks" button is clicked, clearCompletedTasks() runs.
```
* 5. Initial Render (DOMContentLoaded)
```JavaScript

document.addEventListener('DOMContentLoaded', renderTasks);
//This ensures that the renderTasks() function is called as soon as the entire HTML document has been loaded and parsed by the browser. This is important so that when you first open the page, the taskList is correctly rendered (initially showing "No tasks yet!").

```



### ✅ Practice Set:

<details><summary>
1. Create and Access:
</summary><code>
const myColors = ["Red", "Green", "Blue", "Yellow", "Orange"];
console.log("Third element:", myColors[2]);
myColors[myColors.length - 1] = "Purple";
console.log("Modified array:", myColors);
</code></details>
<details><summary>
2. Add/Remove Elements:
</summary><code>
const animals = ["cat", "dog", "bird"];
animals.push("fish");
console.log("After push:", animals);
animals.shift();
console.log("After shift:", animals);
animals.unshift("elephant");
console.log("After unshift:", animals);
animals.pop();
console.log("After pop:", animals);
</code></details>
<details><summary>
3. Search in Array:
</summary><code>
const numbers = [10, 20, 30, 40, 50];
console.log("Includes 30:", numbers.includes(30));
console.log("Index of 40:", numbers.indexOf(40));
console.log("Includes 100:", numbers.includes(100));
</code></details >
<details><summary>
4. Transform with map:
</summary><code>
const prices = [10, 25, 50];
const discountedPrices = prices.map(price => price * 0.9);
console.log("Original prices:", prices);
console.log("Discounted prices:", discountedPrices);
</code></details>
<details><summary>
5. Filter with filter:
</summary><code>
const ages = [12, 18, 20, 15, 22];
const adultAges = ages.filter(age => age >= 18);
console.log("Original ages:", ages);
console.log("Adult ages:", adultAges);
</code></details>
<details><summary>
6. Convert Array to String and Back:
</summary><code>
const words = ["hello", "world", "javascript"];
const joinedString = words.join(" ");
console.log("Joined string:", joinedString);
const backToArray = joinedString.split(" ");
console.log("Back to array:", backToArray);
</code></details>
<details><summary>
7. Sum with reduce:
</summary><code>
const values = [1, 2, 3, 4, 5];
const sumOfValues = values.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
console.log("Sum of values:", sumOfValues);
</code></details>

### 💡 Key Takeaways for Day 05:

- Arrays are ordered collections, indexed from 0.
- Many array methods (e.g., push, pop, shift, unshift, splice) mutate (change) the original array.
- Other methods (e.g., indexOf, includes, slice, concat, map, filter, reduce) return a new array or value and do not modify the original array. This is often preferred for predictable code.
- Higher-order array methods (forEach, map, filter, reduce) are powerful for iterating and transforming arrays efficiently using callback functions.
````
