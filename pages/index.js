import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import Link from 'next/link'
import Article from '../components/Article'
import { sortByDate } from '../utils/sortByDate'

const Home = ({ articles }) => {
  // console.log(articles)
  return (
    <>
      <h2>Posts</h2>
      {articles.map((article, index) => (
        <Article key={index} article={article} />
      ))}

      <Link href='/articles'>Articles</Link>
    </>
  )
}

export default Home

export async function getStaticProps() {
  const files = fs.readdirSync(path.join('articles'))
  console.log(files)

  const articles = files.map((filename) => {
    const slug = filename.replace('.md', '')

    const markdownWithMeta = fs.readFileSync(
      path.join('articles', filename),
      'utf-8'
    )

    const { data: frontmatter } = matter(markdownWithMeta)

    // console.log(markdownWithMeta)

    return { slug, frontmatter }
  })

  // console.log(articles)

  return {
    props: {
      articles: articles.sort(sortByDate).slice(0, 6),
    },
  }
}
