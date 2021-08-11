// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')

const authEvents = require('./auth/events.js')

$(() => {
  // your JS code goes here
  // auth specific AJAX
  // Lots of hiding
  $('#sign-up').hide()
  $('#sign-in').hide()
  $('#sign-out').hide()
  $('#change-password').hide()
  $('#change-password-button').hide()
  $('#create-product').hide()
  $('#show-one-product').hide()
  $('#menu').hide()
  // Auth
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
  $('#product-update-div').on('submit', '#update-product-form', authEvents.onUpdateProduct)
  $('#delete-product-button').on('click', authEvents.onDeleteProduct)
  $('update-product-from-scratch-form').on('submit', authEvents.onUpdateProductFromScratch)

  // Nav button toggle
  $('#sign-up-button').on('click', function () {
    $('#sign-up').toggle('slow', function () {
      // Animation complete
    })
  })
  $('#sign-in-button').on('click', function () {
    $('#sign-in').toggle('slow', function () {
      // Animation complete
    })
  })
  $('#change-password-button').on('click', function () {
    $('#change-password').toggle('slow', function () {
      // Animation complete
    })
  })
  $('#add-new-product-button').on('click', function () {
    // hide and seek
    $('#create-product').toggle('slow', function () {
      // Animation complete
    })
  })
  $('#show-one-product-button').on('click', function () {
    $('#show-one-product').toggle('slow', function () {
      // Animation complete
    })
  })
})
