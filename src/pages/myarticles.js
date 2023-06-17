import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const index = ({ articles }) => {
  console.log(articles)
  return (
    <div>
      My Articles
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
      articles,
    },
  };
}
