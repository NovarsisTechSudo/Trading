import React from "react";
import { FaStar } from "react-icons/fa";

const SliderCard = ({name,role,img}) => {
  return <div className="shadow-lg flex w-[300px] lg:w-[430px] bg-gray-100  rounded p-5 flex-col gap-y-3 items-center justify-center">
    <img className="w-[100px] h-[100px] rounded-full" src={img}  />
    <div>
    <h1 className="text-xl font-bold">{name}</h1>
    <h2 className="text-xl text-gray-400 font-semibold">{role}</h2>
    </div>
    <div className="flex text-[#D49539] items-center gap-x-3">
    <FaStar size={20}/>
    <FaStar size={20}/>
    <FaStar size={20}/>
    <FaStar size={20}/>
    <FaStar size={20}/>
    </div>
    <div>
        <p className="lg:text-[18px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam et dolore magna aliqua. Ut enim ad</p>
    </div>

  </div>;
};

export default SliderCard;
