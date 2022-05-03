import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Services from '../components/services'
import MainPage from './MainPage'
import Notify from '../components/Notify'


const Home: NextPage = () => {
  return (
    <div className="">
      <Head>
        <title>techspace</title>
        <link rel="icon" href="/favicon.ico"  className="border"/>
      </Head>
 
      <MainPage />
      <Services />
      
      <Notify />
    </div>
  )
}

export default Home
