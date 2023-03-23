"use strict";
let canvas = document.querySelector(".canva");
const btn16 = document.querySelector(".sixteen-grid-maker");
const btn32 = document.querySelector(".thirthytwo-grid-maker");
const btn48 = document.querySelector(".fourtyeight-grid-maker");
const btn64 = document.querySelector(".sixtyfour-grid-maker");
const colorPicker = document.querySelector(".color-picker");
const reset = document.querySelector(".reset");
const canvasSize = document.querySelector(".choose-canvas-size");

//FOR CREATING GRID

const creatingGrid = (size) => {
  let divEl;
  for (let i = 0; i <= size * size - 1; i++) {
    divEl = document.createElement("div");
    canvas.appendChild(divEl);
    divEl.classList.add(`div`);
    divEl.setAttribute("Id", "div");
    divEl.setAttribute(
      `style`,
      `width: calc(100% / ${size}); height: calc(100% / ${size}); border: 1px solid black;  background-color: white; display: block;`
    );
  }
};

// FOR CREATING GRID CELLS (16/16)
btn16.addEventListener("click", function () {
  removeGrid();
  creatingGrid(16);

  //Setting color based on user input
  const div = document.querySelectorAll("div");
  div.forEach((element) => {
    element.addEventListener("mouseover", function () {
      element.setAttribute(
        `style`,
        `width: calc(100% / 16); height: calc(100% / 16); border: 1px solid black;  background-color: ${colorPicker.value}; display: block;`
      );
    });
  });

  //FOR RESETTING THE CANVAS
  reset.addEventListener("click", function () {
    const div = document.querySelectorAll("div");
    div.forEach((element) => {
      element.setAttribute(
        `style`,
        `width: calc(100% / 16); height: calc(100% / 16); border: 1px solid black;  background-color: white; display: block;`
      );
    });
  });
});

// FOR CREATING GRID CELLS (32/32)
btn32.addEventListener("click", function () {
  removeGrid();
  creatingGrid(32);

  //Setting color based on user input
  const div = document.querySelectorAll("div");
  div.forEach((element) => {
    element.addEventListener("mouseover", function () {
      element.setAttribute(
        `style`,
        `width: calc(100% / 32); height: calc(100% / 32); border: 1px solid black;  background-color: ${colorPicker.value}; display: block;`
      );
    });
  });

  //FOR RESETTING THE CANVAS
  reset.addEventListener("click", function () {
    const div = document.querySelectorAll("div");
    div.forEach((element) => {
      element.setAttribute(
        `style`,
        `width: calc(100% / 32); height: calc(100% / 32); border: 1px solid black;  background-color: white; display: block;`
      );
    });
  });
});

// FOR CREATING GRID CELLS (48/48)
btn48.addEventListener("click", function () {
  removeGrid();
  creatingGrid(48);

  //Setting color based on user input
  const div = document.querySelectorAll("div");
  div.forEach((element) => {
    element.addEventListener("mouseover", function () {
      element.setAttribute(
        `style`,
        `width: calc(100% / 48); height: calc(100% / 48); border: 1px solid black;  background-color: ${colorPicker.value}; display: block;`
      );
    });
  });

  //FOR RESETTING THE CANVAS
  reset.addEventListener("click", function () {
    const div = document.querySelectorAll("div");
    div.forEach((element) => {
      element.setAttribute(
        `style`,
        `width: calc(100% / 48); height: calc(100% / 48); border: 1px solid black;  background-color: white; display: block;`
      );
    });
  });
});

// FOR CREATING GRID CELLS (64/64)
btn64.addEventListener("click", function () {
  removeGrid();
  creatingGrid(64);

  //Setting color based on user input
  const div = document.querySelectorAll("div");
  div.forEach((element) => {
    element.addEventListener("mouseover", function () {
      element.setAttribute(
        `style`,
        `width: calc(100% / 64); height: calc(100% / 64); border: 1px solid black;  background-color: ${colorPicker.value}; display: block;`
      );
    });
  });

  //FOR RESETTING THE CANVAS
  reset.addEventListener("click", function () {
    const div = document.querySelectorAll("div");
    div.forEach((element) => {
      element.setAttribute(
        `style`,
        `width: calc(100% / 64); height: calc(100% / 64); border: 1px solid black;  background-color: white; display: block;`
      );
    });
  });
});

//FOR MAKING DIFFERENT SIZE OF GRID CELLS.
function removeGrid() {
  canvas.replaceChildren();
}
