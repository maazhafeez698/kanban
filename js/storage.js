function saveTasks() {
  localStorage.setItem("kanbanTasks", JSON.stringify(tasks));
}

function loadTasks() {
  const savedTasks = localStorage.getItem("kanbanTasks");

  if (savedTasks) {
    tasks.push(...JSON.parse(savedTasks));
  }
}
