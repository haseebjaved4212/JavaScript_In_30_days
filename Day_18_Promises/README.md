# Day 18: Promises
Welcome to Day 18 of our 30 Days of JavaScript Challenge! Today's topic, Promises, is your gateway to understanding and managing asynchronous operations in JavaScript. Before Promises, handling asynchronous code with callbacks could lead to what's known as "callback hell," a deeply nested and hard-to-read code structure. Promises provide a much cleaner and more structured way to write asynchronous code.

Our project, the "Fake API Data Fetcher," will simulate fetching data from an API using Promises, giving you a practical look at how they work.

## 📚 Core Concepts Covered:
**1. What is a Promise?**

A Promise is an object representing the eventual completion or failure of an asynchronous operation. Think of it like a real-life promise: you make a promise to someone. It can either be fulfilled (you keep the promise) or rejected (you break the promise). The person receiving the promise doesn't have to wait for you to act, they can go about their day, and you'll let them know the outcome later.


**2. Promise States**

- A Promise can be in one of three states:

- pending: The initial state. The asynchronous operation is still in progress.

- fulfilled: The operation completed successfully. The Promise is "resolved" with a resulting value.

- rejected: The operation failed. The Promise is "rejected" with a reason for the failure (an error object).

- A Promise is settled when it is either fulfilled or rejected.


**3. Creating a Promise**

- You create a new Promise using the Promise constructor. It takes a single argument: a function called the executor. The executor function itself takes two arguments: resolve and reject.

- resolve: A function that you call when the async operation is successful. You pass the resulting value to it.

- reject: A function that you call when the async operation fails. You pass an error or reason for the failure to it.

**Example:**

```js
const myPromise = new Promise((resolve, reject) => {
    // Simulate an async operation (e.g., a network request)
    setTimeout(() => {
        const success = true;
        if (success) {
            resolve('Data fetched successfully!');
        } else {
            reject('Error: Failed to fetch data.');
        }
    }, 2000);
});
```

**4. Consuming a Promise**

- The real power of Promises comes from consuming them. You use the following methods to handle the different states of a settled Promise.

- `.then(onFulfilled, onRejected)`: This method is called when the Promise is settled.

- onFulfilled: A function that runs if the Promise is fulfilled. It receives the resolved value.

- onRejected: An optional function that runs if the Promise is rejected. It receives the rejection reason.

-` .catch(onRejected)`: A more readable way to handle a rejected Promise. It's equivalent to calling .then(null, onRejected). You should always include a `.catch() `block to prevent unhandled promise rejections.

- `.finally(onFinally)`: A function that runs when the Promise is settled (either fulfilled or rejected). This is perfect for cleanup tasks, like hiding a loading spinner, regardless of the outcome.

**Example:**

```js
myPromise
    .then(result => {
        console.log(result); // Runs on success
    })
    .catch(error => {
        console.error(error); // Runs on failure
    })
    .finally(() => {
        console.log('Promise has completed.'); // Always runs
    });
```

## 🚀 Project for Day 18: Fake API Data Fetcher
Today's project is a simple web page with buttons that simulate an API call. One button will trigger a successful request, and another will trigger a failed request. The UI will show a loading state, and then display the results or an error message.

**Features:**

- Asynchronous Simulation: The core of the project is a JavaScript function that returns a Promise, simulating a delayed network request using `setTimeout()`.

- Dynamic UI: The UI will dynamically update to show:

- A "Loading..." message while the Promise is pending.

- A success message and the fetched data when the Promise is fulfilled.

- An error message when the Promise is rejected.

- Robust Handling: The code will use .then(), .catch(), and .finally() to demonstrate best practices for consuming Promises.



**💻 Project Logic Breakdown (index.js)**

The index.js file contains the logic for creating and consuming our fake API Promise.

**1. fakeApiCall(isSuccess) Function:**

- This is the core function that returns a new Promise.

- It takes a boolean isSuccess parameter to control whether the promise should resolve or reject.

- It uses `setTimeout()` to simulate a 2-second delay, mimicking a network latency.

- Based on isSuccess, it calls either resolve() with a success message or reject() with an Error object.

**2. handlePromise(isSuccess) Function:**

- This function is called by the button click handlers.

- It first updates the UI to show a "Loading..." state.

- It then calls` fakeApiCall(isSuccess)` to get the Promise.

- It uses `.then()` to handle a successful response, updating the UI with the data.

- It uses `.catch()` to handle a failed response, updating the UI with the error message.

- It uses `.finally()` to reset the UI state and hide the loading message, ensuring cleanup happens regardless of the outcome.

**3. Event Listeners:**

- The buttons are connected to the handlePromise() function to trigger the asynchronous operations.




✅ Practice Set Solutions:
Here are the solutions to the practice problems.
<details ><summary >
1. Promise Chaining:
</summary>

    ```js
function getUser(id) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(`Getting user ${id}...`);
            resolve({ id: id, name: 'Test User' });
        }, 1000);
    });
}

function getPosts(userId) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(`Getting posts for user ${userId}...`);
            resolve(['Post 1', 'Post 2']);
        }, 1000);
    });
}

getUser(1)
    .then(user => getPosts(user.id))
    .then(posts => {
        console.log('Posts:', posts);
    })
    .catch(error => {
        console.error('An error occurred:', error);
    });
    ```
</details>
<details ><summary >
2. Promise.all():
</summary>

    ```js
const promise1 = new Promise(resolve => {
    setTimeout(() => resolve(10), 1000);
});

const promise2 = new Promise(resolve => {
    setTimeout(() => resolve(20), 2000);
});

Promise.all([promise1, promise2])
    .then(results => {
        console.log('All promises resolved:', results); // Output: [10, 20]
    })
    .catch(error => {
        console.error('One of the promises failed:', error);
    });
```
</details>

--- 
## 💡 Key Takeaways for Day 18:
- A Promise is an object for handling asynchronous operations, providing a cleaner alternative to callbacks.

- A Promise has three states: pending, fulfilled, and rejected.

- Use `.then()` for successful outcomes, `.catch()` for errors, and `.finally()` for cleanup.

- Promises allow for chaining asynchronous operations and handling multiple Promises in parallel with` Promise.all()`.