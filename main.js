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
}
createGrid(16);
