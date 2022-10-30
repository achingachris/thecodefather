import Image from 'next/image'
import Link from 'next/link'
import ArticleCard from './ArticleCard'

const Article = ({ article }) => {
  return (
    <>
      <ArticleCard article={article} />
    </>
    // <div>
    //   <h2>{article.frontmatter.title}</h2>
      
    //   {/* article date */}
    //   <p>Date Posted: {article.frontmatter.date}</p>
    //   {/* article category */}
    //   <p>Category: {article.frontmatter.category}</p>
    //   {/* brief descriptio */}
    //   <p>{article.frontmatter.excerpt}</p>
    //   {/* article author */}
    //   <p>Author: {article.frontmatter.author}</p>
    //   {/* author image */}
    //   <Image
    //     src={article.frontmatter.author_image}
    //     width={50}
    //     height={50}
    //     alt={article.frontmatter.author}
    //   />
    //   {/* link to the full article */}
    //   <Link href={`${article.slug}`}>Read More</Link>

    //   <hr />
    //   <hr />
    // </div>
  )
}

export default Article
