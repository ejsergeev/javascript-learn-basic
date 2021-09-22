'use strict'

let attempts
let numbers

function resetTheGame() {
  attempts = 0
  numbers = []
  
  while(numbers.length < 4) {
    const number = Math.round(Math.random() * 9)
    if (!numbers.includes(number)) {
      numbers.push(number)
    }
  }
  
}

function startTheGame() {
  while(true) {
    const guess = prompt('Please enter 4 numbers to play or -1 to exit')

    if (guess === '-1') {
      return alert('Goodbye!')
    }

    if (!isValid(guess)) {
      continue
    }

    attempts++

    const result = getResult(guess)

    if (result[0] !== 4) {
      alert(`Bulls: ${result[0]}, Cows: ${result[1]}`)
    } else {
      alert(`Congrats! You won the game! with ${attempts} attempts`)
    }

    if (!confirm('Do you want to play again?')) {
      return alert('Goodbye!')
    }

    resetTheGame()
  }
}

function isValid(guess) {

  if (guess.length < 4) {
    return false
  }

  for(let i = 0; i < guess.length; i++) {
    if (Number.isNaN(guess[i])) {
      return false
    }
  }

  return true

}

function getResult(guess) {
  const result = [0, 0]
  for(let i = 0; i < guess.length; i++) {
    if (guess[i] == numbers[i]) {
      result[0]++
    }

    if(numbers.includes(parseInt(guess[i]))) {
      result[1]++
    }
  }
  
  return result
}

resetTheGame()

startTheGame()