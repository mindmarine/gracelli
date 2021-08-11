let apiUrl
const apiUrls = {
  // production: '<replace-with-heroku-url>',
  production: 'https://gracelli.herokuapp.com',
  development: 'http://localhost:4741'
}

if (window.location.hostname === 'localhost') {
  apiUrl = apiUrls.development
} else {
  apiUrl = apiUrls.production
}

module.exports = {
  apiUrl
}
