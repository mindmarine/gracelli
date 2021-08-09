'use strict'

// require methods
const getFormFields = require('../../lib/get-form-fields')
const api = require('./api')
const ui = require('./ui')

// Check this STORE ?!?
// const store = require('./../store')

const onSignUp = function (event) {
  event.preventDefault()
  // console.log('This is working on events for onSignUp function')
  const form = event.target
  // console.log(form)
  const data = getFormFields(form)
  // console.log(data)
  api.signUp(data)
    .then(ui.onSignUpSuccess)
    .catch(ui.onSignUpFailure)
}

const onSignIn = function (event) {
  event.preventDefault()
  // console.log('This is working on events for onSignIn function')
  const form = event.target
  // console.log(form)
  const data = getFormFields(form)
  // console.log(data)
  api.signIn(data)
    .then(ui.onSignInSuccess)
    .catch(ui.onSignInFailure)
}

const onSignOut = function () {
  api.signOut()
    .then(ui.onSignOutSuccess)
    .catch(ui.onSignOutFailure)
}

const onChangePassword = function (event) {
  event.preventDefault()
  // console.log('This is working on events for onChangePassword function')
  const form = event.target
  // console.log(form)
  const data = getFormFields(form)
  // console.log(data)
  api.changePassword(data)
    .then(ui.onChangePasswordSuccess)
    .catch(ui.onChangePasswordFailure)
}

// Product specific events
const onCreateNewProduct = function (event) {
  event.preventDefault()
  console.log('This is working on events for onCreateNewProduct function')
  const form = event.target
  console.log(form)
  const data = getFormFields(form)
  console.log(data)
  api.createNewProduct(data)
    .then(ui.createNewProductSuccess)
    .catch(ui.createNewProductFailure)
}

// Exports from events.js
module.exports = {
  onSignUp: onSignUp,
  onSignIn: onSignIn,
  onSignOut: onSignOut,
  onChangePassword: onChangePassword,
  onCreateNewProduct: onCreateNewProduct
}
