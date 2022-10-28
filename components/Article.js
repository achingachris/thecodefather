import Image from 'next/image'
import Link from 'next/link'

const Article = ({ article }) => {
  return (
    <div>
      <Image
        src={article.frontmatter.cover_image}
        width={400}
        height={400}
        alt={article.frontmatter.title}
      />
      {/* article date */}
      <p>Date Posted: {article.frontmatter.date}</p>
      {/* article category */}
      <p>Category: {article.frontmatter.category}</p>
      {/* brief descriptio */}
      <p>{article.frontmatter.excerpt}</p>
      {/* article author */}
      <p>Author: {article.frontmatter.author}</p>
      {/* author image */}
      <Image
        src={article.frontmatter.author_image}
        width={50}
        height={50}
        alt={article.frontmatter.author}
      />
      {/* link to the full article */}
      <Link href={`${article.slug}`}>Read More</Link>

      <hr />
      <hr />
    </div>
  )
}

export default Article
