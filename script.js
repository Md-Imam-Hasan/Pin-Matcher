var numberOfTry = Number(document.getElementById("try").innerText)

// initial state
function init() {
  document.getElementById("wrong").style.display = "none"
  document.getElementById("correct").style.display = "none"
}
init()

// generate button start
function pinGenerator() {
  let pin = Math.floor(Math.random() * 10000)
  if (pin < 1000) {
    pin += 1000
  }
  document.getElementById("randomPin").value = pin
}
document.getElementById("Pin-button").addEventListener("click", pinGenerator)
// generate button end

// submit button start
function pinMatcher() {
  var inputPin = document.getElementById("inputPin").value
  var randomPin = document.getElementById("randomPin").value

  if (inputPin === '' && randomPin === '') {
    alert("input field must not be empty!!!!")
  } else if (inputPin === randomPin) {
    document.getElementById("wrong").style.display = "none"
    document.getElementById("correct").style.display = "block"
  } else if (inputPin !== randomPin) {
    if (numberOfTry > 1) {
      document.getElementById("wrong").style.display = "block"
      document.getElementById("correct").style.display = "none"
      numberOfTry--
      document.getElementById("try").innerText = numberOfTry
    } else {
      init()
      document.getElementById("try").innerText = "0"
      document.getElementById("submit-btn").disabled = true;
      document.getElementById("submit-btn").innerText = "Disabled!"
    }
  }
}
document.getElementById("submit-btn").addEventListener("click", pinMatcher)
// submit button end

// delete button start
document.getElementById("delete").addEventListener("click", function () {
  inputPin.value = inputPin.value.slice(0, -1)
})
// delete button end

// clear button start
document.getElementById("clear").addEventListener("click", function () {
  inputPin.value = ''
})
// clear button end