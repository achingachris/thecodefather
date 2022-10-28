import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const ArticleDetail = ({
  frontmatter: { title, category, data, cover_image, author, author_image },
  content,
  slug,
}) => {
  // console.log(frontmatter)
  // console.log(content)
  console.log(slug)
  return (
    <div>
      Article Detailed Here
      <h1>{title}</h1>
    </div>
  )
}

export default ArticleDetail

export async function getStaticPaths() {
  const files = fs.readdirSync(path.join('articles'))

  const paths = files.map((filename) => ({
    params: {
      slug: filename.replace('.md', ''),
    },
  }))

  console.log(paths)

  return {
    paths,
    fallback: false,
  }
}

export async function getStaticProps({ params: { slug } }) {
  const markdownWithMeta = fs.readFileSync(
    path.join('articles', slug + '.md'),
    'utf-8'
  )

  const { data: frontmatter, content } = matter(markdownWithMeta)

  return {
    props: {
      frontmatter,
      content,
      slug,
    },
  }
}
