import React from "react";
import Button from "../Button";
import GStartCard from "./GStartCard";
import { RiMoneyDollarBoxLine } from "react-icons/ri";
import ChooseWorldCard from "./ChooseWorldCard";

const GetStartedBanner = () => {
  return (
    <section className=" w-full py-5 px-6 ">
      <div className="w-full lg:max-w-[1340px] mt-16 mx-auto flex flex-col gap-y-16 ">
        {/* first */}
        <div
          data-aos="fade-up"
          data-aos-delay="500"
          className="bg-gray-100 flex flex-col gap-6 shadow lg:h-[40vh] px-8 py-4"
        >
          <div className="flex lg:flex-row gap-5 lg:gap-0 flex-col justify-between my-8">
            <div>
              <h1 className="text-3xl lg:text-4xl font-bold">
                Choose our world-class platform
              </h1>
              <p className="lg:text-xl pt-5 text-gray-500">
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

          <div className="w-full bg-[#D49539] h-[2px] shadow-2xl"></div>
          <div className="flex lg:flex-row flex-col gap-8">
            <GStartCard />
            <GStartCard title="Iceberg Order" />
            <GStartCard title="Financial Analysis" />
            <GStartCard title="Pledging of shares" />
          </div>
        </div>
        {/* second */}
        <section data-aos="fade-down" data-aos-delay="500" className="flex lg:flex-row flex-col-reverse">
          <div className="w-[96%]">
            <h1 className="text-3xl lg:text-5xl font-bold">
              Choose our world-class platform
            </h1>
            <p className="lg:font-semibold py-4">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto beatae vitae
              dicta sunt explicabo. Nemo enim ipsam
            </p>

            <div className="flex flex-col gap-y-8 my-6">
              {/* card */}
              <ChooseWorldCard title={"Indice Training guide"} />
              <div className="flex gap-8 items-center bg-gray-200 p-4 lg:w-[80%]">
                <RiMoneyDollarBoxLine size={35} />
                <div className="w-[2px] h-[6vh] bg-gray-400"></div>
                <div>
                  <h1 className="lg:text-2xl font-bold">Indice Training guide</h1>
                  <p className="lg:text-xl text-gray-400">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do
                  </p>
                </div>
              </div>
              <ChooseWorldCard title={"trading Guide"} />
              {/* card ends */}
              <p className="font-semibold">
                Trade on Bitcoin, Gold, Oil, Apple, Tesla, crude oil and 6,400+
                other{" "}
                <span className="text-[#D49539]">world-renowned markets.</span>
              </p>

              <Button props={"lg:text-xl font-normal"}>Create Account</Button>
            </div>
          </div>

          <div className="ml-10 lg:h-[800px]">
            <img src="gmobile.png" alt="" />
          </div>
        </section>
      </div>
    </section>
  );
};

export default GetStartedBanner;
