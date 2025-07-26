// Day 05 Project: Simple To-Do List Application
// This file contains the interactive project logic.
// All detailed explanations and practice set solutions are in README.md.

// --- Global State ---
// Array to store tasks. Each task is an object: { text: "Task description", completed: false }
let tasks = [];

// --- DOM Element References ---
const taskInput = document.getElementById("taskInput");
const addTaskBtn = document.getElementById("addTaskBtn");
const taskList = document.getElementById("taskList");
const clearCompletedBtn = document.getElementById("clearCompletedBtn");
const errorMessageDiv = document.getElementById("errorMessage");

// --- Helper Functions ---

/**
 * Displays a temporary error message at the top of the list.
 * @param {string} message - The message to display.
 */
function showErrorMessage(message) {
  errorMessageDiv.textContent = message;
  errorMessageDiv.classList.remove("hidden");
  setTimeout(() => {
    errorMessageDiv.classList.add("hidden");
  }, 3000); // Hide after 3 seconds
}

/**
 * Renders the tasks array to the DOM.
 * This function iterates over the 'tasks' array and creates HTML elements for each task.
 */
function renderTasks() {
  taskList.innerHTML = ""; // Clear existing list items

  if (tasks.length === 0) {
    taskList.innerHTML =
      '<p class="empty-list-message">No tasks yet! Add some above.</p>';
    return;
  }

  // Use forEach to iterate over the tasks array
  tasks.forEach((task, index) => {
    const listItem = document.createElement("li");
    listItem.classList.add("todo-item");
    if (task.completed) {
      listItem.classList.add("completed");
    }

    // Task text
    const taskText = document.createElement("span");
    taskText.classList.add("todo-item-text");
    taskText.textContent = task.text;
    listItem.appendChild(taskText);

    // Action buttons (Delete)
    const actionsDiv = document.createElement("div");
    actionsDiv.classList.add("todo-actions");

    const deleteBtn = document.createElement("button");
    deleteBtn.classList.add("btn-action");
    deleteBtn.textContent = "Delete";
    // Add event listener to delete button
    deleteBtn.addEventListener("click", (event) => {
      // Stop event propagation to prevent marking as complete when deleting
      event.stopPropagation();
      deleteTask(index);
    });
    actionsDiv.appendChild(deleteBtn);

    listItem.appendChild(actionsDiv);

    // Add event listener to mark task as complete/incomplete
    taskText.addEventListener("click", () => toggleTaskComplete(index));

    taskList.appendChild(listItem);
  });
}

/**
 * Adds a new task to the tasks array.
 */
function addTask() {
  const taskText = taskInput.value.trim(); // Get input value and remove leading/trailing whitespace

  if (taskText === "") {
    showErrorMessage("Task cannot be empty!");
    return;
  }

  // Use push() to add a new task object to the end of the array
  tasks.push({ text: taskText, completed: false });
  taskInput.value = ""; // Clear the input field
  renderTasks(); // Re-render the list to show the new task
}

/**
 * Toggles the 'completed' status of a task.
 * @param {number} index - The index of the task to toggle.
 */
function toggleTaskComplete(index) {
  // Directly modify the 'completed' property of the task object in the array
  tasks[index].completed = !tasks[index].completed;
  renderTasks(); // Re-render the list to reflect the change
}

/**
 * Deletes a task from the tasks array.
 * @param {number} index - The index of the task to delete.
 */
function deleteTask(index) {
  // Use splice() to remove the task from the array
  // splice(startIndex, deleteCount)
  tasks.splice(index, 1);
  renderTasks(); // Re-render the list
}

/**
 * Clears all tasks that are marked as completed.
 */
function clearCompletedTasks() {
  // Use filter() to create a new array containing only non-completed tasks
  // Then reassign the global 'tasks' array to this new filtered array
  tasks = tasks.filter((task) => !task.completed);
  renderTasks(); // Re-render the list
}

// --- Event Listeners ---
addTaskBtn.addEventListener("click", addTask);

// Allow adding task by pressing Enter key in the input field
taskInput.addEventListener("keypress", (event) => {
  if (event.key === "Enter") {
    addTask();
  }
});

clearCompletedBtn.addEventListener("click", clearCompletedTasks);

// --- Initial Render on Page Load ---
document.addEventListener("DOMContentLoaded", renderTasks); // Render tasks when the page first loads
