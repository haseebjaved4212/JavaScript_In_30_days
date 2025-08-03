# Day 13: JSON - Parsing and Stringifying
Welcome to Day 13 of our 30 Days of JavaScript Challenge! Today, we are focusing on JSON (JavaScript Object Notation), a lightweight, text-based data exchange format that is independent of any programming language. It is the de facto standard for sending data between a server and a web application.

Our project for today, the "Config File Simulator," will teach you the two most important JSON methods: `JSON.stringify()` and `JSON.parse()`. This simulates a common scenario where you need to save a JavaScript object to a file or database and then load   it back later.

## 📚 Core Concepts Covered:
**1. What is JSON?**

JSON is a text format that looks very similar to a JavaScript object literal. However, there are a few key differences:

- Keys must be double-quoted strings.

   - Valid JSON: `{"name": "Alice"}`

   - Invalid JSON `(JS object literal): {name: "Alice"}`

- Values must be primitive data types (strings, numbers, booleans, null) or other JSON objects/arrays.

  - Valid JSON: `{"isStudent": true, "age": 25}`

   - Invalid JSON:` { "func": () => {} } (Functions are not allowed in JSON)`

**2. Converting a JavaScript Object to a JSON String (`JSON.stringify()`)**


This method takes a JavaScript value (usually an object or array) and converts it into a JSON string. This process is called serialization. You use this method when you need to send data to a server or save it to a file.

**Syntax:**

` JSON.stringify(value, replacer, space)`

**value:** The value to convert.

- replacer (optional): A function or array that filters which properties are included.

- space (optional): A number or string to use for indentation, making the output human-readable.

**Example:**

```js
const userProfile = {
  name: 'Bob',
  age: 30,
  isLoggedIn: true,
};
// Convert to a compact JSON string

const jsonString = JSON.stringify(userProfile);
console.log(jsonString); // Output: {"name":"Bob","age":30,"isLoggedIn":true}

// Convert with indentation for readability
const readableJsonString = JSON.stringify(userProfile, null, 2);
console.log(readableJsonString);
/*
Output:
{
  "name": "Bob",
  "age": 30,
  "isLoggedIn": true
}
*/
```
**3. Converting a JSON String to a JavaScript Object (`JSON.parse()`)**

This method takes a JSON string and converts it into a JavaScript object. This process is called deserialization. You use this method when you receive data from an API or read it from a file.

**Syntax:** 

`JSON.parse(text, reviver)`

**text:**

 The JSON string to parse.

- reviver (optional): A function that can transform the parsed values.

**Example:**

```js

const jsonString = '{"name":"Bob","age":30,"isLoggedIn":true}';

// Convert to a JavaScript object
const userObject = JSON.parse(jsonString);
console.log(userObject);
// Output: { name: 'Bob', age: 30, isLoggedIn: true }

// You can now access its properties
console.log(userObject.name); // Output: Bob
```

## 🚀 Project for Day 13: Config File Simulator
Today's project is a simple web application that simulates a configuration file editor. You will start with a JavaScript object, convert it to a JSON string, and then parse that string back into an object. This will help you understand the data flow when working with JSON.

**Features:**

- A predefined JavaScript object representing a configuration.

- A button to convert the JavaScript object to a JSON string, displaying the result.

- A button to parse that JSON string back into a JavaScript object, displaying the result.

- The page displays both the original JavaScript object and the converted data in a clear format.



## ✅ Practice Set :
<details><summary >
1. Serialize an Array:
</summary>

```js

const fruits = ['apple', 'banana', 'orange'];
const fruitsJson = JSON.stringify(fruits);
console.log(fruitsJson); // Output: ["apple","banana","orange"]
```
</details>
<details><summary >
2. Parse and Access a Nested Object:
</summary>

```js
const serverResponse = '{"user": {"id": 101, "name": "Charlie"}}';
const dataObject = JSON.parse(serverResponse);
console.log(dataObject.user.name); // Output: Charlie
```
</details>
<details><summary >
3. Handle Unsupported Data Types:
</summary>

```js
const invalidObject = { id: 1, action: () => console.log('hello') };
const result = JSON.stringify(invalidObject);
console.log(result); // Output: {"id":1}
```
</details>


## 💡 Key Takeaways for Day 13:
- JSON is a string format, not a JavaScript object. It is used to represent data for transport.

- Use `JSON.stringify()` to convert a JavaScript object into a JSON string.

- Use `JSON.parse()` to convert a JSON string back into a JavaScript object.

- These two methods are fundamental for working with web APIs, local storage, and server-side communication.


