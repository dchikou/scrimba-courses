const allowed = {
    uppers: "QWERTYUIOPASDFGHJKLZXCVBNM",
    lowers: "qwertyuiopasdfghjklzxcvbnm",
    numbers: "1234567890",
    symbols: "!@#$%^&*"
}

const getRandomCharFromString = (str) => str.charAt(Math.floor(Math.random() * str.length))

function genPass (length = document.getElementById("length-input").value || 20) {
    if (length > 20) {
        alert("Length must be less than 20!")
        return
    } else if (length < 4) {
        alert("Length must be greater than 3!")
        return
    } else {
        {{ // password will be at set length, default to 20, and have at least one upper, one lower, one number and one symbol
        var pwd = ""
        pwd += getRandomCharFromString(allowed.uppers) //pwd will have at least one upper
        pwd += getRandomCharFromString(allowed.lowers) //pwd will have at least one lower
        pwd += getRandomCharFromString(allowed.numbers) //pwd will have at least one number
        pwd += getRandomCharFromString(allowed.symbols) //pwd will have at least one symbol
        for (let i = pwd.length; i < length; i++)
            pwd += getRandomCharFromString(Object.values(allowed).join('')) //fill the rest of the pwd with random characters
        document.getElementById("passOne").textContent = pwd
        }   { var pwd = ""
        pwd += getRandomCharFromString(allowed.uppers) 
        pwd += getRandomCharFromString(allowed.lowers) 
        pwd += getRandomCharFromString(allowed.numbers) 
        pwd += getRandomCharFromString(allowed.symbols)
        for (let i = pwd.length; i < length; i++)
            pwd += getRandomCharFromString(Object.values(allowed).join('')) 
        document.getElementById("passTwo").textContent = pwd
        }   { var pwd = ""
        pwd += getRandomCharFromString(allowed.uppers)
        pwd += getRandomCharFromString(allowed.lowers) 
        pwd += getRandomCharFromString(allowed.numbers) 
        pwd += getRandomCharFromString(allowed.symbols) 
        for (let i = pwd.length; i < length; i++)
            pwd += getRandomCharFromString(Object.values(allowed).join(''))
        document.getElementById("passThree").textContent = pwd
        }   { var pwd = ""
        pwd += getRandomCharFromString(allowed.uppers) 
        pwd += getRandomCharFromString(allowed.lowers) 
        pwd += getRandomCharFromString(allowed.numbers)
        pwd += getRandomCharFromString(allowed.symbols) 
        for (let i = pwd.length; i < length; i++)
            pwd += getRandomCharFromString(Object.values(allowed).join('')) 
        document.getElementById("passFour").textContent = pwd
        }}
    }
}

function copyPassOne() {
    // This function serves to generate a text box, copy its contents from the password box into itself, copy that to clipboard, then destroy the text box
  var aux = document.createElement("div")
  aux.setAttribute("contentEditable", true)
  aux.innerHTML = document.getElementById("passOne").innerHTML
  aux.setAttribute("onfocus", "document.execCommand('selectAll',false,null)") 
  document.body.appendChild(aux)
  aux.focus()
  document.execCommand("copy")
  document.body.removeChild(aux)
  alert("Copied to Clipboard!")
}

function copyPassTwo() {
  var aux = document.createElement("div")
  aux.setAttribute("contentEditable", true)
  aux.innerHTML = document.getElementById("passTwo").innerHTML
  aux.setAttribute("onfocus", "document.execCommand('selectAll',false,null)") 
  document.body.appendChild(aux)
  aux.focus()
  document.execCommand("copy")
  document.body.removeChild(aux)
  alert("Copied to Clipboard!")
}

function copyPassThree() {
  var aux = document.createElement("div")
  aux.setAttribute("contentEditable", true)
  aux.innerHTML = document.getElementById("passThree").innerHTML
  aux.setAttribute("onfocus", "document.execCommand('selectAll',false,null)") 
  document.body.appendChild(aux)
  aux.focus()
  document.execCommand("copy")
  document.body.removeChild(aux)
  alert("Copied to Clipboard!")
}

function copyPassFour() {
  var aux = document.createElement("div")
  aux.setAttribute("contentEditable", true)
  aux.innerHTML = document.getElementById("passFour").innerHTML
  aux.setAttribute("onfocus", "document.execCommand('selectAll',false,null)") 
  document.body.appendChild(aux)
  aux.focus()
  document.execCommand("copy")
  document.body.removeChild(aux)
  alert("Copied to Clipboard!")
}