'use strict'

const store = require('../store')

const successMessage = msgText => {
  $('.message').text(msgText)
  $('.message').removeClass('failure')
  $('.message').addClass('success')
}

const failureMessage = msgText => {
  $('.message').text(msgText)
  $('.message').removeClass('success')
  $('.message').addClass('failure')
}

// Game creation success and failure scripts
const onCreateGameSuccess = responseData => {
  successMessage('Game successfully created!')
  store.game = responseData.game
}

const onCreateGameFailure = () => {
  failureMessage('Failed to create game!')
}
// ---

// Game retrieval success and failure scripts
const onGetGamesSuccess = responseData => {
  $('.game-count').text(responseData.games.length)
}

const onGetGamesFailure = () => {
  $('.game-count').text('Could not retrieve games list!')
}
// ---

// If the game is updated successfully, this script logs the data returned from the server to the console
const onUpdateGameSuccess = function (cell, player) {
  $('.game-message').text(player + ' has claimed cell ' + cell + '!')
  $('#' + cell).text(player)
}

const onUpdateGameFailure = () => {
  $('.game-message').text('Game failed to update!')
}
// ---

// Ends the current game
const onEndGame = (player, winCondition) => {
  if (winCondition === true) {
    $('.game-message').text(player + ' has won the game! Click button to play again!')
  } else {
    $('.game-message').text("It's a draw! Click button to play again!")
  }
}
// ---

module.exports = {
  // onCreateGame
  onCreateGameSuccess,
  onCreateGameFailure,
  // onGetGames
  onGetGamesSuccess,
  onGetGamesFailure,
  // onUpdateGame
  onUpdateGameSuccess,
  onUpdateGameFailure,
  // onEndGame
  onEndGame
}
