import { Link } from 'react-router-dom'

interface Category {
  id: string
  name: string
  results?: number
}

interface BreadcrumbProps {
  breadcrumbList: Category[]
}

const Breadcrumb = ({ breadcrumbList }: BreadcrumbProps) => {
  return (
    <div className="breadcrumb__container">
      {breadcrumbList.map((item, i) => {
        return (
          <Link
            to={`/items?search=${item.name}`}
            key={item.id}
            className="breadcrumb__link"
          >
            {item.name}
            {i !== breadcrumbList.length - 1 && (
              <span className="breadcrumb__separator">{`>`}</span>
            )}
          </Link>
        )
      })}
    </div>
  )
}

export default Breadcrumb
