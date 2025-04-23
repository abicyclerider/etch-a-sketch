function createGrid(outerDiv, rows, cols, height = 10, width = 10) {
    // Create container with column direction
    const container = document.createElement('div');
    container.style.cssText = `display: flex; flex-direction: column;`;
    outerDiv.appendChild(container);
    
    // Create rows
    for (let i = 0; i < rows; i++) {
        const rowDiv = document.createElement('div');
        rowDiv.style.cssText = `display: flex; flex-direction: row;`;
        container.appendChild(rowDiv);
        
        // Create cells in each row
        for (let j = 0; j < cols; j++) {
            const cell = document.createElement('div');
            cell.style.cssText = `height: ${height}px; width: ${width}px; background-color: blue; margin: 1px;`;
            cell.addEventListener('mouseenter', () => {cell.style.backgroundColor = 'black'})
            rowDiv.appendChild(cell);
        }
    }
}

const body = document.querySelector('body');
createGrid(body, 50, 50); // Create a 5x5 grid


