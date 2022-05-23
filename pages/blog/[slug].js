import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import marked from 'marked'
import Link from 'next/link'
import Head from 'next/head'
export default function PostPage({
  frontmatter: { title, date, cover_image,excerpt },
  slug,
  content,
}) {
  return (
    <>
    <Head>
      <title>{title}</title>
      <meta name="description" content={excerpt} />
    </Head>
      <Link href='/'>
        <a className='px-3 py-2 rounded-md m-auto bg-emerald-500'>Go Back</a>
      </Link>
      <div className='bg-white p-10 shadow-lg my-10'>
        <h1 className='my-5 post-title text-4xl font-bold'>{title}</h1>
        <div className='my-2 text-gray-400'>Posted on {date}</div>
        <img className='object-cover m-auto rounded-xl max-h-96' src={cover_image} alt='' />
        <div className='post-body my-5'>
          <div dangerouslySetInnerHTML={{ __html: marked(content) }}></div>
        </div>
      </div>
    </>
  )
}

export async function getStaticPaths() {
  const files = fs.readdirSync(path.join('posts'))

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
    path.join('posts', slug + '.md'),
    'utf-8'
  )

  const { data: frontmatter, content } = matter(markdownWithMeta)

  return {
    props: {
      frontmatter,
      slug,
      content,
    },
  }
}
