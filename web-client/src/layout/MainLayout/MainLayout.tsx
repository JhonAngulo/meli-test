import SearchBar from '@components/SearchBar'
import logoMeli from '@assets/Logo_ML.png'
import logoMeli2x from '@assets/Logo_ML@2x.png.png.png'
import { Outlet } from 'react-router-dom'

const MainLayout = () => {
  return (
    <>
      <header className="header">
        <div className="header__nav">
          <picture>
            <img
              width={53}
              height={36}
              src={logoMeli}
              srcSet={`${logoMeli2x as string} 2x`}
              alt="logo mercado libre"
            />
          </picture>
          <SearchBar />
        </div>
      </header>
      <Outlet />
    </>
  )
}

export default MainLayout
