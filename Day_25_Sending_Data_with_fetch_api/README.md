# Day 25: Sending Data with Fetch API

Welcome to Day 25! Yesterday, you learned how to GET data from a server. Today, you'll learn how to perform the other three core operations of web development: POST, PUT, and DELETE. These are the verbs you use to tell a server to create, update, or delete a resource.

**_The HTTP Request Methods 💡_**

- These are the verbs we use to interact with a server's API.

- **GET:** Retrieve data from a server. (You've already done this!)

- **POST:** Create a new resource on the server. For our project, this will be used to add a new task to our list. A POST request typically includes a body with the data you want to send.

- **PUT:** Update an existing resource. This would be used to modify a task, like marking it as complete.

- **DELETE:** Delete a resource. In our project, this will be used to remove a task from the list.

**fetch() with Options**

To send data, we need to pass a second argument to the `fetch() `function: an options object. This object specifies the HTTP method, headers, and the body of the request.

```js
fetch(url, {
  method: "POST", // or 'PUT', 'DELETE'
  headers: {
    "Content-Type": "application/json", // Tells the server we're sending JSON
  },
  body: JSON.stringify({ title: "New Task" }), // The data, converted to a JSON string
});
```

# Feedback Form — Sending Data with Fetch API

## 📌 Overview
This is a modern **Feedback Form** web app that demonstrates how to send data to a server using the **Fetch API (POST request)**.  
It uses a clean **glassmorphism design**, star rating system, form validation, and interactive UI elements such as loading animations, toast notifications, and a success dialog.

The backend here is a **mock API** from [Reqres](https://reqres.in/), which is great for testing HTTP requests without creating your own server.

---

##  Features
- **Glassmorphism UI** — modern transparent blur effect
- **Responsive Layout** — works on all screen sizes
- **Star Rating** — 1–5 star selection
- **Form Validation** — required fields with error messages
- **Character Counter** — live count for the message box
- **Loading Animation** — spinner on submit button
- **Success & Error Notifications** — modern toast messages
- **Success Dialog** — confirmation popup after submission
- **Reset Button** — clear all fields and errors
- **Mock API Testing** — using [Reqres](https://reqres.in/) POST endpoint


---

## 🛠 Tech Stack
- **HTML5** — form elements & structure
- **CSS3** — modern UI with glassmorphism + animations
- **JavaScript (ES6+)** — validation, Fetch API calls, UI interactivity
- **Mock API** — `https://reqres.in/api/users` for testing

---

## 🔍 How It Works

 **1. UI Setup**

- `index.html` contains:
  - Name, Email, Rating, and Message fields
  - Star rating radio inputs
  - Character counter under message box
  - Submit & Reset buttons
  - Toast notification container
  - Success dialog popup

---

 **2. Form Validation (script.js)**

When the user clicks **Submit**:
1. **Name Validation**  
   - Must be at least 2 characters.
2. **Email Validation**  
   - Must match standard email format (`name@example.com`).
3. **Rating Validation**  
   - One of the star options must be selected.
4. **Message Validation**  
   - At least 10 characters and not more than 300.

If validation fails:
- Error messages appear below the fields.
- A red toast notification appears saying “Fix the highlighted fields.”

---

 **3. Sending Data with Fetch API**

If validation passes:
```javascript
const payload = {
  name: $("#name").value.trim(),
  email: $("#email").value.trim(),
  rating: $("input[name='rating']:checked").value,
  message: $("#message").value.trim(),
  sentAt: new Date().toISOString()
};

const res = await fetch(ENDPOINT, {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify(payload)
});

```
- The form data is converted to JSON and sent in a POST request to https://reqres.in/api/users.

- await `fetch()` waits for the server's response.


**4. Response Handling**

- If res.ok is true (status 200–299):

  - A green toast notification appears: “Feedback sent successfully!”

  - The success dialog popup appears.

  - The form resets after a short delay.

  - Server’s JSON response is logged in the console for reference.

- If res.ok is false:

  - A red toast notification appears with the status code.

  - Status message says: “❌ Failed to send. Try again.”

- If network error occurs:

  - Red toast says: “Network error. Please try again.”

  - Status message says: “⚠ Network error. Check your connection.”

**5. Loading State**

- The Submit button shows a spinner while sending data.

- Button is disabled to prevent multiple submissions.

- Spinner hides and button reactivates after request finishes.

**6. Reset Button**

- Clears all fields and error messages.

- Resets character counter to 0.



## Practice Set :
<details><summary >
1. Make a TO DO App  That include these functions:


*Read (GET)*: The application fetches a hardcoded list of initial tasks when the page first loads.

 *Create (POST)*: A user can add a new task, which is then added to the tasks array after a simulated delay.

 *Update (PUT)*: A user can mark a task as complete by checking a checkbox or edit the task's title. Both actions trigger a simulated update to the task object in the tasks array.

 *Delete (DELETE)*: A user can remove a task from the list by clicking the delete button, which removes the item from the tasks array after a simulated delay.
</summary>

**Solution**
```html

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>To-Do List with API</title>
    <!-- Tailwind CSS for styling -->
    <script src="https://cdn.tailwindcss.com"></script>
    <style>
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap');
        body {
            font-family: 'Inter', sans-serif;
            background-color: #f3f4f6;
        }
        .container {
            background: white;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        }
        .loading::after {
            content: '...';
            animation: dot-loading 1s linear infinite;
        }
        @keyframes dot-loading {
            0%   { content: ''; }
            33%  { content: '.'; }
            66%  { content: '..'; }
            100% { content: '...'; }
        }
    </style>
</head>
<body class="flex items-center justify-center min-h-screen p-4">

    <div class="container w-full max-w-lg p-8 rounded-2xl">
        
        <h1 class="text-3xl font-bold text-gray-800 mb-6 text-center">To-Do List (Simulated API)</h1>
        
        <!-- Form to add a new task (Simulated POST request) -->
        <form id="addTaskForm" class="flex gap-4 mb-6">
            <input 
                id="taskInput"
                type="text" 
                placeholder="Add a new task..." 
                class="flex-grow p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
            >
            <button 
                type="submit" 
                id="addTaskBtn"
                class="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-full transition-colors duration-200"
            >
                Add Task
            </button>
        </form>

        <!-- To-Do List Display Area -->
        <div class="flex items-center justify-between mb-4">
            <h2 class="text-xl font-semibold text-gray-700">Tasks</h2>
            <span id="loading-status" class="text-gray-500 hidden">Loading...</span>
        </div>
        
        <ul id="taskList" class="space-y-3">
            <!-- Tasks will be rendered here -->
        </ul>
    </div>

    <script>
        // --- Data to simulate our backend ---
        // This array will act as our "database"
        let tasks = [];

        // --- DOM Elements ---
        const addTaskForm = document.getElementById('addTaskForm');
        const taskInput = document.getElementById('taskInput');
        const taskList = document.getElementById('taskList');
        const loadingStatus = document.getElementById('loading-status');
        const addTaskBtn = document.getElementById('addTaskBtn');

        // --- Helper Function to render tasks ---
        function renderTasks() {
            taskList.innerHTML = tasks.map(task => `
                <li class="flex items-center justify-between p-4 bg-gray-100 rounded-lg">
                    <div class="flex items-center gap-3">
                        <input 
                            type="checkbox" 
                            data-task-id="${task.id}" 
                            class="toggle-complete h-5 w-5 text-blue-600 rounded focus:ring-blue-500"
                            ${task.completed ? 'checked' : ''}
                        >
                        <span class="${task.completed ? 'line-through text-gray-500' : 'text-gray-800'}">
                            ${task.title}
                        </span>
                    </div>
                    <div class="flex gap-2">
                        <!-- Edit button for a simulated PUT request -->
                        <button 
                            data-task-id="${task.id}" 
                            class="edit-btn text-blue-500 hover:text-blue-700 transition-colors duration-200 font-bold"
                        >
                            Edit
                        </button>
                        <!-- Delete button for a simulated DELETE request -->
                        <button 
                            data-task-id="${task.id}" 
                            class="delete-btn text-red-500 hover:text-red-700 transition-colors duration-200 font-bold"
                        >
                            &times;
                        </button>
                    </div>
                </li>
            `).join('');
        }

        // --- Simulated API Calls ---

        /**
         * Simulates a GET request to fetch all tasks. (Solution to Practice #3)
         */
        function getTasks() {
            return new Promise(resolve => {
                setTimeout(() => {
                    // This is our hardcoded "backend" data
                    const fetchedTasks = [
                        { id: 1, title: 'Learn Fetch API', completed: false },
                        { id: 2, title: 'Build a To-Do List', completed: false }
                    ];
                    tasks = fetchedTasks;
                    resolve();
                }, 500);
            });
        }

        /**
         * Simulates a POST request to add a new task to the server.
         * @param {string} title - The title of the new task.
         */
        function postTask(title) {
            return new Promise(resolve => {
                setTimeout(() => {
                    const newTask = {
                        id: Date.now(),
                        title: title,
                        completed: false
                    };
                    tasks.push(newTask);
                    resolve();
                }, 1000);
            });
        }

        /**
         * Simulates a PUT request to update an existing task. (Solution to Practice #1 & #2)
         * @param {number} taskId - The ID of the task to update.
         * @param {object} updatedTask - The updated task object.
         */
        function putTask(taskId, updatedTask) {
            return new Promise(resolve => {
                setTimeout(() => {
                    const taskIndex = tasks.findIndex(task => task.id === taskId);
                    if (taskIndex !== -1) {
                        // Merge the existing task with the updated properties
                        tasks[taskIndex] = { ...tasks[taskIndex], ...updatedTask };
                    }
                    resolve();
                }, 1000);
            });
        }

        /**
         * Simulates a DELETE request to remove a task from the server.
         * @param {number} taskId - The ID of the task to delete.
         */
        function deleteTask(taskId) {
            return new Promise(resolve => {
                setTimeout(() => {
                    tasks = tasks.filter(task => task.id !== taskId);
                    resolve();
                }, 1000);
            });
        }

        // --- Event Handlers ---

        /**
         * Handles the form submission to add a new task.
         */
        async function handleAddTask(event) {
            event.preventDefault();
            const taskTitle = taskInput.value.trim();

            if (taskTitle) {
                loadingStatus.classList.remove('hidden');
                addTaskBtn.disabled = true;
                await postTask(taskTitle);
                loadingStatus.classList.add('hidden');
                addTaskBtn.disabled = false;
                taskInput.value = '';
                renderTasks();
            }
        }

        /**
         * Handles the click on a delete or edit button, or a change on the checkbox.
         */
        async function handleTaskAction(event) {
            const target = event.target;
            const taskId = parseInt(target.dataset.taskId);
            
            if (target.classList.contains('delete-btn')) {
                // Handle Delete (simulated DELETE request)
                loadingStatus.classList.remove('hidden');
                document.querySelectorAll('button').forEach(btn => btn.disabled = true);
                
                await deleteTask(taskId);
                
                loadingStatus.classList.add('hidden');
                document.querySelectorAll('button').forEach(btn => btn.disabled = false);
                renderTasks();
            } else if (target.classList.contains('toggle-complete')) {
                // Handle Toggle Complete (simulated PUT request)
                const task = tasks.find(t => t.id === taskId);
                if (task) {
                    loadingStatus.classList.remove('hidden');
                    document.querySelectorAll('button, input[type="checkbox"]').forEach(el => el.disabled = true);

                    await putTask(taskId, { completed: !task.completed });

                    loadingStatus.classList.add('hidden');
                    document.querySelectorAll('button, input[type="checkbox"]').forEach(el => el.disabled = false);
                    renderTasks();
                }
            } else if (target.classList.contains('edit-btn')) {
                // Handle Edit (simulated PUT request)
                const task = tasks.find(t => t.id === taskId);
                const newTitle = prompt('Enter new task title:', task.title);

                if (newTitle && newTitle.trim() !== task.title) {
                    loadingStatus.classList.remove('hidden');
                    document.querySelectorAll('button').forEach(btn => btn.disabled = true);

                    await putTask(taskId, { title: newTitle.trim() });

                    loadingStatus.classList.add('hidden');
                    document.querySelectorAll('button').forEach(btn => btn.disabled = false);
                    renderTasks();
                }
            }
        }

        // --- Event Listeners ---
        addTaskForm.addEventListener('submit', handleAddTask);
        taskList.addEventListener('click', handleTaskAction);
        taskList.addEventListener('change', handleTaskAction);

        // --- Initial Call ---
        // Simulates a GET request to fetch initial tasks on page load.
        async function init() {
            loadingStatus.classList.remove('hidden');
            await getTasks();
            loadingStatus.classList.add('hidden');
            renderTasks();
        }

        init();
    </script>
</body>
</html>
```
</details>

--- 
## Key Takeaways: What You've Learned ✨ 

- CRUD Operations: You've now learned about the four fundamental operations for working with data: Create (POST), Read (GET), Update (PUT), and Delete (DELETE). This is known as CRUD.

- Sending Data: You now know how to send data to a server using the fetch() API's options object, including the method, headers, and body.

- Asynchronous State Management: You've seen how to handle asynchronous data manipulation by showing a loading state and re-rendering the UI once the "API call" is complete. This is the core pattern for all modern web applications.
