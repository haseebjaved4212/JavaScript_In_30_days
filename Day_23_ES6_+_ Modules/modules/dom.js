export function renderTasks(tasks, container) {
  container.innerHTML = "";
  tasks.forEach((task) => {
    const li = document.createElement("li");
    const span = document.createElement("span");
    span.textContent = task.text;
    span.dataset.id = task.id;

    if (task.completed) {
      span.classList.add("completed");
    }

    const delBtn = document.createElement("button");
    delBtn.textContent = "X";
    delBtn.classList.add("delete-btn");
    delBtn.dataset.id = task.id;

    li.appendChild(span);
    li.appendChild(delBtn);
    container.appendChild(li);
  });
}
