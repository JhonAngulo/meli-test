export interface SearchProductsRequest {
  search: string
}

export interface Product {
  id: string
  title: string
  price: Price
  picture: string
  condition: string
  freeShipping: boolean
  stateName: string
}

export interface Price {
  currency: string
  amount: number
  decimals: number
}
