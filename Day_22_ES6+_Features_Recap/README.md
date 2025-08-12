# Day 22: ES6+ Features Recap

Today, we're solidifying our understanding of three fundamental ES6+ features: Template Literals, the Spread/Rest Operators, and Default Parameters. We'll review each concept and then apply all three in a single practice exercise.

***1. Template Literals (``)***

Template literals are an improved way to create strings. They use backticks `` instead of single or double quotes, allowing you to embed expressions and variables directly within the string. This makes string concatenation much cleaner and more readable.

**Key Features:**

- Multi-line Strings: You can write strings that span multiple lines without needing the \n character.

- Expression Interpolation: You can insert variables or JavaScript expressions using ${...}.

**Example:**
```js
const name = 'Alice';
const age = 30;
const message = `Hello, my name is ${name} and I am ${age} years old.`;

console.log(message); // "Hello, my name is Alice and I am 30 years old."
```

***2. Spread (...) & Rest (...) Operators***

This is a single operator with two distinct uses depending on the context.

**The Spread Operator**

When used in an array literal or function call, the spread operator unpacks the elements of an iterable (like an array) or the properties of an object. It's often used to create a new array or object without mutating the original.

**Example (Arrays):**

```js
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const combinedArr = [...arr1, ...arr2]; // Spreads the elements of arr1 and arr2 into a new array.

console.log(combinedArr); // [1, 2, 3, 4, 5, 6]
```

**Example (Objects):**

```js
const user = { name: 'Bob', age: 25 };
const updatedUser = { ...user, city: 'New York' }; // Spreads user properties and adds a new one.

console.log(updatedUser); // { name: 'Bob', age: 25, city: 'New York' }
```



**The Rest Operator**

When used in a function's parameters, the rest operator gathers all remaining arguments into a single array. This is perfect for functions that can accept a variable number of arguments.


**Example:**

```js
function greet(name = 'Guest') {
    return `Hello, ${name}!`;
}

console.log(greet('Charlie')); // "Hello, Charlie!"
console.log(greet()); // "Hello, Guest!"
```
***3. Default Parameters***

Default parameters allow you to initialize a function parameter with a default value if an argument is not provided or is undefined. This prevents errors and makes your functions more robust.

**Example:**

```js
function greet(name = 'Guest') {
    return `Hello, ${name}!`;
}

console.log(greet('Charlie')); // "Hello, Charlie!"
console.log(greet()); // "Hello, Guest!"
```
## Practice Set:
<details>
<summary >
1. Create a function named createUserSummary.

 It should accept a name and a variable number of hobbies.

 The name parameter should have a default value of 'Anonymous'.

 The function should use a rest parameter to collect all the hobbies into an array.

 Inside the function, use a template literal to return a string that includes the user's name and a list of their hobbies. If there are no hobbies, the message should say so.

 Call the function with and without hobbies to test both scenarios.
</summary>

```js

function createUserSummary(name = 'Anonymous', ...hobbies) {
    const hobbiesText = hobbies.length > 0
        ? hobbies.join(', ')
        : 'no hobbies listed';

    return `User: ${name}. Hobbies: ${hobbiesText}.`;
}
``` 
</details>

## Key Takeaways

- Readability: Template literals make code cleaner and easier to read by eliminating complex string concatenation.

- Immutability: The spread operator is a core tool for writing predictable, bug-free code by creating new arrays and objects instead of modifying existing ones.

- Flexibility: The rest operator and default parameters make your functions more robust and flexible, allowing them to handle a wider range of inputs without explicit checks.