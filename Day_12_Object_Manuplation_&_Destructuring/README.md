# Day 12: Object Manipulation and Destructuring

Welcome to Day 12 of our 30 Days of JavaScript Challenge! Today's session is all about working with JavaScript objects efficiently. We'll explore powerful built-in methods and a modern syntax feature that makes extracting and organizing data from objects incredibly simple.

Our project for today, the "Book Information Extractor," will put these concepts into practice. We'll start with an array of book objects and then use Object methods and destructuring to get exactly the information we need.

## 📚 Core Concepts Covered:

**1. Object Manipulation Methods**

These methods are static functions on the global Object class that allow you to convert an object's properties into arrays, which you can then easily process using array methods like forEach, map, filter, and reduce.

 - `Object.keys(obj)`: Returns an array of the object's property keys.
```js
const book = { title: '1984', author: 'George Orwell', year: 1949 };
const keys = Object.keys(book);
console.log(keys); // Output: ['title', 'author', 'year']
```
- `Object.values(obj)`: Returns an array of the object's property values.
```js
const book = { title: '1984', author: 'George Orwell', year: 1949 };
const values = Object.values(book);
console.log(values); // Output: ['1984', 'George Orwell', 1949]
```
- `Object.entries(obj)`: Returns an array of the object's [key, value] pairs. This is often the most versatile method.
```js
const book = { title: '1984', author: 'George Orwell', year: 1949 };
const entries = Object.entries(book);
console.log(entries);
// Output:
// [
//   ['title', '1984'],
//   ['author', 'George Orwell'],
//   ['year', 1949]
// ]
```
You can easily iterate over these entries:
```js
for (const [key, value] of Object.entries(book)) {
  console.log(`${key}: ${value}`);
}
// title: 1984
// author: George Orwell
// year: 1949
```
**2. Object Destructuring**

Destructuring is a modern JavaScript syntax that makes it easy to unpack values from arrays or properties from objects into distinct variables. It's an elegant way to avoid repetitive code when accessing object properties.

- `Basic Destructuring`: You can extract specific properties directly into variables.
```js
const user = { name: 'Alice', age: 30 };
const { name, age } = user;
console.log(name); // Output: 'Alice'
console.log(age);  // Output: 30
```
Destructuring with Aliases: You can rename the extracted variables.
```js
const user = { name: 'Alice', age: 30 };
const { name: userName, age: userAge } = user;
console.log(userName); // Output: 'Alice'
```
Destructuring in Function Parameters: This is a very common and useful pattern for extracting specific properties from an object passed to a function.
```js
function printBookDetails({ title, author }) {
  console.log(`Title: ${title}, Author: ${author}`);
}
const book = { title: 'The Hobbit', author: 'J.R.R. Tolkien', year: 1937 };
printBookDetails(book); // Output: Title: The Hobbit, Author: J.R.R. Tolkien
```
## 🚀 Project for Day 12: Book Information Extractor

Today's project will use a predefined array of book objects. Your task is to process this data to extract only the title and author from each book and display the results in a clean format. This demonstrates a real-world use case for these powerful object manipulation techniques.

**Features:**
- A hardcoded array of objects representing different books.

- The webpage displays the original, raw data.

- A button triggers a function that processes the data.

- The function uses object destructuring to extract the title and author from each book object.

- The processed, clean data is then displayed on the page.


**💻 Project Logic Breakdown (index.js)**


The index.js file handles the data, the processing function, and the rendering logic.

**1. Sample Data (books array)**

This is our starting point—an array of objects, each containing full book details.

**2. extractBookInfo() Function**

```js
function extractBookInfo() {
    // We use .map() to create a new array.
    const extractedData = books.map(book => {
        // Use object destructuring to pull out just 'title' and 'author'.
        const { title, author } = book;
        return { title, author }; // Return a new object with only these two properties.
    });
    // ...
}
```
This is a clean and modern way to process the data. It uses the map method to iterate over each book and object destructuring to pull out only the title and author properties.

**3. UI Rendering**

The `renderOriginalBooks()` and `renderExtractedInfo()` functions handle displaying the data on the webpage, making it easy to compare the original data with the processed results.

##  Key Takeaways for Day 12:

- `Object.keys()`, `Object.values(),` and `Object.entries()` are excellent for iterating over object properties.

- Object destructuring is a powerful syntax for extracting data from objects, leading to cleaner and more readable code.

- Combining these techniques with array methods like map and forEach allows for efficient and expressive data transformation.