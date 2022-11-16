

// Sudoku is in format list[9][9]  so list[x][y] will get you an element on x-th row and y-th collumn.
// Every element contains number from 1 to 9 if the value is known, or 0 if isn't.


function printSudoku(sudoku) {
    console.log()
    for(let i = 0; i < 9; i++) {
        let s = ''
        for(let j = 0; j < 9; j++) {
            s += sudoku[i][j] + ' '
        }
        console.log(s)
    }
    console.log()
}

function getSudokuCopy(sudoku) {
    const copy = []
    for(let i = 0; i < 9; i++) {
        const tmp = []
        for(let j = 0; j < 9; j++) {
            tmp.push(sudoku[i][j])
        }
        copy.push(tmp)
    }
    return copy
}

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}


function getResult(sudoku){
    
    let emptyCell = getFirstEmptyIndex[getSudokuCopy]

    for( let i = 1; i <=9; i++){
        if(isSudokuValid)
        emptySudoku[emptyCell]= i
        getResult(emptySudoku)
    } 

    return emptySudoku  
}
   

function getFirstEmptyIndex(sudoku) {
    for( let i = 0; i < 9; i++){
        for( let j = 0; j < 9; j++ ){
            if( sudoku[i][j] == 0 ){
                return [i, j]
            } 
        }
    }
    return null
}

function isSudokuValid(sudoku){
    const s = new Set()
    for(let i = 0; i < sudoku.length; i++) {
        s.clear()
        for(let j = 0; j < sudoku[i].length; j++) {
            if(sudoku[i][j] == 0) {
                continue
            }
            if(s.has(sudoku[i][j])) {
                return false
            }
            s.add(sudoku[i][j])
        }
    }

    for( let i = 0; i < sudoku.length; i++){
        s.clear()
        for( let j = 0; j < sudoku.length; j++){
            if(sudoku[j][i] == 0) {
                continue
            }
            if(s.has(sudoku[j][i])) {
                return false
            }
            s.add(sudoku[j][i])
        }
    }


    for(let i = 0; i < 9; i++) {
        s.clear()
        for(let j = 0; j < 9; j++) {
            let currValue = sudoku[Math.floor(i/3) * 3 + Math.floor(j/3)][ i % 3 * 3 + j % 3]
            if(currValue == 0) {
                continue
            }
            if(s.has(currValue)) {
                return false
            }
            s.add(currValue)
        }
    }

    return true
    
    
}

function isSudokuInValidFormat(sudoku) {
    if(!sudoku instanceof Array)
        return false
    
    if(sudoku.length != 9)
        return false
    
    for(let i = 0; i < sudoku.length; i++) {
        if(!sudoku[i] instanceof Array)
            return false
    
        if(sudoku[i].length != 9)
            return false

        for(let j = 0; j < sudoku[i].length; j++) {
            if(typeof sudoku[i][j] != 'number')
                return false
            if(sudoku[i][j] < 0 || sudoku[i][j] > 9)
                return false
            if(Math.floor(sudoku[i][j]) != sudoku[i][j])
                return false
        }
    }
    return true
}

let sudoku = [
    [0, 0, 7, 0, 0, 0, 0, 0, 5],
    [0, 4, 0, 0, 6, 1, 0, 3, 0],
    [0, 3, 2, 7, 0, 9, 0, 0, 0],
    [0, 1, 0, 6, 0, 0, 0, 0, 0],
    [0, 0, 4, 0, 0, 0, 6, 7, 0],
    [0, 0, 0, 0, 7, 2, 5, 0, 4],
    [4, 0, 3, 2, 1, 8, 7, 9, 0],
    [6, 0, 8, 4, 0, 7, 3, 5, 1],
    [9, 0, 1, 0, 0, 0, 0, 0, 2]
]

const emptySudoku = []

for(let i = 0; i < 9; i++) {
    const tmp = []
    for(let j = 0; j < 9; j++) {
        tmp.push(0)
    }
    emptySudoku.push(tmp)
}


console.log(getResult(emptySudoku))

