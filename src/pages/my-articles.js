import { ApolloClient, InMemoryCache, gql } from '@apollo/client'
import ArticleCard from '@/components/articles/ArticleCard'

const MyArticles = ({ posts }) => {
  return (
    <>
      <div className='page-section mt-5'>
        <div className='container'>
          <h2 className='page-section-heading text-center text-uppercase'>
            Articles
          </h2>
          <div className='divider-custom'>
            <div className='divider-custom-line' />
            <div className='divider-custom-icon'>
              <i className='fas fa-star' />
            </div>
            <div className='divider-custom-line' />
          </div>
        </div>
      </div>

      <div className='container'>
        {posts.map((post) => {
          return (
            // <div key={post._id}>
            //   <h1>{post.title}</h1>
            //   <a href={`https://chrisdevcode.hashnode.dev/${post.slug}`}>
            //     Read
            //   </a>
            // </div>
            <div key={post._id}>
              <ArticleCard
                title={post.title}
                slug={post.slug}
                image={post.coverImage}
                brief={post.brief}
              />
            </div>
          )
        })}
      </div>
    </>
  )
}

export default MyArticles

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
