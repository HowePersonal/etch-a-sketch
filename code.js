const body = document.body;
const grid = document.getElementById('grid');

let createGrid = (size) => {
    console.log(grid.style);
    grid.style.gridTemplateColumns = "repeat( " + size + ", 16px)";
    for (i = 0; i < size; i++) {
        for (j = 0; j < size; j++) {
            const gridBox = document.createElement("div");
            gridBox.id = "gridBox";
            gridBox.style.background = "white";
            gridBox.style.width="16px";
            gridBox.style.height = "16px";
            grid.appendChild(gridBox);
        }
    }
}

let changeGrid = () => {
    let size = prompt("What size would you like?");
    if (size) {
        grid.innerHTML = '';
        createGrid(size);
    }

}

grid.addEventListener('mouseover', e => {
    if (e.target.id == "gridBox") {
        e.target.style.background = "black";
    }  
}) 

createGrid(32)