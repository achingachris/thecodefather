import { ApolloClient, InMemoryCache, gql } from '@apollo/client'

import Header from '../../src/components/articlespages/Header'
import ArticleCard from '../../src/components/articlespages/ArticleCard'
import Pagination from '../../src/components/articlespages/Pagination'
import NewsLetterCard from '../../src/components/articlespages/NewsLetterCard'

const ArticlesHome = ({ posts }) => {
  console.log('POSTS', posts)
  return (
    <>
      <Header />
      <section className='bg-light py-10'>
        <div className='container px-5'>
          <a
            className='card post-preview post-preview-featured lift mb-5 overflow-hidden'
            href='#!'
          >
            <NewsLetterCard />
          </a>
          <div className='row gx-5'>
            {posts.map((post) => {
              return (
                <ArticleCard
                  key={post._id}
                  title={post.title}
                  brief={post.brief}
                  date={post.dateAdded}
                  coverimage={post.coverImage}
                  slug={post.slug}
                />
              )
            })}
          </div>
          {/* <Pagination /> */}
        </div>
        <div className='svg-border-rounded text-light'>
          {/* Rounded SVG Border*/}
          <svg
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 144.54 17.34'
            preserveAspectRatio='none'
            fill='currentColor'
          >
            <path d='M144.54,17.34H0V0H144.54ZM0,0S32.36,17.34,72.27,17.34,144.54,0,144.54,0' />
          </svg>
        </div>
      </section>
    </>
  )
}

export default ArticlesHome

export async function getStaticProps(context) {
  const client = new ApolloClient({
    uri: 'https://api.hashnode.com/',
    cache: new InMemoryCache(),
  })

  const { data } = await client.query({
    query: gql`
      query GetPosts {
        user(username: "chrisdevcode") {
          publication {
            posts(page: 0) {
              _id
              dateAdded
              coverImage
              slug
              title
              brief
            }
          }
        }
      }
    `,
  })

  return {
    props: {
      posts: data.user.publication.posts,
    },
  }
}
