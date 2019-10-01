'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')
const gameEvents = require('./game/events.js')
const authEvents = require('./auth/events.js')

$(() => {
  // Initialize the page with the change-password and sign-out authorization fields hidden
  $('.change-password').hide()
  $('.sign-out').hide()
  // Gameplay events
  $('.game-start').on('click', gameEvents.activateBoard)
  $('.game-board').on('click', '.clickable', gameEvents.claimSpace)
  // Gameplay api events
  $('.end-game').on('click', gameEvents.onEndGame)
  $('.count-button').on('click', gameEvents.getGames)
  // Authorization events
  $('.sign-up').on('submit', authEvents.onSignUp)
  $('.sign-in').on('submit', authEvents.onSignIn)
  $('.sign-out').on('submit', authEvents.onSignOut)
  $('.change-password').on('submit', authEvents.onPasswordChange)
})
