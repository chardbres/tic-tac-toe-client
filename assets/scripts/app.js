'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')
const gameEvents = require('./game/events.js')
const authEvents = require('./auth/events.js')
const ui = require('./game/ui.js')

$(() => {
  // Gameplay events
  $('.box').on('click', gameEvents.claimSpace)
  // Gameplay api events
  $('.game-start').on('click', gameEvents.onCreateGame)
  $('.game-get').on('click', gameEvents.onGetGame)
  // Authorization events
  $('.sign-up').on('submit', authEvents.onSignUp)
  $('.sign-in').on('submit', authEvents.onSignIn)
  $('.sign-out').on('submit', authEvents.onSignOut)
  $('.change-password').on('submit', authEvents.onPasswordChange)
})
