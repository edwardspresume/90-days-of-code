console.log('\x1Bc'); //Clear console


const testLetters = () => {
    let letters = 'abcdefg';

    for (let i = letters.length - 1; i >= 0; i--) {
        let currentLetter = letters[i];
        console.log(currentLetter);
    }
}

const buildGrid = (rowCount, colCount) => {

    let grid = []
    let cellValue = 1;

    // add a row to grid base on the count
    for (let i = 0; i < rowCount; i++) {

        let row = [];

        for (let j = 0; j < colCount; j++) {

            row.push(cellValue);
            cellValue++
        }

        grid.push(row);
    }

    return grid;
}

console.log(buildGrid(3, 3));




function getGreet