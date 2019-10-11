'use strict'

const store = require('../store')
const fadeDuration = 800
//
// const successMessage = function (msgText) {
//   $('.message').text(msgText)
//   $('.message').removeClass('failure')
//   $('.message').addClass('success')
// }
//
// const failureMessage = function (msgText) {
//   $('.message').text(msgText)
//   $('.message').removeClass('success')
//   $('.message').addClass('failure')
// }

// Sign-up success and failure notifications
const onSignUpSuccess = function () {
  $('.message').text('Signed up successfully!')
  $('.sign-up').trigger('reset')
}

const onSignUpFailure = function () {
  $('.message').text('Failure to sign up!')
  $('.sign-up').trigger('reset')
}
// ---

// Sign-in success and failure notifications
const onSignInSuccess = function (responseData) {
  $('.message').text('Signed in successfully!')
  $('.sign-in').trigger('reset')
  store.user = responseData.user
  // When sign-in is successful, hide the sign-in and sign-up fields
  $('.sign-in').fadeOut(fadeDuration, function () { $('.change-password').show() })
  $('.sign-up').fadeOut(fadeDuration, function () { $('.sign-out').show() })
  $('.message').delay(1000).fadeOut(3 * fadeDuration)
  $('.game-message').fadeIn(fadeDuration).text('Click Start Game button to play!')
}

const onSignInFailure = function () {
  ('.message').text('Sign-in failed!')
}
// ---

// Sign-out success and failure notifications
const onSignOutSuccess = function () {
  $('.box').text('')
  $('.clickable').removeClass('clickable')
  $('.game-message').text('')
  $('.message').fadeIn(fadeDuration)
  $('.message').text('Signed out successfully!')
  $('.sign-out').hide()
  $('.change-password').hide()
  $('.sign-up').fadeIn(fadeDuration)
  $('.sign-in').fadeIn(fadeDuration)
  $('.clickable').removeClass('.clickable')
  $('.game-count').text('')
}

const onSignOutFailure = function () {
  ('.message').text('Sign-out failed!')
}
// ---

// Password change success and failure notifications
const onPasswordChangeSuccess = function () {
  $('.message').fadeIn(fadeDuration).text('Password changed successfully!')
  $('.change-password').trigger('reset')
  $('.message').delay(1000).fadeOut(3 * fadeDuration)
}

const onPasswordChangeFailure = function () {
  $('.message').text('Password change failed!')
  $('.change-password').trigger('reset')
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
