import React from 'react'

const Button = ({
  children,props,background="bg-[#D49539]"
}) => {
  return (
  <button className={`${background} lg:h-[70px]  lg:w-[250px] gap-x-2 hover:bg-[#a56a12] duration-300 flex items-center text-black font-bold lg:text-xl py-5 rounded px-14 ${props}`}>
    {children}
  </button>
  )
}

export default Button