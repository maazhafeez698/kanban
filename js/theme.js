const themeButton = document.querySelector("#theme-toggle");

const savedTheme = localStorage.getItem("kanban-theme");

if (savedTheme === "dark") {
  document.body.classList.add("dark");

  themeButton.textContent = "☀️";
}

themeButton.addEventListener("click", () => {
  document.body.classList.toggle("dark");

  const isDark = document.body.classList.contains("dark");

  localStorage.setItem("kanban-theme", isDark ? "dark" : "light");

  themeButton.textContent = isDark ? "☀️" : "🌙";
});
