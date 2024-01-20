const gridside = 600;
let rows_Column = 16; 

const sketchArea = document.querySelector("#sketch-area");
sketchArea.style.width = `${gridside}px`;
sketchArea.style.height = `${gridside}px`;

function backgroundChange() {
    this.style.backgroundColor = "Black";
}

function eraser() {
    this.style.backgroundColor = "white";
}

function createCells() {
    const mini_square = (rows_Column * rows_Column);

    sketchArea.innerHTML = "";

    //loops to create desired mini cubes    
    for(let i = 0; i < mini_square; i++) {
        const gridCell = document.createElement("div");
        gridCell.style.width = `${(gridside / rows_Column)- 2}px`;
        gridCell.style.height = `${(gridside / rows_Column)- 2}px`;
        gridCell.classList.add("cell");
        sketchArea.appendChild(gridCell);

        gridCell.addEventListener("mouseover", backgroundChange);
    }
}
createCells();


function getUserInput() {
    const userInput  = document.getElementById("userInput").value;

    if (userInput > 1 && userInput < 100) {
        rows_Column = userInput;
        createCells();
    } else {
        alert("Input must be within range of 1 to 100");
    }
}

