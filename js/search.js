const searchInput = document.querySelector("#search-input");

searchInput.addEventListener("input", () => {
  searchQuery = searchInput.value.toLowerCase().trim();

  renderBoard();
});
