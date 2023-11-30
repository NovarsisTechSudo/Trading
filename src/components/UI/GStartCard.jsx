import React from 'react'

const GStartCard = ({title="Trade from Option Chain"}) => {
  return (
    <div className='w-[300px] flex flex-col gap-y-3'>
        <h2 className='text-xl lg:text-2xl font-bold'>{title}</h2>
        <p className='text-gray-400 lg:text-xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, dolor?</p>
    </div>
  )
}

export default GStartCard