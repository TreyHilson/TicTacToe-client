'use strict'


// use require with a reference to bundle the file and use it in this file
// const example = require('./example')
const game = require('./events.js')
const authEvents = require('./auth/events.js')
$('#firstView').hide()
$('#firstView').show(1300)

// use require without a reference to ensure a file is bundled
// require('./example')

$(() => {
  $('#sign-up').on('submit', authEvents.onSignUp)
  $('#sign-in').on('submit', authEvents.onSignIn)
  $('#change-password').on('submit', authEvents.onChangePassword)
  $('#container').on('click', game.clickOn)
  $('#restart').on('click', game.restart)
  $('#newPassword').on('click', game.showChangePassword)
  $('#signout').on('click', authEvents.onSignOut)
  $('#ScoreButton').on('click', game.scoreCard)
  $('#firstView').show()
})
