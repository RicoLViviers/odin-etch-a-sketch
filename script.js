const gridContainer = document.createElement("div");
gridContainer.id = 'grid-container';
for (let i=0; i<16; i++)
{
    const row = document.createElement("div");
    row.className = "grid-row";
    gridContainer.appendChild(row);

    for (let j=0; j<16; j++)
    {
        const gridSquare = document.createElement("div")
        gridSquare.className = "grid-square";
        row.appendChild(gridSquare);
    }
}

document.body.appendChild(gridContainer)