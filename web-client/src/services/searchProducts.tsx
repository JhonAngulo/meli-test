import { type SearchProductsRequest } from '@models/productsModel'
import apiInstance from './axiosInstance'

const searchProductsRequest = async ({ search }: SearchProductsRequest) => {
  const params = {
    q: search,
    limit: 4
  }

  const { data } = await apiInstance.get('items', {
    params
  })

  return data.results
}

export { searchProductsRequest }
