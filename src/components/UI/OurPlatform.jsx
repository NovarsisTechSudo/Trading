import React from "react";
import Button from "../Button";
import { IoCheckmarkDoneCircle } from "react-icons/io5";
import OPlatformCard from "./OPlatformCard";
import { FaFileVideo, FaDollarSign,FaRegNewspaper  } from "react-icons/fa6";
import Container from "../container/Container";
import OurCountCard from "./OurCountCard";
import { LuDollarSign } from "react-icons/lu";

const OurPlatform = () => {
  return (
    <section className=" w-full py-5 px-6 lg:px-0 bg-gray-100 ">
      <div className="max-w-[1340px] relative mt-16 mx-auto flex flex-col gap-y-16 ">
        {/* left */}
        <section data-aos="fade-down" data-aos-delay="500" className="flex flex-col lg:flex-row">
          <div className="lg:w-[96%]">
            <h1 className=" text-3xl lg:text-5xl font-bold">
              Our platform's Security Feature
            </h1>
            <p className=" lg:text-xl  pt-7">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto beatae vitae
              dicta sunt explicabo. Nemo enim ipsam
            </p>

            <div className="flex lg:flex-row flex-col gap-x-8">
              <ul data-aos="fade-right" data-aos-delay="500" className="py-8">
                <li className="lg:text-xl font-bold flex items-center gap-x-3">
                  <IoCheckmarkDoneCircle />
                  Lorem ipsum dolor sit amet
                </li>
                <li className="lg:text-xl  font-bold flex items-center gap-x-3">
                  <IoCheckmarkDoneCircle />
                  do eiusmod tempor incididunt ut
                </li>
                <li className="lg:text-xl  font-bold flex items-center gap-x-3">
                  <IoCheckmarkDoneCircle />
                  onsectetur adipiscing elit, sed
                </li>
              </ul>
              <ul data-aos="fade-right" data-aos-delay="500" className="py-8">
                <li className="lg:text-xl font-bold flex items-center gap-x-3">
                  <IoCheckmarkDoneCircle />
                  Duis aute irure dolor in reprehenderit
                </li>
                <li className="lg:text-xl font-bold flex items-center gap-x-3">
                  <IoCheckmarkDoneCircle />
                  do eiusmod tempor incididunt ut
                </li>
                <li className="lg:text-xl font-bold flex items-center gap-x-3">
                  <IoCheckmarkDoneCircle />
                  Professional Support User
                </li>
              </ul>
            </div>

            <h4 className="text-[#D49539] font-bold">access over to </h4>
            <p className="text-2xl lg:text-3xl font-bold">4600+ markets</p>

            <div className="flex flex-col gap-y-8 my-6">
              {/* card */}
              <div className="flex flex-col lg:flex-row mt-5 gap-5">
                <OPlatformCard
                  icon={<FaRegNewspaper size={30} />}
                  title={"Clean Documentation"}
                />
                <OPlatformCard
                  icon={<FaFileVideo size={30} />}
                  title={"Basic Tutorials"}
                />
              </div>
              {/* card ends */}
            </div>
          </div>
          
          <div className="ml-10 h-[400px]  lg:h-[650px]">
            <img src="ourplatform.png"  />
          </div>
        </section>
      </div>

      <Container>
      <div  data-aos="zoom-in"
    data-aos-delay="500" className=" px-8 bg-black p-12 mx-auto shadow-2xl  absolute text-white  lg:m-w-[1270px] rounded">
        <div className="flex flex-col gap-y-3">
              <h1 className="text-3xl font-bold">Numbers speak for themselves</h1>
              <p className="lg:text-xl lg:pt-3">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab </p>
        </div>

        <div className="flex lg:flex-row flex-col items-center relative my-8 gap-x-20">
<OurCountCard title={"Global Traders"} st={0} ed={235000}/>
 <p className="flex "><LuDollarSign className="pr-1 text-[#D49539]" size={45}/> <OurCountCard title={"Invest Volumn"} ed={45000000} sf=""/> </p>
<OurCountCard title={"Active Clients"} st={0} ed={85000}/>
<Button props={" mt-8 lg:ml-10 font-normal"}>Create Account</Button>
        </div>
              </div>
      </Container>
      
    </section>
  );
};

export default OurPlatform;
