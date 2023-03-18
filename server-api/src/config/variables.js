'use strict'

require('dotenv').config()

module.exports = {
  system: {
    production: process.env.NODE_ENV === 'production',
    port: process.env.PORT || 3000,
    allow_origin: JSON.parse(process.env.ALLOW_ORIGIN)
  }
}
