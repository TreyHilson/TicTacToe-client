'use strict'
const store = require('../store')

const signUpSuccess = function (data) {
  $('#message').text('SUCCESS 🤓')
  $('#message').removeClass()
  $('#message').addClass('success')
  $('#sign-up').closest('form').find('input[type=text], textarea').val('')
  $('#sign-up').closest('form').find('input[type=password], textarea').val('')

}

const signUpFailure = function () {
  $('#message').text('NOOB FAIL 😫')
  $('#message').removeClass()
  $('#message').addClass('failure')
  $('#sign-up').closest('form').find('input[type=text], textarea').val('')
  $('#sign-up').closest('form').find('input[type=password], textarea').val('')
}

const signInSuccess = function (data) {
  $('#message').text('SUCCESS 🤓')
  $('#message').removeClass()
  $('#message').addClass('success')
  $('#firstView').addClass('hidden')
$('#navigation').removeClass()

  store.user = data.user
}

const signInFailure = function () {
  $('#message').text('NOOB FAIL 😫')
  $('#message').removeClass()
  $('#message').addClass('failure')
  $('#sign-in').closest('form').find('input[type=text], textarea').val('')
  $('#sign-in').closest('form').find('input[type=password], textarea').val('')
}

const changePasswordSuccess = function (data) {
  $('#message').text('PASSWORD CHANGED')
  $('#message').removeClass()
  $('#change-password').addClass('hidden')
  $('#change-password').closest('form').find('input[type=text], textarea').val('')
  $('#change-password').closest('form').find('input[type=password], textarea').val('')
}
const changePasswordFailure = function () {
  $('#message').text('NOOB FAIL 😫')
  $('#message').removeClass()
  $('#message').addClass('failure')
  $('#change-password').closest('form').find('input[type=text], textarea').val('')
  $('#change-password').closest('form').find('input[type=password], textarea').val('')
}

const signOutSuccess = function (data) {
  $('#message').text('SIGNED OUT SUCCESSFULLY')
  $('#message').removeClass()
  $('#message').addClass('success')
  $('#board').addClass('hidden')
  $('#change-password').addClass('hidden')
  $('#firstView').removeClass()
  $('#sign-in').closest('form').find('input[type=text], textarea').val('')
  $('#sign-in').closest('form').find('input[type=password], textarea').val('')
  $('#navigation').addClass('hidden')
  $('#scoreBoard').addClass('hidden')
  $('#lineOne').addClass('hidden')
}
const signOutFailure = function (data) {
  $('#message').text()
  $('#message').removeClass()
  $('#message').addClass('success')
}

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  changePasswordSuccess,
  changePasswordFailure,
  signOutSuccess,
  signOutFailure

}
