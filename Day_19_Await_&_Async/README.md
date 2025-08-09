# Day 19: async/await
Welcome to Day 19 of our 30 Days of JavaScript Challenge! Today, we are upgrading our asynchronous programming skills by learning about async/await. Introduced in ES2017, this feature is a game-changer, providing a cleaner and more readable syntax for working with Promises.

Our project, the "Weather App," will use async/await to simulate fetching weather data for a city, giving you a hands-on look at this modern approach.

## 📚 Core Concepts Covered:
**1. What is async/await?**

async/await is essentially syntactic sugar built on top of Promises. It allows you to write asynchronous code in a way that looks and behaves synchronously. This makes the code much easier to read, write, and debug, and helps avoid the `.then().then()` promise chain.

**2. The async Keyword**

- The async keyword is used to declare an asynchronous function.

- An async function always returns a Promise.

- The value that the function returns will be the resolved value of the Promise.

- If the function throws an error, the Promise will be rejected with that error.

**Example:**

```js
async function sayHello() {
    return 'Hello, World!';
}

// sayHello() returns a Promise, which we can consume with .then()
sayHello().then(message => console.log(message)); // Output: Hello, World!
```

**3. The await Keyword**

- The await keyword is used inside an async function to pause the execution of the function until a Promise is settled (either fulfilled or rejected).

- When the Promise resolves, await returns the resolved value.

- You can only use await inside a function declared with async.

**Example:**

```js
function getPromise() {
    return new Promise(resolve => {
        setTimeout(() => resolve('Promise resolved!'), 2000);
    });
}

async function handlePromise() {
    console.log('Waiting for the promise...');
    // Execution pauses here until the promise resolves
    const result = await getPromise();
    console.log(result); // Output: Promise resolved!
    console.log('Function continues...');
}

handlePromise();
```

**4. Error Handling with async/await (`try...catch`)**

Since an await call can throw an error (if the Promise is rejected), the best practice for handling errors is to wrap your await calls in a standard `try...catch` block. This is much cleaner than using a `.catch()` method on every promise.

**Example:**
```js
async function fetchData() {
    try {
        const response = await fetch('https://invalid-url.com/data');
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.error('An error occurred:', error);
    }
}

fetchData();
```
## 🚀 Project for Day 19: Weather App
Today's project is a simple web page that allows you to get fake weather data for a city. The core of the project is the use of async/await to handle the simulated API request and its potential errors.

**Features:**

- Asynchronous Data Fetching: An async function will simulate fetching weather data using a Promise.

- Loading State: The UI will display a loading message while the await call is pending.

- Error Handling: A `try...catch` block will elegantly handle failed API requests and display a user-friendly error message.

- Dynamic UI: The results will be dynamically rendered in the UI, showing the city, temperature, and a description.



**💻 Project Logic Breakdown (index.js)**

The index.js file contains the logic for fetching and displaying the weather data using async/await.

**1. `fakeApiCall(city)` Function:**

- This function returns a Promise that simulates an API call.

- It uses `setTimeout()` to mimic a network delay.

- It resolves with a fake weather object if the city is "London", "New York", or "Tokyo".

- It rejects with an error for any other city.

**2. `handleWeatherFetch()` Function:**

- This is our main async function.

- It first shows a loading state in the UI.

- It uses a try...catch block to handle the asynchronous operation.

- Inside `try`, it uses await fakeApiCall(city) to wait for the Promise to resolve.

- If the await succeeds, it updates the UI with the fetched weather data.

- If the await fails (the Promise is rejected), the code inside catch is executed, and it displays the error message.

- The finally block (not used in this simple example, but a good practice) would be a good place to hide the loading state regardless of the outcome.

**3. Event Listeners:**

- The event listener for the button calls our async function` handleWeatherFetch()` directly.



## ✅ Practice Set :

<details ><summary >
1. Awaiting Multiple Promises with Promise.all:
</summary>

```js
async function getUserId() {
    return new Promise(resolve => setTimeout(() => resolve(123), 1000));
}

async function getUserPosts() {
    return new Promise(resolve => setTimeout(() => resolve(['Post 1', 'Post 2']), 1500));
}

async function getCombinedData() {
    try {
        const [userId, posts] = await Promise.all([getUserId(), getUserPosts()]);
        console.log('User ID:', userId); // Output: 123
        console.log('User Posts:', posts); // Output: ['Post 1', 'Post 2']
    } catch (error) {
        console.error('An error occurred:', error);
    }
}

getCombinedData();
```
</details>
<details ><summary >
2. Chaining async functions:
</summary>

```js
async function fetchUserData(id) {
    return new Promise(resolve => setTimeout(() => resolve({ id: id, name: 'Alice' }), 1000));
}

async function fetchUserPhotos(userId) {
    return new Promise(resolve => setTimeout(() => resolve(['photo_a.jpg', 'photo_b.jpg']), 1000));
}

async function fetchAllUserData() {
    try {
        const user = await fetchUserData(1);
        console.log(`Fetched user: ${user.name}`);
        const photos = await fetchUserPhotos(user.id);
        console.log('Fetched photos:', photos);
    } catch (error) {
        console.error('An error occurred:', error);
    }
}

fetchAllUserData();
```
</details>

--- 
## 💡 Key Takeaways for Day 19:
- `async/await` is syntactic sugar for Promises that makes asynchronous code more readable.

- An async function always returns a Promise.

- Use await inside an async function to wait for a Promise to resolve.

- Wrap your await calls in a `try...catch` block to handle errors gracefully.