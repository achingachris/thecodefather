import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import Image from 'next/image'
import Link from 'next/link'
import Article from '../components/Article'
import { sortByDate } from '../utils/sortByDate'
import Layout from '../layout/Layout'

const Home = ({ articles }) => {
  // console.log(articles)
  return (
    <Layout>
      <h2 className='text-3xl font-bold underline'>Posts</h2>
      <div className='container'>
        <div className='row'>
          {articles.map((article, index) => (
            <Article key={index} article={article} />
          ))}
        </div>
      </div>

      <Link href='/articles'>Articles</Link>
    </Layout>
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
      articles: articles.sort(sortByDate),
    },
  }
}
