import { renderTasks } from "./modules/dom.js";
import { getTasks, saveTasks, getTheme, saveTheme } from "./modules/storage.js";
import { addTask, deleteTask, toggleTask } from "./modules/tasks.js";

const taskInput = document.getElementById("taskInput");
const addTaskBtn = document.getElementById("addTaskBtn");
const taskList = document.getElementById("taskList");
const themeToggle = document.getElementById("themeToggle");

// Load saved theme
if (getTheme() === "dark") {
  document.body.classList.add("dark");
  themeToggle.textContent = "☀️";
}

// Initial render
renderTasks(getTasks(), taskList);

// Add task
addTaskBtn.addEventListener("click", () => {
  const taskText = taskInput.value.trim();
  if (taskText) {
    addTask(taskText);
    saveTasks();
    renderTasks(getTasks(), taskList);
    taskInput.value = "";
  }
});

// Delete & Toggle
taskList.addEventListener("click", (e) => {
  if (e.target.classList.contains("delete-btn")) {
    deleteTask(e.target.dataset.id);
    saveTasks();
    renderTasks(getTasks(), taskList);
  } else if (e.target.tagName === "SPAN") {
    toggleTask(e.target.dataset.id);
    saveTasks();
    renderTasks(getTasks(), taskList);
  }
});

// Theme toggle
themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  if (document.body.classList.contains("dark")) {
    themeToggle.textContent = "☀️";
    saveTheme("dark");
  } else {
    themeToggle.textContent = "🌙";
    saveTheme("light");
  }
});
