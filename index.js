


function createDivArray(outerDiv, n, depth = 2, direction = 'column', height = 100, width = 100) {
    // Base case: if depth is 0, stop recursion
    if (depth <= 0) return [];
    
    let divArray = [];
    for (let i=0; i<n; i++) {
        const newDiv = document.createElement('div');
        
        // Only make recursive call if depth > 1
        if (depth > 1) {
            // Call with reduced depth and ALTERNATE direction (not assign)
            createDivArray(newDiv, 5, depth - 1, direction === 'column' ? 'row' : 'column');
        }
        
        newDiv.style.cssText = `height: ${height}px; width: ${width}px; display: flex; flex-direction: ${direction}; background-color: blue; margin: 10px`;
        divArray.push(newDiv);
        outerDiv.appendChild(newDiv);
    }
    return divArray;
}


const body = document.querySelector('body');
createDivArray(body, 5);



