'use strict'

const config = require('../config.js')
const store = require('../store.js')

// Function that creates a new game on the server
const createGame = function (data) {
  return $.ajax({
    method: 'POST',
    url: config.apiUrl + '/games',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: {}
  })
}

// Function that retrieves a list of all games on the server for the current user
const getGame = function (formData) {
  return $.ajax({
    method: 'GET',
    url: config.apiUrl + '/games',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: formData
  })
}

// Function that updates the current game on the server after
const updateGame = function (cell, value) {
  return $.ajax({
    method: 'PATCH',
    url: config.apiUrl + '/games/' + store.game.id,
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: {
      'game': {
        'cell': {
          'index': cell,
          'value': value
        },
        'over': false
      }
    }
  })
}

module.exports = {
  createGame,
  getGame,
  updateGame
}
