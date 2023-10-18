// Grab grid container from html
const gridContainer = document.querySelector(".container");
// Create Grid
createGrid(32);
// Grab reference to gridItems
const gridItems = document.querySelectorAll(".grid-item");
// Grab reference to clear button
const clearBtn = document.getElementById("clear");
// Grab reference to color picker input
const colorPicker = document.getElementById("color-pick");
let color = "black";

// Check if mousedown
let mousedown;
document.body.onmousedown = function() {
    mousedown = true;
    console.log(mousedown);
}
document.body.onmouseup = function() {
    mousedown = false;
    console.log(mousedown);
}

// Check for events for coloring a gridItem
for (let i = 0; i < gridItems.length; i++) {
    // Event listener for mousedown + hover
    gridItems[i].addEventListener("mouseover", () => {
        if (mousedown) { 
            console.log("HELLO");
            gridItems[i].style.backgroundColor = color;
        };
    });
    // Event listener for only mousedown
    gridItems[i].addEventListener("mousedown", () => {
        gridItems[i].style.backgroundColor = color;
    })
}

clearBtn.addEventListener("click", () => {
    for (let i = 0; i < gridItems.length; i++) {
        gridItems[i].style.backgroundColor = "transparent";
    }
})


// Select color
colorPicker.addEventListener("change", () => {
    console.log(colorPicker.value)
    color = colorPicker.value;
});


function createGrid(gridSize) {
    for (let rows = 0; rows < gridSize; rows++) {
        for (let columns = 0; columns < gridSize; columns++) {
            let gridDiv = document.createElement("div");
            gridDiv.classList.add("grid-item");
            gridContainer.append(gridDiv);
        }
    }
}


