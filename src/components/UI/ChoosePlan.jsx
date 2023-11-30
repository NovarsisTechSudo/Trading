import React from "react";
import Container from "../container/Container";
import { IoCheckmarkDoneCircle } from "react-icons/io5";
import Button from "../Button";
import ChoosePlanCard from "./ChoosePlanCard";

const ChoosePlan = () => {
  return (
    <Container>
      <section className="flex flex-col px-4 gap-4 lg:gap-0 lg:px-0 lg:flex-row my-8">
       <ChoosePlanCard name={"Starter"} plan={"24.99"}/>

       <div className={`p-10 w-[350px] lg:w-[450px] flex flex-col gap-4 text-white bg-black`}>
          <img
            className=" w-[50px] lg:w-[70px] lg:h-[70px]"
            src="goldroundlogo.png"
            alt=""
          />
          <h1 className="font-bold text-3xl lg:text-4xl">Super Trader</h1>
          <p className="lg:text-xl">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque
          </p>
          <button className="gap-x-2 bg-black text-white w-full h-[8vh] duration-300  flex items-center  font-bold lg:text-xl py-5 rounded px-10 ">
          $ <span className="text-3xl lg:text-5xl font-bold">54.99</span> <strong className="text-[#D49539]">Monthly</strong>
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
              <IoCheckmarkDoneCircle color="orange" />
              illo inventore veritatis
            </li>
            <li className="lg:text-xl  pb-3 flex items-center gap-x-3">
              <IoCheckmarkDoneCircle color="orange" />
              laudantium, totam rem aperiam
            </li>
            <li className="lg:text-xl  pb-3 flex items-center gap-x-3">
              <IoCheckmarkDoneCircle color="orange" />
              Charts trading, market order depth
            </li>
          </ul>
          <Button>Get Started</Button>
        </div>

       <ChoosePlanCard name={"Advanced"} plan={34.99}/>
      </section>
    </Container>
  );
};

export default ChoosePlan;
