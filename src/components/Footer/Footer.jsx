import React from "react";
import Container from "../container/Container";
import { FaFacebook, FaLinkedin, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="w-full relative mt-96 lg:mt-0 pt-32  text-white bg-black">
      <Container>
        <div className="flex pr-12 flex-col gap-y-4 lg:gap-y-8">
          <img className="w-[150px] lg:w-[220px]" src="tradely.png" alt="Tradly Logo" />
          <h2 className="lg:text-xl font-semibold">Location to HQ</h2>
          <div className="flex gap-y-4 flex-col">
            <p className="lg:text-xl text-gray-400">23 Valley Lane, Austin</p>
            <p className="lg:text-xl text-gray-400">07.00 AM - 19.00 PM</p>
          </div>
          <div>
            <h3 className="lg:text-xl font-semibold">Follow on social medias</h3>
            <div className="flex gap-3 mt-3">
              <FaFacebook size={25} />
              <FaLinkedin size={25} />
              <FaTwitter size={25} />
            </div>
          </div>
        </div>
        <div className=" hidden  lg:flex-row lg:flex gap-20">
          <ul>
            <li className="text-xl pb-2 font-semibold">Customer support</li>
            <li className="text-gray-400  font-semibold pb-2">FAQ</li>
            <li className="text-gray-400  font-semibold pb-2">
              Knowledge Base
            </li>
            <li className="text-gray-400  font-semibold pb-2">
              Online Support
            </li>
            <li className="text-gray-400  font-semibold pb-2">
              Privacy Policy
            </li>
            <li className="text-gray-400  font-semibold pb-2">
              Terms & Condition
            </li>
          </ul>
          <ul>
            <li className="text-xl pb-2 font-semibold">Quick Links</li>
            <li className="text-gray-400  font-semibold pb-2">FAQ</li>
            <li className="text-gray-400  font-semibold pb-2">
              Knowledge Base
            </li>
            <li className="text-gray-400  font-semibold pb-2">
              Online Support
            </li>
            <li className="text-gray-400  font-semibold pb-2">
              Privacy Policy
            </li>
            <li className="text-gray-400  font-semibold pb-2">
              Terms & Condition
            </li>
          </ul>
          <ul>
            <li className="text-xl pb-2 font-semibold">Trading guides</li>
            <li className="text-gray-400  font-semibold pb-2">FAQ</li>
            <li className="text-gray-400  font-semibold pb-2">
              Knowledge Base
            </li>
            <li className="text-gray-400  font-semibold pb-2">
              Online Support
            </li>
            <li className="text-gray-400  font-semibold pb-2">
              Privacy Policy
            </li>
            <li className="text-gray-400  font-semibold pb-2">
              Terms & Condition
            </li>
          </ul>
          <ul>
            <li className="text-xl pb-2 font-semibold">Markets</li>
            <li className="text-gray-400  font-semibold pb-2">FAQ</li>
            <li className="text-gray-400  font-semibold pb-2">
              Knowledge Base
            </li>
            <li className="text-gray-400  font-semibold pb-2">
              Online Support
            </li>
            <li className="text-gray-400  font-semibold pb-2">
              Privacy Policy
            </li>
            <li className="text-gray-400  font-semibold pb-2">
              Terms & Condition
            </li>
          </ul>
        </div>
      </Container>
      <hr className="hidden lg:block mt-20" />
      <Container>
        <div className="w-full lg:w-[70%] my-10 ">
          <div className="bg-[#D49539] rounded px-10 py-5">
            <p className="text-black font-semibold">
              <span className="font-bold lg:text-xl">Warning:</span> Crypto
              tradings are complex instruments and come with a high risk of
              losing money rapidly due to leverage. 82% of retail investor
              accounts lose money when trading with this provider. So consider
              whether you can take such risks before starting out
            </p>
          </div>
          <p className="pt-8 lg:font-bold text-gray-300" >&copy;tradely, All rights reserved, Product by Papergum</p>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
