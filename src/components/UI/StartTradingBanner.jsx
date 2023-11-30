import React from "react";
import Button from "../Button";
import { FaAngleRight } from "react-icons/fa";
import STradeCard from "./STradeCard";

const StartTradingBanner = () => {
  return (
    <section  className="bg-[#060606] pb-8 lg:pb-0 pt-16 lg:h-[90vh] text-white">
      <div  data-aos="fade-right" data-aos-delay="800" className="px-5 lg:px-0 w-full lg:max-w-[1270px] mt-16 mx-auto flex flex-col gap-y-16 ">
        <div className="pr-5">
          <h1 className="text-4xl leading-tight lg:leading-none lg:text-6xl font-bold ">
            Tradely is for traders and <br /> investors who like taking{" "}
            <span className="text-[#D49539]"> risks </span>​
          </h1>
        </div>
        <section>
        <div className="flex gap-10 ">
          <div>
            <h3 className="lg:text-xl text-gray-400 font-semibold">Features</h3>
            <h1 className="text-xl lg:text-4xl font-bold">Easy to use</h1>
          </div>
          <div className="w-[2px] lg:h-[8vh] bg-white"></div>
          <div>
            <h3 className="lg:text-xl text-gray-400 font-semibold">
              access over to
            </h3>
            <h1 className="text-xl lg:text-4xl font-bold">4600+ markets</h1>
          </div>
        </div>
        <div>
          <div className="flex lg:flex-row flex-col pt-8 gap-y-2 lg:gap-5">
            <Button props={"w-full "} >Start Trading</Button>
            <button className="gap-x-2  duration-300  flex items-center border font-bold lg:text-xl py-5 rounded px-10 ">
              Learn Trading <FaAngleRight />
            </button>
          </div>
            <p className="py-5 text-[13px] lg:text-xl font-semibold">
              Trade on Bitcoin, Gold, Oil, Apple, Tesla, crude oil and 6,400+
              other <span className="text-[#D49539]">world-renowned markets.</span>
            </p>
        </div>
            </section>
        <div data-aos="fade-up"
     data-aos-delay="1000"  className="flex flex-col lg:flex-row gap-10 lg:pt-7">
            <div>
            <h2 className="text-2xl font-bold">Become a trader today</h2>
            <h3 className="text-[#D49539] pt-3 text-xl font-semibold">Download app Today</h3>
            </div>
            <div className="flex flex-col lg:flex-row gap-5">
                <STradeCard title={"Create account"}/>
                <STradeCard title={"Deposit amount"}/>
                <STradeCard title={"Start Trading"}/>
            </div>
        </div>
      </div>
    </section>
  );
};

export default StartTradingBanner;
