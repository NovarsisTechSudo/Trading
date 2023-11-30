import React from "react";
import Button from "../Button";

const BestTrading = () => {
  return (
    <section
      data-aos="fade-down"
      data-aos-delay="500"
      className="flex lg:flex-row flex-col items-center mt-20 lg:max-w-[1340px] h-[60vh] px-8 lg:px-0 mx-auto">
      <div className="w-full shadow-xl flex flex-col gap-y-16 bg-gray-100  rounded p-7">
        <div>
          <h1 className="text-3xl lg:text-4xl font-bold">Best trading platform now on Mobile</h1>
          <p className="mt-5 text-gray-400 text-[15px]">
            We're constantly improving our trading platform, trying to make it
            the best on the market.
          </p>
        </div>
        <div className="flex lg:flex-row flex-col gap-3 lg:gap-x-6">
            <Button>Create Account</Button>
            <Button
              background="bg-black"
              props={"text-white text-gray-300  text-base font-normal hover:bg-white hover:border hover:text-black"}
            >
             Download Today
            </Button>
        </div>
      </div>

      <div className="mt-6 lg:ml-10  lg:absolute top-1 right-1">
        <img className="lg:w-[500px]" src="gmobile.png" alt="" />
      </div>
    </section>
  );
};

export default BestTrading;
