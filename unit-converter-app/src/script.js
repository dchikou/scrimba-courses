let unitEl = document.getElementById("unit-el");
let lengthEl = document.getElementById("length-el");
let volumeEl = document.getElementById("volume-el");
let massEl = document.getElementById("mass-el");
let numberEl = document.getElementById("number-el");

const numberInputEl = document.getElementById("number-el");
numberEl.addEventListener("input", (event) => {
  if (event.target.value.length > numberInputEl.maxLength) {
    event.target.value = event.target.value.slice(0, numberInputEl.maxLength);
  }
});

const submitButton = document.getElementById("submit-button");
submitButton.addEventListener("click", () => {
  getNumberValue();
});

function getNumberValue() {
  let numberVal = numberEl.value;
  if (numberVal > 0) {
    document.getElementById("unit-el").textContent = numberVal;
    calcuteAndSetUnitLabels();
  }
}

function calcuteAndSetUnitLabels() {
  const METERS_FEET_MULTIPLIER = 3.281;
  const LITERS_GALLONS_MULTIPLIER = 3.785;
  const KILOS_POUNDS_MULTIPLIER = 2.205;

  const input = unitEl.textContent;

  lengthEl.textContent =
    input +
    " Meters = " +
    (input * METERS_FEET_MULTIPLIER).toFixed(3) +
    " Feet | " +
    input +
    " Feet = " +
    (input / METERS_FEET_MULTIPLIER).toFixed(3) +
    " Meters";

  volumeEl.textContent =
    input +
    " Litres = " +
    (input / LITERS_GALLONS_MULTIPLIER).toFixed(3) +
    " Gallons | " +
    input +
    " Gallons = " +
    (input * LITERS_GALLONS_MULTIPLIER).toFixed(3) +
    " Litres";

  massEl.textContent =
    input +
    " Kilograms = " +
    (input * KILOS_POUNDS_MULTIPLIER).toFixed(3) +
    " Pounds | " +
    input +
    " Pounds = " +
    (input / KILOS_POUNDS_MULTIPLIER).toFixed(3) +
    " Kilograms";
}
