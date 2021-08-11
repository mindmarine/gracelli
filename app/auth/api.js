'use strict'

// require everywhere
const appCurrentLink = require('./../config')
const store = require('./../store')

// turn debugging ON/OFF
const debugApi = false

const signUp = function (data) {
  // console.log(data)
  // console.log(`This is the current link ${appCurrentLink.apiUrl}`)
  return $.ajax({
    url: `${appCurrentLink.apiUrl}/sign-up`,
    method: 'POST',
    data: data
  })
}

const signIn = function (data) {
  console.log(data)
  return $.ajax({
    url: `${appCurrentLink.apiUrl}/sign-in`,
    method: 'POST',
    data: data
  })
}

const signOut = function () {
  return $.ajax({
    url: `${appCurrentLink.apiUrl}/sign-out`,
    method: 'DELETE',
    headers: {
      Authorization: 'Bearer ' + store.token
    }
  })
}

const changePassword = function (data) {
  return $.ajax({
    url: `${appCurrentLink.apiUrl}/change-password`,
    method: 'PATCH',
    headers: {
      Authorization: 'Bearer ' + store.token
    },
    data: data
  })
}

// product specific ui
// Create new product
const createNewProduct = function (data) {
  if (debugApi) {
    console.log(data)
    console.log(`This is the current link ${appCurrentLink.apiUrl}`)
  }

  // adding owner to the product data
  data.owner = store.userId
  if (debugApi) {
    // debug console.log to see the data before the AJAX POST Method
    console.log('adding owner to the data', data)
  }

  return $.ajax({
    url: `${appCurrentLink.apiUrl}/products`,
    method: 'POST',
    headers: {
      Authorization: 'Bearer ' + store.token
    },
    data: data
  })
}
// Show all products
const ShowAllProducts = function () {
  const data = store.userId
  if (debugApi) {
    // debug console.log to see the data before the AJAX Get Method
    console.log('sending owner', data)
  }
  return $.ajax({
    url: `${appCurrentLink.apiUrl}/products`,
    method: 'GET',
    headers: {
      Authorization: 'Bearer ' + store.token
    },
    data: data
  })
}

// Show one product
const ShowOneProduct = function (data) {
  if (debugApi) {
    console.log('Super')
    console.log(data)
  }
  data.owner = store.userId
  if (debugApi) {
    // debug console.log to see the data before the AJAX Get Method
    console.log('sending owner', data)
  }
  return $.ajax({
    url: `${appCurrentLink.apiUrl}/products/${data.product._id}`,
    method: 'GET',
    headers: {
      Authorization: 'Bearer ' + store.token
    },
    data: data
  })
}

// Update featured product
const updateFeaturedProduct = function () {
  console.log(store.currentProductId)
  return $.ajax({
    url: `${appCurrentLink.apiUrl}/products/${store.currentProductId}`,
    method: 'GET',
    headers: {
      Authorization: 'Bearer ' + store.token
    }
  })
}

// Update product via form
const updateProduct = function (data) {
  if (debugApi) {
    console.log(data)
    console.log(`This is the current link ${appCurrentLink.apiUrl}`)
  }

  // adding owner to the product data
  data.owner = store.userId
  if (debugApi) {
    // debug console.log to see the data before the AJAX PATCH Method
    console.log('adding owner to the data', data)
  }

  return $.ajax({
    url: `${appCurrentLink.apiUrl}/products/${store.currentProductId}`,
    method: 'PATCH',
    headers: {
      Authorization: 'Bearer ' + store.token
    },
    data: data
  })
}
// delete Product
const deleteProduct = function () {
  return $.ajax({
    url: `${appCurrentLink.apiUrl}/products/${store.currentProductId}`,
    method: 'DELETE',
    headers: {
      Authorization: 'Bearer ' + store.token
    }
  })
}
// Update product from scratch
const updateProductFromScratch = function (data) {
  if (debugApi) console.log('In updateProductFromScratch function receiving form data is', data)
  return $.ajax({
    url: `${appCurrentLink.apiUrl}/products/${store.currentProductId}`,
    method: 'PATCH',
    headers: {
      Authorization: 'Bearer ' + store.token
    },
    data: data
  })
}

// Exports from api.js
module.exports = {
  signUp: signUp,
  signIn: signIn,
  signOut: signOut,
  changePassword: changePassword,
  createNewProduct: createNewProduct,
  ShowAllProducts: ShowAllProducts,
  ShowOneProduct: ShowOneProduct,
  updateFeaturedProduct: updateFeaturedProduct,
  updateProduct: updateProduct,
  deleteProduct: deleteProduct,
  updateProductFromScratch: updateProductFromScratch
}
