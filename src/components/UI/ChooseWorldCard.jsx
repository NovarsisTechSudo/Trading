import React from 'react'
import { FaRegBuilding } from "react-icons/fa";

const ChooseWorldCard = ({title}) => {
  return (
    <div className="flex gap-8 items-center">
    <FaRegBuilding size={35}/>
    <div className="w-[2px] h-[6vh] bg-gray-400"></div>
    <div>
      <h1 className="text-xl lg:text-2xl font-bold">{title}</h1>
      <p className="lg:text-xl text-gray-400">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
        do
      </p>
    </div>
  </div>
  )
}

export default ChooseWorldCard