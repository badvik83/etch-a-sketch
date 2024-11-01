const defaultFieldSize = 32;
const fieldSizeDropdown = document.querySelector('#field-size');
const gameFieldContainer = document.querySelector('#game-field-container');

function createGrid(size) {
    const containerSize = gameFieldContainer.clientHeight; // Using height for square grid
    if (containerSize === 0) return; // Prevent calculation if height is 0
    gameFieldContainer.innerHTML = '';
    const itemSize = Math.floor(containerSize / size);

    for (let i = 0; i < (size * size); i++) {
        const gridItem = document.createElement('div');
        gridItem.classList.add('grid-item');
        gridItem.style.width = `${itemSize}px`;
        gridItem.style.height = `${itemSize}px`;
        gameFieldContainer.appendChild(gridItem);
    }
}

// Ensure the grid is created after the page fully loads
window.onload = () => setTimeout(() => createGrid(defaultFieldSize), 0);


// Update grid when dropdown changes
fieldSizeDropdown.addEventListener("change", (event) => {
    const gridSize = parseInt(event.target.value);
    createGrid(gridSize);
});