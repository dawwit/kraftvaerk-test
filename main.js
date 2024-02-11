(() => {
  const tilesContainer = document.getElementById("tiles");
  const shuffleButton = document.getElementById("shuffle");
  const sortButton = document.getElementById("sort");

  const tiles = Array.from({ length: 9 }, (_, i) => ({
    value: i + 1,
    color: i % 2 === 0 ? "green" : "dark",
  }));

  const renderTiles = () => {
    tilesContainer.innerHTML = tiles
      .map(
        (tile) =>
          `<div class="tile ${tile.color}"><span>${tile.value}</span></div>`
      )
      .join("");
  };

  renderTiles();

  const shuffle = () => {
    tiles.sort(() => Math.random() - 0.5);
    renderTiles();
  };

  const sort = () => {
    tiles.sort((a, b) => a.value - b.value);
    renderTiles();
  };

  shuffleButton.addEventListener("click", shuffle);
  sortButton.addEventListener("click", sort);
})();
