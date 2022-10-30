let playerSum = 0
let casinoSum = 0

let playerCash = 50
let playerCashEl = document.getElementById("player-cash-amount")
playerCashEl.textContent = `Player Cash : ${playerCash}`

let didPlayerWon = false 
let didPlayerSurrender = false
const BLACK_JACK_VALUE = 21
const cardNames = {11: "jack", 12: "queen", 13: "king", 14: "ace"}
const cardColors = {1: "clubs", 2: "diamonds" , 3: "hearts", 4: "spades"}
const newCardButton = document.getElementById('new-card-button')
const betButton = document.getElementById("bet-button")
let messageEl = document.getElementById("message-el")
let sumEl = document.querySelector("#sum-el")
let cardsEl = document.getElementById("cards-el")

let casinoSumEl = document.querySelector("#casino-sum-el")
let casinoCardsEl = document.getElementById("casino-cards-el")

function getRandomCard() {
    return Math.floor(Math.random() * 13 + 2)
}

function getRandomColor() {
    return Math.floor(Math.random() * 4 + 1)
}

const startButton = document.getElementById('start-button')

function startRound() {
    startButton.disabled = true
    standButton.disabled = false
    newCardButton.disabled = false
    surrenderButton.disabled = false

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
    if(casinoSum < 17)
        addCard(false)
    checkGameState()
}

const standButton = document.getElementById('stand-button')

function stand(){
    if(casinoSum >= 17 && playerSum > casinoSum && playerSum < 21){
        messageEl.textContent = "You win !"
        endGame()
        return
        didPlayerWon = true
    }
}

const surrenderButton = document.getElementById('surrender-button')

function surrender() {
    messageEl.textContent = "You've lost - Casino wins!"
    didPlayerSurrender = true
    endGame()
    return
}

function checkGameState() {
    if(playerSum === BLACK_JACK_VALUE) {
        messageEl.textContent = 'Black jack!'
        while(casinoSum < 17) {
            addCard(false)
        }
        endGame()
        return 
        didPlayerWon = true
    }

    if(casinoSum === BLACK_JACK_VALUE){
        messageEl.textContent = "You've lost - Casino wins!"
        endGame()
        return
        didPlayerWon = false
    }

    if( casinoSum > BLACK_JACK_VALUE && playerSum < casinoSum){
        messageEl.textContent = "You win !"
        endGame()
        return
        didPlayerWon = true
    }
    if (playerSum > BLACK_JACK_VALUE){
        messageEl.textContent = "You've lost :("
        endGame()
        return
        didPlayerWon = false

    }

    if(casinoSum > 17 && playerSum > casinoSum && playerSum < 21){
        messageEl.textContent = "You win !"
        endGame()
        return
        didPlayerWon = true
    }
}

function endGame() {
    startButton.disabled = false
    newCardButton.disabled = true
    standButton.disabled = true
    surrenderButton.disabled = true
    betButton.disabled = false
    betResults()
}

function addCard(forPlayer) {
    let card = getRandomCard()

    let strCard = card

    if(strCard > 10) {
        strCard = cardNames[strCard]
        card = card == 14 ? 11 : 10
    }

    let strColor = cardColors[getRandomColor()]

    if (forPlayer) {
        document.getElementById("player-cards").innerHTML += `<img class="card" src="/cards/Playing Cards/SVG-cards-1.3/${strCard}_of_${strColor}.svg"> </img>`//
        playerSum += card//
        cardsEl.textContent += ` ${card}`//
        sumEl.textContent = `Sum: ${playerSum}`//
    } else {
        document.getElementById("casino-cards").innerHTML += `<img class="card" src="/cards/Playing Cards/SVG-cards-1.3/${strCard}_of_${strColor}.svg"> </img>`//
        casinoSum += card//
        casinoCardsEl.textContent += ` ${card}`//
        casinoSumEl.textContent = `Sum: ${casinoSum}`//
    }
    
}

function bet(){
    
    let betAmount = document.getElementById("bet-amount").value
    let betAmountOutputEl = document.getElementById("player-bet")
    playerCashEl.textContent = `Player Cash : ${playerCash}`
    let justFuckingBet = 0

    if(+betAmount <= playerCash){
        justFuckingBet = betAmount
    }
    if(+betAmount > playerCash) {
        justFuckingBet = playerCash
    }
 
    if(+betAmount == '') {
        justFuckingBet = 0
    }

    if(+betAmount < 0) {
        justFuckingBet = 0
    }

    betAmountOutputEl.textContent = `Current Bet : ${justFuckingBet}`
    playerCashEl.textContent = `Player Cash : ${playerCash}`
    
}

function betResults() {
    if(didPlayerSurrender){
        playerCash -= betAmount
    }

    if(didPlayerWon){
        playerCash += betAmount*1.66
    } else {
        playerCash -= betAmount
    }

    playerCashEl.textContent = `Player Cash : ${playerCash}`
}





   // let betAmount = betAmountEl.value
   // playerBetEl.textContent = `Current Bet : ${playerBetEl}`


//function betAmountCheck() {}
