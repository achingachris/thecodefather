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
      <p>
        <a href='https://app.netlify.com/sites/codefather/deploys'>
          <picture>
            <img
              alt='Netlify Status'
              src='https://api.netlify.com/api/v1/badges/6a769aea-36f4-45f3-a317-166ca9adcb2c/deploy-status'
            />
          </picture>
        </a>
      </p>

      <h2 className='text-3xl font-bold underline'>Posts</h2>
      {articles.map((article, index) => (
        <Article key={index} article={article} />
      ))}

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
