const modal = document.querySelector(".modal-overlay");

const openModalBtn = document.querySelector("#open-modal");

const closeModalBtn = document.querySelector(".close-modal");

const taskForm = document.querySelector("#task-form");

let editingTaskId = null;

const modalTitle = document.querySelector("#modal-title");

const submitButton = document.querySelector("#submit-task");

const dueDateInput = document.querySelector("#task-due");

// Prevent selecting past dates
dueDateInput.min = new Date().toISOString().split("T")[0];

function resetForm() {
  taskForm.reset();

  document.querySelector("#task-priority").selectedIndex = 0;
  document.querySelector("#task-tag").selectedIndex = 0;
  document.querySelector("#task-status").selectedIndex = 0;
}

// Open modal
openModalBtn.addEventListener("click", () => {
  editingTaskId = null;

  resetForm();

  modalTitle.textContent = "Create Task";

  submitButton.textContent = "Create";

  modal.classList.add("active");
});

// Close modal
closeModalBtn.addEventListener("click", () => {
  editingTaskId = null;

  resetForm();

  modalTitle.textContent = "Create Task";
  submitButton.textContent = "Create";

  modal.classList.remove("active");
});

// Handle Create & Update task
taskForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const newTask = {
    id: Date.now(),

    title: document.querySelector("#task-title").value,

    description: document.querySelector("#task-description").value,

    priority: document.querySelector("#task-priority").value,

    tag: document.querySelector("#task-tag").value,

    due: document.querySelector("#task-due").value,

    status: document.querySelector("#task-status").value,
  };

  if (editingTaskId !== null) {
    tasks = tasks.map((task) => {
      if (task.id === editingTaskId) {
        return {
          ...task,
          ...newTask,
          id: editingTaskId,
        };
      }

      return task;
    });
  } else {
    tasks.push(newTask);
  }

  saveTasks();

  renderBoard();

  resetForm();

  editingTaskId = null;

  modalTitle.textContent = "Create Task";
  submitButton.textContent = "Create";

  modal.classList.remove("active");
});
