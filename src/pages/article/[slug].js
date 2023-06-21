import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { marked } from 'marked'
import Link from 'next/link'

const ArticlePage = ({
    frontmatter: { title, category, date, cover_image, author, author_image },
    content,
    slug,
}) => {
    // console.log(content)
    return (
        <div>
            {category}

            {/* <img src={cover_image} alt='' className='w-full rounded' /> */}

            <h4>{author}</h4>
            <div dangerouslySetInnerHTML={{ __html: marked(content) }}></div>
        </div>
    )
}

export default ArticlePage

export async function getStaticPaths() {
    const files = fs.readdirSync(path.join('myarticles'))

    const paths = files.map((filename) => ({
        params: {
            slug: filename.replace('.md', ''),
        },
    }))

    return {
        paths,
        fallback: false,
    }
}


export async function getStaticProps({ params: { slug } }) {
    const markdownWithMeta = fs.readFileSync(
        path.join('myarticles', slug + '.md'),
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
