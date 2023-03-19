import Breadcrumb from '@components/Breadcrumb'
import { type ProductWithDescription } from '@models/productsModel'
import { getProductsById } from '@services/searchProducts'
import changeConditionText from '@utils/changeConditionText'
import { useEffect, useRef, useState } from 'react'
import { useParams } from 'react-router-dom'

const ProductDetails = () => {
  const { id } = useParams()
  const idRef = useRef('')
  const [product, setProduct] = useState<ProductWithDescription>()

  useEffect(() => {
    if (id?.length != null) {
      if (idRef.current !== id) {
        idRef.current = id
        void getProductsById({ id }).then((data) => {
          setProduct(data.item)
        })
      }
    }
  }, [])

  if (product === undefined) {
    return null
  }

  const list = [
    {
      id: product.id,
      name: product.title
    }
  ]

  return (
    <div className="page_product_details">
      <div className="page_product_details__container">
        <Breadcrumb breadcrumbList={list} />
        <div className="page_product_details__item">
          <div>
            <figure>
              <img
                className="page_product_details__item-imagen"
                width="80%"
                src={product.picture}
                alt={`imagen de ${product.title}`}
              />
            </figure>
            <div className="page_product_details__description">
              <p className="page_product_details__description-title">
                Descripción del producto
              </p>
              <span className="page_product_details__description-text">
                {product.description}
              </span>
            </div>
          </div>
          <div className="page_product_details__container-subContainer">
            <span>
              {changeConditionText(product.condition)} - {product.soldQuantity}{' '}
              vendidos
            </span>
            <p className="page_product_details__title">{product.title}</p>
            <p className="page_product_details__price">
              {product?.price?.decimals != null && (
                <>
                  ${' '}
                  {parseInt(product.price.decimals.toString()).toLocaleString(
                    'es-AR'
                  )}
                </>
              )}
            </p>
            <button className="button button__fullWidth button__primary">
              Comprar
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductDetails
