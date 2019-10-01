'use strict'

const store = require('../store')
const fadeDuration = 800

const successMessage = function (msgText) {
  $('.message').text(msgText)
  $('.message').removeClass('failure')
  $('.message').addClass('success')
}

const failureMessage = function (msgText) {
  $('.message').text(msgText)
  $('.message').removeClass('success')
  $('.message').addClass('failure')
}

// Sign-up success and failure notifications
const onSignUpSuccess = function () {
  successMessage('Signed up successfully!')
  $('.sign-up').trigger('reset')
}

const onSignUpFailure = function () {
  failureMessage('Failure to sign up!')
}
// ---

// Sign-in success and failure notifications
const onSignInSuccess = function (responseData) {
  successMessage('Signed in successfully!')
  store.user = responseData.user
  console.log('store is: ', store)
  // When sign-in is successful, hide the sign-in and sign-up fields
  $('.sign-in').fadeOut(fadeDuration, function () { $('.change-password').show() })
  $('.sign-up').fadeOut(fadeDuration, function () { $('.sign-out').show() })
  $('.message').delay(1000).fadeOut(3 * fadeDuration)
  $('.game-message').fadeIn(fadeDuration).text('Click Start Game button to play!')
}

const onSignInFailure = function () {
  failureMessage('Sign-in failed!')
}
// ---

// Sign-out success and failure notifications
const onSignOutSuccess = function () {
  successMessage('Signed out successfully!')
}

const onSignOutFailure = function () {
  failureMessage('Sign-out failed!')
}
// ---

// Password change success and failure notifications
const onPasswordChangeSuccess = function () {
  successMessage('Password changed successfully!')
  $('.change-password').trigger('reset')
}

const onPasswordChangeFailure = function () {
  failureMessage('Password change failed!')
}
// ---

module.exports = {
  onSignUpSuccess,
  onSignUpFailure,
  onSignInSuccess,
  onSignInFailure,
  onSignOutSuccess,
  onSignOutFailure,
  onPasswordChangeSuccess,
  onPasswordChangeFailure
}
