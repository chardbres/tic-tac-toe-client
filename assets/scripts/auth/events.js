'use strict'

const gameEvents = require('../game/events.js')
const getFormFields = require('../../../lib/get-form-fields.js')
const api = require('./api.js')
const ui = require('./ui.js')

// Sign-up event
const onSignUp = function (event) {
  event.preventDefault()

  const form = event.target
  const formData = getFormFields(form)
  api.signUp(formData)
    .then(ui.onSignUpSuccess)
    .catch(ui.onSignUpFailure)
}

// Sign-in event
const onSignIn = function (event) {
  event.preventDefault()

  const form = event.target
  const formData = getFormFields(form)
  api.signIn(formData)
    .then(ui.onSignInSuccess)
    // Retrieves and displays the total games played counter on successful sign-in
    .then(gameEvents.onGetGames)
    .catch(ui.onSignInFailure)
}

// Sign-out event
const onSignOut = function (event) {
  event.preventDefault()

  const form = event.target
  const formData = getFormFields(form)
  api.signOut(formData)
    .then(ui.onSignOutSuccess)
    .catch(ui.onSignOutFailure)
}

// Password change event
const onPasswordChange = function (event) {
  event.preventDefault()

  const form = event.target
  const formData = getFormFields(form)
  api.passwordChange(formData)
    .then(ui.onPasswordChangeSuccess)
    .catch(ui.onPasswordChangeFailure)
}

module.exports = {
  onSignUp,
  onSignIn,
  onSignOut,
  onPasswordChange
}
