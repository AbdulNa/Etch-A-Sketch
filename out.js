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
//gridCell.addEventListener("mousedown", handleMouseDown);        
        //gridCell.addEventListener("mouseup", handleMouseup); 