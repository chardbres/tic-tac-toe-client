'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')

const authEvents = require('./auth/events.js')

$(() => {
  $('.box').on('click', function (event) {
    $(this).css('background-color', 'red')
    console.log('Cell has been clicked!')
  })
  $('#sign-up').on('submit', authEvents.onSignUp)
})
