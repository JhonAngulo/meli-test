import MainLayout from '@layout/MainLayout'
import ErrorPage from '@pages/ErrorPage'
import ListProducts from '@pages/ListProducts'
import ProductDetails from '@pages/ProductDetails'
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom'

import './styles/styles.scss'

const App = () => {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Outlet />,
      errorElement: <ErrorPage />
    },
    {
      path: 'items',
      element: <ListProducts />
    },
    {
      path: 'items/:id',
      element: <ProductDetails />
    }
  ])

  return (
    <MainLayout>
      <RouterProvider router={router} />
    </MainLayout>
  )
}

export default App
