let cards = []
let sum = 0
let message = ""
let messageEl = document.getElementById("message-el")
let sumEl = document.querySelector("#sum-el")
let cardsEl = document.getElementById("cards-el")
const BLACK_JACK_VALUE = 21

function getRandomcard(){
    let randomNumber = Math.floor(Math.random() * 10 + 2)
    return randomNumber
}


function startRound() {
    cards = [getRandomcard(), getRandomcard()]
    sum = cards[0] + cards[1]
    sumEl.textContent = `Sum: ${sum}`
    cardsEl.textContent = ''

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
    messageEl.textContent = message

    checkGameState()
}


function checkGameState() {
    if(sum < BLACK_JACK_VALUE) {
        messageEl.textContent = 'Do you want to draw a new card ?'
        return
    }

    if(sum === BLACK_JACK_VALUE) {
        messageEl.textContent = 'Black jack!'
        return 
    }

    if (sum > BLACK_JACK_VALUE){
        messageEl.textContent = "You've lost :("
        return
    }
}
