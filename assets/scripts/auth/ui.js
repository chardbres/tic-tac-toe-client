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

const onSignUpSuccess = function () {
  successMessage('Signed up successfully!')
}

const onSignUpFailure = function () {
  failureMessage('Failure to sign up!')
}

module.exports = {
  onSignUpSuccess,
  onSignUpFailure
}
