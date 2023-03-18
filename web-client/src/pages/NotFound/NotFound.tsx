import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <div id="error-page">
      <h1>Oops!</h1>
      <p>Lo sentimos, se ha producido un error inesperado.</p>
      <p>404 la pagina no funciona</p>
      <Link to={'/'}>regresar el inicio</Link>
    </div>
  )
}

export default NotFound
