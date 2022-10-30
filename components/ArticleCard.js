import Image from 'next/image'
import Link from 'next/link'

const ArticleCard = ({ article }) => {
  return (
    <div className='col-md-4'>
      <div className='card-content'>
        <div className='card-img'>
          <Image
            src={article.frontmatter.cover_image}
            width={400}
            height={400}
            alt={article.frontmatter.title}
          />
          <span>
            <h4>{article.frontmatter.category}</h4>
          </span>
        </div>
        <div className='card-desc'>
          <span className='badge rounded-pill text-bg-secondary'>
            {article.frontmatter.date}
          </span>
          <h3>{article.frontmatter.title}</h3>
          <p>{article.frontmatter.excerpt}</p>
          <p className='text-muted'>{article.frontmatter.author}</p>
          <Link legacyBehavior href={`${article.slug}`}>
            <a className='btn-card'>Read</a>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default ArticleCard
