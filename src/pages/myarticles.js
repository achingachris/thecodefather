import fs from 'fs'
import path from 'path'
import Link from 'next/link'
import Image from 'next/image'
import matter from 'gray-matter'
import { sortByDate } from '@/utils'

const index = ({ articles }) => {
  console.log(articles)
  return (
    <div>
      <section className='py-5'>
        <div className='container px-5 mb-5'>
          <div className='text-center mb-5'>
            <h1 className='display-5 fw-bolder mb-0'>
              <span className='text-gradient d-inline'>My Articles</span>
            </h1>
          </div>
        </div>

        {/* display articles */}
        {articles.map((article, index) => (
          <div className="container mt-5">
            <div className='mt-5'>
              <div className='row'>
                <div className='col-md-7'>
                  <a href='#'>
                    <Image
                      className='img-fluid rounded mb-3 mb-md-0'
                      src={article.frontmatter.cover_image}
                      width={700}
                      height={300}
                      alt={article.frontmatter.title}
                    />
                  </a>
                </div>
                <div className='col-md-5'>
                  <h3>{article.frontmatter.title}</h3>
                  <p>
                    {article.frontmatter.date}
                  </p>
                  <p>Written By: {article.frontmatter.author}</p>
                  <Link href={`/article/${article.slug}`} legacyBehavior>

                    <a
                      className='btn btn-primary'

                    >
                      Read Article
                    </a>
                  </Link>
                </div>
              </div>
              {/* /.row */}
              <hr />
            </div>
          </div>
        ))}
      </section>
    </div>
  )
}

export default index

export async function getStaticProps() {
  const postsDirectory = path.join(process.cwd(), 'myarticles');
  const files = fs.readdirSync(postsDirectory);
  console.log(files);

  const articles = files.map((filename) => {
    const slug = filename.replace('.md', '');
    const markdownWithMeta = fs.readFileSync(
      path.join(postsDirectory, filename),
      'utf-8'
    );

    const { data: frontmatter } = matter(markdownWithMeta);

    // Convert Date object to string representation
    if (frontmatter.date instanceof Date) {
      frontmatter.date = frontmatter.date.toISOString();
    }

    return {
      slug,
      frontmatter,
    };
  });

  return {
    props: {
      articles: articles.sort(sortByDate).slice(0, 6),
    },
  };
}
