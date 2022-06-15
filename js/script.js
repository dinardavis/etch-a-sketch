const grid = document.querySelector(".grid");
const gridOverlay = document.querySelector(".grid-overlay");
let slider = document.getElementById("slider");
let output = document.getElementById("slider-value");
output.innerText = `Grid Size: ${slider.value} x ${slider.value}`;

createGrid();

function createGrid() {
  grid.innerHTML = '';  grid.style.setProperty('grid-template-columns', `repeat(${slider.value}, 1fr)`);
  grid.style.setProperty('grid-template-rows', `repeat(${slider.value}, 1fr)`);

  let totalSquares = slider.value ** 2;
  for (let i = 0; i < totalSquares; i++) {
    grid.innerHTML += `<div class="grid-squares"></div>`;
  }
}

function updateSliderValue() {
  output.innerText = `Grid Size: ${slider.value} x ${slider.value}`;
}

const gridSquares = document.querySelectorAll('.grid-squares');
const colorPicker = document.querySelector(".color-picker");

function changeSquareColor(e) {
  e.target.style.backgroundColor = `${colorPicker.value}`;
}

function toggleGridOverlay() {
  if(gridOverlay.style.visibility === "visible") {
    gridOverlay.style.visibility = "hidden";
  } else {
    gridOverlay.style.visibility = "visible"
  }
  console.log('working');
}

slider.addEventListener("input", updateSliderValue);
slider.addEventListener("input", createGrid);

grid.addEventListener("mouseover", changeSquareColor);
grid.addEventListener("click", toggleGridOverlay);
gridOverlay.addEventListener("click", toggleGridOverlay);
