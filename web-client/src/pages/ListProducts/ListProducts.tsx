import ProductCard from '@components/ProductCard'
import { searchProductsRequest } from '@services/searchProducts'
import { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'

const ListProducts = () => {
  const [productsResult, setProductsResult] = useState([])
  const [searchParams] = useSearchParams()
  const search = searchParams.get('search')

  useEffect(() => {
    if (search?.length != null) {
      searchProductsRequest({ search }).then((data) => {
        console.log(data)
        setProductsResult(data)
      })
    }
  }, [])

  return (
    <div>
      ListProducts
      {productsResult.map((product: any) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  )
}

export default ListProducts
