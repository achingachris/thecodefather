import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { marked } from 'marked'
import Link from 'next/link'
import Image from 'next/image'
import Layout from '../layout/Layout'

const ArticleDetail = ({
  frontmatter: { title, category, date, cover_image, author, author_image },
  content,
  slug,
}) => {
  return (
    <Layout>
      <div className='container mt-5'>
        <div className='row'>
          <div className='col-lg-8'>
            <header className='mb-4 mt-5'>
              <h1 className='fw-bolder mb-1'>{title}</h1>
              <div className='text-muted fst-italic mb-2'>
                Posted on {date} by {author}
              </div>
              <a
                className='badge bg-secondary text-decoration-none link-light'
                href='#!'
              >
                {category}
              </a>
            </header>

            <figure class='mb-4'>
              <Image
                class='img-fluid rounded'
                src={cover_image}
                width={900}
                height={400}
                alt={`Cover image for ${title}`}
              />
            </figure>

            <section className='mb-5'>
              <div dangerouslySetInnerHTML={{ __html: marked(content) }}></div>
            </section>
          </div>

          <div className='col-lg-4 mt-5'>
            <div className='card mb-4'>
              <div className='card-header'>Categories</div>
              <div className='card-body'>
                <div className='row'>
                  <div className='col-sm-6'>
                    <ul className='list-unstyled mb-0'>
                      <li>
                        <a href='#!'>Web Design</a>
                      </li>
                      <li>
                        <a href='#!'>HTML</a>
                      </li>
                      <li>
                        <a href='#!'>Freebies</a>
                      </li>
                    </ul>
                  </div>
                  <div className='col-sm-6'>
                    <ul className='list-unstyled mb-0'>
                      <li>
                        <a href='#!'>JavaScript</a>
                      </li>
                      <li>
                        <a href='#!'>CSS</a>
                      </li>
                      <li>
                        <a href='#!'>Tutorials</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className='card mb-4'>
              <div className='card-header'>Side Widget</div>
              <div className='card-body'>
                You can put anything you want inside of these side widgets. They
                are easy to use, and feature the Bootstrap 5 card component!
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
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
