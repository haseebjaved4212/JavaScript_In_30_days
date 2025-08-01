# Day 11: JavaScript Local Storage & Session Storage (Project: Note-Taking App)


Welcome to Day 11 of my 30 Days of JavaScript Challenge! Today, we're diving into client-side data storage mechanisms: Local Storage and Session Storage. These Web Storage APIs allow web applications to store data locally within the user's browser, providing a way to persist information across browser sessions or tabs without needing a server-side database.

For our project, we'll build a Simple Note-Taking App with Local Storage. This application will demonstrate how to save, load, and manage notes directly in the user's browser.

## 📚 Core Concepts Covered:

**1. Introduction to Web Storage (Local Storage & Session Storage)**

The Web Storage API provides mechanisms by which browsers can store key-value pairs locally within the user's browser. This is an improvement over cookies, offering significantly more storage capacity (typically 5MB-10MB per domain) and not being sent with every HTTP request.

- **Key-Value Pairs:** Both Local Storage and Session Storage store data as strings in key-value pairs.

- **Domain-Specific:** Data is stored per origin (domain, protocol, and port). A website can only access its own stored data.

**2. Local Storage (localStorage)**

localStorage stores data with no expiration date. The data will persist even when the browser window is closed and reopened. It's ideal for long-term data persistence.

- **Persistence:** Data remains until explicitly deleted by the user, by JavaScript, or by browser settings.

- **Scope:** Data is accessible across all windows/tabs from the same origin.

**Common localStorage Methods:**

- `localStorage.setItem(key, value):` Stores a key-value pair.

- **Both key and value must be strings.** If you try to store an object or array directly, it will be converted to [object Object] or a comma-separated string.

- **Important:** To store objects or arrays, you must first convert them to a JSON string using JSON.stringify().

**Example (String):**

 ``localStorage.setItem('username', 'Alice');``

**Example (Object/Array):**

`` localStorage.setItem('userProfile', JSON.stringify({ name: 'Bob', age: 30 }));``

- `localStorage.getItem(key):` Retrieves the value associated with a given key.

Returns the value as a string, or null if the key does not exist.

- **Important:** If you stored an object/array as a JSON string, you must parse it back into a JavaScript object/array using JSON.parse().

- **Example (String):** 
`const username = localStorage.getItem('username'); // 'Alice'`

- **Example (Object/Array):**

` const userProfile = JSON.parse(localStorage.getItem('userProfile')); // { name: 'Bob', age: 30 }`

-` localStorage.removeItem(key):`

 Removes the key-value pair with the specified key.

- **Example:** 

`localStorage.removeItem('username');`

- `localStorage.clear():` Removes all key-value pairs from localStorage for the current origin.

**Example:** 

`localStorage.clear();`

- `localStorage.length:` Returns the number of key-value pairs currently stored.

**Example:**

`console.log(localStorage.length);`

**3. Session Storage (sessionStorage)**

`sessionStorage` stores data for the duration of a single browser session. The data is cleared when the browser tab or window is closed. It's ideal for temporary data that needs to persist across page reloads within the same session.

**Persistence:** Data is cleared when the session ends (tab/window is closed).

**Scope:** Data is accessible only within the specific tab/window that created it. If you open a new tab to the same page, it will have its own separate sessionStorage.

**Common sessionStorage Methods:**

sessionStorage uses the exact same methods as localStorage: `sessionStorage.setItem()`, 

`sessionStorage.getItem()`,

 `sessionStorage.removeItem()`, 
 
 `sessionStorage.clear()`,
 
  and 
 `sessionStorage.length`.

**Example:**

`sessionStorage.setItem('currentOrderId', 'XYZ123');`

**4. Differences and Use Cases:**

 **Feature**

- localStorage

- sessionStorage

- Persistence

- Data persists even after browser is closed.

- Data cleared when the browser tab/window is closed.

- Scope

- Accessible across all tabs/windows of same origin.

- Accessible only within the tab/window that created it.

- Capacity

- 5MB - 10MB per origin.

- 5MB - 10MB per origin.

**Use Cases**

- User preferences, "Remember Me" functionality, offline data, cached assets.

- Shopping cart data for current session, temporary user input, single-session state.

**5. Error Handling with Web Storage**

While generally robust, localStorage and sessionStorage can throw errors in certain rare scenarios, such as:

- **Storage Limit Exceeded:** If you try to store more data than the browser allows.

- **Security/Privacy Settings:** If the user's browser settings block local storage.

- **SecurityError:** Can occur in certain sandboxed environments (e.g., iframes from different origins).

It's good practice to wrap setItem and getItem calls in try...catch blocks, especially when dealing with potentially large data or in complex environments.
```js
try {
    localStorage.setItem('largeData', JSON.stringify(someLargeObject));
} catch (e) {
    if (e.name === 'QuotaExceededError') {
        console.error("Local storage limit exceeded!");
        // Inform user or clear some old data
    } else {
        console.error("Error accessing local storage:", e);
    }
}
```

## 🚀 Project for Day 11: Simple Note-Taking App with Local Storage

Today's project is a functional Note-Taking Application that leverages localStorage to persist your notes. You will be able to add new notes, view existing notes, and delete notes, with all changes automatically saved to and loaded from your browser's local storage.

**Features:**

- Add new notes with a title and content.

- Display a list of all saved notes.

- Delete individual notes.

- All notes persist across browser sessions (even after closing and reopening the browser).

- Clear all notes functionality.

(This project's code is located in index.html and index.js within this Day11 folder.)


**💻 Project Logic Breakdown (index.js)**

The index.js file handles the note management and interaction with localStorage.

**1. Global State & DOM References**

```js

let notes = []; // Array to hold all note objects
const noteTitleInput = document.getElementById('noteTitle');
const noteContentInput = document.getElementById('noteContent');
const addNoteBtn = document.getElementById('addNoteBtn');
const notesListDiv = document.getElementById('notesList');
const clearAllNotesBtn = document.getElementById('clearAllNotesBtn');

```
- notes: This array will store all note objects { id: 'uniqueId', title: 'Note Title', content: 'Note content' }. 

- This array is the single source of truth for our notes in memory.

-  Other variables are references to the HTML elements.

**2. saveNotes() Function**
```js
function saveNotes() {
    try {
        // Convert the 'notes' array (JavaScript objects) into a JSON string
        localStorage.setItem('myNotes', JSON.stringify(notes));
        console.log("Notes saved to Local Storage.");
    } catch (e) {
        console.error("Error saving notes to Local Storage:", e);
        // Handle QuotaExceededError or other storage errors
    }
}
```

- This function is called whenever the notes array is modified (note added, deleted, or cleared).

- It uses `JSON.stringify(notes)` to convert the JavaScript array of note objects into a single JSON string, which is the format localStorage requires.

- ``localStorage.setItem('myNotes', ...) ``saves this string under the key 'myNotes'.

- A `try...catch` block is included for robust error handling, especially for QuotaExceededError.

**3. loadNotes() Function**
```js
function loadNotes() {
    try {
        // Retrieve the JSON string from Local Storage using the key 'myNotes'
        const storedNotes = localStorage.getItem('myNotes');
        if (storedNotes) {
            // If data exists, parse the JSON string back into a JavaScript array
            notes = JSON.parse(storedNotes);
            console.log("Notes loaded from Local Storage.");
        } else {
            notes = []; // Initialize as empty array if no notes found
            console.log("No notes found in Local Storage. Initializing empty notes array.");
        }
    } catch (e) {
        console.error("Error loading notes from Local Storage:", e);
        notes = []; // Fallback to empty array on error
    }
}
```

- This function is called once when the page loads.

- `localStorage.getItem('myNotes')` retrieves the saved string.

- `JSON.parse(storedNotes)` converts the JSON string back into a JavaScript array of objects.

- If no data is found (storedNotes is null), the notes array is initialized as empty.

- Includes `try...catch` for error handling during parsing or retrieval.

**4. renderNotes() Function**

```js
function renderNotes() {
    notesListDiv.innerHTML = ''; // Clear existing notes in the UI

    if (notes.length === 0) {
        notesListDiv.innerHTML = '<p class="empty-list-message">No notes yet! Add one above.</p>';
        return;
    }

    notes.forEach(note => {
        const noteCard = document.createElement('div');
        noteCard.classList.add('note-card');
        noteCard.dataset.id = note.id; // Store note ID for deletion

        noteCard.innerHTML = `
            <h3 class="note-title">${note.title}</h3>
            <p class="note-content">${note.content}</p>
            <button class="delete-note-btn" data-id="${note.id}">Delete</button>
        `;

        // Attach event listener for the delete button
        const deleteBtn = noteCard.querySelector('.delete-note-btn');
        deleteBtn.addEventListener('click', () => deleteNote(note.id));

        notesListDiv.appendChild(noteCard);
    });
}
```

- This function updates the UI to display the current notes array.

- It clears the `notesListDiv` and then iterates through the `notes` array using` forEach()`.

- For each note object, it creates a div (note-card), populates its `innerHTML` with the note's title and content, and adds a "Delete" button.

- An event listener is attached to each delete button to call deleteNote() with the specific note's id.

**5. addNote() Function**
```js
function addNote() {
    const title = noteTitleInput.value.trim();
    const content = noteContentInput.value.trim();

    if (title === '' || content === '') {
        alert('Please enter both title and content for the note.'); // Using alert for simplicity here
        return;
    }

    // Create a unique ID for the new note (e.g., timestamp)
    const newNote = {
        id: Date.now().toString(), // Simple unique ID
        title: title,
        content: content
    };

    notes.push(newNote); // Add new note object to the array
    saveNotes();         // Save the updated array to local storage
    renderNotes();       // Update the UI
    noteTitleInput.value = ''; // Clear input fields
    noteContentInput.value = '';
}
```

- Gets title and content from input fields.

- Basic validation for empty fields.

- Creates a new note object with a unique `id` (using `Date.now()`).

- `notes.push(newNote)`: Adds the new note to the notes array.

- `saveNotes()`: Immediately calls `saveNotes()` to persist the new note.

- `renderNotes()`: Updates the UI to show the new note.

- Clears input fields.

**6. deleteNote(id) Function**
```js
function deleteNote(id) {
    // Filter out the note with the given ID to create a new array without it
    notes = notes.filter(note => note.id !== id);
    saveNotes();   // Save the updated (filtered) array to local storage
    renderNotes(); // Update the UI
}

```
- Takes the id of the note to be deleted.

- `notes.filter(note => note.id !== id)`: Uses the `filter()` array method to create a new array that excludes the note with the matching id.

- The `notes` global array is then reassigned to this new filtered array.

- `saveNotes()`: Immediately calls saveNotes() to persist the change.

- `renderNotes()`: Updates the UI.

**7. clearAllNotes() Function**

```js
function clearAllNotes() {
    if (confirm("Are you sure you want to delete all notes? This cannot be undone.")) {
        localStorage.clear(); // Clears all data from local storage for this domain
        notes = [];           // Reset the in-memory notes array
        renderNotes();        // Update the UI
        console.log("All notes cleared from Local Storage.");
    }
}
```

- Prompts the user for confirmation.

- `localStorage.clear()`: This is a powerful method that removes all key-value pairs from localStorage for the current domain.

- Resets the notes array to empty.

- Updates the UI.

**8. Event Listeners & Initial Load**

```js
addNoteBtn.addEventListener('click', addNote);
clearAllNotesBtn.addEventListener('click', clearAllNotes);

// Load notes and render them when the page loads
document.addEventListener('DOMContentLoaded', () => {
    loadNotes();   // Load notes from local storage first
    renderNotes(); // Then display them in the UI
});

```
- Event listeners connect buttons to their respective functions.

- ` DOMContentLoaded` ensures that `loadNotes()` and `renderNotes()` are called when the page loads, so any previously saved notes are displayed immediately.

## ✅ Practice Set :

<details><summary>
1. Store and Retrieve a Simple String:
</summary>

```js
// Store
localStorage.setItem('username', 'dev_user_123');
console.log("Username stored.");

// Retrieve
const storedUsername = localStorage.getItem('username');
console.log("Retrieved Username:", storedUsername); // Expected: dev_user_123

// To test persistence: Close and reopen browser/tab, then run:
// console.log("Retrieved Username after reopen:", localStorage.getItem('username'));
```
</details>

<details><summary>
2. Store and Retrieve an Object:
</summary>

```js
const settings = {
    theme: 'dark',
    notifications: true,
    volume: 75,
    lastLogin: new Date().toISOString() // Store date as ISO string
};

// Store (stringify first)
localStorage.setItem('appSettings', JSON.stringify(settings));
console.log("Settings object stored as JSON.");

// Retrieve (parse back)
const storedSettingsJson = localStorage.getItem('appSettings');
if (storedSettingsJson) {
    const retrievedSettings = JSON.parse(storedSettingsJson);
    console.log("Retrieved Settings Object:", retrievedSettings);
    console.log("Theme:", retrievedSettings.theme);
} else {
    console.log("No settings found in local storage.");
}
```
  </details>

<details><summary>
3. Use sessionStorage:
</summary>

```js

const currentSessionId = Math.random().toString(36).substring(2, 9);
sessionStorage.setItem('sessionId', currentSessionId);
console.log("Session ID stored:", currentSessionId);

// Retrieve
const retrievedSessionId = sessionStorage.getItem('sessionId');
console.log("Retrieved Session ID:", retrievedSessionId); // Should be the same as stored

// To test session scope:
// 1. Open a NEW tab to the same page: sessionStorage.getItem('sessionId') will be NULL.
// 2. Close the current tab and reopen it: sessionStorage.getItem('sessionId') will be NULL.
```
</details>

<details><summary>
4. Remove Item:
</summary>

```js

localStorage.setItem('tempData', 'This is temporary data.');
console.log("tempData before removal:", localStorage.getItem('tempData'));

localStorage.removeItem('tempData');
console.log("tempData after removal:", localStorage.getItem('tempData')); // Expected: null
```
</details>
<details><summary>
5. Clear All Storage:
</summary>

```js
localStorage.setItem('item1', 'Value 1');
localStorage.setItem('item2', 'Value 2');
console.log("Local Storage Length before clear:", localStorage.length); // Expected: 2 (or more if other items exist)

localStorage.clear();
console.log("Local Storage Length after clear:", localStorage.length); // Expected: 0
console.log("Item 1 after clear:", localStorage.getItem('item1'));   // Expected: null
```

</details>

---

## 💡 Key Takeaways for Day 11:
- Web Storage (Local & Session) provides a powerful way to store key-value string pairs directly in the browser.

- `g` persists data indefinitely (until manually cleared).

- `sessionStorage` persists data only for the current browser tab/window session.

- Always use `JSON.stringify() `to store JavaScript objects/arrays and JSON.parse() to retrieve them from Web Storage.

- Consider `try...catch` blocks for setItem and getItem to handle potential storage errors.