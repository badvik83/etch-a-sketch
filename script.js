const defaultFieldSize = 16;
const fieldSizeDropdown = document.querySelector('#field-size');
const gameFieldContainer = document.querySelector('#game-field-container');
const inputSize = document.querySelector('#input-size');
inputSize.value = defaultFieldSize;

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

// Event listener for Enter key on the input field
inputSize.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        let gridSize = parseInt(inputSize.value);
        
        // Validate the input
        if (isNaN(gridSize) || gridSize < 1 || gridSize > 100) {
            alert("Please enter a number between 1 and 100.");
            gridSize = defaultFieldSize;
            inputSize.value = defaultFieldSize;
        }

        createGrid(gridSize);
    }
});

function getRandomColor() {
    const randomColor = Math.floor(Math.random()*16777215).toString(16);
    return `#${randomColor}`;
}

// Function to change background color on hover
function addHoverEffect() {
    const gridItems = document.querySelectorAll('.grid-item');
    gridItems.forEach(item => {
        item.addEventListener('mouseover', () => {
            item.style.backgroundColor = getRandomColor(); // Change to desired color
        });
    });
}

// Add hover effect to initial grid
addHoverEffect();

// Re-add hover effect whenever the grid is recreated
const originalCreateGrid = createGrid;
createGrid = function(size) {
    originalCreateGrid(size);
    addHoverEffect();
};

// Update grid when dropdown changes
fieldSizeDropdown.addEventListener("change", (event) => {
    const gridSize = parseInt(event.target.value);
    createGrid(gridSize);
});

createGrid(defaultFieldSize);