import MainLayout from '@layout/MainLayout'
import ErrorPage from '@pages/ErrorPage'
import ListProducts from '@pages/ListProducts'
import NotFound from '@pages/NotFound'
import ProductDetails from '@pages/ProductDetails'
import { Routes, Route } from 'react-router-dom'
import './styles/styles.scss'

const App = () => {
  return (
    <Routes>
      <Route path="*" element={<NotFound />} />
      <Route path="/" element={<MainLayout />} errorElement={<ErrorPage />}>
        <Route path="/items" element={<ListProducts />} />
        <Route path="/items/:id" element={<ProductDetails />} />
        <Route element={<NotFound />} />
      </Route>
    </Routes>
  )
}

export default App
