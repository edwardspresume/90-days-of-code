// YOUR CODE BELOW
console.clear();

// Create a board to be used by ticTacToe
const createBoard = (rowNum, colNum) => {

    let board = [];

    for (let i = 0; i < rowNum; i++) {

        let row = [];

        for (let j = 0; j < colNum; j++) {
            row.push(null)
        }

        board.push(row)
    }
    return board;
}

let initiateBoard = createBoard(3, 3);

const ticTacToe = {

    board: createBoard(3, 3),


    move(char, rowPos, colPos) {

        let activeBoard = this.board.slice();

        let currentPosition = activeBoard[rowPos][colPos];

        if ((currentPosition !== 'x') && (currentPosition !== 'o')) {

            activeBoard[rowPos][colPos] = char;
        } else return `This position is already at play`;

        return activeBoard;
    },

    clear() {
        return this.board;
    }
}


// console.clear();
// console.log(`----------------------------- Original Board -----------------------------`);
// console.log(ticTacToe.board);

// console.log(`----------------------------- Active Board -----------------------------`);
// console.log(ticTacToe.move('x', 0, 0));

// console.log(`----------------------------- Clear -----------------------------`);
// console.log(ticTacToe.clear());