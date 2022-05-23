import Header from '../components/Header'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Header />
      <main className='m-auto max-w-screen-lg  mb-10'>
        <Component {...pageProps} />
      </main>
    </>
  )
}

export default MyApp
