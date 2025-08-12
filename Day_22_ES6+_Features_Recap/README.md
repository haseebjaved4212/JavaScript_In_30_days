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

## Simple Shopping Cart: A Deep Dive into ES6+ for State Management

**Introduction**

Welcome to Day 22! Today, we're building a functional shopping cart. This project is a fantastic demonstration of why modern JavaScript features are so powerful, especially for managing the state of an application. We'll use Template Literals, the Spread Operator, and Default Parameters to create an interactive cart that handles adding items, calculating totals, and managing quantities.

**Features**

- Product Catalog: A static list of products with prices.

- Add to Cart: Buttons to add a product to the cart.

- Dynamic Cart Display: The cart updates in real-time as you add items.

- Total Price: The total cost of all items in the cart is automatically calculated and displayed.

**Key JavaScript Concepts in Action**

**1. Spread Operator (...)**

The spread operator is the star of this project. We'll use it to handle state updates in an immutable way. Instead of directly modifying our cart array (which can lead to bugs), we'll use the spread operator to create a new array every time we add or update an item. For example, to add a new item, we'll write [...cart, newItem], which is much cleaner and safer than `cart.push(newItem)`.


**2. Template Literals**

We'll rely heavily on template literals (strings enclosed by backticks ``) to render the products and the items in the shopping cart. This allows us to embed HTML and JavaScript variables directly into a string, which makes our rendering logic much more readable and concise.

**3. Default Parameters**

We'll use a default parameter in our `addToCart` function to set a default quantity of 1 for new items. This makes the function more robust and flexible, as it can be called with or without a quantity argument.


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