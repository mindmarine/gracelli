'use strict'

const store = require('./../store')
console.log(store)

const debugUi = true
const debugAuth = false
const debugProduct = true

// Auth related code

const onSignUpSuccess = function (response) {
  if (debugUi && debugAuth) console.log('Super')
  $('#status').text('Thank you for signing up', response.user.email)
  if (debugUi && debugAuth) console.log(response)
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
// Create product
const createNewProductSuccess = function (response) {
  $('#status').text('Thank you for adding a  new product', response)
  if (debugUi && debugProduct) console.log(response)
  $('#create-product-form').trigger('reset')
}

const createNewProductFailure = function () {
  console.log('Creating a new product is not possible')
  $('#status').text('Product creation failure')
}
// Show all products
const onShowAllProductsSuccess = function (data) {
  $('#status').text('You have shown all products successfully')
  if (debugUi && debugProduct) {
    // Data for all products
    console.log(typeof data)
    console.log('here are all the products', data)
    console.log('first product', data.products[0])
    console.log('first product name is', data.products[0].name)
    for (let i = 0; i < data.products.length; i++) {
      // iterate for all products
      console.log('product name is', data.products[i].name)
      console.log('product description is', data.products[i].description)
      console.log('product price is', data.products[i].price)
      console.log('Total units', data.products[i].units)
      console.log('product sku is', data.products[i].sku)
      console.log('product id is', data.products[i]._id)
      console.log('product was created', data.products[i].createdAt)
      console.log('product was last updated', data.products[i].updatedAt)
      console.log('product version', data.products[i].__v)
    }
  }
  // create html for showing all products
  // each product has its own card
  // all cards are wrapped into a div
  //    <div class="row center">
  //    </div>
  let htmlToDisplayAllProducts = ''
  // htmlToDisplayAllProducts +=
  // // start grid-container div
  // '<div class="grid-container"> <main> <div> <div class="row center">'

  /*
    <div class="grid-container">
    <main>
      <div>
  */

  // add start of wrapper div
  for (let i = 0; i < data.products.length; i++) {
    htmlToDisplayAllProducts +=
    `
      <div class="card">
        <a href="product.html">
          <img class="medium" src="./public/p1.jpeg" alt="product" />
        </a>
        <div class="card-body">
          <a href="product.html">
            <h2>${data.products[i].name}</h2>
          </a>
            <p>Details: ${data.products[i].description}</p>
            <p>Inventory: ${data.products[i].units}</p>
            <p>sku: ${data.products[i].sku}</p>
            <p>id: ${data.products[i]._id}</p>
            <p>Created: ${data.products[i].createdAt}</p>
            <p>Updated: ${data.products[i].updatedAt}</p>
            <p>Version control: ${data.products[i].__v}</p>
          <div class="rating">
            <span> <i class="fa fa-star"></i> </span>
            <span> <i class="fa fa-star"></i> </span>
            <span> <i class="fa fa-star"></i> </span>
            <span> <i class="fa fa-star"></i> </span>
            <span> <i class="fa fa-star"></i> </span>
          </div>
          <div class="price">$${data.products[i].price}</div>
        </div>
      </div>
    `
    // add end of the div that wraps around all products
    // add ending to grid-container div
    // htmlToDisplayAllProducts += '</div></main></div></div>'
    console.log(htmlToDisplayAllProducts)

    $('#showcase-all-products').html(htmlToDisplayAllProducts)
  }
}

const onShowAllProductsFailure = function () {
  $('#status').text('Show all products was unsuccessful')
}

// Show one product - one and only :)
const showOneProductSuccess = function (data) {
  $('#status').text('You have shown all products successfully')
  if (debugUi && debugProduct) {
    // Data for all products
    console.log(typeof data)
    console.log('here are all the products', data)
    console.log('first product', data.product)
    console.log('first product name is', data.product.name)

    // product details
    console.log('product name is', data.product.name)
    console.log('product description is', data.product.description)
    console.log('product price is', data.product.price)
    console.log('Total units', data.product.units)
    console.log('product sku is', data.product.sku)
    console.log('product id is', data.product._id)
    console.log('product was created', data.product.createdAt)
    console.log('product was last updated', data.product.updatedAt)
    console.log('product version', data.product.__v)
  }
  const htmlToDisplayOneProduct =
    `
      <div class="card">
        <a href="product.html">
          <img class="medium" src="./public/p1.jpeg" alt="product" />
        </a>
        <div class="card-body">
          <a href="product.html">
            <h2>${data.product.name}</h2>
          </a>
            <p>Details: ${data.product.description}</p>
            <p>Inventory: ${data.product.units}</p>
            <p>sku: ${data.product.sku}</p>
            <p>id: ${data.product._id}</p>
            <p>Created: ${data.product.createdAt}</p>
            <p>Updated: ${data.product.updatedAt}</p>
            <p>Version control: ${data.product.__v}</p>
          <div class="rating">
            <span> <i class="fa fa-star"></i> </span>
            <span> <i class="fa fa-star"></i> </span>
            <span> <i class="fa fa-star"></i> </span>
            <span> <i class="fa fa-star"></i> </span>
            <span> <i class="fa fa-star"></i> </span>
          </div>
          <div class="price">$${data.product.price}</div>
        </div>
      </div>
    `
  console.log(htmlToDisplayOneProduct)

  $('#one-product-showcase').html(htmlToDisplayOneProduct)
}

const showOneProductFailure = function () {
  $('#status').text('Show one product was unsuccessful')
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
  createNewProductFailure: createNewProductFailure,
  onShowAllProductsSuccess: onShowAllProductsSuccess,
  onShowAllProductsFailure: onShowAllProductsFailure,
  showOneProductSuccess: showOneProductSuccess,
  showOneProductFailure: showOneProductFailure
}
