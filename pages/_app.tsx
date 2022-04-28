import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.css'
import type { AppProps } from 'next/app'
import Header from '../components/Header';
import Footer from '../components/Footer'
function MyApp({ Component, pageProps }: AppProps) {
  return <>
  <Header/>
  <Component {...pageProps} />
  <Footer/>
  </>
}

export default MyApp
