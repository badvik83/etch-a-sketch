const defaultFieldSize = 'standard';

function showFieldSize(size) {
  const fieldSizeDropdown = document.querySelector('#field-size');
  const fieldSize = fieldSizeDropdown.value;
  if (fieldSize === 'small') {
    let gameFieldcontainer = document.querySelector('#game-field-container');
    // gameFieldcontainer.innerHTML = '';
    createGrid(16,16);
    alert('small');
  }
  else if (fieldSize === 'standard') {
    let gameFieldcontainer = document.querySelector('#game-field-container');
    // gameFieldcontainer.innerHTML = '';
    createGrid(32,32);
    alert('standard');
  }
  else if (fieldSize === 'large') {
    let gameFieldcontainer = document.querySelector('#game-field-container');
    // gameFieldcontainer.innerHTML = '';
    createGrid(64,64);
    alert('large');
  }
  else {
    let gameFieldcontainer = document.querySelector('#game-field-container');
    gameFieldcontainer.innerHTML = '';
    createGrid(96,96);
    alert('xlarge');
  }
}

function createGrid(rows, cols) {
    let gameField = document.querySelector('#game-field-container');
    for (let i = 0; i < (rows * cols); i++) {
        let cellItem = document.createElement('div');
        cellItem.classList.add('grid-item');
        gameField.appendChild(cellItem);
    }
}

showFieldSize(defaultFieldSize);