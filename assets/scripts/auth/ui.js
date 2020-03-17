'use strict'
const store = require('../store')

const signUpSuccess = function (data) {
  $('#message').text('SUCCESS 🤓')
  $('#message').removeClass()
  $('#message').addClass('success')

}

const signUpFailure = function () {
  $('#message').text('NOOB FAIL 😫')
  $('#message').removeClass()
  $('#message').addClass('failure')
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
}

const changePasswordSuccess = function (data) {
  $('#message').text('PASSWORD CHANGED')
  $('#message').removeClass()
  $('#change-password').addClass('hidden')


}

const changePasswordFailure = function () {
  $('#message').text('NOOB FAIL 😫')
  $('#message').removeClass()
  $('#message').addClass('failure')
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
