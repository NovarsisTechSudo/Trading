import React from 'react'
import { IoCheckmarkDoneCircle } from "react-icons/io5";
import Button from "../Button";

const ChoosePlanCard = ({name,plan}) => {
  return (
    <section>
        <div className={`p-10 w-[350px] lg:w-[450px] flex flex-col gap-4 bg-gray-200`}>
          <img
            className="saturate-0 w-[50px] lg:w-[70px] lg:h-[70px]"
            src="goldroundlogo.png"
            alt=""
          />
          <h1 className="font-bold text-3xl lg:text-4xl">{name}</h1>
          <p className="lg:text-xl">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque
          </p>
          <button className="gap-x-2 bg-black text-white w-full h-[8vh] duration-300  flex items-center border font-bold lg:text-xl py-5 rounded px-10 ">
          $ <span className="text-3xl lg:text-5xl font-bold">{plan}</span> <strong className="text-[#D49539]">Monthly</strong>
            </button>

          <ul data-aos="fade-right" data-aos-delay="500" className="py-8 ">
            <li className="lg:text-xl  pb-3 flex items-center gap-x-3">
              <IoCheckmarkDoneCircle color="orange" />
              Comprehensive teach on Trading
            </li>
            <li className="lg:text-xl  pb-3 flex items-center gap-x-3">
              <IoCheckmarkDoneCircle color="orange" />
              Fast & highly qualified support
            </li>
            <li className="lg:text-xl  pb-3 flex items-center gap-x-3">
              <IoCheckmarkDoneCircle color="orange" />
              Trader's calculator, performance statistics
            </li>
            <li className="lg:text-xl  pb-3 flex items-center gap-x-3">
              <IoCheckmarkDoneCircle color="gray" />
              illo inventore veritatis
            </li>
            <li className="lg:text-xl  pb-3 flex items-center gap-x-3">
              <IoCheckmarkDoneCircle color="orange" />
              laudantium, totam rem aperiam
            </li>
            <li className="lg:text-xl  pb-3 flex items-center gap-x-3">
              <IoCheckmarkDoneCircle color="gray" />
              Charts trading, market order depth
            </li>
          </ul>
          <Button>Get Started</Button>
        </div>
      </section>
  )
}

export default ChoosePlanCard