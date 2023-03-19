import Breadcrumb from '@components/Breadcrumb'
import Divider from '@components/Divider'
import ProductCard from '@components/ProductCard'
import { type Product } from '@models/productsModel'
import { searchProductsRequest } from '@services/searchProducts'
import { useEffect, useRef, useState } from 'react'
import { useSearchParams } from 'react-router-dom'

const ListProducts = () => {
  const [productsResult, setProductsResult] = useState<Product[]>([])
  const [categoriesResult, setCategoriesResult] = useState([])
  const [searchParams] = useSearchParams()
  const searchRef = useRef('')

  useEffect(() => {
    const search = searchParams.get('search')
    if (search?.length != null) {
      if (searchRef.current !== search) {
        searchRef.current = search
        void searchProductsRequest({ search }).then((data) => {
          setProductsResult(data?.items ?? [])
          setCategoriesResult(data?.categories ?? [])
        })
      }
    }
  }, [searchParams])

  return (
    <div className="page_products_list">
      <div className="page_products_list__container">
        <Breadcrumb categoriesResult={categoriesResult} />
        <div className="page_products_list__container-list">
          {productsResult.map((product: Product, i) => {
            return (
              <>
                <ProductCard key={product.id} {...product} />
                {i !== productsResult.length - 1 && <Divider />}
              </>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default ListProducts
