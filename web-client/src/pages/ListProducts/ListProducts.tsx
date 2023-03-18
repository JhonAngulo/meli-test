import ProductCard from '@components/ProductCard'
import { searchProductsRequest } from '@services/searchProducts'
import { useEffect, useRef, useState } from 'react'
import { useSearchParams } from 'react-router-dom'

const ListProducts = () => {
  const [productsResult, setProductsResult] = useState([])
  const [searchParams] = useSearchParams()
  const searchRef = useRef('')

  useEffect(() => {
    const search = searchParams.get('search')
    if (search?.length != null) {
      if (searchRef.current !== search) {
        searchRef.current = search
        void searchProductsRequest({ search }).then((data) => {
          setProductsResult(data)
        })
      }
    }
  }, [searchParams])

  return (
    <div className="page_products_list">
      <div className="page_products_list__container">
        ListProducts
        <div className="page_products_list__container-list">
          {productsResult.map((product: any) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default ListProducts
