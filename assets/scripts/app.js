'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')
const gameEvents = require('./game/events.js')
const authEvents = require('./auth/events.js')

$(() => {
  $('.change-password').hide()
  $('.sign-out').hide()
  // Gameplay events
  $('.game-start').on('click', gameEvents.activateBoard)
  $('.game-board').on('click', '.clickable', gameEvents.claimSpace)
  // Gameplay api events
  $('.game-get').on('click', gameEvents.onGetGame)
  $('.end-game').on('click', gameEvents.onEndGame)
  // Authorization events
  $('.sign-up').on('submit', authEvents.onSignUp)
  $('.sign-in').on('submit', authEvents.onSignIn)
  $('.sign-out').on('submit', authEvents.onSignOut)
  $('.change-password').on('submit', authEvents.onPasswordChange)
})
