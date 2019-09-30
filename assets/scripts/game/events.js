'use strict'

const ui = require('./ui.js')
const api = require('./api.js')
const getFormFields = require('../../../lib/get-form-fields.js')

// FUNCTIONS RELATED TO GAME LOGIC AND DISPLAY

// Initialize empty array to act as the game board
const gameBoard = ['', '', '', '', '', '', '', '', '']
const playerOne = 'X'
const playerTwo = 'O'
// Start the game with X as the current player
let currentPlayer = playerOne
let counter = 0

// Function that begins the game locally and on the server, and allows the board to be interacted without
const activateBoard = function () {
  $('.box').addClass('clickable')
  onCreateGame()
}

const completeGame = function () {
  $('.box').removeClass('clickable')
  onEndGame()
}
// Function to switch players after clicking on a space
const switchPlayer = function () {
  if (currentPlayer === playerOne) {
    currentPlayer = playerTwo
    console.log('Player is now: ' + currentPlayer)
  } else if (currentPlayer === playerTwo) {
    currentPlayer = playerOne
    console.log('Player is now: ' + currentPlayer)
  }
}

// Function to claim the space
const claimSpace = function () {
  let val
  switch ($(this).attr('id')) {
    case 'one':
      val = 0
      break
    case 'two':
      val = 1
      break
    case 'three':
      val = 2
      break
    case 'four':
      val = 3
      break
    case 'five':
      val = 4
      break
    case 'six':
      val = 5
      break
    case 'seven':
      val = 6
      break
    case 'eight':
      val = 7
      break
    case 'nine':
      val = 8
  }

  if (gameBoard[val] === 'X' || gameBoard[val] === 'O') {
    console.log('Illegal move!')
  } else {
    gameBoard[val] = currentPlayer
    onUpdateGame(val, currentPlayer)
    $(this).text(currentPlayer)
    switchPlayer()
    checkGame(gameBoard)
    console.log(gameBoard)
  }
}

// Function to check game win/loss/tie status
const checkGame = function (gameBoard) {
  let winCondition = false
  if (winCondition === false && counter <= 9) {
    counter += 1
    if (gameBoard[0] === gameBoard[1] && gameBoard[1] === gameBoard[2] && gameBoard[0] !== '') {
      winCondition = true
    } else if (gameBoard[3] === gameBoard[4] && gameBoard[4] === gameBoard[5] && gameBoard[3] !== '') {
      winCondition = true
    } else if (gameBoard[6] === gameBoard[7] && gameBoard[7] === gameBoard[8] && gameBoard[6] !== '') {
      winCondition = true
    } else if (gameBoard[0] === gameBoard[3] && gameBoard[3] === gameBoard[6] && gameBoard[0] !== '') {
      winCondition = true
    } else if (gameBoard[1] === gameBoard[4] && gameBoard[4] === gameBoard[7] && gameBoard[1] !== '') {
      winCondition = true
    } else if (gameBoard[2] === gameBoard[5] && gameBoard[5] === gameBoard[8] && gameBoard[2] !== '') {
      winCondition = true
    } else if (gameBoard[0] === gameBoard[4] && gameBoard[4] === gameBoard[8] && gameBoard[0] !== '') {
      winCondition = true
    } else if (gameBoard[2] === gameBoard[4] && gameBoard[4] === gameBoard[6] && gameBoard[2] !== '') {
      winCondition = true
    } else if (winCondition === false && counter === 9) {
      console.log("It's a tie!")
    }
    console.log(counter)
    if (winCondition === true) {
      alert('Winner!')
      completeGame()
    }
  }
}

// ----------

// FUNCTIONS TO HANDLE GAMEPLAY API CALLS TO SERVER

// Function to create a new game on the server
const onCreateGame = function () {
  event.preventDefault()

  const form = event.target
  const formData = getFormFields(form)
  api.createGame(formData)
    .then(ui.onCreateGameSuccess)
    .catch(ui.onCreateGameFailure)
}

// Function to return a list of all games for the current user on the server
const onGetGame = function (event) {
  event.preventDefault()

  const form = event.target
  const formData = getFormFields(form)
  api.getGame(formData)
    .then(ui.onGetGameSuccess)
    .catch(ui.onGetGameFailure)
}

// Function to update the current game on the server and return the game board state
const onUpdateGame = function (cell, value) {
  event.preventDefault()

  api.updateGame(cell, value)
    .then(ui.onUpdateGameSuccess)
    .catch(ui.onUpdateGameFailure)
  console.log('Cell is: ' + cell + ', Claimed by: ' + value)
}

// Ends the current game
const onEndGame = function () {
  event.preventDefault()

  const form = event.target
  const formData = getFormFields(form)
  api.endGame(formData)
    .then(ui.onEndGame)
}

// ----------

module.exports = {
  activateBoard,
  switchPlayer,
  claimSpace,
  checkGame,
  onCreateGame,
  onGetGame,
  onUpdateGame
}
