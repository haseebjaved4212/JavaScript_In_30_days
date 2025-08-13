let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

export function getTasks() {
  return tasks;
}

export function saveTasks() {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

export function setTasks(newTasks) {
  tasks = newTasks;
}

// Theme persistence
export function getTheme() {
  return localStorage.getItem("theme") || "light";
}

export function saveTheme(theme) {
  localStorage.setItem("theme", theme);
}
