let num1 = 6
let num2 = 4


document.getElementById("num1-el").textContent = num1
document.getElementById("num2-el").textContent = num2
let summary = document.getElementById("sum-el")

function add() {
    summary.textContent = num1 + num2
}

function substract() { 
    summary.textContent = num1 - num2  
}

function devide() {
    summary.textContent = num1 / num2   
}

function multiply() {
    summary.textContent = num1 * num2
}



