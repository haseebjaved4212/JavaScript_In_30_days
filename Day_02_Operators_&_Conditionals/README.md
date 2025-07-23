# Day 02: Operators & Conditional Statements

## 📚 **Topics Covered:**

* **Operators:**
    * **Arithmetic:** `+`, `-`, `*`, `/`, `%`, `**`
    * **Comparison:** `==`, `===`, `!=`, `!==`, `>`, `<`, `>=`, `<=`
    * **Logical:** `&&` (AND), `||` (OR), `!` (NOT)
    * **Increment/Decrement:** `++`, `--`
* **Conditional Statements:**
    * `if`
    * `else if`
    * `else`

## 💻 **Code Examples (`index.js`):**

### --- Arithmetic Operators ---
```javascript
let num1 = 15;
let num2 = 4;
console.log("Arithmetic:");
console.log("Addition:", num1 + num2);     // 19
console.log("Subtraction:", num1 - num2);  // 11
console.log("Multiplication:", num1 * num2); // 60
console.log("Division:", num1 / num2);     // 3.75
console.log("Modulus (Remainder):", num1 % num2); // 3
console.log("Exponentiation (15^2):", num1 ** 2); // 225
console.log("---");
```
### --- Comparison Operators ---
```js
let x = 10;
let y = '10';
console.log("Comparison:");
console.log("Loose Equality (10 == '10'):", x == y);   // true
console.log("Strict Equality (10 === '10'):", x === y); // false
console.log("Not Equal (10 != '10'):", x != y);         // false
console.log("Strict Not Equal (10 !== '10'):", x !== y); // true
console.log("Greater Than (10 > 5):", x > 5);           // true
console.log("Less Than (10 < 10):", x < 10);            // false
console.log("---");
```
### --- Logical Operators ---

```js
let sunny = true;
let warm = false;
console.log("Logical:");
console.log("Sunny AND Warm:", sunny && warm);   // false
console.log("Sunny OR Warm:", sunny || warm);    // true
console.log("NOT Sunny:", !sunny);               // false
console.log("---");
```
### --- Increment/Decrement Operators ---
```js
let counter = 5;
console.log("Increment/Decrement:");
counter++; // counter is now 6
console.log("After increment:", counter); // 6
counter--; // counter is now 5
console.log("After decrement:", counter); // 5
console.log("---");
```
### --- Conditional Statements ---


```js
let hour = 14; // 2 PM
console.log("Conditional Statements:");
if (hour < 12) {
    console.log("Good morning!");
} else if (hour < 18) {
    console.log("Good afternoon!");
} else {
    console.log("Good evening!");
}

let score = 85;
if (score >= 90) {
    console.log("Grade: A");
} else if (score >= 80) {
    console.log("Grade: B");
} else if (score >= 70) {
    console.log("Grade: C");
} else {
    console.log("Grade: F");
}
```

#### 1. Even or Odd Checker:

Write a JavaScript program that takes a number (you can hardcode it for now, e.g., let num = 7;) and prints whether it's "Even" or "Odd" using the modulus operator (%) and an if/else statement.

#### 2. Voting Eligibility Checker:

Create variables age (number) and isCitizen (boolean). Write an if/else statement that prints whether a person is "Eligible to Vote" or "Not Eligible to Vote". A person is eligible if they are 18 or older AND are a citizen.

## Day 02 Project: Simple Interactive Calculator & Decision Maker

This project combines basic arithmetic operations with conditional logic to create a program that can perform calculations and make simple decisions based on user input (simulated for now, as we haven't covered actual user input yet).

### Project Goal
- To demonstrate understanding of:

- Arithmetic Operators

- Comparison Operators

- Logical Operators

- if, else if, else Statements

### Your Day 2 Challenges 

Try each task yourself first, then unfold the Solution tab to compare

<details><summary> CHALLENGE 1: Even or Odd Checker
</summary><code>
let myNumber = 14; // Try changing this number!
if (myNumber % 2 === 0) { // YOUR CONDITION HERE
    console.log(`${myNumber} is an Even number.`);
} else {
    console.log(`${myNumber} is an Odd number.`);
}</code>
</details>

  
  <details><summary> CHALLENGE 2: Voting Eligibility Checker
  </summary><code>
let personAge = 20;
let isCitizen = true; // Set to false to test different outcomes

if (personAge >= 18 && isCitizen) { // YOUR CONDITION HERE
    console.log(`Age ${personAge}, Citizen: ${isCitizen}. This person is Eligible to Vote.`);
} else {
    console.log(`Age ${personAge}, Citizen: ${isCitizen}. This person is NOT Eligible to Vote.`);
}
</code>
</details>  

  
<details><summary> CHALLENGE 3: Simple Grade Converter
 Based on a score, print the corresponding letter grade (A, B, C, D, F)
 A: 90-100, B: 80-89, C: 70-79, D: 60-69, F: Below 60
 </summary><code>
let studentGradeScore = 75; // Try different scores!

if (studentGradeScore >= 90) { // CONDITION FOR A
    console.log(`Score ${studentGradeScore}: Grade A`);
} else if (studentGradeScore >= 80) { // CONDITION FOR B
    console.log(`Score ${studentGradeScore}: Grade B`);
} else if (studentGradeScore >= 70) { // CONDITION FOR C
    console.log(`Score ${studentGradeScore}: Grade C`);
} else if (studentGradeScore >= 60) { // CONDITION FOR D
    console.log(`Score ${studentGradeScore}: Grade D`);
} else {
    console.log(`Score ${studentGradeScore}: Grade F`);
}
</code>
</details>