let unitEl = document.getElementById("unit-el")
let lengthEl = document.getElementById("length-el")
let volumeEl = document.getElementById("volume-el")
let massEl = document.getElementById("mass-el")
let numberEl = document.getElementById("number-el")

function getNumberValue() {
    let numberVal = numberEl.value
    if (numberVal > 0) {
        document.getElementById("unit-el").textContent = numberVal
        doTheMath()
    } else {}
}

function doTheMath() {
    lengthEl.textContent = unitEl.textContent + " " + "Meters = " + (unitEl.textContent*3.281).toFixed(3) + " Feet | " + unitEl.textContent + " Feet = " + (unitEl.textContent/3.281).toFixed(3) + " Meters"
    volumeEl.textContent = unitEl.textContent + " " + "Litres = " + (unitEl.textContent/3.785).toFixed(3) + " Gallons | " + unitEl.textContent + " Gallons = " + (unitEl.textContent*3.785).toFixed(3) + " Litres"
    massEl.textContent = unitEl.textContent + " " + "Kilograms = " + (unitEl.textContent*2.205).toFixed(3) + " Pounds | " + unitEl.textContent + " Pounds = " + (unitEl.textContent/2.205).toFixed(3) + " Kilograms"
}