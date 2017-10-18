const choo = require('choo')
const app = choo()

app.route('/', require('./pages/home'))

// Support for Server-Side Rendering
if (module.parent) {
  module.exports = app
} else {
  app.mount('body')
}
