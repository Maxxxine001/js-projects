let firstCard = getRandomcard()
let secondCard = getRandomcard()
let thirdCard = getRandomcard()
let cards = [firstCard, secondCard]
let sum = cards[0] + cards[1]
let hasBlackJack = false
let isAlive = true
let message = ""
let messageEl = document.getElementById("message-el")
let sumEl = document.querySelector("#sum-el")
let cardsEl = document.getElementById("cards-el")
console.log(messageEl)


function renderGame() {
    
    startRound()
    
}

function startRound() {
   
    messageEl.textContent = message
   sumEl.textContent = "Sum: " + sum 
    for( let i = 0; i < cards.length ; i++)
        {
           cardsEl.textContent += cards[i] + " "
        }

    if(sum <=20 ) {
        message = 'Do you want to draw a new card ?'
    } else if (sum === 21) {
        message = 'Black jack!'
        hasBlackJack = true
    } else {
        message= "You've lost :("
        isAlive = false
    }
}

function newCard() {
    
    cards.push(thirdCard)
    sum += cards[2]
    cardsEl.textContent += " " + cards[2]
    sumEl.textContent = "Sum: " + sum 
}

function getRandomcard(){
    let randomNumber = Math.floor(Math.random() * 9 + 2)
    return randomNumber
}