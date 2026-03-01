import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

export const BlogCard = ({ id, title, category, excerpt, image, date }) => {
  return (
    <Link to={`/article/${id}`} className="blog-card-link">
      <article className="blog-card">
        <div className="card-image">
          <img src={image} alt={title} />
          <div className="card-category">{category}</div>
        </div>
        <div className="card-content">
          <h3 className="card-title">{title}</h3>
          <p className="card-excerpt">{excerpt}</p>
          <div className="card-footer">
            <span className="card-date">{date}</span>
          </div>
        </div>
      </article>
    </Link>
  )
}

BlogCard.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  excerpt: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  readTime: PropTypes.string.isRequired,
}
