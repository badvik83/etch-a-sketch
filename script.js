const defaultFieldSize = 16;
const fieldSizeDropdown = document.querySelector('#field-size');
const gameFieldContainer = document.querySelector('#game-field-container');

function createGrid(size) {
    gameFieldContainer.innerHTML = '';

    // Create rows and cells
    for (let row = 0; row < size; row++) {
        const rowContainer = document.createElement('div');
        rowContainer.classList.add('grid-row');

        for (let col = 0; col < size; col++) {
            const gridItem = document.createElement('div');
            gridItem.classList.add('grid-item');
            rowContainer.appendChild(gridItem);
        }

        gameFieldContainer.appendChild(rowContainer);
    }
}

// Update grid when dropdown changes
fieldSizeDropdown.addEventListener("change", (event) => {
    const gridSize = parseInt(event.target.value);
    createGrid(gridSize);
});

createGrid(defaultFieldSize);