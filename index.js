function createGrid(outerDiv, rows, cols, width = 960) {
    // Create container with column direction
    const container = document.createElement('div');
    container.style.cssText = `display: flex; flex-direction: column; width: ${width}px; height: ${width}px; justify-content: space-evenly`;
    outerDiv.appendChild(container);
    
    // Create rows
    for (let i = 0; i < rows; i++) {
        const rowDiv = document.createElement('div');
        rowDiv.style.cssText = `display: flex; flex-direction: row; justify-content: space-evenly; flex: 1`;
        container.appendChild(rowDiv);
        
        // Create cells in each row
        for (let j = 0; j < cols; j++) {
            const cell = document.createElement('div');
            cell.style.cssText = `background-color: blue; margin: 0px; flex: 1`;
            cell.addEventListener('mouseenter', () => {cell.style.backgroundColor = 'black'})
            rowDiv.appendChild(cell);
        }
    }
}

const body = document.querySelector('body');
createGrid(body, 100, 100); // Create a 5x5 grid


