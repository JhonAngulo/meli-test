import ic_Search from '@assets/ic_Search.png'
import ic_Search2x from '@assets/ic_Search@2x.png.png.png'
import {
  type ChangeEventHandler,
  useState,
  type FormEventHandler,
  useEffect
} from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'

const SearchBar = () => {
  const [searchParams] = useSearchParams()
  const navigate = useNavigate()

  const [search, setSearch] = useState('')

  const handleSubmit: FormEventHandler<HTMLFormElement> | undefined = (
    event
  ) => {
    event.preventDefault()
    navigate(`items?search=${search}`)
  }

  const handleChange: ChangeEventHandler<HTMLInputElement> | undefined = (
    event
  ) => {
    setSearch(event.target.value)
  }

  useEffect(() => {
    const search = searchParams.get('search')
    if (search?.length != null) {
      setSearch(search)
    }
  }, [])

  return (
    <form onSubmit={handleSubmit} className="search_bar">
      <label className="search_bar__label" htmlFor="search">
        search
      </label>
      <input
        id="search"
        className="search_bar__input"
        type="text"
        placeholder="Nunca dejes de buscar"
        value={search}
        onChange={handleChange}
      />
      <button type="submit" className="search_bar__button">
        <img
          className="search_bar__button-icon"
          src={ic_Search}
          srcSet={`${ic_Search2x as string} 2x`}
          alt="icono search"
        />
      </button>
    </form>
  )
}

export default SearchBar
