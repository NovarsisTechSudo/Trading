import React from 'react'

import Button from '../Button';
import { FaAngleRight } from "react-icons/fa";

const OurPlatformprovideCard = ({icon,title}) => {
  return (
    <div className='w-[330px] h-[250px] my-8 flex  gap-y-3 justify-center flex-col bg-gray-100 p-6 rounded'>
<button className=' flex items-center justify-center p-3 rounded-full bg-white w-[60px] h-[60px]'>{icon}</button>
<h1 className='text-xl font-bold'>{title}</h1>
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed</p>
<button className="gap-x-2 w-[200px]   duration-500  flex items-center hover:bg-white hover:text-black border transition-all bg-black text-white font-bold lg:text-xl py-3 rounded px-6 ">
              Learn more <FaAngleRight />
            </button>
    </div>
  )
}

export default OurPlatformprovideCard