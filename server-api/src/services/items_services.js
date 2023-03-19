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
        freeShipping: item.shipping.free_shipping,
        stateName: item.address.state_name
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
    console.log('search by id', id)

    const url = `https://api.mercadolibre.com/items/${id}`
    const response = await fetch(url)
    const itemMeli = await response.json()

    const responseDescription = await fetch(url + '/description')
    const descriptionMeli = await responseDescription.json()

    // const item = this.table.find((item) => item.id === id)
    if (Object.keys(itemMeli).length === 0) {
      throw boom.notFound(`Item id ${id} was not found`)
    }

    const itemResponse = {
      id: itemMeli.id,
      title: itemMeli.title,
      price: {
        currency: itemMeli.currency_id,
        amount: itemMeli.available_quantity,
        decimals: itemMeli.price
      },
      picture: itemMeli.pictures[0].url,
      condition: itemMeli.condition,
      freeShipping: itemMeli.shipping.free_shipping,
      soldQuantity: itemMeli.sold_quantity,
      description: descriptionMeli.plain_text
    }

    return itemResponse || {}
  }
}

module.exports = ItemsServices
