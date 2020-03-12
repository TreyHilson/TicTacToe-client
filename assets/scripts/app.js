'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')
const gamePlay = require('/Users/treyhilson/SEI/projects/TicTacToe-client/assets/scripts/game.js')
const authEvents = require('./auth/events.js')
// use require without a reference to ensure a file is bundled
// require('./example')

$(() => {
  $('#sign-up').on('submit', authEvents.onSignUp)
  $('#sign-in').on('submit', authEvents.onSignIn)
  $('#change-password').on('submit', authEvents.onChangePassword)
  $('#sign-out').on('submit', authEvents.onSignOut)
  $('#sign-in').on('submit', gamePlay.onSignin)
})
