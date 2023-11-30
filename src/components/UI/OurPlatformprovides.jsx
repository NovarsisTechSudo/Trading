import React from "react";
import Button from "../Button";
import OurPlatformprovideCard from "./OurPlatformprovideCard";
import { GoGraph } from "react-icons/go";
import { CiMoneyBill ,CiBitcoin} from "react-icons/ci";
import { DiHtml5Connectivity } from "react-icons/di";

const OurPlatformprovides = () => {
  return (
    <section className="lg:max-w-[1340px] mx-auto mt-[85vh] lg:mt-[450px] px-8 lg:px-0">
        <div>
          <div className="flex flex-col lg:flex-row justify-between gap-8 lg:gap-28">
            <div>
              <h1 className=" text-4xl lg:text-5xl font-bold">Our Platform provides</h1>
              <p className="text-xl pt-5 text-gray-500">
                We're constantly improving our trading platform, trying to make
                it the best on the market.
              </p>
            </div>
            <Button
              background="bg-black"
              props={"text-white hover:bg-white hover:border hover:text-black"}
            >
              Get Started
            </Button>
          </div>
        </div>
        <div>
        </div>
      
        <div>

        <div className="flex flex-col lg:flex-row lg:gap-x-8 my-8">
          <OurPlatformprovideCard title={"Online Trading"} icon={<GoGraph size={40} />}/>
          <OurPlatformprovideCard  title={"Real Estate Invest"} icon={ <CiMoneyBill size={40}/>}/>
          <OurPlatformprovideCard  title={"Crypto Invest"} icon={<CiBitcoin size={40}/>}/>
          <OurPlatformprovideCard  title={"Crypto Market"}  icon={<DiHtml5Connectivity size={40} />}/>
        </div>
{/* ---- */}
        <div>
              <h1 className="text-4xl lg:text-5xl font-bold">Choose the right plan for trading</h1>
              <p className="lg:text-xl pt-5 text-gray-500">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi 
              </p>
            </div>
        </div>
        
    </section>
  );
};

export default OurPlatformprovides;
