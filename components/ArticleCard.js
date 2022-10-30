import Image from 'next/image'
import Link from 'next/link'

const ArticleCard = ({ article }) => {
  return (
    <div className='col-md-4'>
      <div className='card-content'>
        <div className='card-img'>
          {/* <img src={article.frontmatter.cover_image} alt='' /> */}
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
          <h3>{article.frontmatter.title}</h3>
          <p>{article.frontmatter.excerpt}</p>
          <Link legacyBehavior href={`${article.slug}`}>
            <a className='btn-card'>Read</a>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default ArticleCard
