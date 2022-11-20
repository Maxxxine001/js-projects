const gameDifficulties = {
    easy: 40,
    medium: 47,
    hard: 55
}


let gameDifficulty = gameDifficulties.easy


function getSudokuFromMap() {
    const sudoku = []
    let table = document.getElementById("table")
    for(let i = 0; i < 9; i++) {
        const tmp = []
        for(let j = 0; j < 9; j++) {
            let cell = table.rows[i].cells[j]
            let value = cell.firstChild.value
            if(value == '') {
                tmp.push(0)
            } else {
                tmp.push(+value)
            }

        }
        sudoku.push(tmp)
    }
    return sudoku
}

function checkSudoku() {
    if(isSudokuValid(getSudokuFromMap())) {
        alert('ok')
    } else {
        alert('chujowo')
    }
}

function loadMap(difficulty) {
    const sudoku = randomMapGenerator(difficulty)

    for(let i = 0; i < 9; i++) {
        for(let j = 0; j < 9; j++) {
            let table = document.getElementById("table")
            let cell = table.rows[i].cells[j]
            if(sudoku[i][j] != 0) {
                cell.firstChild.value = sudoku[i][j]
                cell.firstChild.readOnly = true
            }
            else
                cell.firstChild.value = null
        }
    }
}

function setEasyMode() {
    randomMapGenerator(40)

    for( let i = 0; i < 9; i++){
        for( let j = 0; j < 9; j++){
            
        }
    }
}

function setMediumMode() {
    randomMapGenerator(47)

    for( let i = 0; i < 9; i++){
        for( let j = 0; j < 9; j++){
            
        }
    }
}

function setHardMode() {
    randomMapGenerator(55)

    for( let i = 0; i < 9; i++){
        for( let j = 0; j < 9; j++){
            
        }
    }
}





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
    
    const emptyCell = getFirstEmptyIndex(sudoku)

    if(emptyCell == null){
        return isSudokuValid(sudoku) ? sudoku : null
    }

    for( let i = 1; i <= 9; i++){
        const sudokuCopy = getSudokuCopy(sudoku)
        sudokuCopy[emptyCell.x][emptyCell.y] = i

        if(isSudokuValid(sudokuCopy)){
            const result = getResult(sudokuCopy)
            
            if(result !== null){
                return result
            }
        } 
    }
    return null
}

function getRandomResult(sudoku) {
    const emptyCell = getFirstEmptyIndex(sudoku)
    
    if(emptyCell == null){
        return isSudokuValid(sudoku) ? sudoku : null
    }
    let order = [1,2,3,4,5,6,7,8,9]
    shuffleArray(order)
    for( let i = 0; i < 9; i++){
        const sudokuCopy = getSudokuCopy(sudoku)
        sudokuCopy[emptyCell.x][emptyCell.y] = order[i]

        if(isSudokuValid(sudokuCopy)){
            const result = getRandomResult(sudokuCopy)
            
            if(result !== null){
                return result
            }
        } 
    }
    return null
}

function getNumberOfResults(sudoku){
    
    const emptyCell = getFirstEmptyIndex(sudoku)

    if(emptyCell == null){
        return isSudokuValid(sudoku) ? 1 : 0
    }

    let counter = 0
    for( let i = 1; i <= 9; i++){
        const sudokuCopy = getSudokuCopy(sudoku)
        sudokuCopy[emptyCell.x][emptyCell.y] = i

        if(isSudokuValid(sudokuCopy)){
            const result = getNumberOfResults(sudokuCopy)
            counter += result
            if(counter >= 2)
                return counter
        } 
    }
    return counter
}
   

function getFirstEmptyIndex(sudoku) {
    for( let i = 0; i < 9; i++){
        for( let j = 0; j < 9; j++ ){
            if( sudoku[i][j] == 0 ){
                return {x: i, y: j}
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

function randomMapGenerator(cellsToDelete){
    const emptySudoku = []

    for(let i = 0; i < 9; i++) {
        const tmp = []
        for(let j = 0; j < 9; j++) {
            tmp.push(0)
        }
        emptySudoku.push(tmp)
    }
    let sudoku = getRandomResult(emptySudoku)


    const indexes = []

    for (let i = 0; i < 9; i++) {
        for(let j = 0; j < 9; j++) {
            indexes.push({x: i, y: j})
        } 
    }

    shuffleArray(indexes)
    let counter = 0

    for(let i = 0; i < indexes.length; i++) {
        const x = indexes[i].x
        const y = indexes[i].y

        const value = sudoku[x][y]
        sudoku[x][y] = 0
        if(getNumberOfResults(sudoku) == 1) {
            counter++
            if(counter == cellsToDelete)
                return sudoku
        } else {
            sudoku[x][y] = value
        }
    }
    
    return randomMapGenerator(cellsToDelete)

}





