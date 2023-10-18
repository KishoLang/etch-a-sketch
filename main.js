// Grab grid container from html
const gridContainer = document.querySelector(".container");
// Create Grid
createGrid(32);
// Grab reference to gridItems
const gridItems = document.querySelectorAll(".grid-item");
// Grab reference to clear button
const clearBtn = document.getElementById("clear");
// Grab reference to color picker input and eraser
const colorPicker = document.getElementById("color-pick");
const eraser = document.getElementById("eraser");
const pen = document.getElementById("pen");
let color = "black";
let eraserOn = false;

// Check if mousedown
let mousedown;
document.body.onmousedown = function() {
    mousedown = true;
}
document.body.onmouseup = function() {
    mousedown = false;
}

// Check for events for coloring a gridItem
for (let i = 0; i < gridItems.length; i++) {
    // Event listener for mousedown + hover
    gridItems[i].addEventListener("mouseover", () => {
        if (mousedown && !eraserOn) { 
            gridItems[i].style.backgroundColor = color;
        }
        if (eraserOn) {
            gridItems[i].style.backgroundColor = "transparent";
        }
    });
    // Event listener for only mousedown
    gridItems[i].addEventListener("mousedown", () => {
        if (!eraserOn) {
            gridItems[i].style.backgroundColor = color;
        }
        if (eraserOn) {
            gridItems[i].style.backgroundColor = "transparent";
        }
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

eraser.addEventListener("click", () => {
    eraserOn = true;
});

pen.addEventListener("click", () => {
    eraserOn = false;
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


