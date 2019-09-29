'use strict'
// const store = require('../store')

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

const onCreateGameSuccess = function () {
  successMessage('Game successfully created!')
}

const onCreateGameFailure = function () {
  failureMessage('Failed to create game!')
}

module.exports = {
  captureColor,
  onCreateGameSuccess,
  onCreateGameFailure
}
