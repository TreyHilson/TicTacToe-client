'use strict'
const store = require('../store')

const signUpSuccess = function (data) {
  $('#message').text('SUCCESS 🤓')
  $('#message').removeClass()
  $('#message').addClass('success')
  console.log('signUpSuccess data is:', data)
}

const signUpFailure = function (error) {
  $('#message').text('NOOB FAIL 😫')
  $('#message').removeClass()
  $('#message').addClass('failure')
  console.log('signUpFailure data is:', error)
}

const signInSuccess = function (data) {
  $('#message').text('SUCCESS 🤓')
  $('#message').removeClass()
  $('#message').addClass('success')
  console.log('signInSuccess data is:', data)
  store.user = data.user
}

const signInFailure = function (error) {
  $('#message').text('NOOB FAIL 😫')
  $('#message').removeClass()
  $('#message').addClass('failure')
  console.log('signInFailure data is:', error)
}

const changePasswordSuccess = function (data) {
  $('#message').text('SUCCESS 🤓')
  $('#message').removeClass()
  $('#message').addClass('success')
  console.log('Change password data is:', data)
}

const changePasswordFailure = function (error) {
  $('#message').text('NOOB FAIL 😫')
  $('#message').removeClass()
  $('#message').addClass('failure')
  console.log('Change Password data is:', error)
}

const signOutSuccess = function (data) {
  $('#message').text('SUCCESS 🤓')
  $('#message').removeClass()
  $('#message').addClass('success')
  console.log('signInSuccess data is:', data)
  store.user = data.user
}
const signOutFailure = function (data) {
  $('#message').text('SUCCESS 🤓')
  $('#message').removeClass()
  $('#message').addClass('success')
  console.log('signInSuccess data is:', data)
  store.user = data.user
}

const clickSuccess = function (data) {
  $('#box1').text('SUCCESS 🤓')
  $('#box1').removeClass()
  $('#box1').addClass('x')
  console.log('adding X')
}

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  changePasswordSuccess,
  changePasswordFailure,
  signOutSuccess,
  signOutFailure,
  clickSuccess

}
