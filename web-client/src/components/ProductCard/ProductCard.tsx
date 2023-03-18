import ic_shipping from '@assets/ic_shipping.png'
import ic_shipping2x from '@assets/ic_shipping@2x.png.png.png'

const ProductCard = (product: any) => {
  const { price, title, picture, address, freeShipping, condition } = product
  return (
    <div className="product_card__container">
      <img
        width={180}
        height={180}
        className="product_card__imagen"
        src={picture}
        alt="imagen del producto"
      />
      <div className="product_card__details">
        <p className="product_card__details-price">
          $ {parseInt(price.decimals).toLocaleString('es-AR')}
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
        <p>{address?.state_name ?? ''}</p>
      </div>
    </div>
  )
}

export default ProductCard
