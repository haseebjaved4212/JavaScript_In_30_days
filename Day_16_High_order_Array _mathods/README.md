 
#  Day 10: Higher-Order Array Methods (forEach, map, filter, reduce)

Welcome to Day 10 of our 30 Days of JavaScript Challenge! Today, we're tackling some of the most powerful and frequently used tools in modern JavaScript: Higher-Order Array Methods. These methods allow you to iterate, transform, and aggregate data in arrays in a declarative and efficient way, making your code cleaner and more readable.

Our project, the "Student Grade Analyzer," will provide a practical scenario to apply forEach(), map(), filter(), and reduce() to process student scores and generate insights.

## 📚 Core Concepts Covered:
**1. What are Higher-Order Array Methods?**

Higher-order functions are functions that can take other functions as arguments or return functions as their results. Higher-order array methods are specific methods built into JavaScript arrays that accept a "callback function" as an argument. This callback function is then executed for each element in the array, allowing for powerful data manipulation.

These methods are non-mutating (they don't change the original array) unless explicitly stated, which is a key benefit for predictable code.

**2. `Array.prototype.forEach()`**


- The `forEach()` method executes a provided function once for each array element. It's primarily used for iterating over an array and performing a side effect (e.g., logging to the console, updating the DOM).

- Purpose: To iterate over an array and perform an action for each element.

- Return Value: undefined. It does not create a new array.

- Syntax: `array.forEach(callback(currentValue, index, array))`

**Example:**

```js
const fruits = ['apple', 'banana', 'cherry'];
fruits.forEach((fruit, index) => {
    console.log(`${index + 1}. ${fruit}`);
});
// Output:
// 1. apple
// 2. banana
// 3. cherry
```
**3. `Array.prototype.map()`**

- The `map()` method creates a new array by calling a provided function on every element in the calling array. It's perfect for transforming each element into a new value.

- Purpose: To transform each element in an array and create a new array of the same length.

- Return Value: A new array containing the results of calling the callback function on every element.

- Syntax: `array.map(callback(currentValue, index, array))`

**Example:**

```js
const numbers = [1, 2, 3];
const doubled = numbers.map(num => num * 2);
console.log(doubled); // Output: [2, 4, 6]
console.log(numbers); // Output: [1, 2, 3] (original array is unchanged)`
```

**4. `Array.prototype.filter()`**

- The` filter()` method creates a new array containing all elements that pass a test implemented by the provided function. It's used for selecting a subset of an array based on a condition.

- Purpose: To select elements from an array based on a condition.

- Return Value: A new array containing only the elements for which the callback function returned true.

- Syntax: `array.filter(callback(currentValue, index, array))`

**Example:**

```js

const ages = [12, 19, 25, 8, 30];
const adults = ages.filter(age => age >= 18);
console.log(adults); // Output: [19, 25, 30]
console.log(ages);  // Output: [12, 19, 25, 8, 30] (original array is unchanged)
```

**5. `Array.prototype.reduce()`**

- The `reduce()` method executes a reducer function on each element of the array, resulting in a single output value. It's incredibly versatile and can be used to sum numbers, flatten arrays, count occurrences, or build new objects.

- Purpose: To accumulate a single value from an array.

- Return Value: The single accumulated value.

- Syntax: `array.reduce(callback(accumulator, currentValue, index, array), initialValue)`

- accumulator: The value resulting from the previous callback invocation.

- currentValue: The current element being processed.

- initialValue (optional): The value to use as the first accumulator call. If not provided, the first element of the array is used, and iteration starts from the second element. It's generally recommended to always provide an initialValue.

**Example (Summing Numbers):**

```js

const numbers = [1, 2, 3, 4];
const sum = numbers.reduce((acc, num) => acc + num, 0); // initialValue is 0
console.log(sum); // Output: 10

Example (Counting Occurrences):

const colors = ['red', 'blue', 'red', 'green', 'blue'];
const colorCounts = colors.reduce((acc, color) => {
    acc[color] = (acc[color] || 0) + 1;
    return acc;
}, {}); // initialValue is an empty object
console.log(colorCounts); // Output: { red: 2, blue: 2, green: 1 }
```

## 🚀 Project for Day 10: Student Grade Analyzer

Today's project will use a predefined array of student objects, each with a name and a score. You will use map(), filter(), and reduce() to perform different analyses on this data and display the results.



**Features:**

- A hardcoded array of student objects ({ name: '...', score: ... }).

- The UI displays the original student data.

- A "Calculate Letter Grades" button that uses `map()` to assign a letter grade (A, B, C, D, F) to each student based on their score.

- A "Filter Passing Students" button that uses `filter()` to display only students who scored 60 or above.

- A "Calculate Average Score" button that uses `reduce()` to compute the average score of all students.




**💻 Project Logic Breakdown (index.js)**

The index.js file contains the sample student data, the functions for each analysis using higher-order array methods, and the logic to render the results in the UI.

**1. students Array:**

- This is our sample data: an array of objects, each representing a student with a name and score.

**2. calculateLetterGrades() Function:**
```js
// Uses map() to create a new array of student objects with an added 'grade' property.
const studentsWithGrades = students.map(student => {
    let grade;
    if (student.score >= 90) grade = 'A';
    else if (student.score >= 80) grade = 'B';
    else if (student.score >= 70) grade = 'C';
    else if (student.score >= 60) grade = 'D';
    else grade = 'F';
    return { ...student, grade }; // Use spread operator to create a new object
});
```
- This function uses` map()` to iterate over each student. For each student, it determines a letter grade based on their score and returns a new object that includes all original student properties plus the new grade property. The ...student (spread operator) is used to copy all properties from the original student object.

**3. filterPassingStudents() Function:**

```js
// Uses filter() to create a new array containing only students with a score >= 60.
const passingStudents = students.filter(student => student.score >= 60);
```
- This function uses `filter() `to select students whose score is 60 or higher, effectively creating a list of only the passing students.

**4. calculateAverageScore() Function:**

```js
// Uses reduce() to first sum all scores, then divides by the number of students.
const totalScore = students.reduce((sum, student) => sum + student.score, 0);
const averageScore = students.length > 0 ? totalScore / students.length : 0;
```
- This function uses reduce() to accumulate the sum of all student scores. The 0 is provided as the initialValue for the accumulator. After getting the total sum, it calculates the average by dividing by the number of students, handling the case of an empty array to prevent division by zero.

**5. `renderResults() `Function:**

- This utility function takes a title and data, and renders it neatly on the page. It uses JSON.stringify() for readable output of objects and arrays.


## ✅ Practice Set :

<details><summary>
1. forEach() for Logging:
</summary>

```js
const names = ['Alice', 'Bob', 'Charlie'];
names.forEach(name => {
    console.log(`Hello, ${name}!`);
});
// Output:
// Hello, Alice!
// Hello, Bob!
// Hello, Charlie!
``` 
</details>
<details><summary>
2. map() for Price Formatting:
</summary>

```js
const prices = [10.99, 5.00, 23.50];
const formattedPrices = prices.map(price => `$${price.toFixed(2)}`);
console.log(formattedPrices); // Output: ["$10.99", "$5.00", "$23.50"]
```
</details>
<details><summary>
3. filter() for Short Words:
</summary>


```js
const words = ['apple', 'banana', 'cat', 'dog', 'elephant'];
const shortWords = words.filter(word => word.length <= 5);
console.log(shortWords); // Output: ["apple", "cat", "dog"]
```
</details>
<details><summary>
4. reduce() for Max Value:
</summary>

```js
const temperatures = [22, 18, 25, 30, 15];
const maxTemp = temperatures.reduce((max, current) => {
    return (current > max) ? current : max;
}, temperatures[0]); // Start with the first element as the initial max
console.log(maxTemp); // Output: 30
```
</details>

---
## 💡 Key Takeaways for Day 10:

- Higher-Order Array Methods are functions that take other functions (callbacks) as arguments.

- `forEach()` is for iterating and performing side effects. It doesn't return a new array.

- `map() `is for transforming each element and always returns a new array of the same length.

- `filter()` is for selecting elements based on a condition and always returns a new array (or an empty array if no elements pass).

- `reduce()` is for accumulating a single value from an array. It's incredibly versatile.

- These methods promote a functional programming style, making your code more declarative, readable, and less prone to side effects on the original array.