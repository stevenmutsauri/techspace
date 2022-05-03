import React from 'react'
import { HiOutlineArrowNarrowRight } from 'react-icons/hi'
import Image from 'next/image'
import HeroImage from '../public/images/hero.jpg'
import Trending from '../components/Trending'
import Link from 'next/link'


function MainPage() {
  return (
    <>
      <div className=" w-screen">
        <div className="flex h-auto w-screen items-center justify-center p-8">
          <div className="ml-10 md:ml-20 md:w-1/2">
            <h1 className="my-5 text-5xl font-bold text-gray-800 md:text-7xl">
              IT SOLUTIONS
            </h1>
            <p className="text-base text-gray-500 md:text-xl">
             we provide technological solutions to any company, business or people.
             we are a group of talented developers with a mission to help you grow
             your business with IT SOLUTIONS🔥 
            </p>
            <div className="mt-12 flex items-start justify-start gap-5 text-center ">
              <Link href ='/services'>
              <button className=" h-10  cursor-pointer rounded-xl  bg-violet-600 px-8 font-semibold text-white hover:bg-violet-900 hover:shadow-xl">
                Explore
              </button>
              </Link>
              
            </div>
          </div>

          <div className="hidden md:block">
            <Image
              src={HeroImage}
              width={900}
              height={700}
              objectFit="contain"
              alt="hero img"
            />
          </div>
        </div>
        <h1 className="text-5xl font-bold text-gray-900 text-center mt-8 ">Our Work👇</h1>
        <Trending />
      </div>
    </>
  )
}

export default MainPage
