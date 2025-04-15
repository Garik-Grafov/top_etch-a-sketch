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

// function for get size of the board
function getSize() {
  let input = prompt("Give me a size of the board");
  let message = document.querySelector("#message");
  if (input == "") {
    message.innerHTML = "Please provide a number";
  } else if (input < 0 || input > 100) {
    message.innerHTML = "Provide a number between 1 and 100";
  } else {
    message.innerHTML = "Now you play!";
    return Number(input);
  }
}
