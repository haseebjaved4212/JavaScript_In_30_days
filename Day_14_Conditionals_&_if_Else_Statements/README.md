# Day 14: Conditional Statements
Welcome to Day 14 of our 30 Days of JavaScript Challenge! Today, we're diving into conditional statements, which are fundamental to programming. They allow your code to make decisions and execute different blocks of code based on whether a condition is true or false.

Our project, the "Age Eligibility Checker," will provide a practical way to apply if/else and switch statements to solve a real-world problem.

## 📚 Core Concepts Covered:

**1. if, else if, and else**

This is the most common way to handle conditional logic. The if statement executes a block of code if its condition is true. You can chain `else if` statements to check for more conditions and use an else block as a fallback for all other cases.

**Syntax:**

```js
if (condition1) {
  // Code to run if condition1 is true
} else if (condition2) {
  // Code to run if condition2 is true
} else {
  // Code to run if all conditions are false
}
```
**Example:**
```js
const age = 19;
if (age >= 18) {
  console.log('You are an adult.');
} else {
  console.log('You are a minor.');
}
```
**2. switch Statement**

A switch statement is an alternative to a long if...else if... chain, especially when you are comparing a single value against multiple possible cases.

**Syntax:**

```js
switch (expression) {
  case value1:
    // Code to run if expression === value1
    break; // Important! Exits the switch statement
  case value2:
    // Code to run if expression === value2
    break;
  default:
    // Code to run if no cases match
}
```
**Example:**

```js
const day = 'Monday';
switch (day) {
  case 'Monday':
    console.log('Start of the week!');
    break;
  case 'Friday':
    console.log('Weekend is near!');
    break;
  default:
    console.log('Just another day.');
}
```
The `break` keyword is crucial. Without it, the code will "fall through" and execute the code for the next case as well.

## 🚀 Project for Day 3: Age Eligibility Checker

In this project, you will create a simple web page that asks for a user's age and then uses conditional logic to check their eligibility for different activities. This demonstrates how you can take user input and make decisions based on it.

**Features**

- A text input field for the user to enter their age.

- A "Check Eligibility" button to trigger the logic.

- The logic will use an if...else if...else structure to determine:

- If the user is a senior citizen (65+).

- If the user is eligible to vote (18+).

- If the user is eligible to drive (16+).

- If the user is a minor (under 16).

- The results will be displayed dynamically on the page.



**💻 Project Logic Breakdown (index.js)**

The index.js file handles all the logic for the project.

**1. DOM Element Selection:**

- It first selects the HTML elements it needs to interact with, like the input field, button, and result display area.

**2. checkAgeEligibility() Function:**

- This is the main function that runs when the button is clicked.

- It gets the value from the age input and converts it to a number using parseInt().

- It then uses a clear if...else if...else chain to test the age against different conditions.

- Based on which condition is true, it sets a message string.

- Finally, it updates the resultsDiv on the webpage with the new message.

**3. Event Listener:**

The `checkBtn.addEventListener('click', checkAgeEligibility)` line is crucial. It listens for the click event on the button and, when it occurs, it executes the `checkAgeEligibility()` function.


## ✅ Practice Set :

<details><summary>
1. Simple if statement:
</summary>

```js
const isRaining = true;
if (isRaining) {
  console.log("Bring an umbrella!");
}
```
</details>
<details><summary>
2. if...else with a comparison:
</summary>

```js
const temperature = 15;
if (temperature > 20) {
  console.log("It's a nice day!");
} else {
  console.log("It's a bit chilly.");
}
```
</details>
<details><summary>
3. switch statement:
</summary>

```js
const fruit = "banana";
switch (fruit) {
  case "apple":
    console.log("An apple a day keeps the doctor away.");
    break;
  case "banana":
    console.log("Bananas are a great source of potassium.");
    break;
  case "orange":
    console.log("Oranges are full of Vitamin C.");
    break;
  default:
    console.log("That's not a fruit I know!");
}
```
</details>
