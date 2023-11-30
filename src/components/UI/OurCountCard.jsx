import React from 'react'
import CountUp from 'react-countup';

const OurCountCard = ({title,st,ed,sf="+"}) => {
  return (
    <div className='flex flex-col gap-y-3'>
       <h1 className='text-[#D49539] text-4xl font-bold'><CountUp duration={5.75} start={st} end={ed}  suffix={sf}/> </h1> 
       <h2 className='text-xl font-bold'>{title}</h2>
    </div>
  )
}

export default OurCountCard