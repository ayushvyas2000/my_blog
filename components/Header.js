import Link from 'next/link'
export default function Header() {
  return (
    <header className='my-5 md:my-10  w-fit max-w-2xl m-auto'>
      <Link  href='/'>
        <img className='  cursor-pointer' src="/images/logo.png" alt="" />
      </Link>
    </header>
  )
}
