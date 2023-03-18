'use strict'

const router = require('express').Router()
const itemsRouter = require('./items_router')

function routerApi(server) {
  // base API endpoints
  server.use('/api/v1', router)

  // API endpoints
  router.use('/items', itemsRouter)
}

module.exports = routerApi
