'use strict'

const ITEMS = require('../mocks/ITEMS_MOCK_DATA.json')
const boom = require('@hapi/boom')

class ItemsServices {
  constructor() {
    this.table = ITEMS
  }

  async search({ q, limit }) {
    const url =
      'https://api.mercadolibre.com/sites/MLA/search?' +
      new URLSearchParams({ q, limit })
    const response = await fetch(url)
    const itemsMeli = await response.json()

    const responseStructure = {
      author: {
        name: 'Jhon',
        lastname: 'Angulo'
      }
    }

    const items = await itemsMeli.results.map((item) => {
      return {
        id: item.id,
        title: item.title,
        price: {
          currency: item.installments.currency_id,
          amount: item.installments.amount,
          decimals: item.price
        },
        picture: item.thumbnail,
        condition: item.condition,
        freeShipping: item.shipping.free_shipping
      }
    })

    responseStructure.categories =
      itemsMeli.available_filters
        .filter((filter) => filter.id === 'category')[0]
        ?.values.sort((x, y) => y.results - x.results)
        .slice(0, 4)
        .reverse() || []
    responseStructure.items = items

    return responseStructure || []
  }

  async getById({ id }) {
    const item = this.table.find((item) => item.id === id)
    if (!item) {
      throw boom.notFound(`Item id ${id} was not found`)
    }

    if (!item.enable) {
      throw boom.conflict(`Item id ${id} was disabled`)
    }

    return item || {}
  }
}

module.exports = ItemsServices
