import React from 'react'
import Image from 'next/image'
import One from '../public/images/fo.png'
import Two from '../public/images/pos.jpg'
import { AiFillStar } from 'react-icons/ai'

function Trending() {
  return (
 
    <div className="my-20 flex  items-center justify-center">
      
      {/* images section  */}
      
      
      <div className="flex w-11/12 flex-col items-center justify-center gap-4 p-5 md:ml-20 md:flex-row">
   
        
        <div className="relative">
          <Image
            src={One}
            alt="first"
            width={400}
            height={300}
            objectFit="cover"
            className="rounded-xl shadow-md"
          />
          <div className=" flex h-auto w-full flex-col items-start justify-start rounded-xl bg-white pl-4 shadow-xl">
            <p className="mt-5 text-sm font-thin uppercase text-gray-500">
              FOOD ORDERING
            </p>
            <h2 className="text-3xl font-bold text-gray-900">FO APP</h2>
            <div className="mb-5 mt-2 flex items-center justify-center">
              <AiFillStar className="text-yellow-600" />
              <p className=" pl-2 text-sm text-gray-500"> 5.0 (12 reviews)</p>
            </div>
          </div>
        </div>
        <div className="relative">
          <Image
            src={Two}
            alt="second"
            width={400}
            height={300}
            objectFit="cover"
            className="rounded-xl shadow-md"
          />
          <div className="flex h-auto flex-col items-start justify-start rounded-xl bg-white pl-4 shadow-xl">
            <p className="mt-5 text-sm font-thin uppercase text-gray-500">
              POS system 
            </p>
            <h2 className="text-3xl font-bold text-gray-900">POS</h2>
            <div className="mb-5 mt-2 flex items-center justify-center">
              <AiFillStar className="text-yellow-600" />
              <p className=" pl-2 text-sm text-gray-500"> 4.8 (48 reviews)</p>
            </div>
          </div>
        </div>
        {/* textual content */}
        <div className="flex-col items-start justify-start sm:mt-8 md:mt-0 md:ml-20">
        
          <p className="mt-5 w-3/4 text-base text-gray-600 md:text-xl">
           we have worked with several companies both startups, huge comapanies and
           individual clients providing value to thier businesses,we build real world projects
         
          </p>
          <div className="flex items-start justify-start gap-5">
            <div className="my-5 flex-col">
              <h1 className="text-4xl font-bold text-gray-600">20+</h1>
              <p className="text-xl font-medium text-gray-600">projects</p>
            </div>
            <div className="my-5 flex-col">
              <h1 className="text-4xl font-bold text-gray-600">30+</h1>
              <p className="text-xl font-medium text-gray-600">companies</p>
            </div>
            <div className="my-5 flex-col">
              <h1 className="text-4xl font-bold text-gray-600">30+</h1>
              <p className="text-xl font-medium text-gray-600">tutorials</p>
            </div>
          </div>
          <button className="h-14 w-auto rounded-xl bg-violet-600 px-8  text-white shadow-xl hover:bg-violet-900">
            Contact Us
          </button>
        </div>
      </div>
    </div>

  )
}

export default Trending
