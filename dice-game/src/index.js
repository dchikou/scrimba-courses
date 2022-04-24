// variables for initial game state
let player1Score = 0
let player2Score = 0
let player1Turn = ""


// variables to store references to the necessary DOM nodes
const player1Dice = document.getElementById("player1Dice")
const player2Dice = document.getElementById("player2Dice")
const player1Scoreboard = document.getElementById("player1Scoreboard")
const player2Scoreboard = document.getElementById("player2Scoreboard")
const message = document.getElementById("message")
const rollBtn = document.getElementById("rollBtn")
const resetBtn = document.getElementById("resetBtn")
const startBtn = document.getElementById("startBtn")
const rulesBtn = document.getElementById("rulesBtn")
const dblBtn = document.getElementById("dblBtn")
const overlay = document.getElementById("overlay")
const closeModal = document.getElementById("close-modal")

// logic for Rules button
rulesBtn.addEventListener("click", function() {
    overlay.style.display = "block"
})

//logic for Close button
closeModal.addEventListener("click", function() {
    overlay.style.display = "none"
})

// hide roll and double button and make visible reset button
function showResetButton() {
    rollBtn.style.display = "none"
    dblBtn.style.display = "none"
    resetBtn.style.display = "block"
}

// logic for Start Game button
startBtn.addEventListener("click", function () {
    startBtn.style.display = "none"
    rulesBtn.style.display = "none"
    rollBtn.style.display = "block"
    dblBtn.style.display = "block"
    cleanSlate()
    setPlayer()
})

// logic for the roll dice button 
 rollBtn.addEventListener("click", function() {
    const randomNumber = Math.floor(Math.random() * 6) + 1

    if (player1Turn) {
        player1Score += randomNumber
        player1Scoreboard.textContent = player1Score
        player1Dice.textContent = randomNumber
        player1Dice.classList.remove("active")
        player2Dice.classList.add("active")
        message.textContent = "Player 2 Turn"
    } else {
        player2Score += randomNumber
        player2Scoreboard.textContent = player2Score
        player2Dice.textContent = randomNumber
        player2Dice.classList.remove("active")
        player1Dice.classList.add("active")
        message.textContent = "Player 1 Turn"
    }
    
    if (player1Score >= 30) {
        message.textContent = "Player 1 Won 🥳"
        showResetButton()
    }  else if (player2Score >= 30) {
        message.textContent = "Player 2 Won 🎉"
        showResetButton()
    }
    player1Turn = !player1Turn
})

// logic for double button
dblBtn.addEventListener("click", function() {
    const randomNumber = Math.floor(Math.random() * 6) + 1
    const dblNumber = randomNumber * 2
    
    if (player1Turn) { 
        if (randomNumber === 2 || randomNumber === 4 || randomNumber === 6) {
            player1Score += dblNumber
        } else {
            player1Score -= dblNumber 
        }
        player1Scoreboard.textContent = player1Score
        player1Dice.textContent = randomNumber
        player1Dice.classList.remove("active")
        player2Dice.classList.add("active")
        message.textContent = "Player 2 Turn"
    } else {
        if (randomNumber === 2 || randomNumber === 4 || randomNumber === 6) {
            player2Score += dblNumber
        } else {
            player2Score -= dblNumber 
        }
        player2Scoreboard.textContent = player2Score
        player2Dice.textContent = randomNumber
        player2Dice.classList.remove("active")
        player1Dice.classList.add("active")
        message.textContent = "Player 1 Turn"
        }
    if (player1Score >= 30) {
        message.textContent = "Player 1 Won 🥳"
        showResetButton()
    }  else if (player2Score >= 30) {
        message.textContent = "Player 2 Won 🎉"
        showResetButton()
    }
    player1Turn = !player1Turn
})

// logic for the reset button
resetBtn.addEventListener("click", function(){
    setPlayer()
    cleanSlate()
    rulesBtn.style.display = "block"
    rollBtn.style.display = "none"
    startBtn.style.display = "block"
    dblBtn.style.display = "none"
})

// resets all game variables back to original state
function cleanSlate() {
    player1Score = 0
    player2Score = 0
    player1Scoreboard.textContent = 0
    player2Scoreboard.textContent = 0
    player1Dice.textContent = "-"
    player2Dice.textContent = "-"
    resetBtn.style.display = "none"
    rollBtn.style.display = "block"
    player1Dice.classList.remove("active")
    player2Dice.classList.remove("active")
    message.textContent = "Let's Roll!"
}

// logic to determine which player goes first
function setPlayer() {
    let state = Math.floor(Math.random()*2)+1
    if (state === 1) {
        player1Turn = true
        player2Dice.classList.remove("active")
        player1Dice.classList.add("active")
        message.textContent = "Player 1 Turn"
    } else {
        player1Turn = false
        player1Dice.classList.remove("active")
        player2Dice.classList.add("active")
        message.textContent = "Player 2 Turn"
    }
}