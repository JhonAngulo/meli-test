import {
  type GetProductRequest,
  type SearchProductsRequest
} from '@models/productsModel'
import apiInstance from './axiosInstance'

const searchProductsRequest = async ({ search }: SearchProductsRequest) => {
  const params = {
    q: search,
    limit: 4
  }

  const { data } = await apiInstance.get('items', {
    params
  })

  return data.data
}

const getProductsById = async ({ id }: GetProductRequest) => {
  const { data } = await apiInstance.get(`items/${id}`)

  return data.data
}

export { searchProductsRequest, getProductsById }
