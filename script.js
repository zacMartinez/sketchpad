const canvas = document.querySelector('#canvas');
const clearBtn = document.querySelector('#clear');
const min = 2;
const max = 128;
let defaultSize = 16;

function drawGrid(target, dimension) {
    target.innerHTML = '';

    for (let i = 0; i < dimension; i++) {
        let row = document.createElement('div');
        row.classList.add('row');

        for (let n = 0; n < dimension; n++) {
            let cell = document.createElement('div');
            cell.classList.add('cell');

            row.appendChild(cell);
        }

        target.appendChild(row);
    }
}

function getNewCanvasSize(min, max) {
    let newSize = defaultSize;
    let inputValid = false;
    do {
        let input  = prompt(
            'Enter the size of your new canvas.\n' +
            `Please choose a number between ${min} and ${max}.`
        );

        if (input != null) {
            newSize = Number.parseInt(input);
            if (newSize >= min && newSize <= max) {
                inputValid = true;
            }
        } else {
            inputValid = true;
        }
    } while (!inputValid);

    return newSize;
}

canvas.addEventListener('mouseover', (e) => {
    if (e.target.classList.contains('cell')) {
        e.target.classList.add('--marked');
    }
})

clearBtn.addEventListener('click', () => {
    const newSize = getNewCanvasSize(min, max);
    drawGrid(canvas, newSize);
});

drawGrid(canvas, defaultSize);