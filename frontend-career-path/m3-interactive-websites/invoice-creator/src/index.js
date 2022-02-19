const washBtn = document.getElementById("wash-btn")
const mowBtn = document.getElementById("mow-btn")
const weedsBtn = document.getElementById("weeds-btn")
const sendBtn = document.getElementById("send-btn")
const washEl = document.getElementById("wash-el")
const mowEl = document.getElementById("mow-el")
const weedsEl = document.getElementById("weeds-el")
const sumEl = document.getElementById("sum-el")
const textArea = document.getElementById("text-area")
sumEl.textContent = 0

washBtn.addEventListener("click", function() {
    if (washEl.innerHTML) {
    } else {
        washEl.innerHTML = `<p class="left-side">Wash Car<button class="remove-btn" onclick="redoWash()">Remove</button></p><p class="right-side">$10</p>`
        let sum = sumEl.textContent*1
        value = 10
        sumEl.textContent = sum + value
    }
})

mowBtn.addEventListener("click", function() {
    if (mowEl.innerHTML) {
    } else {
        mowEl.innerHTML = `<p class="left-side">Mow Lawn<button class="remove-btn" onclick="redoMow()">Remove</button></p><p class="right-side">$20</p>`
        let sum = sumEl.textContent*1
        value = 20
        sumEl.textContent = sum + value
    }
})

weedsBtn.addEventListener("click", function() {
    if (weedsEl.innerHTML) {    
    } else {
        weedsEl.innerHTML = `<p class="left-side">Pull Weeds<button class="remove-btn" onclick="redoWeeds()">Remove</button></p><p class="right-side">$30</p>`
        let sum = sumEl.textContent*1
        value = 30
        sumEl.textContent = sum + value
    }
})

sendBtn.addEventListener("click", function() {
    washEl.innerHTML = ""
    mowEl.innerHTML = ""
    weedsEl.innerHTML = ""
    textArea.value = ""
    sumEl.textContent = 0
})

function redoWash() {
    washEl.innerHTML = ""
    let sum = sumEl.textContent*1
    value = 10
    sumEl.textContent = sum - value
}

function redoMow() {
    mowEl.innerHTML = ""
    let sum = sumEl.textContent*1
    value = 20
    sumEl.textContent = sum - value
}

function redoWeeds() {
    weedsEl.innerHTML = ""
    let sum = sumEl.textContent*1
    value = 30
    sumEl.textContent = sum - value
}