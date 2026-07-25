let searchQuery = "";

const priorityOrder = {
  High: 0,
  Medium: 1,
  Low: 2,
};

function createTaskCard(task) {
  return `
    <article
      class="task-card ${task.priority.toLowerCase()}"
      draggable="true"
      data-id="${task.id}"
    >

      <div class="task-top">

        <span class="badge ${task.priority.toLowerCase()}">
          ${task.priority}
        </span>

        <div class="card-actions">

          <button
            class="edit-btn"
            data-id="${task.id}"
          >
            Edit
          </button>

          <button
            class="delete-btn"
            data-id="${task.id}"
          >
            Delete
          </button>

        </div>

      </div>

      <h3 class="task-title">
        ${task.title}
      </h3>

      <p class="task-description">
        ${task.description}
      </p>

      <div class="task-footer">

        <span class="task-tag">
          ${task.tag}
        </span>

        <span class="task-date">
          ${task.due}
        </span>

      </div>

    </article>
  `;
}

function renderBoard() {
  const columns = document.querySelectorAll(".column");

  columns.forEach((column) => {
    const cardsContainer = column.querySelector(".cards");
    const countElement = column.querySelector(".column-count");

    cardsContainer.innerHTML = "";

    const status = cardsContainer.dataset.status;

    const filteredTasks = tasks
      .filter((task) => {
        const matchesStatus = task.status === status;

        const matchesSearch =
          (task.title || "").toLowerCase().includes(searchQuery) ||
          (task.description || "").toLowerCase().includes(searchQuery) ||
          (task.tag || "").toLowerCase().includes(searchQuery);

        return matchesStatus && matchesSearch;
      })
      .sort((a, b) => {
        return (
          (priorityOrder[a.priority] ?? 99) - (priorityOrder[b.priority] ?? 99)
        );
      });

    if (filteredTasks.length === 0) {
      cardsContainer.innerHTML = `
        <div class="empty-state">
          No tasks here
        </div>
      `;
    } else {
      cardsContainer.innerHTML = filteredTasks.map(createTaskCard).join("");
    }

    countElement.textContent = filteredTasks.length;
  });
}
