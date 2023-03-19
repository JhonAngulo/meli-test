'use strict'

const router = require('express').Router()
const response = require('../middlewares/response_handler')
const validatorHandler = require('../middlewares/validator_handler')
const { getItemSchema } = require('../schemas/item_schema')
const ItemsServices = require('../services/items_services')
const itemsServices = new ItemsServices()

router.get('/', async (req, res, next) => {
  const { q, limit = 4 } = req.query
  try {
    const items = await itemsServices.search({ q, limit })
    response.success({ req, res, message: 'Items List', data: items })
  } catch (error) {
    next(error)
  }
})

router.get(
  '/:id',
  validatorHandler(getItemSchema, 'params'),
  async (req, res, next) => {
    const { id } = req.params

    try {
      const item = await itemsServices.getById({ id })
      response.success({ req, res, message: 'Item details', data: item })
    } catch (error) {
      next(error)
    }
  }
)

module.exports = router
