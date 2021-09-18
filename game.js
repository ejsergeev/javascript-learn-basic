let attempts
let secretNumber


function resetTheGame() {
  attempts = 0
  secretNumber = Math.round(Math.random() * 100)
}

function StartTheGame() {
  let userGuess = +prompt('Try to guess number from 0 to 100, or enter -1 for exit')
  
  if (userGuess === -1) {
    return alert('Goodbye!')
  }

  if (userGuess < 0 || !Number.isInteger(userGuess)) {
    alert('Please enter an integer that more than 0')
    StartTheGame()
  }

  attempts++

  console.log(secretNumber)

  if (userGuess < secretNumber) {
    alert('Your number is less than secret')
  } else if (userGuess > secretNumber) {
    alert('Your number is more than secret')
  } else {
    if(!confirm(`You won whith ${attempts} attempts! Do you want to continue?`)) {
      alert('Goodbye!')
      return
    }
    resetTheGame()
  }

  StartTheGame()
}

resetTheGame()

StartTheGame()