function createBoard(size)
{
    for (let i=0; i<size; i++)
    {
        const row = document.createElement("div");
        row.className = "grid-row";
        gridContainer.appendChild(row);

        for (let j=0; j<size; j++)
        {
            const gridSquare = document.createElement("div")
            gridSquare.className = "grid-square";
            row.appendChild(gridSquare);
        }
    }
}

function removeBoard()
{
    const element = document.getElementById("grid-container");
    element.innerHTML = "";
}

let mySize = 16;

const customSizeButton = document.getElementById("customSizeBtn");
const gridContainer = document.createElement("div");
const gridItems = document.getElementsByClassName("grid-square");

gridContainer.id = "grid-container";

let isMouseDown = false;

gridContainer.addEventListener("dragstart", (event) => {
    event.preventDefault();
});

document.addEventListener("mousedown", () => {
    isMouseDown = true;
})

document.addEventListener("mouseup", () => {
    isMouseDown = false;
})

gridContainer.addEventListener("mouseover", (event) => {
    if (isMouseDown && event.target.classList.contains("grid-square")) {
        event.target.style.backgroundColor = "black";
    }
});


customSizeButton.addEventListener("click", () => {
    let input = prompt("Size, eg. 64: ");
    if (input >100)
    {
        console.log("Can't create anything larger than 100 for performance reasons");
    }
    else 
    {
        mySize = input
        removeBoard();
        createBoard(mySize);
        document.body.appendChild(gridContainer)
    }
})



createBoard(16);

document.body.appendChild(gridContainer)