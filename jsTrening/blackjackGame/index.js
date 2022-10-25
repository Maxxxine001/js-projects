let playerSum = 0
let casinoSum = 0
let messageEl = document.getElementById("message-el")
let sumEl = document.querySelector("#sum-el")
let cardsEl = document.getElementById("cards-el")

let casinoSumEl = document.querySelector("#casino-sum-el")
let casinoCardsEl = document.getElementById("casino-cards-el")

const startButton = document.getElementById('start-button')
const newCardButton = document.getElementById('new-card-button')
const BLACK_JACK_VALUE = 21

const cardNames = {11: "jack", 12: "queen", 13: "king", 14: "ace"}
const cardColors = {1: "clubs", 2: "diamonds" , 3: "hearts", 4: "spades"}

function getRandomCard() {
    return Math.floor(Math.random() * 13 + 2)
}

function getRandomColor() {
    return Math.floor(Math.random() * 4 + 1)
}

function startRound() {
    startButton.disabled = true
    newCardButton.disabled = false

    cardsEl.textContent = ''
    sumEl.textContent = ''
    casinoSumEl.textContent = ''
    casinoCardsEl.textContent = ''
    playerSum = 0
    casinoSum = 0
    document.getElementById("casino-cards").innerHTML = ''
    document.getElementById("player-cards").innerHTML = ''


    addCard(true)
    addCard(true)

    addCard(false)
    addCard(false)

    messageEl.textContent = 'Do you want to draw a new card ?'
    checkGameState()
}

function newCard() {
    
    addCard(true)
    if(casinoSum < 16)
        addCard(false)
    checkGameState()
}


function checkGameState() {
    if(playerSum === BLACK_JACK_VALUE) {
        messageEl.textContent = 'Black jack!'
        while(casinoSum < 16) {
            addCard(false)
        }
        endGame()
        return 
    }

    if (playerSum > BLACK_JACK_VALUE){
        messageEl.textContent = "You've lost :("
        while(casinoSum < 16) {
            addCard(false)
        }
        endGame()
        return
    }
}

function endGame() {
    startButton.disabled = false
    newCardButton.disabled = true
}

function addCard(forPlayer) {
    const card = getRandomCard()

    let strCard = card

    if(strCard > 10) {
        strCard = cardNames[strCard];
    }

    let strColor = cardColors[getRandomColor()]

    if (forPlayer) {
        document.getElementById("player-cards").innerHTML += `<img src="/cards/Playing Cards/SVG-cards-1.3/${strCard}_of_${strColor}.svg"> </img>`//
        playerSum += card//
        cardsEl.textContent += ` ${card}`//
        sumEl.textContent = `Sum: ${playerSum}`//
    } else {
        document.getElementById("casino-cards").innerHTML += `<img src="/cards/Playing Cards/SVG-cards-1.3/${strCard}_of_${strColor}.svg"> </img>`//
        casinoSum += card//
        casinoCardsEl.textContent += ` ${card}`//
        casinoSumEl.textContent = `Sum: ${casinoSum}`//
    }
    
}