const gridContainer = document.querySelector(".grid-container");
let slider = document.getElementById("slider");
let output = document.getElementById("slider-value");
let sliderValue = '';
output.innerText = `${slider.value} x ${slider.value}`;

createGrid();

function createGrid() {
  gridContainer.innerHTML = '';
  let totalSquares = slider.value ** 2;
  let gridSquareSize = (600/slider.value).toFixed(4);
  for (let i = 0; i < totalSquares; i++) {
    gridContainer.innerHTML += `<div class="grid-squares" style="width: ${gridSquareSize}px; height: ${gridSquareSize}px;"></div>`;
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
slider.addEventListener("mouseup", createGrid);

gridContainer.addEventListener("mouseover",
changeSquareColor);