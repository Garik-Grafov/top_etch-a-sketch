"use strict";
// main code
document.addEventListener("DOMContentLoaded", function () {
  createBoard(16);
  let btnPopUp = document.querySelector("#popup");
  btnPopUp.addEventListener("click", function () {});
});

// create draw area
function createBoard(size) {
  let board = document.querySelector(".container");
  board.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
  board.style.gridTemplateRows = `repeat(${size}, 1fr)`;
  let numOfDivs = size * size;

  for (let i = 0; i < numOfDivs; i++) {
    let div = document.createElement("div");
    div.addEventListener("mouseover", function () {
      div.style.background = "black";
    });
    board.appendChild(div);
  }
}
