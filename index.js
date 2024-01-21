const gridside = 600;
let rows_Column = 16; 
let color = 'Black'
let isDrawing = false;

const sketchArea = document.querySelector("#sketch-area");
sketchArea.style.width = `${gridside}px`;
sketchArea.style.height = `${gridside}px`;


//function to create cells
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
        gridCell.addEventListener("mousedown", ()=> {isDrawing = true})
        gridCell.addEventListener("mouseup", ()=> {isDrawing = false})
    }
}
//calls to draw default grid
createCells();

// user input funtion to generate desired grid size
function getUserInput() {
    const userInput  = document.getElementById("userInput").value;

    if (userInput > 1 && userInput < 100) {
        rows_Column = userInput;
        color = 'Black';
        createCells();
    } else {
        alert("Input must be within range of 1 to 100");
    }
}


function backgroundChange() {
    if(isDrawing) {
    if (color === 'random') {
        this.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
    } else {
        this.style.backgroundColor = color;
    }
    }
}

function changeColor(choice) {
    color = choice;
}

// clear grid function
function clearGrid() {
    const gridCell = document.querySelectorAll(".cell");
    gridCell.forEach(cell => {
        cell.style.backgroundColor = 'white';        
    });
}




