import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Services from '../components/Services'
const Home: NextPage = () => {
  return (
    <div className="">
      <Head>
        <title>techspace</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
 
     <Services/>
    </div>
  )
}

export default Home
