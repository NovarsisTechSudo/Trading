import React from 'react'


const OPlatformCard = ({icon,title}) => {
  return (
 
    <div className="flex flex-col lg:flex-row lg:items-center lg:gap-y-3 lg:gap-x-5 w-[260px] lg:w-[400px]">
<button className='lg:bg-white flex justify-center items-center w-[100px] h-[100px] lg:w-[105px] lg:h-[80px]  lg:p-4 rounded-full'>{icon}</button>
<div className="flex flex-col gap-3">
<h3 className="lg:text-xl font-semibold">{title}</h3>
<p className="text-[18px] ">
Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
</p>
</div>
</div>
    
  )
}

export default OPlatformCard