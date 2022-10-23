let cards = []
let sum = 0
let messageEl = document.getElementById("message-el")
let sumEl = document.querySelector("#sum-el")
let cardsEl = document.getElementById("cards-el")

const startButton = document.getElementById('start-button')
const newCardButton = document.getElementById('new-card-button')
const BLACK_JACK_VALUE = 21

function getRandomcard(){
    let randomNumber = Math.floor(Math.random() * 10 + 2)
    return randomNumber
}


function startRound() {
    startButton.disabled = true
    newCardButton.disabled = false

    cards = [getRandomcard(), getRandomcard()]
    sum = cards[0] + cards[1]
    sumEl.textContent = `Sum: ${sum}`
    cardsEl.textContent = ''

    messageEl.textContent = 'Do you want to draw a new card ?'

    for(let i = 0; i < cards.length ; i++) {
        cardsEl.textContent += cards[i] + " "
    }

    checkGameState()
}

function newCard() {
    const card = getRandomcard()
    cards.push(card)
    sum += card
    cardsEl.textContent += ` ${card}`
    sumEl.textContent = `Sum: ${sum}`
    
    checkGameState()
}


function checkGameState() {
    if(sum === BLACK_JACK_VALUE) {
        messageEl.textContent = 'Black jack!'
        endGame()
        return 
    }

    if (sum > BLACK_JACK_VALUE){
        messageEl.textContent = "You've lost :("
        endGame()
        return
    }
}

function endGame() {
    startButton.disabled = false
    newCardButton.disabled = true
}
