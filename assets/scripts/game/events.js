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

  // Resets the Xs/Os in the game board and the current player to playerOne
  $('.box').text('')
  currentPlayer = playerOne
  // Resets the game counter to 0 and all the gameBoard values to blanks
  counter = 0
  for (let i = 0; i < gameBoard.length; i++) {
    gameBoard[i] = ''
  }
  // ---
  $('.box').addClass('clickable')
  onCreateGame()
}

// Function to switch players after clicking on a space
const switchPlayer = () => {
  if (currentPlayer === playerOne) {
    currentPlayer = playerTwo
  } else if (currentPlayer === playerTwo) {
    currentPlayer = playerOne
  }
}

// Function to claim the space
// Breaks when I use the fat arrow notation for some reason!
const claimSpace = (event) => {
  const cell = $(event.target).attr('id')

  if (gameBoard[cell] === 'X' || gameBoard[cell] === 'O') {
    $('.game-message').text('Cell is already claimed! Choose another!')
  } else {
    gameBoard[cell] = currentPlayer
    onUpdateGame(cell, currentPlayer)
    // Checks game state for winner and switches player control if nobody has won
    checkGame()
    switchPlayer()
  }
}

// Function to check game win/loss/tie status
const checkGame = () => {
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
      onEndGame(currentPlayer, winCondition)
      $('.clickable').removeClass('clickable')
    }
  }
  if (winCondition === true) {
    onEndGame(currentPlayer, winCondition)
    $('.clickable').removeClass('clickable')
  }
}

// ----------

// FUNCTIONS TO HANDLE GAMEPLAY API CALLS TO SERVER

// Function to create a new game on the server
const onCreateGame = () => {
  event.preventDefault()

  const form = event.target
  const formData = getFormFields(form)
  api.createGame(formData)
    .then(ui.onCreateGameSuccess)
    // Pulls number of games played after the game is successfully created, so that the new game is added to the total.
    .then(onGetGames)
    .catch(ui.onCreateGameFailure)
}

// Function to return a list of all games for the current user on the server
const onGetGames = () => {
  api.getGames()
    .then(ui.onGetGamesSuccess)
    .catch(ui.onGetGamesFailure)
}

// Function to update the current game on the server and return the game board state. Updated to handle UI events in the onUpdateSuccess fucntion call.
const onUpdateGame = (cell, player) => {
  event.preventDefault()

  api.updateGame(cell, player)
    .then(ui.onUpdateGameSuccess(cell, player))
    .catch(ui.onUpdateGameFailure)
}

// Ends the current game
const onEndGame = (player, winCondition) => {
  event.preventDefault()

  const form = event.target
  const formData = getFormFields(form)
  api.endGame(formData)
    .then(ui.onEndGame(player, winCondition))
}

// ----------

module.exports = {
  activateBoard,
  switchPlayer,
  claimSpace,
  checkGame,
  onCreateGame,
  onGetGames,
  onUpdateGame
}
