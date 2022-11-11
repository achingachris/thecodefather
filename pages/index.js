import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { sortByDate } from '../utils/sortByDate'
import Layout from '../layout/Layout'
import Hero from '../components/home/Hero'
import ArticleList from '../components/home/ArticleList'

const Home = ({ articles }) => {
  return (
    <Layout>
      <Hero />
      <div className='container'>
        <div className='row'>
          {/* <div className='col-lg-8 col-md-8'></div> */}
          {articles.map((article, index) => (
            <ArticleList key={index} article={article} />
          ))}
        </div>
      </div>
    </Layout>
  )
}

export default Home

export async function getStaticProps() {
  const files = fs.readdirSync(path.join('articles'))

  const articles = files.map((filename) => {
    const slug = filename.replace('.md', '')

    const markdownWithMeta = fs.readFileSync(
      path.join('articles', filename),
      'utf-8'
    )

    const { data: frontmatter } = matter(markdownWithMeta)
    return { slug, frontmatter }
  })

  return {
    props: {
      articles: articles.sort(sortByDate),
    },
  }
}
