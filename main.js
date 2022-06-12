function paint() {}

function createGrid(size) {
  let gridContainer = document.querySelector(".gridContainer");
  for (let i = 0; i < size; i++) {
    let row = document.createElement("div");
    row.className = "row";
    gridContainer.append(row);
    for (let j = 0; j < size; j++) {
      let pixel = document.createElement("div");
      pixel.className = "pixel";
      row.append(pixel);
    }
  }
  addHoverEffect();
}

function removeOldGrid() {
  let gridToRemove = document.querySelectorAll(".pixel, .row");
  gridToRemove.forEach((element) => element.remove());
}

function addHoverEffect() {
  const grid = document.querySelectorAll(".pixel");
  grid.forEach((pixel) => {
    pixel.addEventListener("mouseover", (e) => {
      console.log(e);
      e.target.style.backgroundColor = "black";
    });
  });
}

function anwserFunny(userInput) {
  if (userInput > 80) {
    alert("Woah, That's a huge grid. Let's go!");
  } else if (userInput < 6) {
    alert("That's pretty small... But I can work with that");
  }
}

function correctAnswer(userInput) {
  if (userInput <= 100 && userInput >= 1) {
    anwserFunny(userInput);
    return true;
  } else {
    alert("You have to input a number between 1 and 100, Try one more time");
    return false;
  }
}

function userCreateGrid() {
  button = document.querySelector("button.newGrid");
  button.addEventListener("click", (e) => {
    let userInput = Number(
      prompt("How big do you want the grid to be? Type a number from 1 to 100")
    );
    if (correctAnswer(userInput)) {
      removeOldGrid();
      createGrid(userInput);
    }
  });
}
createGrid(16);
userCreateGrid();
