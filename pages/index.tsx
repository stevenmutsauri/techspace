import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Services from '../components/services'
import MainPage from './MainPage'
import Notify from '../components/Notify'
import HomeServices from '../components/HomeServices'

const Home: NextPage = () => {
  return (
    <div className="overflow-hidden">
      <Head>
        <title>techspace</title>
        <link rel="icon" href="/favicon.ico"  className=" rounded-sm"/>
      </Head>
 
      <MainPage />
      <HomeServices/>
      <Services />
      
      <Notify />
    </div>
  )
}

export default Home
