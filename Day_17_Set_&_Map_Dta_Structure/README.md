# Day 17: Introduction to Set and Map Data Structures
Welcome to Day 17 of our 30 Days of JavaScript Challenge! Today, we're exploring two relatively newer (ES6) built-in data structures in JavaScript: Set and Map. While arrays and objects are versatile, Set and Map offer specialized functionalities that can make certain tasks more efficient and elegant.

Our project, the "Unique Item Tracker," will provide a hands-on way to understand when and how to use Set for unique collections and Map for more flexible key-value pairs.

## 📚 Core Concepts Covered:
**1. Set Data Structure**

A Set is a collection of unique values. Each value can only occur once in a Set. It's useful when you need to store a list of items where duplicates are not allowed, and the order of insertion doesn't matter (though iteration order is preserved).

**Key Characteristics:**

- *Unique Values:*
 Automatically handles duplicates; adding an existing value has no effect.

- *No Indexed Access:*
 You cannot access elements by index (like mySet[0]).

- *Iterable:* You can iterate over Set elements using `for...of` or `forEach()`.

**Creating a Set:**
```js
const mySet = new Set();
const anotherSet = new Set([1, 2, 2, 3, 'hello', 'hello']); // Initializes with unique values
console.log(anotherSet); // Output: Set(4) {1, 2, 3, "hello"}
```
**Common Set Methods:**

- `set.add(value):` Adds a new value to the Set. Returns the Set object.
```js
mySet.add(10);
mySet.add('apple');
mySet.add(10); // This has no effect
console.log(mySet); // Output: Set(2) {10, "apple"}
```
- `set.delete(value)`: Removes a value from the Set. Returns true if the value was present and removed, false otherwise.
```js
mySet.delete('apple');
console.log(mySet); // Output: Set(1) {10}
```

`set.has(value):` Returns true if the value exists in the Set, false otherwise.

```js
console.log(mySet.has(10));    // Output: true
console.log(mySet.has('banana')); // Output: false
```

`set.size`: Returns the number of unique values in the Set.

```js
console.log(mySet.size); // Output: 1
```
`set.clear()`: Removes all values from the Set.

  ```js
mySet.clear();
console.log(mySet.size); // Output: 0
```

**Iterating a Set:**

```js
const fruits = new Set(['apple', 'banana', 'orange']);
fruits.forEach(fruit => console.log(fruit));
// OR
for (const fruit of fruits) {
    console.log(fruit);
}
```
**Use Cases for Set:**

- Removing duplicate elements from an array: `[...new Set(myArray)]
`
- Checking for the presence of an item quickly.

- Tracking unique visitors, unique tags, etc.

**2. Map Data Structure**

A Map is a collection of key-value pairs, similar to an object, but with a few significant differences that make it more powerful and flexible for certain scenarios.

**Key Characteristics:**

Any Data Type as Key: Unlike objects, where keys are always converted to `strings`, Maps allow you to use any data type `(numbers, booleans, objects, functions, null, NaN)` as keys.

- Order of Insertion: The order of elements is preserved.

- Iterable: You can iterate over Map elements using `for...of` or `forEach()`.

**Creating a Map:**

```js
const myMap = new Map();
const anotherMap = new Map([
    ['name', 'Alice'],
    [1, 'one'],
    [true, 'yes']
]);
console.log(anotherMap);
// Output: Map(3) {"name" => "Alice", 1 => "one", true => "yes"}
```
**Common Map Methods:**

- `map.set(key, value)`: Adds or updates a key-value pair. Returns the Map object.
```js
myMap.set('color', 'blue');
myMap.set(123, 'numberKey');
const objKey = { id: 1 };
myMap.set(objKey, 'object as key');
console.log(myMap);
// Output: Map(3) {"color" => "blue", 123 => "numberKey", {…} => "object as key"}
```
- `map.get(key):` Retrieves the value associated with a given key. Returns undefined if the key does not exist.

```js
console.log(myMap.get('color'));   // Output: "blue"
console.log(myMap.get(objKey)); // Output: "object as key"
console.log(myMap.get('nonExistent')); // Output: undefined
```

- `map.has(key)`: Returns true if the key exists in the Map, false otherwise.

```js
console.log(myMap.has('color')); // Output: true
```
- `map.delete(key)`: Removes a key-value pair by key. Returns true if the element existed and was removed, false otherwise.

```js
myMap.delete('color');
console.log(myMap.has('color')); // Output: false
```
`map.size:` Returns the number of key-value pairs in the Map.

```js
console.log(myMap.size); // Output: 2
```
`map.clear()`: Removes all key-value pairs from the Map.

```js
myMap.clear();
console.log(myMap.size); // Output: 0
```
**Iterating a Map:**

```js
const userRoles = new Map([['admin', 'John'], ['editor', 'Jane']]);
userRoles.forEach((value, key) => console.log(`${key}: ${value}`));
// OR
for (const [key, value] of userRoles) {
    console.log(`${key}: ${value}`);
}
// OR (get keys or values only)
for (const key of userRoles.keys()) { console.log(key); }
for (const value of userRoles.values()) { console.log(value); }
```
**Use Cases for Map:**

- Storing data where keys are not strings (e.g., DOM elements, objects).

- Maintaining insertion order of key-value pairs.

- When you frequently add/remove key-value pairs.

- Implementing caches or look-up tables.

## 🚀 Project for Day 14: Unique Item Tracker

Today's project will demonstrate the practical use of both Set and Map data structures. You'll have a simple UI to add items to a unique list (using Set) and manage product codes with names (using Map).

**Features:**

- Set Section:

- Input field to add items.

- Button to add an item to a Set.

- Button to check if an item exists in the Set.

- Button to remove an item from the Set.

- Displays the current unique items in the Set.

**Map Section:**

- Input fields for product code (key) and product name (value).

- Button to add/update a product in a Map.

- Button to get a product name by its code.

- Button to remove a product by its code.

- Displays all current key-value pairs in the Map.


**💻 Project Logic Breakdown (index.js)**

The index.js file contains the core logic for managing the Set and Map data structures and updating the UI.

**1. Data Structures Initialization:**

```js
const uniqueItems = new Set(); and const productMap = new Map(); initialize our two main data structures.
  ```
**2. Set Operations (addUniqueItem, checkUniqueItem, removeUniqueItem):**

- These functions directly use `uniqueItems.add()`, `uniqueItems.has()`, and` uniqueItems.delete()`.

- After each operation, `renderSetDisplay()` is called to update the UI.

**3. Map Operations (addProduct, getProduct, removeProduct):**

These functions use` productMap.set()`, `productMap.get()`, and `productMap.delete()`.

- `addProduct` takes both a key (product code) and a value (product name).

- `getProduct` retrieves the value and displays it.

- After each operation, `renderMapDisplay()` is called.

**4. Rendering Functions (renderSetDisplay, renderMapDisplay):**


- `renderSetDisplay():` Clears the display area and then iterates over uniqueItems using `forEach()` to create &lt;li>  elements for each item.

- `renderMapDisplay():` Clears the display area and then iterates over productMap using `forEach()` (which provides value, key as arguments) to create &LT;li> elements for each key-value pair.

- They update the textContent of the respective size displays.

**5. Event Listeners:**

- All buttons are connected to their corresponding JavaScript functions using `addEventListener('click', ...)`.

**6. Initial Setup (DOMContentLoaded):**

- When the page loads,` renderSetDisplay()` and ``renderMapDisplay()`` are called once to set up the initial empty (or pre-filled) displays.



## ✅ Practice Set Solutions:

Here are the solutions to the practice problems.

1. Remove Duplicates from Array (Set):
const numbersWithDuplicates = [1, 2, 3, 2, 4, 1, 5];
const uniqueNumbers = [...new Set(numbersWithDuplicates)]; // Convert Set back to Array
console.log(uniqueNumbers); // Output: [1, 2, 3, 4, 5]

2. Count Character Frequencies (Map):
const text = "hello world";
const charFrequencies = new Map();

for (const char of text) {
    if (char === ' ') continue; // Skip spaces
    charFrequencies.set(char, (charFrequencies.get(char) || 0) + 1);
}
console.log(charFrequencies);
// Output: Map(7) {"h" => 1, "e" => 1, "l" => 3, "o" => 2, "w" => 1, "r" => 1, "d" => 1}

3. Store Object as Map Key:
const user1 = { id: 1, name: 'Alice' };
const user2 = { id: 2, name: 'Bob' };

const userScores = new Map();
userScores.set(user1, 95);
userScores.set(user2, 88);

console.log(userScores.get(user1)); // Output: 95

## 💡 Key Takeaways for Day 14:
- Set is ideal for storing collections of unique values. It's great for quickly checking if an item exists or removing duplicates.

- Map is ideal for storing key-value pairs where keys can be of any data type (not just strings, like in plain objects). It maintains insertion order and offers clear methods for manipulation.

- Choose Set when you need a unique collection and Map when you need flexible key-value storage.