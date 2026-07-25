let draggedTaskId = null;

function updateTaskStatus(id, status) {
  tasks = tasks.map((task) => {
    if (task.id === id) {
      return {
        ...task,
        status,
      };
    }

    return task;
  });

  saveTasks();

  renderBoard();
}

document.addEventListener("dragstart", (e) => {
  const card = e.target.closest(".task-card");

  if (card) {
    draggedTaskId = Number(card.dataset.id);

    card.classList.add("dragging");
  }
});

document.addEventListener("dragend", (e) => {
  const card = e.target.closest(".task-card");

  if (card) {
    card.classList.remove("dragging");
  }
});

document.addEventListener("dragover", (e) => {
  const column = e.target.closest(".cards");

  if (column) {
    e.preventDefault();
  }
});

document.addEventListener("drop", (e) => {
  const column = e.target.closest(".cards");

  if (!column) return;

  if (!draggedTaskId) return;

  const newStatus = column.dataset.status;

  console.log("Moved to:", newStatus);

  updateTaskStatus(draggedTaskId, newStatus);

  draggedTaskId = null;
});
