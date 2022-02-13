const allowed = {
    uppers: "QWERTYUIOPASDFGHJKLZXCVBNM",
    lowers: "qwertyuiopasdfghjklzxcvbnm",
    numbers: "1234567890",
    symbols: "!@#$%^&*",
}

const getRandomCharFromString = (str) => str.charAt(Math.floor(Math.random() * str.length))

const passButtonEl1 = document.getElementById("pass-button-1")
const passButtonEl2 = document.getElementById("pass-button-2")
const passButtonEl3 = document.getElementById("pass-button-3")
const passButtonEl4 = document.getElementById("pass-button-4")

passButtonEl1.addEventListener("click", () => copyTextToClipboard(passButtonEl1.innerText))
passButtonEl2.addEventListener("click", () => copyTextToClipboard(passButtonEl2.innerText))
passButtonEl3.addEventListener("click", () => copyTextToClipboard(passButtonEl3.innerText))
passButtonEl4.addEventListener("click", () => copyTextToClipboard(passButtonEl4.innerText))

const passwordEl1 = document.getElementById("passOne")
const passwordEl2 = document.getElementById("passTwo")
const passwordEl3 = document.getElementById("passThree")
const passwordEl4 = document.getElementById("passFour")

const generateButtonEl = document.getElementById("generator")
generateButtonEl.addEventListener("click", () => genPass())

function genPass(length = document.getElementById("length-input").value || 20) {
    if (length > 20) {
        alert("Length must be less than 20!")
    } else if (length < 4) {
        alert("Length must be greater than 3!")
    } else {
        // password will be at set length, default to 20, and have at least one upper, one lower, one number and one symbol
        for (let el of [passwordEl1, passwordEl2, passwordEl3, passwordEl4]) {
            generatePassword(length, el)
        }
    }
}

function generatePassword(length, passwordEl) {
    let pwd = ""

    let alloweds = [allowed.uppers, allowed.lowers, allowed.numbers, allowed.symbols]

    for (let item of alloweds) {
        pwd += getRandomCharFromString(item)
    }

    for (let i = pwd.length; i < length; i++) {
        //fill the rest of the pwd with random characters
        pwd += getRandomCharFromString(Object.values(allowed).join(""))
    }

    passwordEl.textContent = pwd
    return pwd
}

function copyTextToClipboard(text) {
    navigator.clipboard.writeText(text).catch((err) => {
        console.error("Could not copy text: ", err)
    })
}
