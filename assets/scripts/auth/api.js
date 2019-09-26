'use strict'

const config = require('../config.js')
// const store = require('../store.js')

// Sign-up api
const signUp = function (formData) {
  return $.ajax({
    method: 'POST',
    url: config.apiUrl + '/sign-up',
    data: formData
  })
}

module.exports = {
  signUp
}
