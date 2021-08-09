'use strict'

const store = require('./../store')
console.log(store)

const debugUi = true

// Auth related code

const onSignUpSuccess = function (response) {
  // console.log('Super')
  $('#status').text('Thank you for signing up', response.user.email)
  // console.log(response)
  $('#sign-up').trigger('reset')
  $('#sign-in').show()
  $('#sign-up').hide()
  $('#sign-out').hide()
}

const onSignUpFailure = function () {
  console.log('Not possible')
  $('#status').text('Sign up failure')
  $('sign-up').trigger('reset')
}

const onSignInSuccess = function (response) {
  // console.log('Super')
  $('#status').text('Thank you for signing in', response.user.email)
  console.log(response)
  // very important store the user token
  store.token = response.user.token
  // add user id to the store
  store.userId = response.user._id
  $('#sign-in').trigger('reset')
  $('#sign-in').hide()
  $('#sign-up').hide()
  $('#sign-out').show()
  $('#change-password').show()
  $('#all-games').show()
  $('#create-game').show()
}

const onSignInFailure = function () {
  console.log('Not possible')
  $('#status').text('Sign in failure')
  $('sign-in').trigger('reset')
}

const onSignOutSuccess = function () {
  $('#status').text('You successfully signed out. Hope you will come back!')
  $('#sign-in').show()
  $('#sign-up').show()
  $('#sign-out').hide()
  $('#change-password').hide()
  $('#create-game').hide()
  $('#all-games').hide()
}

const onSignOutFailure = function () {
  $('#status').text('Sign out failure')
}

const onChangePasswordSuccess = function () {
  $('#status').text('You have changed your password. Please remember the new password')
  $('#change-password').trigger('reset')
}

const onChangePasswordFailure = function () {
  $('#status').text('Password change was unsuccessful. Please try again')
}

// Products
const createNewProductSuccess = function (response) {
  $('#status').text('Thank you for adding a  new product', response)
  if (debugUi) {
    console.log(response)
  }
  store.token = response.user.token
  $('#create-product-form').trigger('reset')
}

const createNewProductFailure = function () {
  console.log('Not possible')
  $('#status').text('Product creation failure')
}

module.exports = {
  // auth
  onSignUpSuccess: onSignUpSuccess,
  onSignUpFailure: onSignUpFailure,
  onSignInSuccess: onSignInSuccess,
  onSignInFailure: onSignInFailure,
  onSignOutSuccess: onSignOutSuccess,
  onSignOutFailure: onSignOutFailure,
  onChangePasswordSuccess: onChangePasswordSuccess,
  onChangePasswordFailure: onChangePasswordFailure,
  // Product
  createNewProductSuccess: createNewProductSuccess,
  createNewProductFailure: createNewProductFailure
}
