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
const activateBoard = () => {
  // Resets the game box class
  $('.clickable').removeClass('.clickable')

  // Resets the values in the game board
  $('.box').text('')
  currentPlayer = playerOne
  // Resets the game counter to 0 and all the gameBoard values to blanks
  counter = 0
  for (let i = 0; i < gameBoard.length; i++) {
    gameBoard[i] = ''
  }
  // ---

  $('.game-message').text('Game Started! X begins, choose your opening wisely!')
  $('.box').addClass('clickable')
  onCreateGame()
}

const winGame = function (winningPlayer) {
  $('.box').removeClass('clickable')
  $('.game-message').text('Player ' + winningPlayer + ' is the champion! Click Start Game to play a new round!')
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
  const val = $(this).attr('id')

  if (gameBoard[val - 1] === 'X' || gameBoard[val - 1] === 'O') {
    $('.game-message').text('Cell is already claimed! Choose another!')
  } else {
    gameBoard[val - 1] = currentPlayer
    $('.game-message').text(currentPlayer + ' claims cell ' + val + '!')
    onUpdateGame(val, currentPlayer)
    $(this).text(currentPlayer)
    checkGame(gameBoard)
    switchPlayer()
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
      $('.game-message').fadeIn(800, function () { $('.game-message').text("It's a tie! Click Start Game to play another!") })
      onEndGame()
    }
    console.log(counter)
    if (winCondition === true) {
      winGame(currentPlayer)
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
const getGames = () => {
  api.getGames()
    .then(ui.onGetGamesSuccess)
    .catch(ui.onGetGamesFailure)
}

// Function to update the current game on the server and return the game board state
const onUpdateGame = (cell, value) => {
  event.preventDefault()

  api.updateGame(cell, value)
    .then(ui.onUpdateGameSuccess)
    .catch(ui.onUpdateGameFailure)
  console.log('Cell is: ' + cell + ', Claimed by: ' + value)
}

// Ends the current game
const onEndGame = () => {
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
  getGames,
  onUpdateGame
}
