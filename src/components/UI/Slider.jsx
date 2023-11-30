import React from "react";
import SliderCard from "./SliderCard";
import Button from "../Button";
import { TbChevronLeft, TbChevronRight } from "react-icons/tb";

const Slider = () => {

    const scrollLeft =()=>{
        document.getElementById("sliderContainer").scrollLeft -=450;
    }

    
    const scrollRight =()=>{
        document.getElementById("sliderContainer").scrollLeft +=450;
    }

    setInterval(() => {
        scrollRight();
    }, 5000);


  return (
    <section className="mt-20 px-8 lg:px-0 lg:max-w-[1340px] mx-auto ">
      <div>
        <div className="flex  flex-col lg:flex-row mt-20 my-10 justify-between gap-6 lg:gap-28">
          <div className="">
            <h1 className="text-3xl lg:text-5xl font-bold">Read what they say about us</h1>
            <p className="text-xl pt-5 text-gray-500">
              At vero eos et accusamus et iusto odio dignissimos ducimus qui
              blanditiis
            </p>
          </div>
          <Button
            background="bg-black"
            props={"text-white hover:bg-white hover:border hover:text-black"}
          >
            Get Started
          </Button>
        </div>
        {/* slider */}
        <div className="hidden relative top-4 lg:flex items-center justify-between">
            <button className="absolute top-40 left-2" onClick={scrollLeft}><TbChevronLeft  size={60} color="blue" /></button>
            <button className="absolute top-40 right-2" onClick={scrollRight}><TbChevronRight  size={60} color="blue" /></button>
        </div>
        <div id="sliderContainer" className=" slider flex items-center gap-x-5 scroll-smooth overflow-x-scroll">
          <div>
            <SliderCard img={"r1.jpg"} name={"Steven Ho"} role={"Marketer"} />{" "}
          </div>
          <div>
            <SliderCard
              img={"r2.jpg"}
              name={"Maria B"}
              role={"Crypto Trader"}
            />{" "}
          </div>
          <div>
            <SliderCard img={"r3.jpg"} name={"John"} role={"Trader"} />{" "}
          </div>
          <div>
            <SliderCard img={"r1.jpg"} name={"Steven Ho"} role={"Marketer"} />{" "}
          </div>
          <div>
            <SliderCard
              img={"r2.jpg"}
              name={"Maria B"}
              role={"Crypto Trader"}
            />{" "}
          </div>
          <div>
            <SliderCard img={"r3.jpg"} name={"John"} role={"Trader"} />{" "}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Slider;
