const gridside = 600;
let rows_Column = 21;

const sketchArea = document.querySelector("#sketch-area");
sketchArea.style.width = `${gridside}px`;
sketchArea.style.height = `${gridside}px`;

// funtion to change background when hovered/*
function backgroundChange() { 
    if (isMouseDown) { 
        this.style.backgroundColor = "black";
    }
}
function handleMouseDown() { 
    isMouseDown = true;
}
function handleMouseup() { 
    isMouseDown = false;
}
function backgroundChange() {
    this.style.backgroundColor = "black";
}

//funtion  for eraser
function eraser() {
    if (isMouseDown) {
        this.style.backgroundColor = "white";
    }
}
function handleMouseDown() {
    isMouseDown = true;
}
function handleMouseup() {
    isMouseDown = false;
}

function createCells() {
    const mini_square = (rows_Column * rows_Column);
    //loops to create desired mini cubes    
    for(let i = 0; i < mini_square; i++) {
        const gridCell = document.createElement("div");
        gridCell.style.width = `${(gridside / rows_Column)- 2}px`;
        gridCell.style.height = `${(gridside / rows_Column)- 2}px`;
        gridCell.classList.add("cell");
        sketchArea.appendChild(gridCell);

        //gridCell.addEventListener("mousedown", handleMouseDown);        
        //gridCell.addEventListener("mouseup", handleMouseup);        
        gridCell.addEventListener("mouseover", backgroundChange);
    }
}
createCells();