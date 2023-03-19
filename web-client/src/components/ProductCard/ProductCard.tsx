import ic_shipping from '@assets/ic_shipping.png'
import ic_shipping2x from '@assets/ic_shipping@2x.png.png.png'
import { type Product } from '@models/productsModel'
import { useNavigate } from 'react-router-dom'

const ProductCard = (product: Product) => {
  const { id, price, title, picture, freeShipping, condition, stateName } =
    product

  const navigate = useNavigate()

  const handleClick = () => {
    navigate(`/items/${id}`)
  }

  return (
    <div className="product_card__container" onClick={handleClick}>
      <img
        width={180}
        height={180}
        className="product_card__imagen"
        src={picture}
        alt={`imagen de ${title.toLocaleLowerCase()}`}
      />
      <div className="product_card__details">
        <p className="product_card__details-price">
          {price?.decimals != null && (
            <>$ {parseInt(price.decimals.toString()).toLocaleString('es-AR')}</>
          )}

          {Boolean(freeShipping) && (
            <img
              className="product_card__details-free_shipping"
              width={18}
              height={18}
              src={ic_shipping}
              srcSet={`${ic_shipping2x as string} 2x`}
              alt="free_shipping"
            />
          )}
        </p>
        <p className="product_card__details-title">{title}</p>
        <p className="product_card__details-condition">{condition}</p>
      </div>
      <div>
        <p className="product_card__details-state">{stateName}</p>
      </div>
    </div>
  )
}

export default ProductCard
