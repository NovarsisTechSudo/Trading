import React from "react";
import { IoCheckmarkDoneCircle } from "react-icons/io5";
import { FaAngleRight } from "react-icons/fa";
import Button from "../Button";

const AwesomeFeatureSection = () => {
  return (
    <section className="w-full lg:h-[40vh] bg-['trading.jpg'] flex text-white">
      <img
        className="hidden lg:block lg:w-[90vw]  h-[40vh] "
        src="trading.jpg"
        alt=""
      />
      <div className="bg-black w-full p-12 ">
        <h1
          data-aos="fade-up"
          data-aos-delay="500"
          className="text-white text-4xl font-bold"
        >
          Super Fast trading solution with tradely
        </h1>
        <div>
          <ul data-aos="fade-right" data-aos-delay="500" className="py-8">
            <li className="text-xl flex items-center gap-x-3">
              <IoCheckmarkDoneCircle color="orange" />
              Bitcoin trading & analysis
            </li>
            <li className="text-xl flex items-center gap-x-3">
              <IoCheckmarkDoneCircle color="orange" />
              Premium trading technology
            </li>
            <li className="text-xl flex items-center gap-x-3">
              <IoCheckmarkDoneCircle color="orange" />
              Professional Support User
            </li>
          </ul>
        </div>
        <div
          data-aos="fade-left"
          data-aos-delay="500"
          className="flex lg:flex-row flex-col gap-2 lg:gap-5"
        >
          <Button>Start Trading</Button>
          <button className="lg:gap-x-2  duration-300  flex items-center border font-bold text-xl py-5 rounded px-10 ">
            Learn Trading <FaAngleRight />
          </button>
        </div>
      </div>
    </section>
  );
};

export default AwesomeFeatureSection;
