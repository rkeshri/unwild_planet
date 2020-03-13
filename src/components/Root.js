
if (process.env.NODE_ENV === 'production') {
  module.exports = require('../routes/routes')
} else {
  module.exports = require('../routes/routes')
}