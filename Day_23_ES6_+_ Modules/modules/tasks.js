import { getTasks, setTasks } from "./storage.js";

export function addTask(text) {
  const tasks = getTasks();
  tasks.push({ id: Date.now().toString(), text, completed: false });
  setTasks(tasks);
}

export function deleteTask(id) {
  const tasks = getTasks().filter((task) => task.id !== id);
  setTasks(tasks);
}

export function toggleTask(id) {
  const tasks = getTasks().map((task) =>
    task.id === id ? { ...task, completed: !task.completed } : task
  );
  setTasks(tasks);
}
