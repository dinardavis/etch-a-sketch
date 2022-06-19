const grid = document.querySelector(".grid");
const gridOverlay = document.querySelector(".grid-overlay");
const randomColorBtn = document.querySelector(".random-color-btn");
const eraseBtn = document.querySelector(".erase-btn");
const clearBtn = document.querySelector(".clear-btn");
const gridSquares = document.querySelectorAll('.grid-squares');
const colorPicker = document.querySelector(".color-picker");
let slider = document.getElementById("slider");
let output = document.getElementById("slider-value");
output.innerText = `Grid Size: ${slider.value} x ${slider.value}`;
let drawTypeSelector = 1;
let currentColor = '';

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

function randomColor() {
  var letters = '0123456789ABCDEF';
  var randomColorHex = '#';
  for (var i = 0; i < 6; i++) {
    randomColorHex += letters[Math.floor(Math.random() * 16)];
  }
  return randomColorHex;
}

function toggleGridOverlay() {
  if(gridOverlay.style.visibility === "visible") {
    gridOverlay.style.visibility = "hidden";
  } else {
    gridOverlay.style.visibility = "visible"
  }
}

slider.addEventListener("input", updateSliderValue);
slider.addEventListener("input", createGrid);
grid.addEventListener("click", toggleGridOverlay);
gridOverlay.addEventListener("click", toggleGridOverlay);
grid.addEventListener("mouseover", (e) => {
  if(drawTypeSelector === 2) {
    e.target.style.backgroundColor = `${randomColor()}`;
  } else if(drawTypeSelector === 1) {
    e.target.style.backgroundColor = `${colorPicker.value}`;
  } else if(drawTypeSelector === 3) {
    e.target.style.backgroundColor = '#fff';
  }
});

colorPicker.addEventListener("click", () => {
  drawTypeSelector = 1;
})

randomColorBtn.addEventListener("click", () => {
  drawTypeSelector = 2;
})

eraseBtn.addEventListener("click", () => {
  drawTypeSelector = 3;
})

clearBtn.addEventListener("click", createGrid)


