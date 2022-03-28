const colorOneHex = document.getElementById("color-one-hex")
const colorTwoHex = document.getElementById("color-two-hex")
const colorThreeHex = document.getElementById("color-three-hex")
const colorFourHex = document.getElementById("color-four-hex")
const colorFiveHex = document.getElementById("color-five-hex")
let copyText = ""

renderColor()

document.getElementById("mode-selector").addEventListener('click', () => {
    document.body.classList.toggle('dark-theme')
})

document.getElementById("submit-button").addEventListener("click", renderColor)

function renderColor() {
    let themePicker = String(document.getElementById("theme-selector").value)
    let colorPicker = String(document.getElementById("selected-color").value).replace("#", "")

    fetch(`https://www.thecolorapi.com/scheme?hex=${colorPicker}&mode=${themePicker}&count=5`)
        .then(res => res.json())
        .then(data => {
            let colorArr = data.colors
            document.getElementById("color-one").style.background = colorArr[0].hex.value
            colorOneHex.innerText = colorArr[0].hex.value
            document.getElementById("color-two").style.background = colorArr[1].hex.value
            colorTwoHex.innerText = colorArr[1].hex.value
            document.getElementById("color-three").style.background = colorArr[2].hex.value
            colorThreeHex.innerText = colorArr[2].hex.value
            document.getElementById("color-four").style.background = colorArr[3].hex.value
            colorFourHex.innerText = colorArr[3].hex.value
            document.getElementById("color-five").style.background = colorArr[4].hex.value
            colorFiveHex.innerText = colorArr[4].hex.value
    })
}

colorOneHex.addEventListener("click", () => {
  copyText = colorOneHex.innerText
  navigator.clipboard.writeText(copyText)
  alert("Copied the text: " + copyText)
})

colorTwoHex.addEventListener("click", () => {
  copyText = colorTwoHex.innerText
  navigator.clipboard.writeText(copyText)
  alert("Copied the text: " + copyText)
})

colorThreeHex.addEventListener("click", () => {
  copyText = colorThreeHex.innerText
  navigator.clipboard.writeText(copyText)
  alert("Copied the text: " + copyText)
})

colorFourHex.addEventListener("click", () => {
  copyText = colorFourHex.innerText
  navigator.clipboard.writeText(copyText)
  alert("Copied the text: " + copyText)
})

colorFiveHex.addEventListener("click", () => {
  copyText = colorFiveHex.innerText
  navigator.clipboard.writeText(copyText)
  alert("Copied the text: " + copyText)
})