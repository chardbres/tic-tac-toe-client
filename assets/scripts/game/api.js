'use strict'

const config = require('../config.js')
const store = require('../store.js')

// Function creates a new game on the server
const createGame = data => {
  return $.ajax({
    method: 'POST',
    url: config.apiUrl + '/games',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: {}
  })
}

// Function retrieves a list of all games on the server for the current user
const getGames = () => {
  return $.ajax({
    method: 'GET',
    url: config.apiUrl + '/games',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

// Function updates the current game on the server after each play
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

// Function ends the game, attached to a button or invoked when a player wins
const endGame = () => {
  return $.ajax({
    method: 'PATCH',
    url: config.apiUrl + '/games/' + store.game.id,
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: {
      'game': {
        'over': true
      }
    }
  })
}

module.exports = {
  createGame,
  getGames,
  updateGame,
  endGame
}
