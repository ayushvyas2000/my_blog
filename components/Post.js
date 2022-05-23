import Link from 'next/link'

export default function Post({ post }) {
  return (
    <div className='max-w-sm space-y-3 rounded-lg bg-white p-5 shadow-lg flex flex-col justify-center m-5 sm:m-10'>
      <img className='rounded-xl h-48 object-cover' src={post.frontmatter.cover_image} alt='' />

      <div className='text-xs text-gray-500'>Posted on {post.frontmatter.date}</div>
 
      <h3 className='text-xl font-bold' >{post.frontmatter.title}</h3>

      <p>{post.frontmatter.excerpt}</p>

      <Link href={`/blog/${post.slug}`}>
        <a className='text-white rounded-3xl py-2 flex items-center justify-center bg-emerald-700 w-32'>
          Read More</a>
      </Link>
    </div>
  )
}
