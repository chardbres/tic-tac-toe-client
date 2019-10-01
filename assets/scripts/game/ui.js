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
  console.log('Store is: ' + JSON.stringify(store.game))
}

const onCreateGameFailure = () => {
  failureMessage('Failed to create game!')
}
// ---

// Game retrieval success and failure scripts
const onGetGamesSuccess = responseData => {
  $('.game-count').text(responseData.games.length)
}

const onGetGamesFailure = function () {
  console.log('Failed to retrieve game list.')
}
// ---

// If the game is updated successfully, this script logs the data returned from the server to the console
const onUpdateGamesSuccess = responseData => {
  console.log('Store is: ' + JSON.stringify(responseData))
}

const onUpdateGamesFailure = () => {
  console.log('Game failed to update!')
}
// ---

// Ends the current game
const onEndGame = responseData => {
  console.log(JSON.stringify(responseData))
}
// ---

module.exports = {
  onCreateGameSuccess,
  onCreateGameFailure,
  onGetGamesSuccess,
  onGetGamesFailure,
  onUpdateGamesSuccess,
  onUpdateGamesFailure,
  onEndGame
}
