'use strict'

const captureColor = function (player) {
  if (player === 'X') {
    $(this).css('background-color', 'red')
  } else if (player === 'O') {
    $(this).css('background-color', 'blue')
  }
}

module.exports = {
  captureColor
}
