import { Link, useRouteError } from 'react-router-dom'

interface Error {
  statusText: string
  message: string
}

const ErrorPage = () => {
  const error = useRouteError() as Error

  return (
    <div id="error-page">
      <h1>Oops!</h1>
      <p>Lo sentimos, se ha producido un error inesperado.</p>
      <p>
        <i>{error?.statusText ?? error?.message}</i>
      </p>
      <Link to={'/'}>regresar el inicio</Link>
    </div>
  )
}

export default ErrorPage
