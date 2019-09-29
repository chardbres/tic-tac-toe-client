'use strict'
const store = require('../store')

const successMessage = function (msgText) {
  $('#message').text(msgText)
  $('#message').removeClass('failure')
  $('#message').addClass('success')
}

const failureMessage = function (msgText) {
  $('#message').text(msgText)
  $('#message').removeClass('success')
  $('#message').addClass('failure')
}
const captureColor = function (player) {
  if (player === 'X') {
    $(this).css('background-color', 'red')
  } else if (player === 'O') {
    $(this).css('background-color', 'blue')
  }
}

// If game is created successfully, this script stores the game ID in store.js, and logs the newly created object to the console.
const onCreateGameSuccess = function (responseData) {
  successMessage('Game successfully created!')
  store.game = responseData.game
  console.log('Store is: ' + JSON.stringify(store.game))
}

const onCreateGameFailure = function () {
  failureMessage('Failed to create game!')
}

// If the game is updated successfully, this script logs the data returned from the server to the console
const onUpdateGameSuccess = function (responseData) {
  console.log('Store is: ' + JSON.stringify(responseData))
}

module.exports = {
  captureColor,
  onCreateGameSuccess,
  onCreateGameFailure,
  onUpdateGameSuccess
}
