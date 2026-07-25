function deleteTask(id) {
  tasks = tasks.filter((task) => task.id !== id);

  saveTasks();

  renderBoard();
}

function editTask(id) {
  const task = tasks.find((task) => task.id === id);

  if (!task) return;

  resetForm();

  editingTaskId = id;

  document.querySelector("#task-title").value = task.title;

  document.querySelector("#task-description").value = task.description;

  document.querySelector("#task-priority").value = task.priority;

  document.querySelector("#task-tag").value = task.tag;

  document.querySelector("#task-due").value = task.due;

  document.querySelector("#task-status").value = task.status;

  modalTitle.textContent = "Update Task";

  submitButton.textContent = "Update";

  modal.classList.add("active");
}

document.addEventListener("click", (e) => {
  const id = Number(e.target.dataset.id);

  if (e.target.classList.contains("delete-btn")) {
    deleteTask(id);
  }

  if (e.target.classList.contains("edit-btn")) {
    editTask(id);
  }
});
