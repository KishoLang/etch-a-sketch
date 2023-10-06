// Grab grid container from html
const gridContainer = document.querySelector(".container");

createGrid(32);

function createGrid(gridSize) {
    for (let rows = 0; rows < gridSize; rows++) {
        for (let columns = 0; columns < gridSize; columns++) {
            let gridDiv = document.createElement("div");
            gridContainer.append(gridDiv);
        }
    }
}