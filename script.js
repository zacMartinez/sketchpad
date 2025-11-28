const canvas = document.querySelector('#canvas');
const minMax = [2, 128];
const dimension = 16;

for (let i = 0; i < dimension; i++) {
    let row = document.createElement('div');
    row.classList.add('row');
    
    for (let n = 0; n < dimension; n++) {
        let cell = document.createElement('div');
        cell.classList.add('cell');
        
        row.appendChild(cell);
    }
    
    canvas.appendChild(row);
}