console.clear();
/* ==========================================================================
                                 Data
   ========================================================================== */


let puzzle = [
    [8, 9, 5, 7, 4, 2, 1, 3, 6],
    [2, 7, 1, 9, 6, 3, 4, 8, 5],
    [4, 6, 3, 5, 8, 1, 7, 9, 2],

    [9, 3, 4, 6, 1, 7, 2, 5, 8],
    [5, 1, 7, 2, 3, 8, 9, 6, 4],
    [6, 8, 2, 4, 5, 9, 3, 7, 1],

    [1, 5, 9, 8, 7, 4, 6, 2, 3],
    [7, 4, 6, 3, 2, 5, 8, 1, 9],
    [3, 2, 8, 1, 9, 6, 5, 4, 7]
];

/* ==========================================================================
                                 Logic
   ========================================================================== */


class Sudoku {

    constructor(board) {
        this.board = board
    }

    getRow(row) {
        return this.board[row];
    }

    getColumn(col) {
        let returnedColumn = this.board.map(row => row[col]);

        return returnedColumn;
    }

    getGrid(colNum, rowNum) {
        colNum *= 3;
        rowNum *= 3;

        let section = [];

        for (let i = colNum; i < colNum + 3; i++) {
            for (let j = rowNum; j < rowNum + 3; j++) {
                section.push(this.board[i][j]);
            }
        }

        return section;
    }

    includes1to9(set) {

        let valid = true;
        let oneThroughNine = [1, 2, 3, 4, 5, 6, 7, 8, 9];

        // if the set is not a proper length return false
        if (oneThroughNine.length !== set.length) valid = false;

        set.sort().forEach((num, index) => {

            if (num !== oneThroughNine[index]) valid = false;
        });

        return valid;
    }

    isValid() {
        let valid = true;
        let checks = [];

        for (let i = 0; i < 9; i++) {
            checks.push(this.getRow(i));
            checks.push(this.getColumn(i));
        }

        console.log(checks);

        checks.forEach(element => {
            if (!this.includes1to9(element)) valid = false;
        })

        return valid;
    }

}

// Initiate gameOne;
let gameOne = new Sudoku(puzzle);

// Get the first row of gameOne
let firstRow = gameOne.getRow(0)


console.log(gameOne.isValid());