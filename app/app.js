// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')

const authEvents = require('./auth/events.js')

$(() => {
  // your JS code goes here
  // auth specific AJAX
  $('#sign-up').on('submit', authEvents.onSignUp)
  $('#sign-in').on('submit', authEvents.onSignIn)
  $('#sign-out').on('click', authEvents.onSignOut)
  $('#change-password').on('submit', authEvents.onChangePassword)
  // product specific AJAX
  $('#create-product-form').on('submit', authEvents.onCreateNewProduct)
  $('#all-products').on('click', authEvents.onShowAllProducts)
  $('#one-product').on('submit', authEvents.onShowOneProduct)
  $('#update-product-button').on('click', authEvents.onUpdateFeaturedProduct)
  // $('#update-product-form').on('submit', authEvents.onUpdateOneProduct)
  $('#update-product-form').on('submit', authEvents.onUpdateProduct)
  $('#delete-product-button').on('click', authEvents.onDeleteProduct)
})
