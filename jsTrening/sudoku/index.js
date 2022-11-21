const gameDifficulties = {
    easy: 40,
    medium: 47,
    hard: 55
}


let gameDifficulty = gameDifficulties.easy
var currentSolution = null
var currentTimer = null
function timer(){

    var minutesLabel = document.getElementById("minutes");
    var secondsLabel = document.getElementById("seconds");
    var totalSeconds = 0;
    if(currentTimer != null)
        clearInterval(currentTimer)
    currentTimer = setInterval(setTime, 1000);
    minutesLabel.innerHTML = '00'
    secondsLabel.innerHTML = '00'

    function setTime()
    {
        ++totalSeconds;
        secondsLabel.innerHTML = pad(totalSeconds%60);
        minutesLabel.innerHTML = pad(parseInt(totalSeconds/60));
    }

    function pad(val)
    {
        var valString = val + "";
        if(valString.length < 2)
        {
            return "0" + valString;
        }
        else
        {
            return valString;
        }
    }
}

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


 function inputCheck(){
  
 
 }



function checkSudoku() {
    
    if( getFirstEmptyIndex != null){
        alert('sudoku nie jest skończone')
    } else if(isSudokuValid(getSudokuFromMap())) {
         alert('ok')
    } else {
        alert('chujowo')
    }
        
}

function displayLvl(mode){
    timer()
    let message = document.getElementById("difLvlInfo")
    message.textContent = `You choose ${mode} mode`
    const numberOfHints = {'Easy': 10, 'Medium': 5, 'Hard': 0}
    const easyBut = document.getElementById("easyButton")
    const mediumBut = document.getElementById("mediumButton")
    const hardBut = document.getElementById("hardButton")
    easyBut.disabled = true
    mediumBut.disabled = true
    hardBut.disabled = true
}



let amountOfHintsLeft = 4
let playerHints = document.getElementById("amountOfHintsLeft")
playerHints.textContent = `You have ${amountOfHintsLeft} hints left`

function showHint() {

    if( amountOfHintsLeft > 0) {

        amountOfHintsLeft--
        playerHints.textContent = `You have ${amountOfHintsLeft} hints left`
        let emptyCells = []
        const sudoku = getSudokuFromMap()
        for( let i = 0; i < 9; i ++){
            for( let j = 0; j < 9; j++){
                if( sudoku[i][j] == 0){
                    emptyCells.push({x: i, y: j})
                }
            }
        }

        let randomEmptyCell = emptyCells[Math.floor(Math.random() * emptyCells.length)]
        let table = document.getElementById("table")
        let cell = table.rows[randomEmptyCell.x].cells[randomEmptyCell.y]
        cell.firstChild.value = solution[randomEmptyCell.x][randomEmptyCell.y]
        cell.firstChild.readOnly = true
    } else {
        alert("brak dostępnych wskazówek")
    }
}

function loadMap(difficulty) {
    amountOfHintsLeft = 4
    playerHints.textContent = `You have ${amountOfHintsLeft} hints left`
    const randomMap = getRandomMap(difficulty)
    const sudoku = randomMap.sudoku
    solution = randomMap.solution

    for(let i = 0; i < 9; i++) {
        for(let j = 0; j < 9; j++) {
            let table = document.getElementById("table")
            let cell = table.rows[i].cells[j]
            if(sudoku[i][j] != 0) {
                cell.firstChild.value = sudoku[i][j]
                cell.firstChild.readOnly = true
            }
            else {
                cell.firstChild.value = null
                cell.firstChild.readOnly = false
            }
                
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

function getNumberOfResults(sudoku) {
    class EmptyCell {
        constructor(x, y) {
            this.x = x
            this.y = y
            this.avaibleNumbers = new Set()
            for(let i = 1; i <= 9; i++) {
                this.avaibleNumbers.add(i)
            }
        }
    }

    const emptyCells = []
    const dp = []
    for(let i = 0; i < 9; i++){
        const tmp = []
        for( let j = 0; j < 9; j++ ) {
            if(sudoku[i][j] == 0) {
                const cell = new EmptyCell(i, j)
                emptyCells.push(cell)
                tmp.push(cell)
            } else {
                tmp.push(null)
            }

        }
        dp.push(tmp)
    }

    emptyCells.forEach(emptyCell => {

        for(let i = 0; i < 9; i++) {
            emptyCell.avaibleNumbers.delete(sudoku[emptyCell.x][i])
            emptyCell.avaibleNumbers.delete(sudoku[i][emptyCell.y])
        }

        let xStart = Math.floor(emptyCell.x / 3) * 3
        let yStart = Math.floor(emptyCell.y / 3) * 3
        for(let i = 0; i < 9; i++) {
            emptyCell.avaibleNumbers.delete(sudoku[xStart + (i%3)][yStart + (Math.floor(i/3))])
        }

    });

    let ans = 0
    function getNumberOfResultsRek(emptyCells) {
        if(emptyCells.length == 0) {
            ans += 1
            return
        }
        emptyCells.sort((a, b) => {
            return a.avaibleNumbers.size - b.avaibleNumbers.size
        })
        let currentEmptyCell = emptyCells[0]
        if(currentEmptyCell.avaibleNumbers.size == 0) {
            return
        }
        emptyCells.splice(0, 1)

        dp[currentEmptyCell.x][currentEmptyCell.y] = null

        for (const number of currentEmptyCell.avaibleNumbers) {
            
            let xStart = Math.floor(currentEmptyCell.x / 3) * 3
            let yStart =  Math.floor(currentEmptyCell.y / 3) * 3
            let deletedEmpty = []
            let emptyCell = null
            for(let i = 0; i < 9; i++) {
                emptyCell = dp[i][currentEmptyCell.y]
                if(emptyCell != null) {
                    if(emptyCell.avaibleNumbers.delete(number)) {
                        deletedEmpty.push(emptyCell)
                    }
                }
                emptyCell = dp[currentEmptyCell.x][i]
                if(emptyCell != null) {
                    if(emptyCell.avaibleNumbers.delete(number)) {
                        deletedEmpty.push(emptyCell)
                    }
                }

                emptyCell = dp[xStart + Math.floor(i/3)][yStart + (i % 3)]
                if(emptyCell != null) {
                    if(emptyCell.avaibleNumbers.delete(number)) {
                        deletedEmpty.push(emptyCell)
                    }
                }
            }
            getNumberOfResultsRek(emptyCells)
            if(ans >= 2) {  
                return
            }

            for(const emptyCell of deletedEmpty) {
                emptyCell.avaibleNumbers.add(number)
            }
        }
        dp[currentEmptyCell.x][currentEmptyCell.y] = currentEmptyCell
        emptyCells.push(currentEmptyCell)
    }
    
    getNumberOfResultsRek(emptyCells)
    return ans
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

function getRandomMap(cellsToDelete){
    const emptySudoku = []

    for(let i = 0; i < 9; i++) {
        const tmp = []
        for(let j = 0; j < 9; j++) {
            tmp.push(0)
        }
        emptySudoku.push(tmp)
    }
    let sudoku = getRandomResult(emptySudoku)
    let solution = getSudokuCopy(sudoku)

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
                return {sudoku: sudoku, solution: solution}
        } else {
            sudoku[x][y] = value
        }
    }
    
    return getRandomMap(cellsToDelete)

}





