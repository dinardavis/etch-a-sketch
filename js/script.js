const gridContainer = document.querySelector(".grid-container");


function createGrid() {
  for (let i = 0; i < 16; i++) {
    gridContainer.innerHTML += '<div class="grid-squares"></div>';
  }
}

createGrid();
