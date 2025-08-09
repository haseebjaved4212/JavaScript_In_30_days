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

**The Core Logic (JavaScript)**
The JavaScript is the brain of the application, managing all the interactions and states.

- Initialization: When the page loads, a few key things happen:

- An empty array, songs, is created to hold all the song objects.

- An Audio object is created to handle the actual playback.

- DOM elements are referenced by their ids so they can be manipulated.

**Core Functions:**

- **loadSong(index)**: This function is the central point for switching songs. It takes an index, updates the audio.src with the new song's file path, and updates all the UI elements (title, artist, album art) to match the selected song.

- **`playSong()` & `pauseSong()`**: These functions call the audio.play() and audio.pause() methods respectively. They also handle the visual state by hiding/showing the play/pause icons and adding/removing the playing class to the album art container to start or stop the spin animation.

- **`prevSong()` & `nextSong()`**: These functions handle playlist navigation by incrementing or decrementing the currentSongIndex and then calling loadSong() to load the next or previous track. They handle wrapping around to the other end of the playlist when a boundary is reached.

**Event Handling:**

- **Playback Events**: The playPauseBtn, prevBtn, and nextBtn all have click event listeners that call the appropriate functions.

- **Progress Bar:** The audio object has an event listener for timeupdate that continuously updates the progress bar's width and the time display. There is also a click event listener on the progress bar container, which calculates where the user clicked and uses that to update the audio.currentTime, allowing seeking.

- **Adding Songs:** 
The hidden &lt;input type="file"> element has a change event listener. When you select a file, it reads the file, creates a temporary URL for it using URL.createObjectURL(), and pushes a new song object with that URL into the songs array. This makes the player able to handle local files without a server.

- **Playlist UI:** Event listeners on the "Playlist" button and a separate "Close" button toggle the open class on the playlistModal element, which makes it slide in or out of view. The updatePlaylistUI() function rebuilds the list of songs in the modal whenever a new song is added, ensuring it's always up-to-date.


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