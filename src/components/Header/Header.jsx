import React from "react";
import Navbar from "../Navbar/Navbar";
import { IoIosMenu } from "react-icons/io";
import Button from "../Button";
import { FaAngleRight } from "react-icons/fa";
import Container from "../container/Container";

const Header = () => {
  return (
    <>
    <div className="px-5 flex lg:hidden overflow-hidden bg-[#060606] z-[999999] shadow-lg sticky top-0 left-0 w-full justify-between text-white py-3">
      <img className="w-[160px]" src="tradely.png" alt="Tradly Logo" />
      <button className="md:hidden">
      <IoIosMenu size={45} />
      </button>
      </div>
      
    <div className=" hidden lg:block bg-[#060606] z-[999999] shadow-lg sticky top-0 left-0 w-full mx-auto">
      <Container>
    <header data-aos="fade-down"
      className="lg:py-5 hidden px-12   lg:flex justify-evenly items-center gap-x-40  text-white">
      {/* Logo */}
      <img className="hidden lg:block w-[160px]" src="tradely.png" alt="Tradly Logo" />
      
      {/* navbar */}
      <Navbar />
      {/* button */}
      <Button props={"hidden md:flex"}>Get Started <FaAngleRight/></Button>
    </header>
      </Container>
      </div>
      </>
  );
};

export default Header;
