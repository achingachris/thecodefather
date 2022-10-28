import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { marked } from 'marked'
import Link from 'next/link'
import Image from 'next/image'

const ArticleDetail = ({
  frontmatter: { title, category, date, cover_image, author, author_image },
  content,
  slug,
}) => {
  // console.log(frontmatter)
  // console.log(content)
  console.log(slug)
  return (
    <div>
      Article Detailed Here
      <br />
      <Link href='/'>Go Back</Link>
      <br />
      <h1>{title}</h1>
      <h3> {category}</h3>
      <Image src={cover_image} width={500} height={500} alt={title} />
      <br />
      <Image src={author_image} width={100} height={100} alt={author} />
      <p>{author}</p>
      <p>{date}</p>
      <div dangerouslySetInnerHTML={{ __html: marked(content) }}></div>
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
