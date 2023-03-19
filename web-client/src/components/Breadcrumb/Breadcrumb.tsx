import { Link } from 'react-router-dom'

interface Category {
  id: string
  name: string
  results: number
}

interface BreadcrumbProps {
  categoriesResult: Category[]
}

const Breadcrumb = ({ categoriesResult }: BreadcrumbProps) => {
  return (
    <div className="breadcrumb__container">
      {categoriesResult.map((item, i) => {
        return (
          <Link
            to={`/items?search=${item.name}`}
            key={item.id}
            className="breadcrumb__link"
          >
            {item.name}
            {i !== categoriesResult.length - 1 && (
              <span className="breadcrumb__separator">{`>`}</span>
            )}
          </Link>
        )
      })}
    </div>
  )
}

export default Breadcrumb
