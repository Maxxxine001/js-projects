let firstCard = 10
let secondCard = 5
let sum = firstCard + secondCard
let hasBlackJack = false
let isAlive = true
let message = ""
let messageEl = document.getElementById("message-el")
let sumEl = document.querySelector("#sum-el")
let cardsEl = document.getElementById("cards-el")
console.log(messageEl)



function startRound() {
    if(sum <=20 ) {
        message = 'Do you want to draw a new card ?'
    } else if (sum === 21) {
        message = 'Black jack!'
        hasBlackJack = true
    } else {
        message= "You've lost :("
        isAlive = false
    }
    
    
    messageEl.textContent = message
    sumEl.textContent = "Sum: " + sum 
    cardsEl.textContent = "cards: " + firstCard + " " + secondCard

   
}

function newCard() {
    let thirdCard = 7
    sum += thirdCard
    startRound()
    cardsEl.textContent += " " + thirdCard
}