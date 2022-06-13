const gridContainer = document.querySelector(".grid-container");
let slider = document.getElementById("slider");
let output = document.getElementById("slider-value");
output.innerText = `Grid Size: ${slider.value} x ${slider.value}`;

createGrid();

function createGrid() {
  gridContainer.innerHTML = '';  gridContainer.style.setProperty('grid-template-columns', `repeat(${slider.value}, 1fr)`);
  gridContainer.style.setProperty('grid-template-rows', `repeat(${slider.value}, 1fr)`);

  let totalSquares = slider.value ** 2;
  for (let i = 0; i < totalSquares; i++) {
    gridContainer.innerHTML += `<div class="grid-squares"></div>`;
  }
}

function updateSliderValue() {
  output.innerText = `Grid Size: ${slider.value} x ${slider.value}`;
}

let gridSquares = document.querySelectorAll(".grid-squares");

function changeSquareColor(e) {
  e.target.classList.add('color-change');
}

slider.addEventListener("input", updateSliderValue);
slider.addEventListener("input", createGrid);

gridContainer.addEventListener("mouseover",
changeSquareColor);