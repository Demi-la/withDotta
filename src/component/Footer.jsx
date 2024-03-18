import React from "react";
import { FaLinkedin } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import dottaLogo from "../assets/dottaLogo.png";

const Footer = () => {
  return (
    <div className="bg-[#fafafa] pl-[4%] pr-[2%] py-[3rem]">
      <div className="lg:flex gap-[10rem]">
        <div>
          <div>
            <img
              src={dottaLogo}
              alt="Dotta logo"
              className="lg:w-[60%] w-[30%] md:w-[15%] object-contain mt-2"
            />
          </div>
          <div className="flex gap-5 mt-6 w-[45%] md:w-[25%]">
            <span className="bg-light-green  text-btn-outline w-[3rem] h-[3rem] grid place-items-center mx-auto rounded-full  text-[1.5rem]">
              <FaLinkedin />
            </span>
            <span className="bg-light-green  text-btn-outline w-[3rem] h-[3rem] grid place-items-center mx-auto rounded-full  text-[1.5rem]">
              {" "}
              <FaTwitter />
            </span>
            <span className="bg-light-green  text-btn-outline w-[3rem] h-[3rem] grid place-items-center mx-auto rounded-full  text-[1.5rem]">
              {" "}
              <FaYoutube />
            </span>
          </div>
        </div>
        <div className="grid lg:grid-cols-5 grid-cols-2   mt-4 lg:mt-0 ">
          <div className="">
            <h1 className="font-semibold text-[18px] mb-2 ">Company</h1>
            <ul className="text-[#746c6c]">
              <li className=" mb-2">Pricing</li>
              <li>FAQs</li>
            </ul>
          </div>
          <div className="lg:ml-0">
            <h1 className="font-semibold text-[18px]  mb-2">Solution</h1>
            <ul className="text-[#746c6c] text-[14.4px]">
              <li className=" mb-2 ">Liveness Check</li>
              <li className=" mb-2">Face Verification</li>
              <li>Facial Attribution</li>
            </ul>
          </div>
          <div className="lg:mt-0 mt-6">
            <h1 className="font-semibold text-[18px]  mb-2">Use Cases</h1>
            <ul className="text-[#746c6c] text-[14.4px]">
              <li className=" mb-2">Fraud Detection</li>
              <li className=" mb-2">Digital Onboarding</li>
              <li>Authentication</li>
            </ul>
          </div>
          <div className="lg:mt-0 mt-6">
            <h1 className="font-semibold text-[18px]  mb-2">Resources</h1>
            <ul className="text-[#746c6c] text-[14.4px]">
              <li className=" mb-2">API Documentation</li>
              <li className=" mb-2">API Reference</li>
              <li>Blog</li>
            </ul>
          </div>
          <div className="lg:mt-0 mt-6">
            <h1 className="font-semibold text-[18px]  mb-2">Industries</h1>
            <ul className="text-[#746c6c] text-[14.4px]">
              <li className=" mb-2">Banking</li>
              <li className=" mb-2">Financial Services</li>
              <li className=" mb-2">E-commerce & Online Marketplace</li>
              <li className=" mb-2">Digital Health & Insurance</li>
              <li className=" mb-2">E-learning</li>
              <li>Public Sector</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="lg:flex lg:justify-between justify-center  text-[#746c6c] pt-[5rem] lg:pr-[2%]">
        <div className="flex gap-4 md:justify-center">
          <p className="">Terms & Conditions </p>
          <p>Privacy & Policy Cookie</p>
        </div>
        <p className="md:text-end md:mt-4">
          Copyright © 2024. Dotta by Secured Records.
        </p>
      </div>
    </div>
  );
};

export default Footer;
