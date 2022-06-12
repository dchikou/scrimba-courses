const btn1Home = document.getElementById("btn-1-home")
const btn2Home = document.getElementById("btn-2-home")
const btn3Home = document.getElementById("btn-3-home")
const btn1Guest = document.getElementById("btn-1-guest")
const btn2Guest = document.getElementById("btn-2-guest")
const btn3Guest = document.getElementById("btn-3-guest")
const homeScore = document.getElementById("home-score")
const guestScore = document.getElementById("guest-score")
const newGameBtn = document.getElementById("new-game")

btn1Home.addEventListener("click", () => {
    homeScore.innerText = Number(homeScore.innerText) + 1
    highlightLeader()
})

btn2Home.addEventListener("click", () => {
    homeScore.innerText = Number(homeScore.innerText) + 2
    highlightLeader()
})

btn3Home.addEventListener("click", () => {
    homeScore.innerText = Number(homeScore.innerText) + 3
    highlightLeader()
})

btn1Guest.addEventListener("click", () => {
   guestScore.innerText = Number(guestScore.innerText) + 1
   highlightLeader()
})

btn2Guest.addEventListener("click", () => {
    guestScore.innerText = Number(guestScore.innerText) + 2
    highlightLeader()
})

btn3Guest.addEventListener("click", () => {
    guestScore.innerText = Number(guestScore.innerText) + 3
    highlightLeader()
})

newGameBtn.addEventListener("click", () => {  
    homeScore.innerText = 0
    guestScore.innerText = 0
    highlightLeader()
})

function highlightLeader() {
    if (Number(homeScore.innerText) > Number(guestScore.innerText)) {
        homeScore.classList.add("highlight")
        guestScore.classList.remove("highlight")
    } else if (Number(guestScore.innerText) > Number(homeScore.innerText)) {
        guestScore.classList.add("highlight")
        homeScore.classList.remove("highlight")
    } else {
        guestScore.classList.remove("highlight")
        homeScore.classList.remove("highlight")
    }
}