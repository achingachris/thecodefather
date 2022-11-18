import Image from 'next/image'
// import { CldImage } from 'next-cloudinary'
import Link from 'next/link'

const ArticleCard = ({ article }) => {
  return (
    <div className='col-lg-4'>
      <div className='card mb-4'>
        <Link legacyBehavior href={`${article.slug}`}>
          <a>
            <Image
              className='card-img-top'
              src={article.frontmatter.cover_image}
              width={400}
              height={400}
              alt={`Image showing ${article.frontmatter.title} article banner`}
            />
          </a>
        </Link>

        <div className='card-body'>
          <div className='small text-muted'>{article.frontmatter.date}</div>
          <h2 className='card-title h4'>{article.frontmatter.title}</h2>
          <p className='card-text'>{article.frontmatter.excerpt}</p>
          <Link legacyBehavior href={`${article.slug}`}>
            <a className='btn btn-primary'>Read More → </a>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default ArticleCard
