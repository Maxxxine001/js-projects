let firstCard = 10
let secondCard = 11
let sum = firstCard + secondCard
let hasBlackJack = false
let isAlive = true
let message = ""
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")
console.log(messageEl)

function startGame() {
    if(sum <=20 ) {
        message = 'Do you want to draw a new card ?'
    } else if (sum === 21) {
        message = 'Black jack!'
        hasBlackJack = true
    } else {
        message= "You've lost :("
        isAlive = false
    }
    
    cardsEl.textContent = firstCard + " " + secondCard
    messageEl.textContent = message
    sumEl.textContent = sum
}
