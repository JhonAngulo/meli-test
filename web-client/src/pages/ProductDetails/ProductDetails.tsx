import { useParams } from 'react-router-dom'

const ProductDetails = () => {
  const { id } = useParams()
  console.log('id', id)

  return <div>ProductDetails</div>
}

export default ProductDetails
