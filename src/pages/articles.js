import { ApolloClient, InMemoryCache, gql } from '@apollo/client'
import Header from '@/components/articles/Header'
import ArticleCard from '@/components/articles/ArticleCard'

const articles = ({ posts }) => {
  return (
    <>
      <Header />
      <div className='container'>
        {posts.map((post) => {
          return (
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

export default articles

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
